const { Customer, Transaction, Menu } = require("../models");

class Controller {
  static async addTransaction(req, res, next) {
    try {
      const { menuId, jmlOrder } = req.body;
      const custId = Number(req.params["id"]);
      const customer = await Customer.findByPk(custId);
      const menu = await Menu.findByPk(menuId);
      const harga = menu.price * jmlOrder;
      const updateHarga = customer.totalPrice + harga;
      const transaction = await Transaction.create({
        customerId: custId,
        menuId,
        name: menu.name,
        jmlOrder,
        totalPrice: harga,
      });
      await Customer.update(
        {
          totalPrice: updateHarga,
        },
        {
          where: {
            id: custId,
          },
        }
      );
      res.status(201).json(transaction);
    } catch (error) {
      next(error);
    }
  }
  static async getTransaction(req, res, next) {
    try {
      const custId = Number(req.params["id"]);
      const transaction = await Transaction.findAll({
        where: { customerId: custId },
        attributes: {
          exclude: [
            "customerId",
            "menuId",
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
      const { menuId, jmlOrder } = req.body;
      const orderId = Number(req.params["id"]);
      const order = await Transaction.findOne({ where: { id: orderId } });
      const customer = await Customer.findOne({
        where: { id: order.customerId },
      });
      const menu = await Menu.findOne({
        where: { id: menuId },
      });
      if (order && customer) {
        const beforeHarga = customer.totalPrice - order.totalPrice;
        const updateHarga = menu.price * jmlOrder;
        const totalHarga = beforeHarga + updateHarga;
        await Transaction.update(
          {
            menuId,
            name: menu.name,
            jmlOrder,
            totalPrice: updateHarga,
          },
          { where: { id: orderId } }
        );
        await Customer.update(
          {
            totalPrice: totalHarga,
          },
          { where: { id: order.customerId } }
        );
        res.status(200).json(`Order dengan id ${orderId} berhasil diupdate`);
      } else {
        res.status(404).json({ error: `Tidak ada Order dengan ID ${orderId}` });
      }
    } catch (error) {
      next(error);
    }
  }
  static async deleteTransaction(req, res, next) {
    try {
      const orderId = Number(req.params["id"]);
      console.log(orderId);
      const order = await Transaction.findOne({ where: { id: orderId } });
      const customer = await Customer.findOne({
        where: { id: order.customerId },
      });
      if (order && customer) {
        const updateHarga = customer.totalPrice - order.totalPrice;
        await Customer.update(
          {
            totalPrice: updateHarga,
          },
          { where: { id: order.customerId } }
        );
        await Transaction.destroy({
          where: {
            id: orderId,
          },
        });
        res.status(200).json(`Order dengan id ${orderId} berhasil dihapus`);
      } else {
        res.status(404).json({ error: `Tidak ada Order dengan ID ${orderId}` });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
