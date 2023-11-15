const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }  

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 5001;
const dataKey = process.env.DATA_API_KEY;
const dataEndpoint = process.env.DATA_API_ENDPOINT;
const dataSource = process.env.DATA_SOURCE;
const databaseName = process.env.DATABASE_NAME;
const dataCollection = process.env.COLLECTION_NAME;

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


    axios.post(`${dataEndpoint}/action/insertOne`, {
        dataSource: dataSource,
        database: databaseName,
        collection: dataCollection,
        document: { name, email, message }
    }, {
        headers: {
            "Content-Type": "application/json",
            "api-key": dataKey
        }
    })
    .then(response => {
        if (response.status === 200) {
            res.send('Form data received and saved.');
        } else {
            res.status(500).send('Error saving data.');
        }
    })
    .catch(err => {
        console.error("Error saving data:", err);
        res.status(500).send('Error saving data.');
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
