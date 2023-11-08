const router = require("express").Router();
const taskRouter = require("./Tasks/index");
const answerRouter = require("./Answers/index");
const reviewRouter = require("./Reviews/index")
const userRouter = require("./Users/index");

router.use('/task', taskRouter);
router.use('/answer', answerRouter);
router.use('/review', reviewRouter);
router.use(userRouter);

module.exports = router;