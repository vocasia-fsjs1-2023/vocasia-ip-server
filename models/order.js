"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" });
      Order.belongsTo(models.Product, { foreignKey: "productId", onDelete: "CASCADE" });
    }
  }
  Order.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      productId: {
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: true,
          min: 1,
        },
      },
      totalPrice: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
