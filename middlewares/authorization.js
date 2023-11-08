const { Review, Answer } = require("../models");

async function isUserOwnReviewandAnswer(req, res, next){
    const id = Number(req.params["id"]);
    try {
        const userId = req.userId;
        const params = req.params;
        const reviewId = params.id;
        const answerId = params.id;

        const review = await Review.findOne({where: { id: reviewId,} });
        const answer = await Answer.findOne({where: { id: answerId,} });
        
        if (answer && answer.userId === userId || review && review.userId === userId) {
            next();
          } else if (!answer && !review){
            throw new Error(`ID ${id} tidak ditemukan`);
          } else {
            throw new Error(`BUKAN MILIK ANDA1`)
          }
          
    } catch (error) {
        next(error);
    }
}

module.exports = isUserOwnReviewandAnswer;