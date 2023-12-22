"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        productName: "Kebab Jumbo Daging Sapi",
        description: "Daging kebabnya lebih banyak daripada kebab biasa daging sapi",
        price: 23_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Kebab Biasa Daging Sapi",
        description: "Daging kebabnya lebih banyak daripada kebab hemat daging sapi",
        price: 21_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Kebab Daging Premium",
        description: "Daging cincang (bukan daging kebab)",
        price: 26_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products");
  },
};