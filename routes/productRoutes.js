// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const { createProduct } = require('../controllers/productController');

// Endpoint untuk membuat produk baru yang memerlukan autentikasi
router.post('/products', verifyToken, createProduct);

module.exports = router;
