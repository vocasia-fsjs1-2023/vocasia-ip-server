const { Buku } = require("../models");

class Controller {
  static async addbuku(req, res, next) {
    const { judul, pengarang, tahunTerbit, jumlah } = req.body;
    try {
      const buku = await Buku.create({
        judul,
        pengarang,
        tahunTerbit,
        jumlah,
      });
      res.status(201).json(buku);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async listbuku(req, res, next) {
    let response;
    try {
      const buku = await Buku.findAll();
      response = buku;
    } catch (error) {
      response = "ERROR";
    }
    res.status(200).json(response);
  }
  static async bukubyid(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await Buku.findByPk(id);
    if (findId) {
      let response;
      try {
        const buku = await Buku.findAll({
          where: {
            id: id,
          },
        });
        response = buku;
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async updatebuku(req, res, next) {
    const { judul, pengarang, tahunTerbit, jumlah } = req.body;
    let id = Number(req.params["id"]);
    const findId = await Buku.findByPk(id);
    if (findId) {
      let response;
      try {
        await Buku.update(
          {
            judul,
            pengarang,
            tahunTerbit,
            jumlah,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json(`Id Data Buku ${id} berhasil diupdate`);
      } catch (error) {
        response = "ERROR";
      }
      res.status(200).json(response);
    } else {
      return res.status(404).json({ message: "Id yang anda masukkan salah" });
    }
  }
  static async deletebuku(req, res, next) {
    let id = Number(req.params["id"]);
    const findId = await Buku.findByPk(id);
    if (findId) {
      let response;
      try {
        await Buku.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json(`Id Data Buku ${id} berhasil dihapus`);
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
