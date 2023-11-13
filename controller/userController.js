const bcrypt = require("bcrypt");
const { User, Task } = require("../models");

class Controller {
    static async addUser(req, res) {
        try {
            const body = req.body;
            const { username, email, password } = body;

            // Hash the password using bcrypt
            const hashPassword = await bcrypt.hash(password, 10);

            // Create user with hashed password
            const newUser = await User.create({
                username,
                email,
                password: hashPassword,
            });

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getUser(req, res) {
        try {
            const users = await User.findAll({
                include: Task,
                attributes: { exclude: ['password'] }, // Exclude password from the response
            });
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = Number(req.params.id);

            // Handle processing data
            await User.destroy({
                where: {
                    id: id,
                },
            });

            // Handle return response
            res.status(200).json(`User dengan ID ${id} berhasil dihapus.`);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = Controller;
