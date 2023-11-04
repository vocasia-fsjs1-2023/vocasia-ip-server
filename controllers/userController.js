const { user } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';
const validator = require('validator');

class userController {
  static async userRegister(req, res, next) {
    const body = req.body;
    const { name, email, password } = body;
  
    try {
      // Validasi email
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: 'Alamat email tidak valid' });
      }
  
      // Validasi password (misalnya, minimal 6 karakter)
      if (!validator.isLength(password, { min: 6 })) {
        return res.status(400).json({ error: 'Password harus memiliki minimal 6 karakter' });
      }
  
      // Hash password
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      // Buat user baru
      const newUser = await user.create({
        name,
        email,
        password: hashedPassword,
      });
  
      res.status(201).json({ message: 'Akun berhasil dibuat, silakan login.' });
    } catch (error) {
      next(error);
    }
  }

  static async userLogin(req, res, next) {
    const { email, password } = req.body;

    try {
     
      // Validasi email
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Alamat email tidak valid' });
    } 
    
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
