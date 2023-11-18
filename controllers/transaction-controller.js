const { Customer, Transaction, Produk } = require("../models");

class Controller {
  static async addTransaction(req, res, next) {
    try {
      const { produkId, order } = req.body;
      const custId = Number(req.params["id"]);
      const customer = await Customer.findByPk(custId);
      const produk = await Produk.findByPk(produkId);
      const harga = produk.harga * order;
      const updateHarga = customer.totalpembayaran + harga;
      const transaction = await Transaction.create({
        customerId: custId,
        produkId,
        name: produk.name,
        order,
        totalharga: harga,
      });
      if (transaction) {
        await Customer.update(
          {
            totalpembayaran: updateHarga,
          },
          {
            where: {
              id: custId,
            },
          }
        );
      } else {
        res.status(500).json(error);
      }
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  }
  static async getTransaction(req, res, next) {
    try {
      const id = Number(req.params["id"]);
      const transaction = await Transaction.findOne({
        where: { customerId: id },
        attributes: {
          exclude: [
            "customerId",
            "produkId",
            "createdAt",
            "updatedAt",
            "CustomerId",
          ],
        },
      });
      res.status(200).json(transaction);
    } catch (error) {
      next(error);
    }
  }
  static async updateTransaction(req, res, next) {
    try {
      const { produkId, order } = req.body;
      const id = Number(req.params["id"]);
      const transaction = await Transaction.findOne({ where: { id } });
      const customer = await Customer.findOne({
        where: { id: transaction.customerId },
      });
      const produk = await Produk.findOne({
        where: { id: produkId },
      });
      if (transaction && customer) {
        const beforeHarga = customer.totalpembayaran - transaction.totalharga;
        const updateHarga = produk.harga * order;
        const totalHarga = beforeHarga + updateHarga;
        const awal = await Transaction.update(
          {
            produkId,
            name: produk.name,
            order,
            totalharga: updateHarga,
          },
          { where: { id } }
        );
        if (awal) {
          await Customer.update(
            {
              totalpembayaran: totalHarga,
            },
            { where: { id: transaction.customerId } }
          );
        } else {
          res.status(500).json(error);
        }

        res.status(200).json(`Order dengan id ${id} berhasil diupdate`);
      } else {
        res.status(404).json({ error: `Tidak ada Order dengan id ${id}` });
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteTransaction(req, res, next) {
    try {
      const id = Number(req.params["id"]);
      const transaction = await Transaction.findOne({ where: { id } });
      const customer = await Customer.findOne({
        where: { id: transaction.customerId },
      });
      if (transaction && customer) {
        const updateHarga = customer.totalpembayaran - transaction.totalharga;
        const awal = await Customer.update(
          {
            totalpembayaran: updateHarga,
          },
          { where: { id: transaction.customerId } }
        );
        if (awal) {
          await Transaction.destroy({
            where: {
              id: id,
            },
          });
        } else {
          res.status(500).json(error);
        }

        res.status(200).json(`Order dengan id ${id} berhasil dihapus`);
      } else {
        res.status(404).json({ error: `Tidak ada Order dengan id ${id}` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
