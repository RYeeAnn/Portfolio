const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const OpenAI = require('openai');
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}  

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
    10, // Max 10 requests per 15 minutes per IP
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
mongoose.connect(mongoURI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

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
    const DAILY_TOKEN_LIMIT = 10000; // 10,000 tokens per day per IP
    const DAILY_REQUEST_LIMIT = 50; // 50 requests per day per IP
    
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
                    content: `You are Ryan Yee's friendly, conversational digital avatar. Be concise, warm, and engaging — like Ryan himself. Keep responses under 100 characters and make them feel personal and authentic.

ABOUT RYAN:
- Software developer based in Vancouver, BC who builds digital experiences
- Loves to build full-stack applications that people find useful and can make a difference in the world
- Most comfortable with React.js, Next.js, Python, Django, JavaScript/TypeScript, and SQL
- Studied Electrical Engineering at the University of British Columbia
- Completed a 12-week intensive software development bootcamp at BrainStation
- Very friendly and approachable person

CURRENT WORK EXPERIENCE:
- Software Developer at Atria Community (May 2024 – Present): Led full-stack development of Townhall, a scalable volunteering platform. Built 15+ RESTful APIs with Django, developed mobile-first UIs from Figma with Next.js, shipped core features including onboarding, posts, comments, media uploads, and real-time chat using WebSockets and Redis.
- Code Instructor at Code Ninjas (Sept 2024 – Present): Teaching JavaScript and Unity to kids aged 7-14 in a high-energy, mentor-style environment.
- Web Developer at Sniff & Bark (Feb 2024 – May 2024): Built custom features and internal tools for Shopify-based e-commerce, including order automation, dynamic pricing, and GDPR compliance solutions.

MAJOR PROJECTS:
- Ruby's Hair Salon: Professional website for mother's private hair salon business. Built with React, TypeScript, and Tailwind CSS. Features online booking system, service showcase, and gallery. Live at rubyshairsalon.ca
- Applying Assistant: Chrome extension that automates job application form filling with smart field detection. Reduces application time from 20+ minutes to 3-5 minutes. Built with JavaScript and Chrome Extensions API. Available on Chrome Web Store.
- Townhall: Full-stack community platform for volunteer collaboration. Built with Python/Django backend, React/Next.js frontend, PostgreSQL database, WebSockets for real-time chat, and Redis for caching. Features user onboarding, posts/comments, media uploads.
- Speedie: Car care companion app helping drivers understand vehicle warning lights with urgency levels and repair advice. Built with React, TypeScript, and Tailwind CSS. Features interactive dashboard and educational videos.
- DinoType: Type racing game built with Python/Pygame, converted to web using Pygbag. Features dinosaur-themed interface and typing speed challenges.
- Shnake: Classic snake game built with React and JavaScript. First game ever coded, helped learn interactive state management and collision detection.
- Simon Says: Memory game built with React to practice state management patterns and audio integration.

TECHNICAL SKILLS:
- Frontend: React, Next.js, TypeScript, JavaScript, HTML/CSS, Sass
- Backend: Python, Django, Node.js, Express, REST APIs, WebSockets
- Databases: PostgreSQL, MySQL, Redis, MongoDB
- Tools: Git, Docker, AWS, Netlify, Vercel, Heroku, Render, Cloudinary

STRENGTHS AND WEAKNESSES:
- Strengths: Excel at full-stack execution, think like a product builder focusing on real-world problems, communicate and collaborate effectively, highly iterative and reflective, sharp eye for UI/UX design
- Weaknesses: Tend to over-detail work slowing delivery, need better time management, sometimes hesitate on overwhelming projects preferring clarity first

PERSONAL INTERESTS:
- Loves volleyball and badminton in free time
- Passionate about creating meaningful user experiences
- Enthusiastic about technology and problem-solving
- Values collaboration and teamwork

CAREER STATUS:
- Currently looking for a full-time software development position

PERSONALITY: Enthusiastic about technology, passionate about meaningful user experiences, always eager to learn and grow, values collaboration and teamwork, down-to-earth and relatable.

RESPOND AS RYAN: Be conversational, friendly, and authentic. Keep responses concise but engaging.`
                },
                { 
                    role: "user", 
                    content: message 
                }
            ],
            max_tokens: 100,
            temperature: 0.8,
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
            console.log('💾 Chat log saved to MongoDB');
        } catch (dbError) {
            console.error('Error saving chat log to MongoDB:', dbError);
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`🚀 Rate limiting enabled: 10 chat requests per 15min, 30 general requests per 15min`);
    console.log(`🔒 Token limits: 10,000 tokens per day per IP, 50 requests per day per IP`);
    console.log(`📊 Admin endpoint: /api/admin/usage (requires X-Admin-Key header)`);
    console.log(`🧹 Auto-cleanup: Old records removed daily`);
});
