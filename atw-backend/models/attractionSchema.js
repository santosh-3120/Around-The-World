const mongoose = require('mongoose');

const AttractionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    price: { type: Number },
});

module.exports = mongoose.model('Attraction', AttractionSchema);
