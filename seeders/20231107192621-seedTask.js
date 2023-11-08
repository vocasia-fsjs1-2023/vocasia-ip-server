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
    await queryInterface.bulkInsert(
      'Tasks',
      [
        {
          title: "Meringkas",
          description: "Ringkaslah dari sebuah buku, genrenya bebas",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "AI",
          description: "Apa yang kamu ketahui tentang AI",
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
      ], 
      {}
      );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
