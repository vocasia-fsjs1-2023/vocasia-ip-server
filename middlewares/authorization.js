const { Review } = require("../models");

async function authorization(req, res, next) {
    try {
      const userId = req.userId;
      const param = req.params;
      const reviewId = param.id;

      const review = await Review.findOne({ where: { id: reviewId } });

      if (review && review.userId === userId) {
        next();
      } else {
        throw new Error("Review ini bukan punya kamu!!");
      }
    } catch (error) {
      next(error);
    }
}
  
module.exports = authorization;