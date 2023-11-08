'use strict';
const {
  Model
} = require('sequelize');
const CronJob = require('cron').CronJob;
const nodemailer = require('nodemailer');

module.exports = (sequelize, DataTypes) => {
  class MateriPelajaran extends Model {
    static associate(models) {
        MateriPelajaran.hasMany(models.Review);
    }
  
    static setupReminder() {
      // Membuat pekerjaan cron untuk mengirim reminder
      const job = new CronJob('0 16 * * *', //  setiap hari jam 4 sore
        async () => {
          // Logika untuk mengirimkan reminder
          console.log('Mengirim reminder untuk tugas pembelajaran');
          const users = await this.sequelize.models.User.findAll();
          // Mengirim email reminder ke setiap pengguna
          users.forEach(async (user) => {
            const subject = 'Reminder Tugas Pembelajaran';
            const message = 'Ini adalah pengingat untuk tugas pembelajaran Anda.';
            await sendReminderEmail(user.email, subject, message);
          });
        },
        null, 
        true, // otomatis saat aplikasi dimulai
        'Asia/Jakarta' // Zona waktu yang sesuai
      );

      job.start();
    }
  }

  MateriPelajaran.init({
    namaMateri: DataTypes.STRING,
    penjelasan: DataTypes.STRING,
    tugas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MateriPelajaran',
  });
  return MateriPelajaran;
};

async function sendReminderEmail(userEmail, subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'shibaa@gmail.com',
      pass: '123456',
    }
  });

  try {
    await transporter.sendMail({
      from: 'shibaa@gmail.com',
      to: userEmail,
      subject: subject,
      text: message
    });
    console.log('Email reminder berhasil:', userEmail);
  } catch (error) {
    console.error('Error reminder:', userEmail, error);
  }
}