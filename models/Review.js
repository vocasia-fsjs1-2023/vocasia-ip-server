'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.MateriPelajaran, { foreignKey: 'MateriPelajaranId'});
      Review.belongsTo(models.User, { foreignKey: 'UserId'});
    }
  }
  Review.init({
    kritik: DataTypes.STRING,
    saran: DataTypes.STRING,
    MateriPelajaranId: {
      type:DataTypes.INTEGER,
      references:{
        model: 'materiPelajarans',
        key: 'id'
      }
    },
    UserId: {
      type:DataTypes.INTEGER,
      references:{
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};