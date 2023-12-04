'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wisata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wisata.hasMany(models.Review, { foreignKey: 'wisataId' });
    }
  }
  Wisata.init({
    namaTempat: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255],
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lokasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Wisata',
  });
  return Wisata;
};