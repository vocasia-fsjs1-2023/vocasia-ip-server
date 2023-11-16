const router = require("express").Router();
const userRoutes = require("./user/index");
const todoRoutes = require("./todo/index");

router.use("", userRoutes);
router.use("/todos", todoRoutes);

module.exports = router;
