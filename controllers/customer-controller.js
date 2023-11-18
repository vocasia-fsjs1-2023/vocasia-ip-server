const { Customer, Transaction, User } = require("../models");
const jwt = require("jsonwebtoken");
const secret = "sebong-anita";

class Controller {
  static async addTransaction(req, res, next) {
    try {
      const { alamat, pembayaran } = req.body;
      const id = req.id;
      const user = await User.findByPk(id);
      console.log(user);
      const customer = await Customer.create({
        userId: id,
        name: user.name,
        alamat,
        pembayaran,
      });
      res.status(201).json(customer);
    } catch (error) {
      next(error);
    }
  }
  static async getCustomer(req, res, next) {
    try {
      const customer = await Customer.findAll({
        include: Transaction,
      });
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  }
  static async getCustomerId(req, res, next) {
    try {
      let id = Number(req.params["id"]);
      const findId = await Customer.findByPk(id);
      if (findId) {
        const customer = await Customer.findOne({
          where: { id },
          include: Transaction,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        });
        res.status(200).json(customer);
      } else {
        throw new Error(`Tidak ada Customer dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async updatePembayaran(req, res, next) {
    try {
      const { statuspembayaran } = req.body;
      let id = Number(req.params["id"]);
      const findId = await Customer.findByPk(id);
      console.log(findId);
      if (findId) {
        await Customer.update(
          {
            statuspembayaran,
            statuspemesanan: "inprogres",
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json(`Customer dengan id ${id} berhasil diupdate`);
      } else {
        throw new Error(`Tidak ada Customer dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async updatePemesanan(req, res, next) {
    try {
      const { statuspemesanan } = req.body;
      let id = Number(req.params["id"]);
      const findId = await Customer.findByPk(id);
      console.log(findId);
      if (findId) {
        await Customer.update(
          {
            statuspemesanan,
          },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json(`Customer dengan id ${id} berhasil diupdate`);
      } else {
        throw new Error(`Tidak ada Customer dengan id ${id}`);
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduk(req, res, next) {
    try {
      let id = Number(req.params["id"]);
      const customer = await Customer.findByPk(id);
      if (customer) {
        await Customer.destroy({ where: { id } });
        res.status(200).json(`Order dengan id ${id} berhasil dihapus`);
      } else {
        res.status(404).json({ error: `Tidak ada Order dengan ID ${id}` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
