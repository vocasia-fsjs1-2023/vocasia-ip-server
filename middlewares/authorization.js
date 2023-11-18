const { Pinjam } = require("../models");

async function isUserOwnTransaction(req, res, next) {
  try {
    const id = req.id;
    const param = req.params;
    const pinjamId = param.id;

    const findId = await Pinjam.findByPk(pinjamId);
    if (findId) {
      const pinjam = await Pinjam.findOne({ where: { userId: id } });
      if (pinjam && pinjam.userId === id) {
        next();
      } else {
        throw new Error("DATA PEMINJAMAN INI BUKAN MILIK ANDA");
      }
    } else {
      throw new Error(`Tidak ada Data Peminjaman dengan id ${pinjamId}`);
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnTransaction;
