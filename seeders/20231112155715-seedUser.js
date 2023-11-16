'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashPassword = await bcrypt.hashSync('inipasswordsaya', 10);
    console.log(hashPassword);
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          email: 'lusianagiovany@gmail.com',
          password: hashPassword,
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
