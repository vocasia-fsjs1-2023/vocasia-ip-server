const router = require("express").Router();
const productRouter = require("./product/index");
const orderRouter = require("./order/index");
const userRouter = require("./user/index");

router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use(userRouter);

module.exports = router;