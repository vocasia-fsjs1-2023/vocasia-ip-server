const UserController = require("../../controller/userController");
const router = require("express").Router();

router.get("/user", UserController.getUser);
router.post("/register", UserController.registerUser);
router.post("/login", UserController.loginUser);

module.exports = router;