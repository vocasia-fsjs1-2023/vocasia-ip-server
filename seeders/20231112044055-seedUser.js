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
    await queryInterface.bulkInsert('Users', [

      {
       username: 'Wildan Khotibul Umam Nasrulloh',
       email: 'wildanumam40@gmail.com',
       password: 'backendjunior123',
      },
      {
       username: 'Jalaludin Rumi',
       email: 'jalaludinrumi@gmail.com',
       password: 'backendjunior123',
      }
    ], 
      {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
