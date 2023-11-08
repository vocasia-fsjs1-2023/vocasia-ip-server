const { MateriPelajaran , Review} = require("../models");

class Controller {
    static async addMateri(req, res) {
            const { namaMateri, penjelasan, tugas } = req.body;
            try {
                const data = await MateriPelajaran.create({ namaMateri, penjelasan, tugas });
                res.status(201).json(data);
            } catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
    }

    static async getMateri(req, res) {
        try {
          const materis = await MateriPelajaran.findAll({ include: Review });
          res.status(200).json(materis);
        } catch (error) {
            res.status(500).json(error);
        }
        
    }

    static async getId_Materi(req, res, next) {
        let id = Number(req.params["id"]);
        const findId = await MateriPelajaran.findByPk(id);
        if (findId) {
          let response;
          try {
            const materis = await MateriPelajaran.findAll({
              where: {
                id: id,
              },
              include: Review,
            });
            response = materis;
          } catch (error) {
            res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data materi' });
          }
          res.status(200).json(response);
        } else {
          return res.status(500).json({ message: `Materi pelajaran dengan id :${id} tidak ditemukan` });
        }
    }

    static async updateMateri(req, res) {
        const { namaMateri, penjelasan, tugas } = req.body;
        let id = Number(req.params["id"]);
        try {
          await MateriPelajaran.update(
            {
              namaMateri,
              penjelasan,
              tugas,
            },
            {
              where: {
                id: id,
              },
            }
          );
          res.status(200).json(`Materi pelajaran dengan id ${id} berhasil diupdate`);
        } catch (error) {
          res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data materi' });
        }
    }

    static async deleteMateri(req, res) {
        let id = Number(req.params["id"]);
        const findId = await MateriPelajaran.findByPk(id);
        if (!findId) {
            return res.status(404).json({ message: `Materi pelajaran dengan id: ${id}  tidak ditemukan` });
        }
        await MateriPelajaran.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json(`Materi pelajaran dengan id ${id} berhasil dihapus`);
    }
}

module.exports = Controller;
