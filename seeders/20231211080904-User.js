"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("kimtaehyung", saltRounds);
    await queryInterface.bulkInsert("Users", [
      {
        name: "Saidatun Nizmah",
        email: "aniskateha@gmail.com",
        password: hashedPassword,
        role: "seller",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};