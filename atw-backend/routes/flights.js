const express = require('express');
const { createFlight, getFlights, getFlightById, updateFlight, deleteFlight } = require('../controllers/flightController');
const router = express.Router();

router.get('/', getFlights); // Make sure this matches the exported function
router.post('/', createFlight);
router.get('/:id', getFlightById);
router.put('/:id', updateFlight);
router.delete('/:id', deleteFlight);

module.exports = router;
