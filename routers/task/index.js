const taskController = require("../../controller/taskController");
const router = require("express").Router();

router.post('/', taskController.postTask);
router.get('/', taskController.getTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;