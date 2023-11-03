const todosController = require('../../controllers/todosController');
const authentication = require("../../middlewares/autentikasi");
const authorization = require("../../middlewares/autorisasi")
const errorHandling = require('../../middlewares/errorHandling');
const router = require("express").Router();

router.get('/', todosController.getAllTask);
router.get('/:id', todosController.getAllTaskId);
router.get('/true', todosController.getAllTaskCompleted)
router.post('/', authentication, todosController.addTask);
router.put('/:id', authentication, authorization, todosController.UpdateTaskId);
router.delete('/:id', authentication, authorization, todosController.deleteTask);

router.use(errorHandling);

module.exports = router;