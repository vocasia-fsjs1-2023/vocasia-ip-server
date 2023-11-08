const TaskController = require("../../controller/taskController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");

const router = require("express").Router();

router.post('/', authentication, isAdmin, TaskController.addTask);
router.get('/', TaskController.getTask);
router.get('/:id', TaskController.getTaskId);
router.put("/:id", authentication, isAdmin, TaskController.updateTask);
router.delete("/:id", authentication, isAdmin, TaskController.deleteTask);

module.exports = router;