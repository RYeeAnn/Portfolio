const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const OpenAI = require('openai');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const { systemPrompt } = require('./config/openaiPrompt');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Debug: Log prompt to verify it's loading correctly
console.log('🤖 System prompt loaded. Current job mentioned:', systemPrompt.includes('Dynamic Needs Analysis') ? 'Dynamic Needs Analysis' : 'NOT FOUND');  

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

// Rate limiting middleware
const createRateLimit = (windowMs, max, message) => rateLimit({
    windowMs,
    max,
    message: { error: message },
    standardHeaders: true,
    legacyHeaders: false,
});

// Slow down middleware
const speedLimiter = slowDown({
    windowMs: 15 * 60 * 1000, // 15 minutes
    delayAfter: 5, // Allow 5 requests per window without delay
    delayMs: 500, // Add 500ms delay per request after delayAfter
    maxDelayMs: 10000, // Maximum delay of 10 seconds
});

// Chat-specific rate limiting
const chatRateLimit = createRateLimit(
    15 * 60 * 1000, // 15 minutes
    process.env.NODE_ENV === 'production' ? 10 : 100, // 10 in prod, 100 in dev
    'Too many chat requests. Please wait 15 minutes before trying again.'
);

// General API rate limiting
const generalRateLimit = createRateLimit(
    15 * 60 * 1000, // 15 minutes
    30, // Max 30 requests per 15 minutes per IP
    'Too many requests. Please wait 15 minutes before trying again.'
);

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5001;

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('✅ Connected to MongoDB');
        console.log('📊 Database:', mongoose.connection.name);
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        console.error('🔗 Connection string (without password):', mongoURI.replace(/\/\/.*@/, '//***:***@'));
    });

// Define Chat Log Schema
const chatLogSchema = new mongoose.Schema({
    userMessage: {
        type: String,
        required: true
    },
    aiReply: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    model: {
        type: String,
        default: "gpt-4o-mini"
    },
    tokensUsed: {
        type: Number
    }
});

const ChatLog = mongoose.model('ChatLog', chatLogSchema);

// Define Token Usage Schema for tracking daily limits
const tokenUsageSchema = new mongoose.Schema({
    ipAddress: {
        type: String,
        required: true
    },
    date: {
        type: String, // YYYY-MM-DD format
        required: true
    },
    tokensUsed: {
        type: Number,
        default: 0
    },
    requestCount: {
        type: Number,
        default: 0
    },
    lastRequest: {
        type: Date,
        default: Date.now
    }
});

const TokenUsage = mongoose.model('TokenUsage', tokenUsageSchema);

// Helper function to check and update token usage
async function checkTokenUsage(ipAddress) {
    const today = new Date().toISOString().split('T')[0];
    const isDev = process.env.NODE_ENV !== 'production';
    const DAILY_TOKEN_LIMIT = isDev ? 100000 : 10000; // Higher limit in dev
    const DAILY_REQUEST_LIMIT = isDev ? 500 : 50; // Higher limit in dev
    
    let usage = await TokenUsage.findOne({ ipAddress, date: today });
    
    if (!usage) {
        usage = new TokenUsage({
            ipAddress,
            date: today,
            tokensUsed: 0,
            requestCount: 0
        });
    }
    
    // Check if limits exceeded
    if (usage.tokensUsed >= DAILY_TOKEN_LIMIT) {
        throw new Error('Daily token limit exceeded. Please try again tomorrow.');
    }
    
    if (usage.requestCount >= DAILY_REQUEST_LIMIT) {
        throw new Error('Daily request limit exceeded. Please try again tomorrow.');
    }
    
    return usage;
}

// Helper function to update token usage
async function updateTokenUsage(ipAddress, tokensUsed) {
    const today = new Date().toISOString().split('T')[0];
    
    await TokenUsage.findOneAndUpdate(
        { ipAddress, date: today },
        { 
            $inc: { tokensUsed, requestCount: 1 },
            $set: { lastRequest: new Date() }
        },
        { upsert: true }
    );
}

// Define Contact Form Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint for form submission
app.post('/submit_contact', generalRateLimit, async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const contact = new Contact({
            name,
            email,
            message
        });

        await contact.save();
        console.log('📧 Contact form saved to MongoDB');
        res.status(200).send('Form data received and saved.');

    } catch (error) {
        console.error("Error saving contact form:", error);
        res.status(500).send('Error saving data.');
    }
});

// POST endpoint for AI chat with comprehensive protection
app.post('/api/chat', chatRateLimit, speedLimiter, async (req, res) => {
    try {
        const { message } = req.body;
        const ipAddress = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];

        // Input validation
        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Valid message is required' });
        }

        // Length validation (prevent extremely long inputs)
        if (message.length > 500) {
            return res.status(400).json({ error: 'Message too long. Please keep it under 500 characters.' });
        }

        // Check for spam patterns
        const spamPatterns = [
            /(.)\1{10,}/, // Repeated characters
            /(.)\1{5,}/g, // Multiple repeated character sequences
            /^(.)\1+$/, // Only repeated characters
            /.{100,}/g // Very long sequences
        ];

        const isSpam = spamPatterns.some(pattern => pattern.test(message));
        if (isSpam) {
            return res.status(400).json({ error: 'Message appears to be spam. Please try again with a normal message.' });
        }

        // Check token usage limits
        try {
            await checkTokenUsage(ipAddress);
        } catch (limitError) {
            return res.status(429).json({ error: limitError.message });
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                {
                    role: "user",
                    content: message
                }
            ],
            max_tokens: 100,
            temperature: 0.5,
        });

        const reply = completion.choices[0].message.content;
        const tokensUsed = completion.usage?.total_tokens;

        // Update token usage tracking
        try {
            await updateTokenUsage(ipAddress, tokensUsed);
        } catch (trackingError) {
            console.error('Error updating token usage:', trackingError);
            // Continue - don't block user response for tracking errors
        }

        // Save chat log to MongoDB
        try {
            const chatLog = new ChatLog({
                userMessage: message,
                aiReply: reply,
                tokensUsed: tokensUsed
            });
            await chatLog.save();
            console.log('💾 Chat log saved to MongoDB successfully');
            console.log('📝 Message:', message.substring(0, 50) + '...');
            console.log('🤖 Reply:', reply.substring(0, 50) + '...');
            console.log('🔢 Tokens used:', tokensUsed);
        } catch (dbError) {
            console.error('❌ Error saving chat log to MongoDB:', dbError);
            console.error('📊 MongoDB connection state:', mongoose.connection.readyState);
            // Continue even if DB save fails - user still gets response
        }

        res.status(200).json({ reply });

    } catch (error) {
        console.error('OpenAI API Error:', error);
        
        // Handle specific OpenAI errors
        if (error.status === 429) {
            return res.status(429).json({ 
                error: 'API rate limit exceeded. Please try again later.' 
            });
        }
        
        if (error.status === 401) {
            return res.status(500).json({ 
                error: 'Service temporarily unavailable. Please try again later.' 
            });
        }
        
        res.status(500).json({ 
            error: 'Sorry, I\'m having trouble responding right now. Try again!' 
        });
    }
});

// GET endpoint to retrieve chat logs
app.get('/api/chatlogs', generalRateLimit, async (req, res) => {
    try {
        const { limit = 50, skip = 0 } = req.query;
        
        const logs = await ChatLog.find()
            .sort({ timestamp: -1 }) // Most recent first
            .limit(parseInt(limit))
            .skip(parseInt(skip));
        
        const total = await ChatLog.countDocuments();
        
        res.status(200).json({ 
            logs, 
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Error fetching chat logs:', error);
        res.status(500).json({ error: 'Error fetching chat logs' });
    }
});

// GET endpoint to retrieve chat log statistics
app.get('/api/chatlogs/stats', generalRateLimit, async (req, res) => {
    try {
        const total = await ChatLog.countDocuments();
        const totalTokens = await ChatLog.aggregate([
            { $group: { _id: null, total: { $sum: "$tokensUsed" } } }
        ]);
        
        res.status(200).json({ 
            totalChats: total,
            totalTokensUsed: totalTokens[0]?.total || 0
        });
    } catch (error) {
        console.error('Error fetching chat stats:', error);
        res.status(500).json({ error: 'Error fetching chat statistics' });
    }
});

// GET endpoint to retrieve contact form submissions
app.get('/api/contacts', generalRateLimit, async (req, res) => {
    try {
        const { limit = 50, skip = 0 } = req.query;
        
        const contacts = await Contact.find()
            .sort({ timestamp: -1 }) // Most recent first
            .limit(parseInt(limit))
            .skip(parseInt(skip));
        
        const total = await Contact.countDocuments();
        
        res.status(200).json({ 
            contacts, 
            total,
            limit: parseInt(limit),
            skip: parseInt(skip)
        });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ error: 'Error fetching contact submissions' });
    }
});

// Admin endpoint to monitor usage (protect with environment variable)
app.get('/api/admin/usage', async (req, res) => {
    try {
        // Simple admin check - you can make this more secure
        const adminKey = req.headers['x-admin-key'];
        if (adminKey !== process.env.ADMIN_KEY) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const today = new Date().toISOString().split('T')[0];
        
        // Get today's usage statistics
        const todayUsage = await TokenUsage.find({ date: today });
        const totalTodayTokens = todayUsage.reduce((sum, usage) => sum + usage.tokensUsed, 0);
        const totalTodayRequests = todayUsage.reduce((sum, usage) => sum + usage.requestCount, 0);
        
        // Get top users by token usage
        const topUsers = await TokenUsage.find({ date: today })
            .sort({ tokensUsed: -1 })
            .limit(10);
        
        // Get total chat logs count
        const totalChats = await ChatLog.countDocuments();
        const totalTokensUsed = await ChatLog.aggregate([
            { $group: { _id: null, total: { $sum: "$tokensUsed" } } }
        ]);
        
        res.status(200).json({
            date: today,
            todayUsage: {
                totalTokens: totalTodayTokens,
                totalRequests: totalTodayRequests,
                uniqueIPs: todayUsage.length
            },
            topUsers: topUsers.map(usage => ({
                ip: usage.ipAddress,
                tokens: usage.tokensUsed,
                requests: usage.requestCount,
                lastRequest: usage.lastRequest
            })),
            overallStats: {
                totalChats,
                totalTokensUsed: totalTokensUsed[0]?.total || 0
            }
        });
    } catch (error) {
        console.error('Error fetching usage stats:', error);
        res.status(500).json({ error: 'Error fetching usage statistics' });
    }
});

// Cleanup old token usage records (keep only last 30 days)
setInterval(async () => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const cutoffDate = thirtyDaysAgo.toISOString().split('T')[0];
        
        const result = await TokenUsage.deleteMany({
            date: { $lt: cutoffDate }
        });
        
        if (result.deletedCount > 0) {
            console.log(`🧹 Cleaned up ${result.deletedCount} old token usage records`);
        }
    } catch (error) {
        console.error('Error cleaning up old records:', error);
    }
}, 24 * 60 * 60 * 1000); // Run once per day

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'Ryan Yee Portfolio API is running!', 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        mongodb: {
            connected: mongoose.connection.readyState === 1,
            state: mongoose.connection.readyState,
            database: mongoose.connection.name
        }
    });
});

// MongoDB test endpoint
app.get('/api/test-db', async (req, res) => {
    try {
        // Test MongoDB connection by counting chat logs
        const chatLogCount = await ChatLog.countDocuments();
        const tokenUsageCount = await TokenUsage.countDocuments();
        
        res.status(200).json({
            message: 'MongoDB connection test successful',
            mongodb: {
                connected: mongoose.connection.readyState === 1,
                database: mongoose.connection.name,
                collections: {
                    chatLogs: chatLogCount,
                    tokenUsage: tokenUsageCount
                }
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('MongoDB test error:', error);
        res.status(500).json({
            message: 'MongoDB connection test failed',
            error: error.message,
            mongodb: {
                connected: mongoose.connection.readyState === 1,
                state: mongoose.connection.readyState
            }
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`🚀 Rate limiting enabled: 10 chat requests per 15min, 30 general requests per 15min`);
    console.log(`🔒 Token limits: 10,000 tokens per day per IP, 50 requests per day per IP`);
    console.log(`📊 Admin endpoint: /api/admin/usage (requires X-Admin-Key header)`);
    console.log(`🧹 Auto-cleanup: Old records removed daily`);
});
