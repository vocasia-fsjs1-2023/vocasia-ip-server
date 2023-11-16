const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "rahasia";

class UserController {
  static async registerAccount(req, res) {
    const { email, password } = req.body;

    User.create({
      email,
      password,
     })
        .then((user) => {
         res.status(201).json(user);
        })
        .catch((error) => {
        res.status(500).json(error);
       });
  };

  static async loginAccount(req, res, next) {
    const body = req.body;
    const { email, password } = body;

    const user = await User.findOne({ where: { email } });
    
    if (user) {
       const hash = user.password; 
       const valid = bcrypt.compareSync(password, hash);

       if (valid) {
       const token = jwt.sign(
         {
             id: user.id,
             email: user.email,
         },
         secret
        );
        res.status(200).json({ token });
        console.log(token);
      } else {
         next(new Error("E-mail/Password Salah"));
       } 
    }
  }


}

module.exports = UserController;
