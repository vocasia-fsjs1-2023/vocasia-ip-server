'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('123456', 10);
    return queryInterface.bulkInsert('users', [
      {
        nip_nim:"12345",
        name: "shibaa",
        email: "shibaa@gmail.com",
        password: hashedPassword, 
        isAdmin: true,
        status:"guru",
        updatedAt: new Date(),
        createdAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
