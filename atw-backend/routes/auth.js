const express = require('express');
const { registerUser, loginUser, getUsers, updateUser, deleteUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getUsers); // Get all users
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
