const express = require("express");
const router = express.Router();

// Impor rute-rute lainnya
const songRoutes = require("./songRoutes");
const reviewRoutes = require("./reviewRoutes");
const userRoutes = require("./userRoutes");

// Gabungkan rute-rute tersebut
router.use("/song", songRoutes);
router.use("/review", reviewRoutes);
router.use("", userRoutes);

module.exports = router;
