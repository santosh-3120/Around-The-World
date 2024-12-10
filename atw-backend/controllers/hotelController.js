const Hotel = require('../models/hotelSchema');

// Create a new hotel
exports.createHotel = async (req, res) => {
    const hotel = new Hotel(req.body);
    try {
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({ message: 'Error creating hotel' });
    }
};

// Get all hotels
exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving hotels' });
    }
};

// Get a hotel by ID
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving hotel' });
    }
};

// Update a hotel by ID
exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json(hotel);
    } catch (err) {
        res.status(500).json({ message: 'Error updating hotel' });
    }
};

// Delete a hotel by ID
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting hotel' });
    }
};
