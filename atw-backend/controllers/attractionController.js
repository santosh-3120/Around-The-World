const Attraction = require('../models/attractionSchema');

exports.createAttraction = async (req, res) => {
    const attraction = new Attraction(req.body);
    try {
        await attraction.save();
        res.status(201).json(attraction);
    } catch (err) {
        res.status(500).json({ message: 'Error creating attraction' });
    }
};

exports.getAttractions = async (req, res) => {
    try {
        const attractions = await Attraction.find();
        res.status(200).json(attractions);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving attractions' });
    }
};

// Get attraction by ID
exports.getAttractionById = async (req, res) => {
    try {
        const attraction = await Attraction.findById(req.params.id);
        if (!attraction) {
            return res.status(404).json({ message: 'Attraction not found' });
        }
        res.status(200).json(attraction);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving attraction' });
    }
};

// Update attraction by ID
exports.updateAttraction = async (req, res) => {
    try {
        const attraction = await Attraction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!attraction) {
            return res.status(404).json({ message: 'Attraction not found' });
        }
        res.status(200).json(attraction);
    } catch (err) {
        res.status(500).json({ message: 'Error updating attraction' });
    }
};

// Delete attraction by ID
exports.deleteAttraction = async (req, res) => {
    try {
        const attraction = await Attraction.findByIdAndDelete(req.params.id);
        if (!attraction) {
            return res.status(404).json({ message: 'Attraction not found' });
        }
        res.status(200).json({ message: 'Attraction deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting attraction' });
    }
};
