const { Wisata, Review } = require("../models");

class Controller {
  static async postWisata(req, res) {
    const body = req.body;
    const { namaTempat, description, lokasi } = body;

    Wisata.create({
        namaTempat,
        description,
        lokasi
    })
      .then((wisata) => {
        res.status(201).json(wisata);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }

  static async getAllWisata(req, res) {
    try {
      const wisata = await Wisata.findAll();
      res.status(200).json({wisata});
    } catch (error) {
      res.status(500).json({error: 'Error dalam mendapatkan informasi wisata'});
    }
  }

  static async getWisataId(req, res) {
    const { id } = req.params;
    try {
      const wisata = await Wisata.findByPk(id, {include: Review});
      if(!wisata) {
        return res.status(404).json({error: 'Wisata tidak dapat ditemukan'});
      } else { 
        res.status(200).json(wisata);
      } 
    } catch (error) {
        res.status(500).json({error: 'Error dalam mendapatkan wisata'});
      }
  }

  static async putWisataId(req, res) {
    const { id } = req.params;
    const body = req.body;
    const { namaTempat, description, lokasi } = body;

    try {
        const wisata = await Wisata.findByPk(id);
        if (wisata) {
            wisata.namaTempat = namaTempat;
            wisata.description = description;
            wisata.lokasi = lokasi;
            await wisata.save();
            return res.status(200).json(wisata);
        }
        res.status(404).json({ error: 'Wisata tidak dapat ditemukan' });
      } catch (error) {
        res.status(500).json({ error: 'Error dalam mengupdate wisata' });
      }
  }

  static async deleteWisataId(req, res) {
    const { id } = req.params;
    try {
        const wisata = await Wisata.findByPk(id);
        if (!wisata) {
            return res.status(404).json({ message: 'Wisata tidak ditemukan'});
          }
          await wisata.destroy();
          res.status(200).json({message: `Wisata dengan id ${id} telah dihapus`});
        } catch (error) {
        res.status(500).json({ error: 'Error dalam menghapus wisata' });
    } }
}

module.exports = Controller;