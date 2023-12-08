'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users", [
      {
        name: "rosanhusen",
        email: "rosanhusen305@gmail.com",
        password: "rosanhusen",
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
      {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  }
};
