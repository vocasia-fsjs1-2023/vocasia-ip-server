"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pinjams", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      bukuId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Bukus",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      judul: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggalPinjam: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggalPengembalian: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      statusPeminjaman: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["di Pinjam", "di Kembalikan"],
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Pinjams");
  },
};
