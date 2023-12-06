// jwtUtils.js

const jwt = require('jsonwebtoken');

// Fungsi untuk menghasilkan token JWT setelah login berhasil
function generateToken(user) {
  return jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
}

// Middleware untuk memverifikasi token JWT
function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    // Token valid, lanjutkan ke endpoint yang dilindungi
    req.userId = decoded.userId;
    next();
  });

  // Misalnya, pada sisi client (dalam kasus aplikasi web)

// Simpan token di localStorage setelah menerima token dari server
localStorage.setItem('authToken', token);

}

module.exports = { generateToken, verifyToken };
