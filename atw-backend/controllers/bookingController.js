const Booking = require('../models/bookingSchema');

exports.createBooking = async (req, res) => {
    const booking = new Booking(req.body);
    try {
        await booking.save();
        res.status(201).json(booking);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ message: 'Error creating booking', error: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving bookings' });
    }
};

exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving booking' });
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Error updating booking' });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting booking' });
    }
};
