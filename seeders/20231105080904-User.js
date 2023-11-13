"use strict";
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash("vocasia123", saltRounds);
    await queryInterface.bulkInsert("Users", [
      {
        name: "Bimo Cahyo Kusumo",
        email: "bimochayo@gmail.com",
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
