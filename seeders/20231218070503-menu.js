"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Menus",
      [
        {
          name: "Paket Bebek Kaleyo",
          price: 39000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paket Ayam Geprek",
          price: 27000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Paket Makanan Ringan",
          price: 12000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ThaiTea",
          price: 9000,
          kategori: "minuman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "GreenTea",
          price: 8000,
          kategori: "minuman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menus", null, {});
  },
};