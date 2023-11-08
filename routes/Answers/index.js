const AnswerController = require("../../controller/answerController");
const authentication = require("../../middlewares/authentication");
const isUserOwnReviewandAnswer = require("../../middlewares/authorization");

const router = require("express").Router();

router.post('/', authentication, AnswerController.addAnswer);
router.get('/', AnswerController.getAnswer);
router.get('/:id', AnswerController.getAnswerId);
router.put("/:id", authentication, isUserOwnReviewandAnswer, AnswerController.updateAnswer);
router.delete("/:id", authentication, isUserOwnReviewandAnswer, AnswerController.deleteAnswer);

module.exports = router;