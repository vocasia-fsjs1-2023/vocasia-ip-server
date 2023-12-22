'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      noMeja: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      payment: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ("Dana", "Qris", "Gopay"),
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      statusBayar: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ["Belum Bayar", "Done"],
      },
      statusPesan: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ("Created", "In Progress", "Done"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};