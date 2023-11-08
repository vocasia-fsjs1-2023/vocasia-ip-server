const router= require("express").Router();
const reviewController= require("../../controllers/reviewController");
const authentication= require("../../middlewares/jwtMiddle");
const authorization= require("../../middlewares/isAdmin");

router.post("", reviewController.addReview);
router.get("",authentication, authorization, reviewController.getReview);
router.put("/:id",authentication,authorization, reviewController.updateReview);
router.delete("/:id",authentication, authorization, reviewController.deleteReview);
module.exports=router;