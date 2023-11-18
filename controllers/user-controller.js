const { User } = require("../models");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const secret = "sebong-anita";

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const cekEmail = validator.isEmail(email);
      const lenPass = password.length >= 8;

      if (cekEmail && lenPass) {
        const register = await User.create({
          name,
          email,
          password,
        });
        res.status(201).json(register);
      } else {
        throw new Error("Email/Password Tidak Valid, Silahkan Coba Lagi");
      }
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const cekEmail = validator.isEmail(email);
      const user = await User.findOne({ where: { email } });
      const hash = user.password;
      const isValid = bcrypt.compareSync(password, hash);
      if (cekEmail && isValid) {
        const token = jwt.sign(
          {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
          },
          secret
        );
        res.status(201).json(token);
      } else {
        throw new Error("Email/Password yang dimasukkan Salah");
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
