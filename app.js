// index.js

const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const { verifyToken } = require('./middleware/authMiddleware');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

// Gunakan middleware keamanan pada endpoint yang membutuhkan autentikasi
app.use('/api/protected', verifyToken);

// Gunakan routes terkait dengan produk (contoh: CRUD)
app.use('/api', productRoutes);

// Gunakan middleware error handling sebagai middleware terakhir
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
