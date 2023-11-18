"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pinjam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pinjam.belongsTo(models.User);
    }
  }
  Pinjam.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      bukuId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Bukus",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
        },
      },
      tanggalPinjam: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggalPengembalian: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statusPeminjaman: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["di Pinjam", "di Kembalikan"],
        defaultValue: "di Pinjam",
      },
    },
    {
      sequelize,
      modelName: "Pinjam",
    }
  );
  return Pinjam;
};
