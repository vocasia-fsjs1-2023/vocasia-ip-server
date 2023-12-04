const reviewController = require("../../controllers/reviewController");
const authentication = require("../../middlewares/authentication");
const authorization = require("../../middlewares/authorization");
const router = require("express").Router();

router.post("/", authentication, reviewController.postReview);
router.get("/", reviewController.getAllReview);
router.put("/:id", authentication, authorization, reviewController.putReviewId);
router.delete("/:id", authentication, authorization, reviewController.deleteReviewId);

module.exports = router;