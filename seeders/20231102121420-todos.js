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
      'createTodos', 
      [
        {
          title: 'Kegiatan rutin',
          description: 'Menyapu',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kegiatan rutin',
          description: 'Mengepel',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Kegiatan rutin',
          description: 'Menyuci',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date()
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
    return queryInterface.bulkDelete('createTodos', null, {});
  },
};