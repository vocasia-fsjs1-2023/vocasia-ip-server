const { Pinjam, Buku, User } = require("../models");

class Controller {
  static async addpinjam(req, res, next) {
    const { bukuId, tanggalPinjam, tanggalPengembalian } = req.body;
    const id = req.id;
    const buku = await Buku.findByPk(bukuId);
    const updatejumlah = buku.jumlah - 1;

    try {
      const pinjam = await Pinjam.create({
        userId: id,
        bukuId,
        judul: buku.judul,
        tanggalPinjam,
        tanggalPengembalian,
      });
      if (pinjam) {
        await Buku.update(
          {
            jumlah: updatejumlah,
          },
          {
            where: {
              id: bukuId,
            },
          }
        );
      } else {
        res.status(500).json(error);
      }
      res.status(201).json(pinjam);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async listpinjam(req, res, next) {
    let response;
    try {
      const pinjam = await Pinjam.findAll({ include: User });
      response = pinjam;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async pinjambyid(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await Pinjam.findByPk(id);
    if (findId) {
      let response;
      try {
        const pinjam = await Pinjam.findAll({
          where: {
            id: id,
          },
          include: User,
        });
        response = pinjam;
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async updatepinjam(req, res, next) {
    const { bukuId, tanggalPinjam, tanggalPengembalian } = req.body;
    let id = Number(req.params["id"]);
    const findId = await Pinjam.findByPk(id);
    const bukuBaru = await Buku.findByPk(bukuId);
    const bukuLama = await Buku.findByPk(findId.bukuId);
    const before = bukuLama.jumlah + 1;
    const after = bukuBaru.jumlah - 1;

    if (findId) {
      let response;
      try {
        const lama = await Buku.update(
          {
            jumlah: before,
          },
          { where: { id: findId.bukuId } }
        );
        if (lama) {
          await Pinjam.update(
            {
              bukuId,
              tanggalPinjam,
              tanggalPengembalian,
            },
            {
              where: {
                id: id,
              },
            }
          );
          await Buku.update(
            {
              jumlah: after,
            },
            {
              where: {
                id: bukuId,
              },
            }
          );
        } else {
          res.status(500).json(error);
        }

        res.status(200).json(`Id Data Peminjaman ${id} berhasil diupdate`);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async updatestatus(req, res, next) {
    const { statusPeminjaman } = req.body;
    let id = Number(req.params["id"]);
    const findId = await Pinjam.findByPk(id);
    const buku = await Buku.findByPk(findId.bukuId);
    const update = buku.jumlah + 1;
    if (findId) {
      let response;
      try {
        await Pinjam.update(
          {
            statusPeminjaman,
          },
          {
            where: {
              id: id,
            },
          }
        );
        await Buku.update(
          {
            jumlah: update,
          },
          { where: { id: findId.bukuId } }
        );
        res.status(200).json(`Id Data Peminjaman ${id} berhasil diupdate`);
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async deletepinjam(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await Pinjam.findByPk(id);
    if (findId) {
      let response;
      try {
        await Pinjam.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json(`Id Data Peminjaman ${id} berhasil dihapus`);
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
}
module.exports = Controller;
