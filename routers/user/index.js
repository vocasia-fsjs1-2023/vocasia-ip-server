const UserController = require("../../controller/userController");
const router = require("express").Router();

router.post("/register", UserController.registerAccount);
router.post("/login", UserController.loginAccount);

module.exports = router;