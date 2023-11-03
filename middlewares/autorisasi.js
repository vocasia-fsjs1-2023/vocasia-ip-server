async function authorization(req, res, next) {
  try {
    const userId = req.userId; // Ambil ID pengguna dari sesi atau token autentikasi

    if (!userId) {
      return res.status(401).json({ error: "Anda harus masuk terlebih dahulu" });
    }

    const requestedUserId = req.params.userId; // Ambil ID pengguna dari parameter URL

    if (userId === requestedUserId) {
      // Jika user ID dalam permintaan sama dengan user ID yang diautentikasi, maka pengguna memiliki izin
      next();
    } else {
      return res.status(403).json({ error: "Anda tidak memiliki izin untuk mengakses ini" });
    }
  } catch (error) {
    next(error); // Tangani kesalahan dengan middleware penanganan kesalahan
  }
}

module.exports = authorization;