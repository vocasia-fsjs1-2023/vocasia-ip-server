"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Review, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true, // Tidak boleh string kosong atau null
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Tidak boleh ada email duplikat
        validate: {
          notEmpty: true, // Tidak boleh string kosong atau null
          isEmail: true, // Validasi harus berupa alamat email yang valid
        },
      },
      password: {
        type: DataTypes.TEXT,
        // allowNull: false,
        validate: {
          notEmpty: true, // Tidak boleh string kosong atau null
          len: [8, 20], // Panjang minimal 8 karakter dan maksimal 20 karakter
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false, // Default value adalah false
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
