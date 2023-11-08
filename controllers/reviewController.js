const { Review, User } = require("../models");

class Controller {
    static async addReview(req, res) {
        const { kritik, saran, MateriPelajaranId, UserId} = req.body;
          try {
            const reviews = await Review.create({
              kritik,
              saran,
              MateriPelajaranId,
              UserId,
            });
            res.status(201).json(reviews);
          } catch (error) {
            res.status(500).json(error);
          }
    }

    static async getReview(req, res) {
        try {
            const reviews = await Review.findAll({include: User}); 
            res.status(200).json(reviews);
          } catch (error) {
            res.status(500).json(error);
          }
    }

    static async updateReview(req, res) {
        const { kritik, saran } = req.body;
        let id = Number(req.params.id);
        const findId = await Review.findByPk(id);
        if (findId.UserId) {
            try {
                await Review.update(
                {
                    kritik,
                    saran,
                },
                {
                    where: {
                    id: id,
                    },
                }
                );
                res.status(200).json(findId);
            } catch (error) {
                res.status(500).json(error);
            }  
        } else{
            res.status(500).json(error);
        }
    }

    static async deleteReview(req, res) {
        let id = Number(req.params["id"]);
        const findId = await Review.findByPk(id);
        if (findId.UserId) {
            await Review.destroy({
                where: {
                    id: id
                }
            });
            res.status(200).json(`Review dengan id ${id} berhasil dihapus`);
        } else {
            res.status(403).json(error);
        }
    }
}

module.exports=Controller;