'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('reviews', [
      {
        kritik: "tidak ada ",
        saran: "mungkin penjelasan dibuat lebih simple",
        MateriPelajaranId:1,
        UserId:3,
        updatedAt: new Date(),
        createdAt: new Date()
      },
      
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('reviews', null, {});
  }
};
