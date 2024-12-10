const express = require('express');
const { createAttraction, getAttractions, getAttractionById, updateAttraction, deleteAttraction } = require('../controllers/attractionController');
const router = express.Router();

router.get('/', getAttractions); // Make sure this matches the exported function
router.post('/', createAttraction);
router.get('/:id', getAttractionById);
router.put('/:id', updateAttraction);
router.delete('/:id', deleteAttraction);

module.exports = router;
