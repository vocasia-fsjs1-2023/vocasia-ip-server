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
      // define association here
      Customer.hasMany(models.Transaction);
    }
  }
  Customer.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 100],
        },
      },
      pembayaran: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["dana", "gopay", "shopeepay"],
        defaultValue: "dana",
      },
      statuspembayaran: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["created", "done"],
        defaultValue: "created",
      },
      statuspemesanan: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["created", "inprogres", "done"],
        defaultValue: "created",
      },
      totalpembayaran: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
