const router = require("express").Router();
const wisataRouter = require("./wisata/index");
const reviewRouter = require("./review/index");
const userRouter = require("./user/index");

router.use("/wisata", wisataRouter);
router.use("/review", reviewRouter);
router.use("", userRouter);

module.exports = router;