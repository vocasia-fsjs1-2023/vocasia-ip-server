'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tourism extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tourism.hasMany(models.Review);
    }
  }
  Tourism.init({
    tourismName: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255],
      },
    },
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tourism',
  });
  return Tourism;
};