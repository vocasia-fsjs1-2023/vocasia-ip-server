"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashpass = await bcrypt.hash("12345678", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Moh. Fahri Wijaya",
          role: "Owner",
          email: "fahriw44@gmail.com",
          password: hashpass,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
