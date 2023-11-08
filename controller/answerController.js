const { Answer, Task, User } = require("../models");

class Controller {
    static async addAnswer (req, res) {
        const body = req.body;
        const { title, summary, taskId } = body;
        const user = await User.findOne({ where: { id: req.userId } });
        const existingAnswer = await Answer.findOne({ where: { userId: req.userId, taskId } });
        
        if (user.isAdmin) {
            return res.status(403).json({ message: 'Admin tidak boleh menjawab' });
        }

        if (existingAnswer) {
        return res.status(400).json({ message: 'User hanya bisa sekali post 1 answer' });
        }   
        try {
            const answer = await Answer.create({
                title,
                summary,
                taskId,
                userId: req.userId
            });
    
            const result = await Answer.findAll({
                where: { id: answer.id },
                include: [
                    { model: Task },
                    { model: User, attributes: ['name'] }
                ]
            });
    
            res.status(201).json(result);
        } catch (error) {
            console.log(`Error menambahkan review! ${error}`);
            res.status(500).json(error);
        }
    }

    static getAnswer(req, res) {
        Answer.findAll({ 
            include:[
                { model: Task},
                { model: User, attributes: ['name', 'email']}
            ]
        })
        .then((answer) => {
            res.status(200).json(answer);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
    }

    static async getAnswerId(req, res) {
        const id = Number(req.params['id']);
       
        try  {
            if (!await Answer.findByPk(id)) {
            return res.status(404).json({ message: "Answer tidak dapat ditemukan" });
            }           
              res.status(200).json(await Answer.findByPk(id, {
                include: [Task, User]
            }));
            } catch (error) {
              res.status(500).json({ error: "Internal Server Error" });
            };
    }

    static async updateAnswer(req, res) {
        const id = Number(req.params.id);
        const { title, summary} = req.body;

        let response;
        try {
            await Answer.update({ 
                title,
                summary,
            }, {
                where: {
                    id: id
                }
            });
            const answer = await Answer.findByPk(id, {
                include: [{model: User, attributes: ['name', 'email']}]
            });
            res.status(200).json(answer);
        } catch (error) {
            console.log(error);
            response = JSON.stringify(error);
        }   
    }

    static async deleteAnswer(req, res) {
        const id = Number(req.params["id"]);
        const userId = req.userId;

        try {
            await Answer.destroy({
                where: {
                    id: id,
                },
            });
    
            res.status(200).json({ message: `Answer dengan id ${id} berhasil dihapus` });
        } catch (error) {
            
            res.status(403).json({ message: "Terjadi kesalahan dalam penghapusan jawaban" });
        }
    }
    

};

module.exports = Controller;