"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Todo.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { max: 100 },
      },
      status: { type: DataTypes.BOOLEAN, defaultValue: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
