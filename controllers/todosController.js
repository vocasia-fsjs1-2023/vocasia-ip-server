const { createTodos } = require("../models");

class todosController {
    
    static addTask(req, res) {
        const body = req.body;
        const userId = req.userId
        const { title, description, completed } = body;

        createTodos.create({
            title,
            description,
            completed,
            userId
        }).then((newTodos) => {
            res.status(201).json(newTodos);
        }).catch((error) => {
            res.status(500).json(error);
        });
    }


    static async getAllTask (req, res){
        try {
            const result = await createTodos.findAll();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    static async getAllTaskId(req, res) {
        const { id } = req.params;
        try {
        const todos = await createTodos.findByPk(id, { 
    });
         if (todos) {
        res.json(todos);
         } else {
        res.status(404).json({ error: "Todos tidak ditemukan" });
        }
        } catch (error) {
        res.status(500).json({ error: "Gagal mendapatkan todos" });
        }
    };  

    static async getAllTaskCompleted(req, res) {
      const {status}= req.params
      const stringValue = status;
      const booleanValue = status === "true" ? true : false;

        try {
            const completedTodos = await createTodos.findAll({
              where: { completed:booleanValue },
            });
        
            if (completedTodos.length > 0) {
              res.json(completedTodos);
            } else {
              res.status(404).json({ error: "Tidak ada tugas yang selesai (completed)." });
            }
          } catch (error) {
            res.status(500).json({ error: "Gagal mendapatkan tugas yang selesai (completed)." });
          }
        };
    
        static async UpdateTaskId(req, res) {
            const { title, description } = req.body;
            const taskId = req.query.id;
          
            try {
              const taskToUpdate = await createTodos.findByPk(taskId);
          
              if (!taskToUpdate) {
                return res.status(404).json({ error: "Task not found" });
              }
          
              taskToUpdate.title = title;
              taskToUpdate.description = description;
              taskToUpdate.completed = false; 
          
              await taskToUpdate.save();
          
              return res.status(200).json(taskToUpdate);
            } catch (error) {
              return res.status(500).json({ error: "Internal Server Error" });
            }
          };

    static async deleteTask(req, res) {
      const id = Number(req.query.id);
          
        const task = await createTodos.findByPk(id); 
          if (!task) {
            return res.status(404).json({ error: "Task not found" });
           }
          
          await createTodos.destroy({
            where: {
              id: id
            }
          });
          res.status(200).json({ message: `Task ${task.id} telah dihapus` }); // Menggunakan properti title dari objek task
          }      
}
module.exports = todosController;