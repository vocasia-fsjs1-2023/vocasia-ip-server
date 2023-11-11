const { Todo, User } = require("../models");

class Controller {
  static async addTodo(req, res) {
    const userId = req.userId;
    const { name, description, status } = req.body;
    const user = await User.findOne({ where: { id: userId } });

    if (user) {
      try {
        await Todo.create({
          name,
          description,
          status,
          userId,
        });
        const todos = await Todo.findAll();
        res.status(201).json(todos);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(500).json({ message: "Akun belum terdaftar!" });
    }
  }

  static async getTodo(req, res) {
    try {
      const todos = await Todo.findAll();
      res.status(200).json({ todos: todos });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getTodoId(req, res) {
    let id = req.params.id;
    const findId = await Todo.findByPk(id);
    if (!findId) {
      return res.status(404).json({ message: "Todo tidak ditemukan" });
    }

    let response;
    try {
      const todos = await Todo.findAll({
        where: {
          id,
        },
      });
      response = todos;
    } catch (error) {
      console.log(error);
      response = JSON.stringify(error);
    }
    res.status(200).json(response);
  }

  static async updateTodoId(req, res) {
    let id = req.params.id;
    const { name, description, status } = req.body;

    try {
      await Todo.update(
        {
          name,
          description,
          status,
        },
        { where: { id } }
      );
      const update = await Todo.findAll({ where: { id } });
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async deleteTodo(req, res) {
    let id = req.params.id;
    try {
      await Todo.destroy({ where: { id } });
      res
        .status(200)
        .json({ message: `Todo dengan id ${id} berhasil dihapus ` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = Controller;
