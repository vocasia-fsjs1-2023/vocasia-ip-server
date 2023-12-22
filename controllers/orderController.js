const { User, Product, Order } = require("../models");

class Controller {
  static async createOrder(req, res) {
    const body = req.body;
    const getUserId = req.userId; 
    const { productId, quantity, totalPrice } = body;

    try {
      const Orders = await Order.create({
        userId: getUserId,
        productId,
        quantity,
        totalPrice,
      });

      const Result = await Order.findAll({
        where: {
          id: Orders.id,
        },
        include: Product,
      });

      res.status(201).json({ message: "Berhasil menambahkan", Result });
    } catch (error) {
      console.log(`Error!${error}`);
      res.status(500).json(error);
    }
  }

  static async getOrder(req, res) {
    try {
      const Orders = await Order.findAll({ include: Product });
      res.status(200).json(Orders);
    } catch (error) {
      console.log(`Error! ${error}`);
      res.status(500).json(error);
    }
  }

  static async getOrderByID(req, res) {
    const orderID = Number(req.params["id"]);

    try {
      const Orders = await Order.findOne({
        where: {
          id: orderID,
        },
        include: Product,
      });
      res.status(200).json(Orders);
    } catch (error) {
      console.log(`Error menampilkan order! ${error}`);
      res.status(500).json(error);
    }
  }

  static async updateOrder(req, res) {
    const orderID = Number(req.params["id"]);
    const body = req.body;
    const { productID, quantity, totalPrice } = body;

    try {
      const Orders = await Order.update(
        { productID: productID, quantity: quantity, totalPrice: totalPrice },
        {
          where: {
            id: orderID,
          },
        }
      );

      let response = `${Orders} data berhasil diupdate, dengan ID: ${orderID}`;
      res.status(200).json(response);
    } catch (error) {
      console.log(`Error! ${error}`);
      res.status(500).json(error);
    }
  }

  static async deleteOrder(req, res) {
    const orderID = Number(req.params["id"]);

    try {
      const Orders = await Order.destroy({
        where: {
          id: orderID,
        },
      });

      let response = `${Orders} data berhasil dihapus, dengan ID: ${orderID}`;
      res.status(200).json(response);
    } catch (error) {
      console.log(`Error! ${error}`);
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;