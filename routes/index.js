const router= require("express").Router();
const materiRouter= require("./materiPelajarans/index");
const reviewRouter= require("./reviews/index");
const userRouter= require("./users/index");

router.use("/materi", materiRouter);
router.use("/review", reviewRouter);
router.use("", userRouter);
module.exports=router;