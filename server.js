// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const listingRoutes = require('./routes/Listing');
require('dotenv').config();


// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/listings', listingRoutes);

const app = express();
app.use(express.json()); // For parsing JSON data

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

// Simple route to check if server is working
app.get('/', (req, res) => {
    res.send('Welcome to the Travel Hosting API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
