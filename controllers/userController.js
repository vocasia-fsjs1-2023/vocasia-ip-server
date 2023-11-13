const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs").promises;
const path = require("path");
const { User } = require("../models");

class Controller {
  static async registerUser(req, res) {
    const body = req.body;
    const { name, email, password } = body;

    try {
      const Users = await User.create({
        name,
        email,
        password,
      });

      res.status(201).json({ message: "Akun berhasil dibuat, silahkan login!", Users });
    } catch (error) {
      console.log(`Error menambahkan User: ${error}`);
      res.status(500).json(error);
    }
  }

  static async loginUser(req, res) {
    const body = req.body;
    const { email, password } = body;
    const secret = "rahasia";

    try {
      const loginUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!loginUser) {
        //Jika email yang diinput salah atau tidak valid
        return res.status(403).json("Salah Email/Password!");
      }

      //Jika email ada, lanjut membandingkan inputan dengan password yang telah dihash
      const validation = bcrypt.compareSync(password, loginUser.password);

      if (validation) {
        //Mengubah id dan email menjadi JWT Token
        const token = jwt.sign(
          {
            id: loginUser.id,
            email: loginUser.email,
          },
          secret
        );

        //Simpan kode token JWT ke folder assets
        const filePath = path.join(__dirname, "..", "assets", "token.txt");
        await fs.writeFile(filePath, token);

        console.log(`Token berhasil disimpan dalam file ${filePath}`);

        //Jika password dan email VALID
        res.status(200).json({ message: "Berhasil login!", token });
      } else {
        //Jika password yang diinput salah atau tidak valid
        return res.status(403).json("Salah Email/Password!");
      }
    } catch (error) {
      console.error(`Gagal menyimpan token ke dalam file:`, error);
      res.status(500).json({ message: "Gagal menyimpan token!" });
    }
  }
}

module.exports = Controller;
