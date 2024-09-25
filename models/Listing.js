// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    activities: [String], // Activities the traveler can do with the host
    availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Listing', listingSchema);
