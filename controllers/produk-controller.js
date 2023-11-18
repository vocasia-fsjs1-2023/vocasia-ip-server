const { Produk } = require("../models");

class Controller {
  static async addProduk(req, res, next) {
    try {
      const { name, stok, harga } = req.body;
      const produk = await Produk.create({
        name,
        stok,
        harga,
      });
      res.status(201).json(produk);
    } catch (error) {
      next(error);
    }
  }
  static async getProduk(req, res, next) {
    try {
      const produk = await Produk.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(produk);
    } catch (error) {
      next(error);
    }
  }
  static async getProdukKategori(req, res, next) {
    try {
      let id = Number(req.params["id"]);
      const produk = await Produk.findOne({ where: { id } });
      if (produk) {
        res.status(200).json(produk);
      } else {
        throw new Error(`Tidak ada Produk dengan kategori ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateProduk(req, res, next) {
    try {
      const { name, stok, harga } = req.body;
      let id = Number(req.params["id"]);
      const findId = await Produk.findByPk(id);
      if (findId) {
        await Produk.update(
          {
            name,
            stok,
            harga,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json(`Produk dengan id ${id} berhasil diupdate`);
      } else {
        throw new Error(`Tidak ada Produk dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduk(req, res, next) {
    try {
      let id = Number(req.params["id"]);
      const findId = await Produk.findByPk(id);
      if (findId) {
        await Produk.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json(`Produk dengan id ${id} berhasil dihapus`);
      } else {
        throw new Error(`Tidak ada Produk dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
