const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia"; // Gantilah dengan secret key yang kuat

const { User } = require("../models");

class UserController {
  static async userRegister(req, res, next) {
    const body = req.body;
    const { name, email, password } = body;

    try {
      // Hash kata sandi sebelum menyimpannya ke basis data
      const hashedPassword = await bcrypt.hash(password, 9);

      const user = await User.create({
        name,
        email,
        password: hashedPassword, // Simpan kata sandi yang di-hash
      });

      res.status(201).json(user);
    } catch (error) {
      // next(error);
      console.log("Error menambahkan User: ${error}");
      res.status(500).json(error);
    }
  }

  static async userLogin(req, res, next) {
    const body = req.body;
    const { email, password } = body;

    try {
      const user = await User.findOne({ where: { email } });

      if (user) {
        const hash = user.password;
        const isValid = bcrypt.compareSync(password, hash);

        if (isValid) {
          // Buat token JWT dengan informasi pengguna yang relevan
          const token = jwt.sign(
            { id: user.id, email: user.email, isAdmin: user.isAdmin },
            secret
          );

          // Kirim token sebagai respons dalam format JSON
          res.status(200).json({ token });
        } else {
          next(new Error("SALAH EMAIL/PASSWORD"));
        }
      } else {
        next(new Error("SALAH EMAIL/PASSWORD"));
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
