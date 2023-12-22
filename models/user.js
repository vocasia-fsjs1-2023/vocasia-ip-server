"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      
      User.hasMany(models.Order, { foreignKey: "productId", onDelete: "CASCADE" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 20],
          notEmpty: true,
        },
      },
      role: {
        type: DataTypes.ENUM,
        values: ["seller", "buyer"],
        defaultValue: "buyer",
      },
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeCreate(user, option) {
          const saltRounds = 10;
          user.password = bcrypt.hashSync(user.password, saltRounds);
        },
      },
    }
  );
  return User;
};