const { Wisata, Review } = require("../models");

class Controller {
  static async postReview(req, res) {
    const body = req.body;
    const { title, description, rating, wisataId } = body;

    try {
      const Reviews = await Review.create({
        title,
        description,
        rating,
        wisataId,
        userId: req.userId,
      });

      const hasil = await Review.findAll({
        where: {
          id: Reviews.id,
        },
        include: Wisata,
      });

      res.status(201).json(hasil);
    } catch (error) {
      console.log(`Error menambahkan review! ${error}`);
      res.status(500).json(error);
    }
}

  static async getAllReview(req, res) {
    try {
      const reviews = await Review.findAll({ include: Wisata });
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({error: 'Error dalam mendapatkan review!!'});
    }
  }

  static async putReviewId(req, res) {
    const { id } = req.params;
    const { title, description, rating } = req.body;

    try {
        const review = await Review.findByPk(id);
        if (review) {
            review.title = title;
            review.description = description;
            review.rating = rating;
            await review.save();
            return res.status(200).json(review);
        }
        res.status(404).json({ error: 'Review tidak ditemukan' });
      } catch (error) {
        res.status(500).json({ error: 'Error saat mengupdate review' });
      }
  }

  static async deleteReviewId(req, res) {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (!review) {
            return res.status(404).json({ message: 'Review tidak ditemukan'});
          }
          await review.destroy();
          res.status(200).json({message: `Review dengan id ${id} telah dihapus`});
        } catch (error) {
        res.status(500).json({ error: 'Error dalam menghapus review' });
    } }
}

module.exports = Controller;