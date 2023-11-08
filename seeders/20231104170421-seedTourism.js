'use strict';

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
    return queryInterface.bulkInsert('Tourisms', [
      {
        tourismName: 'Candi Borobudur',
        description: 'Candi Borobudur merupakan candi atau kuil Buddha terbesar di dunia dan memiliki monumen Buddha terbesar di dunia.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tourismName: 'SAM POO KONG',
        description: 'Sam Poo Kong merupakan sebuah kawasan wisata religi peribadatan umat Konghucu yang terletak di Kelurahan Bongsari, Kecamatan Semarang Barat, Kota Semarang.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tourismName: 'Gunung Rinjani',
        description: 'Gunung Rinjani adalah gunung yang berlokasi di Pulau Lombok, Nusa Tenggara Barat. Gunung yang merupakan gunung berapi kedua tertinggi di Indonesia dengan ketinggian 3.726 mdpl, yang merupakan gunung favorit bagi pendaki Indonesia karena keindahan pemandangannya.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tourismName: 'Gili Trawangan',
        description: 'Gili Trawangan Lombok itu adalah pulau kecil yang memiliki keindahan pantai serta berbagai macam biota lautnya yang masih alami.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tourismName: 'Jam Gadang',
        description: 'Jam Gadang, menurut beberapa catatan sejarah, dibangun pada 1926 setelah Ratu Belanda memberi mesin jam ini kepada Sekretaris Kota Bukittinggi pada saat itu--Rook Maker.',
        createdAt: new Date(),
        updatedAt: new Date()
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
    return queryInterface.bulkDelete('Tourisms', null, {});
  }
};
