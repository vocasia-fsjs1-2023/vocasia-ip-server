const { Todo, User } = require("../models");

async function authUser(req, res, next) {
  const userId = req.userId;
  const todoId = req.params.id;

  const todos = await Todo.findOne({ where: { id: todoId } });
  const admin = await User.findOne({ where: { id: userId } });

  if ((todos && todos.userId === userId) || admin.isAdmin === true) {
    next();
  } else {
    next({
      name: "forbidden",
      message: "user tidak punya akses ke data ini ",
    });
  }
}

module.exports = authUser;
