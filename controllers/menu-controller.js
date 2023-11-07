const { Menu } = require("../models");

class Controller {
  static async addMenu(req, res, next) {
    try {
      const { name, price, kategori } = req.body;
      const menu = await Menu.create({
        name,
        price,
        kategori,
      });
      res.status(201).json(menu);
    } catch (error) {
      next(error);
    }
  }
  static async getMenu(req, res, next) {
    try {
      const menu = await Menu.findAll({
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(200).json(menu);
    } catch (error) {
      next(error);
    }
  }
  static async getMenuKategori(req, res, next) {
    try {
      let kategori = req.params["kategori"];
      if (kategori == "makanan" || kategori == "minuman") {
        try {
          const menu = await Menu.findAll({
            where: {
              kategori,
            },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          });
          res.status(200).json(menu);
        } catch (error) {
          next(error);
        }
      } else {
        throw new Error(`Tidak ada Menu dengan kategori ${kategori}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async updateMenu(req, res, next) {
    try {
      const { name, price } = req.body;
      let id = Number(req.params["id"]);
      const findId = await Menu.findByPk(id);
      if (findId) {
        await Menu.update(
          {
            name,
            price,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json(`Menu dengan id ${id} berhasil diupdate`);
      } else {
        throw new Error(`Tidak ada Menu dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteMenu(req, res, next) {
    try {
      let id = Number(req.params["id"]);
      const findId = await Menu.findByPk(id);
      if (findId) {
        await Menu.destroy({
          where: {
            id: id,
          },
        });
        res.status(200).json(`Menu dengan id ${id} berhasil dihapus`);
      } else {
        throw new Error(`Tidak ada Menu dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
