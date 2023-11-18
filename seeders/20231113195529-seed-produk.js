"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Produks",
      [
        {
          name: "mini album seventeen heaven carat ver",
          stok: 10,
          harga: 300000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mini album seventeen heaven carat kit",
          stok: 10,
          harga: 250000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mini album seventeen heaven carat random",
          stok: 10,
          harga: 280000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "light stick ",
          stok: 3,
          harga: 800000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "mini album fml carat ver",
          stok: 10,
          harga: 180000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Produks", null, {});
  },
};
