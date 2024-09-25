// routes/listing.js
const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');

// Add a new listing (for hosts)
router.post('/', async (req, res) => {
    const { host, title, description, location, price, activities } = req.body;

    try {
        const listing = new Listing({ host, title, description, location, price, activities });
        await listing.save();
        res.status(201).json(listing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
