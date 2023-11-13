"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        productName: "Laptop - Lenovo Ideapad Slim 14ABA7",
        description: "Color: Blue, Garansi 2 Tahun, Windows 11 OHS",
        price: 8_750_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Mouse - Digital Alliance Luna X2",
        description: "Original, Light Color RGB",
        price: 200_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productName: "Laptop - Asus Vivobook 14X M1403QA",
        description: "Proccessor: RYZEN 5 5600H, RAM: 8GB, Storage: 512SSD",
        price: 7_950_000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products");
  },
};
