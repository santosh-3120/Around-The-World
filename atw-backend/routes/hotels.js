// routes/hotels.js
const express = require('express');
const { createHotel, getHotels, getHotelById, updateHotel, deleteHotel } = require('../controllers/hotelController');
const router = express.Router();

router.post('/', createHotel);
router.get('/', getHotels);
router.get('/:id', getHotelById);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);

module.exports = router;
