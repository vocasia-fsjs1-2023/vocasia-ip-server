const { Product, Order } = require("../models");

class Controller {
  static async addProduct(req, res) {
    const body = req.body;
    const { productName, description, price } = body;

    try {
      const Products = await Product.create({
        productName,
        description,
        price,
      });

      res.status(201).json({ message: "Berhasil!", Products });
    } catch (error) {
      console.log(`Error bang! ${error}`);
      res.status(500).json(error);
    }
  }

  static async getProduct(req, res) {
    try {
      const Products = await Product.findAll();
      res.status(200).json(Products);
    } catch (error) {
      console.log(`Error bang! ${error}`);
      res.status(500).json(error);
    }
  }

  static async getProductByID(req, res) {
    const productID = Number(req.params["id"]);

    let response;
    try {
      const Products = await Product.findOne({
        where: {
          id: productID,
        },
        include: Order,
      });

      response = Products;
    } catch (error) {
      console.log(`Error bang! ${error}`);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

  static async updateProductByID(req, res) {
    const productID = Number(req.params["id"]);
    const body = req.body;
    const { productName, description, price } = body;

    try {
      const Products = await Product.update(
        { productName: productName, description: description, price: price },
        {
          where: {
            id: productID,
          },
        }
      );

      const Result = await Product.findOne({
        where: {
          id: productID,
        },
      });

      let response = Result;
      if (response) {
        res.status(200).json({ message: "Berhasil diupdate!", response });
      } else {
        res.status(200).json({ message: "Gagal diupdate!", response });
      }
    } catch (error) {
      console.log(`Error bang! ${error}`);
      res.status(500).json(error);
    }
  }

  static async deleteProduct(req, res) {
    const productID = Number(req.params["id"]);

    try {
      const Products = await Product.destroy({
        where: {
          id: productID,
        },
      });

      let response = `${Products} produk berhasil dihapus, dengan ID: ${productID}`;
      res.status(200).json(response);
    } catch (error) {
      console.log(`Error bang!! ${error}`);
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;