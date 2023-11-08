const { Review, User } = require('../models');

class reviewController {
    static async postReview(req, res, next) {
        const body = req.body;
        const { rating, comment, tourismId } = body;
        const userId = req.userId;
        const user = await User.findOne({ where: { id: userId } });

        if (user) {
            try {
                const review = await Review.create({
                    rating,
                    comment,
                    tourismId,
                    userId
                });
                res.status(201).json(review);
            } catch (error) {
                res.status(500).json(error)
            }
        } else {
            res.status(500).json(error)
        }
    }

    static async getReview(req, res) {
        let respons;

        try {
            const review = await Review.findAll({ include: User });
            respons = review;
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json(respons);
    }
    static async putReview(req, res) {
        try {
            const { rating, comment } = req.body;
            const { id } = req.params;

            const review = await Review.findByPk(id);

            if (review) {
                await review.update({ rating, comment }, {
                    where: {
                        id: id,
                    },
                });
                res.status(200).json('Review Berhasil Di Update!');
            } else {
                res.status(404).json(`Review Dengan ID ${id} Tidak Di Temukan!`)
            }
        } catch (error) {
            res.status(500).json('Terjadi Kesalahan Saat Mengupdate Review!');
        }
    }

    static async delReview(req, res) {
        const id = req.params['id'];

        await Review.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json('Review Berhasil Di Hapus!');
    }
}

module.exports = reviewController;