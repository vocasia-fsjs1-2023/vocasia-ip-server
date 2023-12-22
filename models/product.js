"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.hasMany(models.Order, { foreignKey: "productId", onDelete: "CASCADE" });
    }
  }
  Product.init(
    {
      productName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
          isInt: true,
          min: 1,
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};