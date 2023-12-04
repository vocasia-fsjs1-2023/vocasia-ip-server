'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Wisata, { foreignKey: 'wisataId' });
      Review.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Review.init({
    title: {
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
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      },
    },
    userId: DataTypes.INTEGER,
    wisataId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};