// models/Product.js

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Product extends Model {
    static associate(models) {
      // Definisikan asosiasi jika ada
    }
  }

  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      // Tambahkan kolom lain sesuai kebutuhan
    },
    {
      sequelize,
      modelName: 'Product',
      hooks: {
        // Sequelize Hooks sebelum pembuatan entitas
        beforeCreate: (product, options) => {
          // Contoh penggunaan hook sebelum pembuatan entitas (misalnya, mengubah nilai sebelum disimpan)
          product.price = parseFloat(product.price).toFixed(2); // Mengubah harga menjadi desimal 2 digit
        },
      },
    }
  );

  return Product;
};
