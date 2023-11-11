const todoController = require("../../controllers/todo");
const authentication = require("../../middlewares/authentication");
const authUser = require("../../middlewares/authorization");
const routes = require("express").Router();

routes.post("", authentication, todoController.addTodo);
routes.get("", todoController.getTodo);
routes.get("/:id", authentication, todoController.getTodoId);
routes.put("/:id", authentication, authUser, todoController.updateTodoId);
routes.delete("/:id", authentication, authUser, todoController.deleteTodo);

module.exports = routes;
