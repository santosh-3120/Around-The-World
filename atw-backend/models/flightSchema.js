const mongoose = require('mongoose');

const FlightSchema = new mongoose.Schema({
    airline: { type: String, required: true },
    departure: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true },
    departureTime: { type: Date, required: true },
    arrivalTime: { type: Date, required: true },
});

module.exports = mongoose.model('Flight', FlightSchema);
