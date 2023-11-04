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
  createTodos.init(
    {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 255], 
        },
      },
      description: DataTypes.STRING,
      completed: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'createTodos',
    }
  );

  createTodos.addHook('beforeCreate', 'validateTitleLength', (createTodo) => {
    if (!createTodo.title) {
      throw new Error('Title is required');
    }
  });
  
  return createTodos;
};