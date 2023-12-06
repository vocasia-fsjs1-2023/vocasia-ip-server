// controllers/productController.js

const { Product } = require('../models'); // Sesuaikan dengan struktur folder Anda

// Contoh fungsi CRUD
async function createProduct(req, res) {
  try {
    const { name, description, price } = req.body;

    // Buat produk baru
    const newProduct = await Product.create({ name, description, price });

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
}

// Misalnya, fungsi-fungsi lain untuk read, update, delete

module.exports = { createProduct, /* other CRUD functions */ };
