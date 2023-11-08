const ReviewController = require("../../controller/reviewController");
const authentication = require("../../middlewares/authentication");
const isAdmin = require("../../middlewares/isAdmin");
const isUserOwnReviewandAnswer = require("../../middlewares/authorization")

const router = require("express").Router();

router.post('/', authentication, isAdmin, ReviewController.addReview);
router.get('/', ReviewController.getReview);
router.get('/:id', ReviewController.getReviewId);
router.put("/:id", authentication, isAdmin, isUserOwnReviewandAnswer, ReviewController.updateReview);
router.delete("/:id", authentication, isAdmin, isUserOwnReviewandAnswer, ReviewController.deleteReview);

module.exports = router;