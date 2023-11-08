const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'rahasia';

class userController {
    static async userRegister (req, res) {
        const { name, email, password, isAdmin } = req.body;
    
        User.create({ name, email, password, isAdmin })
            .then((user) => {
                res.status(200).json(user);
            })
            .catch((error) => {
                res.status(404).json(error)
            });
    }

    static async userLogin (req, res, next) {
        const { email, password } = req.body;
    
        let user = await User.findOne({ where: { email } });
    
        if (user) {
            const hash = user.password;
            const isValid = bcrypt.compareSync(password, hash);
    
            if (isValid) {
                const token  = jwt.sign({id: user.id, email: user.email, isAdmin: user.isAdmin}, secret);
                res.status(200).json(token);
            }else{
                next(new Error('EMAIL/PASSWORD ANDA SALAH!'));
            }
        }else{
            next(new Error('EMAIL/PASSOWR ANDA SALAH!'));
        }
    }

}

module.exports = userController;