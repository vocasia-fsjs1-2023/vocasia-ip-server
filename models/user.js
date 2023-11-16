'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [8,20]
    },  
  },
}, {
    sequelize,
    modelName: 'User',
    hooks:{
      beforeCreate: (user, options) => {
        user.password = bcrypt.hashSync(user.password, saltRounds);
      },
    },
  });
  return User;
};