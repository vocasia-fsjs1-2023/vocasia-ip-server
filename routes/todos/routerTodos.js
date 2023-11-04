const todosController = require('../../controllers/todosController');
const authentication = require("../../middlewares/autentikasi");
const authorization = require("../../middlewares/autorisasi")
const errorHandling = require('../../middlewares/errorHandling');
const checkParameter = require('../../middlewares/checkparam')
const router = require("express").Router();

router.get('/', todosController.getAllTask);
router.get('/:id', checkParameter, todosController.getAllTaskId);
router.get('/:status', todosController.getAllTaskCompleted)
router.post('/', authentication, todosController.addTask);
router.put('/:userId', authentication, authorization, todosController.UpdateTaskId);
router.delete('/:userId', authentication, authorization, todosController.deleteTask);

router.use(errorHandling);

module.exports = router;