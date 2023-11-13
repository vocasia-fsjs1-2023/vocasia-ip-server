const userController = require("../../controller/userController");
const router = require("express").Router();

router.post('/', userController.addUser);
router.get('/', userController.getUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;