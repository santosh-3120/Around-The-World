const Flight = require('../models/flightSchema');

exports.createFlight = async (req, res) => {
    const flight = new Flight(req.body);
    try {
        await flight.save();
        res.status(201).json(flight);
    } catch (err) {
        res.status(500).json({ message: 'Error creating flight' });
    }
};

exports.getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.status(200).json(flights);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flights' });
    }
};

// Get flight by ID
exports.getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findById(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json(flight);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving flight' });
    }
};

// Update flight by ID
exports.updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json(flight);
    } catch (err) {
        res.status(500).json({ message: 'Error updating flight' });
    }
};

// Delete flight by ID
exports.deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByIdAndDelete(req.params.id);
        if (!flight) {
            return res.status(404).json({ message: 'Flight not found' });
        }
        res.status(200).json({ message: 'Flight deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting flight' });
    }
};
