"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Menus",
      [
        {
          name: "French Fries",
          price: 9000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nugget",
          price: 8000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Burger",
          price: 12000,
          kategori: "makanan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tea",
          price: 5000,
          kategori: "minuman",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lemon Tea",
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
