"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Songs", [
      {
        title: "How You Like That",
        description: "Single hit Blackpink dengan irama yang kuat.",
        artis: "Blackpink",
        genre: "K-Pop",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Maafkan Aku",
        description: "Lagu emosional dari Tiara Andini yang menyentuh hati.",
        artis: "Tiara Andini",
        genre: "Pop",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Perfect",
        description:
          "Ed Sheeran menyuguhkan lagu romantis yang sempurna untuk momen spesial.",
        artis: "Ed Sheeran",
        genre: "Pop",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Butter",
        description: "Smooth and upbeat song that showcases BTS's charm.",
        artis: "BTS",
        genre: "K-Pop",
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kisah Sempurna",
        description:
          "Lagu romantis Mahalini yang menggambarkan kisah cinta yang sempurna.",
        artis: "Mahalini",
        genre: "Pop",
        userId: 5, // Gantilah nilai userId sesuai dengan ID pengguna Mahalini di database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Havana",
        description:
          "Camila Cabello membawakan lagu yang memadukan ritme Latin yang meriah.",
        artis: "Camila Cabello",
        genre: "Pop",
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ya Nabi Salam Alaika",
        description: "Lagu pujian untuk Nabi Muhammad SAW.",
        artis: "Maher Zain",
        genre: "Religi",
        userId: 7, // Gantilah nilai userId sesuai dengan ID pengguna yang sesuai di database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "In My Blood",
        description:
          "Shawn Mendes menghadirkan lagu dengan lirik penuh makna tentang keberanian dan ketahanan.",
        artis: "Shawn Mendes",
        genre: "Pop",
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Sang Dewi",
        description:
          "Lagu Lyodra yang megah dan menceritakan tentang keindahan seorang dewi.",
        artis: "Lyodra",
        genre: "Pop",
        userId: 9, // Gantilah nilai userId sesuai dengan ID pengguna Lyodra di database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Money",
        description:
          "Lagu hits BLACKPINK yang menyuarakan tentang keberhasilan dan kekayaan.",
        artis: "BLACKPINK",
        genre: "K-pop",
        userId: 10, // Gantilah nilai userId sesuai dengan ID pengguna BLACKPINK di database
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Songs", null, {});
  },
};
