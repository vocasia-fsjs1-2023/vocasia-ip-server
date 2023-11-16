const { Todo, User } = require('../models');

class TodoController {
 static  async createTodo(req, res) {
    const body = req.body;
    const userId = req.userId;
    
    const user = await User.findOne({ where: { id: userId } });
    const { title, description } = body;

    Todo.create({
      title,
      description,
      status: false,
      userId
    })
      .then((todo) => {
        res.status(201).json({ status: 'success', message: 'Tugas berhasil ditambahkan', data: todo });
      })
      .catch((error) => {
        res.status(500).json({ status: 'error', message: 'Gagal menambahkan tugas', error: error.message });
        console.log(error);
      }); 
  }

static async getTodo(req, res) {
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
      } catch (error) {
        res.status(500).json(error);
      }
  }

static async getTodoById(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    
    if (!findId) {
    return res.status(404).json({ message: "Todo tidak ditemukan" });
    }

    let response;
    try {
      const todo = await Todo.findByPk(id);
      response = todo;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }

    res.status(200).json(response);
  }

static async updateTodo(req, res) {
    const id = req.params.id;
    const body = req.body;
    const { status } = body;

    try {
        const findId = await Todo.findByPk(id);

        if (!findId) {
            return res.status(404).json({ status: 'error', message: 'Todo tidak ditemukan' });
        }

        await Todo.update(
            { status: true },
            { where: { id: id } }
        );

        const updatedTodo = await Todo.findByPk(id);

        res.status(200).json({ status: 'success', message: 'Status tugas berhasil diperbarui', data: updatedTodo });
    } catch (error) {
        res.status(500).json({ status: 'error', message: 'Gagal memperbarui status tugas', error: error.message });
        console.log(error);
    }
  }

static async updateTodoStatus(req, res) {
    let id = req.params.id;
    const body = req.body;
    const { status } = body;
  
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak ditemukan" });
    }
  
    let response;
    try {
      await Todo.update(
        {
          status,
        },
        {
          where: {
            id: id,
          },
        }
      );
      response = `Todo dengan id ${id} berhasil diubah`;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
  
    res.status(200).json(response);
  }

static async deleteTodo(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    
    if (!findId) {
    return res.status(404).json({ message: "Todo tidak ditemukan" });
    }
    
    await Todo.destroy({
    where: {
      id: id,
    },
  });
    
    res.status(200).json(`Todo dengan id ${id} berhasil dihapus`);
  }
}


module.exports = TodoController;