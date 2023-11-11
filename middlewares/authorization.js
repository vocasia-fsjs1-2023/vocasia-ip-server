const { Review } = require("../models");

async function isUserOwnReview(req, res, next) {
  try {
    const userid = req.userId;
    const params = req.params;
    const reviewId = params.id;
    console.log(reviewId);

    const review = await Review.findOne({
      where: { id: reviewId, userId: userid },
    });

    console.log("userid:", userid);
    console.log("reviewId:", reviewId);
    console.log("review.userId:", review ? review.userId : null);

    if (review && (review.userId === null || review.userId === userid)) {
      next();
    } else {
      throw new Error("BUKAN MILIK ANDA");
    }
  } catch (error) {
    next(error);
  }
}

module.exports = isUserOwnReview;
