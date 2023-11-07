"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Transaction);
    }
  }
  Customer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 25],
        },
      },
      noMeja: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      payment: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Dana", "Qris", "Gopay"],
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      statusBayar: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Belum Bayar", "Done"],
        defaultValue: "Belum Bayar",
      },
      statusPesan: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["Created", "In Progress", "Done"],
        defaultValue: "Created",
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
