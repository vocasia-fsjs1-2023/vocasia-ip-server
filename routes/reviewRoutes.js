const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");
const authentication = require("../middlewares/authentication"); // Middleware Authentication
const authorization = require("../middlewares/authorization"); // Middleware Authorization
const errorHandling = require("../middlewares/errorHandling");

// Routes untuk ulasan
router.get("", reviewController.getAllReviews);
router.post("", authentication, reviewController.createReview);
router.put(
  "/:id",
  authentication,
  authorization,
  reviewController.updateReview
);
router.delete(
  "/:id",
  authentication,
  authorization,
  reviewController.deleteReview
);

router.use(errorHandling);
module.exports = router;
