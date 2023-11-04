const router = require("express").Router();
const todosRouter = require("./todos/routerTodos");
const userRouter = require('./user/routerUser');
const jwt = require('jsonwebtoken');
const secret = 'rahasiabanget';

router.use('/gettask', todosRouter);
router.use('', userRouter);

module.exports = router;