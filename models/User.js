'use strict';
const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Review);
    }
  }
  User.init({
    nip_nim: DataTypes.STRING,
    name: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.TEXT,
      validate:{
        len:[6,20]
      }
    },
    isAdmin:{ 
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    status: DataTypes.ENUM('murit', 'guru')
  }, {
    sequelize,
    modelName: 'User',
  });

  // hooks
  User.addHook('beforeCreate', async (user, options) => {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10); 
      user.password = hashedPassword;
    } catch (error) {
      throw new Error('Gagal mengenkripsi password: ' + error.message);
    }
  });

  // Tambahkan method untuk memverifikasi password
  User.prototype.verifyPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  }

  return User;
};

