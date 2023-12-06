const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/authController');

// Endpoint untuk registrasi pengguna
router.post('/register', registerUser);

module.exports = router;
