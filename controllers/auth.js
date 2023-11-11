const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "sangatrahasia";

class Controller {
  static async register(req, res) {
    const { name, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const register = await User.create({ name, email, password: hashPassword });
    if (register) {
      res.status(201).json({ message: "Akun berhasil dibuat, silahkan login" });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    let user = await User.findOne({ where: { email } });

    if (user) {
      let hash = user.password;
      let isValid = bcrypt.compareSync(password, hash);

      if (isValid) {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
          secret
        );
        res.status(200).json(token);
      } else {
        res.status(500).json("email atau password salah");
      }
    } else {
      res.status(500).json("email atau password yang anda masukkan salah");
    }
  }
}

module.exports = Controller;
