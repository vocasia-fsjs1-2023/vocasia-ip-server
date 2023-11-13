'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
    }
  }
  Task.init(
    {
    title: {
     type: DataTypes.STRING,
      validate: {
        len: [2],
      },
    },
    description:DataTypes.TEXT,
    status: DataTypes.STRING,
    deadline: { type: DataTypes.DATE,
    validate: {
      len: [3],
    },
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};