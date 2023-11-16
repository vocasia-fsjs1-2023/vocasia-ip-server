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
      "Bukus",
      [
        {
          judul: "Mariposa",
          pengarang: "Luluk HF",
          tahunTerbit: 2018,
          jumlah: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Galaksi",
          pengarang: "Poppy",
          tahunTerbit: 2018,
          jumlah: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Bumi",
          pengarang: "Tere Liye",
          tahunTerbit: 2014,
          jumlah: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Ayat-ayat Cinta",
          pengarang: "Habiburrahman El Shirazy",
          tahunTerbit: 2004,
          jumlah: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          judul: "Dilan 1990",
          pengarang: "Pidi Baiq",
          tahunTerbit: 2014,
          jumlah: 6,
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
    await queryInterface.bulkDelete("Bukus", null, {});
  },
};
