const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    amenities: [String],
    pricePerNight: { type: Number, required: true },
    availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Hotel', HotelSchema);
