const router = require("express").Router();
const userRouter = require("./user/index");
const taskRouter = require("./task/index");

router.use("/User", userRouter);
router.use("/Task", taskRouter);
module.exports = router;