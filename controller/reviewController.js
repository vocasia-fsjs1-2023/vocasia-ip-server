const { Review, Answer, User } = require("../models");

class Controller {
    static async addReview (req, res) {
        const body = req.body;
        const { expression, description, rating, answerId } = body;
        const user = await User.findOne({ where: { id: req.userId } });

        if(user) {
        try {
            const Reviews = await Review.create({
              expression,
              description,
              rating,
              answerId,
              userId: req.userId
            });
            const Result = await Review.findAll({
              where: {
                id: Reviews.id,
              },
              include: [
                { model: Answer },
                { model: User, attributes: ['name'] }
              ]
              
            });
      
            res.status(201).json(Result);
        } catch (error) {
            console.log(`Error menambahkan review! ${error}`);
            res.status(500).json(error);
        }
    }
    }

    static getReview(req, res) {
        Review.findAll({ 
            include:[
                { model: Answer},
                { model: User}
            ]
        })
        .then((review) => {
            res.status(200).json(review);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
    }

    static async getReviewId(req, res) {
        const id = Number(req.params['id']);
       
        try  {
            if (!await Review.findByPk(id)) {
            return res.status(404).json({ message: "Review tidak dapat ditemukan" });
            }           
              res.status(200).json(await Review.findByPk(id, {
                include: Movie,
                include: User
            }));
            } catch (error) {
              res.status(500).json({ error: "Internal Server Error" });
            };
    }

    static async updateReview(req, res) {
        const id = Number(req.params.id);
        const { expression, description, rating } = req.body;

        let response;
        try {
            await Review.update({ 
                expression,
                description,
                rating,
            }, {
                where: {
                    id: id
                }
            });
            const review = await Review.findByPk(id, {
                include: [{model: User, attributes: ['name']}]
            });
            res.status(200).json(review);
        } catch (error) {
            console.log(error);
            response = JSON.stringify(error);
        }   
    }

    static async deleteReview(req, res) {
        const id = Number(req.params["id"]);
      
        try  {
            await Review.destroy({
                where: {
                id: id,
                },
            });
        res.status(200).json({ message: `Review dengan id ${id} berhasil dihapus` });
        } catch (error) {
        res.status(500).json(error);
        }
    }

};

module.exports = Controller;