const router = require('express').Router();  
const tourismRouter = require('./tourism/index');
const reviewRouter = require('./review/index');
const userRouter = require('./user/index');

router.use('/tourism', tourismRouter)
router.use('/review', reviewRouter);
router.use('', userRouter);

module.exports = router;