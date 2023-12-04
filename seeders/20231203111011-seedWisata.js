'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Wisata', [
      {
        namaTempat: 'Candi Borobudur',
        description: 'Candi atau kuil Buddha terbesar di dunia',
        lokasi: 'Magelang, Jawa Tengah', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaTempat: 'Pantai Parangtritis',
        description: 'Pantai yang terkenal dengan pemandangan sunset yang romantis',
        lokasi: 'Bantul, Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaTempat: 'Gunung Bromo',
        description: 'Salah satu gunung berapi yang menjadi tujuan hiking dan wisata alam yang menakjubkan',
        lokasi: 'Probolinggo, Jawa Timur',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaTempat: 'Kebun Raya Bogor',
        description: 'Taman botani yang luas dan indah yang bisa menjadi alternatif liburan keluarga',
        lokasi: 'Bogor, Jawa Barat',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        namaTempat: 'Kraton Yogyakarta',
        description: 'Istana kerajaan yang memperlihatkan kejayaan budaya Jawa',
        lokasi: 'Yogyakarta, Daerah Istimewa Yogyakarta',
        createdAt: new Date(),
        updatedAt: new Date(),
      },]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Wisata', null, {});
  }
};
