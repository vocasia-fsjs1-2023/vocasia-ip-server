'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('materiPelajarans', [
      {
        namaMateri: "nama hewan karnivora",
        penjelasan: "karnivora adalah hewan yang memakan daging seperti: singa, harimau, serigala",
        tugas:"Apa yang dimaksud hewan karnivora?",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('materiPelajarans', null, {});
  }
};
