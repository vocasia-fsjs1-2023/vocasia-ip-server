const { user } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';

class userController {
  static async userRegister(req, res, next) {
    const body = req.body;
    const { name, email, password } = body;

    try {
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Buat user baru
      const newUser = await user.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({ message: 'Akun berhasil dibuat, silahkan login.' });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    const { email, password } = req.body;

    try {
      // Cari pengguna berdasarkan email
      const updateuser = await user.findOne({ where: { email } });

      if (updateuser) {
        const hash = updateuser.password;
        const isValid = bcrypt.compareSync(password, hash);

        if (isValid) {
          const token = jwt.sign(
            {
              id: updateuser.id,
              email: updateuser.email,
            },
            secret
          );
          res.status(200).json({ token });
          console.log(token);
        } else {
          next(new Error("Email/Password Salah"));
        }
      } else {
        next(new Error("Email/Password Salah"));
      }
    } catch (error) {
      next(error);
    }
 }
}

module.exports = userController;
