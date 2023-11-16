const TodoController = require("../../controller/todoController");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const errorHandling = require("../../middlewares/errorHandling");

const router = require("express").Router();

router.post("/", authentication, authorization, TodoController.createTodo);
router.get("/", TodoController.getTodo);
router.get("/:id", authentication, authorization, TodoController.getTodoById);
router.put("/:id", authentication, authorization, TodoController.updateTodo);
router.patch("/:id", TodoController.updateTodoStatus);
router.delete("/:id", authentication, authorization, TodoController.deleteTodo);

router.use(errorHandling);

module.exports = router;