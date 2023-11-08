const { Tourism, Review } = require('../models');

class tourismController{
    static async getTourism (req, res) {
        let respons;
    
        try {
            const tourism = await Tourism.findAll({ include: Review });
            respons = tourism;
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json(respons)
    }

    static async getTourismByID (req, res) {
        const id = req.params.id;
        let respons;
    
        try {
            const tourism = await Tourism.findOne({
                where: {
                    id: id,
                },
            });
            respons = tourism;
        } catch (error) {
            respons = 'Error';
        }
        res.status(200).json(respons);
    }
    static postTourism (req, res) {
        const body = req.body;
        const { tourismName, description } = body;
    
        Tourism.create(
                {
                    tourismName,
                    description
                }
            ).then((post) =>{
                res.status(201).json(post);
            })
            .catch((error) =>{
                res.status(500).json(error)
            });
    }

    static async delTourism (req, res) {
        const id = Number(req.params['id']);
        await Tourism.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json(`Data dengan ${id} Berhasil Di Hapus!`);
    }

    static async putTourism (req, res) {
        try {
            const { id } = req.params;
            const { tourismName, description } = req.body;
    
            const tourism = await Tourism.findByPk(id);
            if (tourism) {
                tourism.update({ tourismName, description });
                res.status(200).json(`Data Tourism dengan id ${id} Berhasil di Update!`);
            } else {
                res.status(404).json(`Tourism Dengan ID ${id} Tersebut Tidak Di Temukan!`);
            }
        } catch (error) {
            res.status(500).json('Terjadi Kesalahan Saat Mengupdate Data Tourism!');
        }
    }

}

module.exports = tourismController;