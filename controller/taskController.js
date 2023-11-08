const { Task, Answer, User } = require("../models")

class Controller {
    static addTask(req, res) {
        const { title, description } = req.body;
        Task.create({
            title,
            description, 
        }).then((task) => {
            res.status(201).json(task);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }

    static getTask(req, res) {
        Task.findAll()
        .then(result => {
          res.status(200).json({Task: result});
        })
        .catch(error => {
          res.status(500).json({ error: "Internal Server Error" });
        });
    }

    static async getTaskId(req, res) {
        const id = Number(req.params['id']);
       
        try {
            const task = await Task.findByPk(id, {
              include: Answer,
            });
            
            if (!task) {
              return res.status(404).json({ message: "Task tidak dapat ditemukan" });
            }
        
            res.status(200).json(task);
          } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
            }
    }

    static async updateTask(req, res) {
        const id = Number(req.params.id);
        const { title, description } = req.body;
    
        let response;
        try {
            await Task.update({ 
                title,
                description,
            }, {
                where: {
                    id: id
                }
            });
            const updatedTask = await Task.findByPk(id);
            if (!updatedTask) {
                return res.status(404).json({ message: "Task tidak ditemukan" });
            }
            res.status(200).json(updatedTask
                );
        } catch (error) {
            console.log(error);
            response = JSON.stringify(error);
        }   
    }

    static async deleteTask(req, res) {
        const id = Number(req.params["id"]);
    
        try {
            const task = await Task.findByPk(id);
    
            if (!task) {
                return res.status(404).json({ message: "Task tidak ditemukan" });
            }
    
            const title = task.title;
            await task.destroy(
                {where: {
                    id: id,
                },}
            )
    
            return res.status(200).json({ message: `Task ${title} berhasil dihapus` });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    
};

module.exports = Controller;