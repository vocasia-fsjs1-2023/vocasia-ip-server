'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class createTodos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  createTodos.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'createTodos',
  });
  return createTodos;
};