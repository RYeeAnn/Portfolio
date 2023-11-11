const express = require('express');
const mongoose = require('mongoose'); // Corrected this line
const app = express();
const cors = require('cors');
require('dotenv').config(); // Make sure to call the function

// Middleware to parse JSON bodies
app.use(cors({
    origin: ['http://localhost:3000', 'https://ryanyee.netlify.app'],
}));

app.use(express.json());

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// POST endpoint for form submission
app.post('/submit_contact', (req, res) => {
    const { name, email, message } = req.body;

    const newContact = new Contact({ name, email, message });
    
    newContact.save()
        .then(() => res.send('Form data received and saved.'))
        .catch(err => {
            console.error("Error saving data:", err);
            res.status(500).send('Error saving data.');
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
