// routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user (host or traveler)
router.post('/register', async (req, res) => {
    const { name, email, password, isHost } = req.body;

    try {
        const user = new User({ name, email, password, isHost });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
