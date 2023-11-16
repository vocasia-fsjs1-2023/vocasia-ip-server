'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        title: 'Tugas Matematika',
        description: 'Tugas penyajian data dan peluang',
        status: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tugas Geografi',
        description: 'Tugas struktur pola keruangan desa dan kota',
        status: false,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
