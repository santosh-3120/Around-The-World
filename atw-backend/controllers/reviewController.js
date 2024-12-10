const Review = require('../models/reviewSchema');

exports.createReview = async (req, res) => {
    const review = new Review(req.body);
    try {
        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).json({ message: 'Error creating review' });
    }
};

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('hotelId userId');
        res.status(200).json(reviews);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving reviews' });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('hotelId userId');
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving review' });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json(review);
    } catch (err) {
        res.status(500).json({ message: 'Error updating review' });
    }
};

exports.deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting review' });
    }
};
