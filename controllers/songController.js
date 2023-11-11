const { Song, Review } = require("../models");

// Controller untuk mendapatkan semua lagu
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      include: Review,
    });
    res.status(200).json(songs);
  } catch (error) {
    console.log(`Gagal mendapatkan lagu ${error}`);
    res.status(500).json(error);
  }
};

// Controller untuk mendapatkan lagu berdasarkan ID
const getSongById = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.findByPk(id);
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: "Lagu tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal mendapatkan lagu" });
  }
};

// Controller untuk membuat lagu baru
const createSong = async (req, res) => {
  const { title, description, artis, genre, userId } = req.body;
  try {
    const song = await Song.create({
      title,
      description,
      artis,
      genre,
      userId,
    });
    res.status(201).json(song);
  } catch (error) {
    res.status(400).json({ error: "Gagal membuat lagu" });
  }
};

// Controller untuk memperbarui lagu berdasarkan ID
const updateSong = async (req, res) => {
  const { id } = req.params;
  const { title, description, artis, genre, userId } = req.body;
  try {
    const song = await Song.findByPk(id);
    if (song) {
      song.title = title;
      song.description = description;
      song.artis = artis;
      song.genre = genre;
      song.userId = userId;
      await song.save();
      res.json(song);
    } else {
      res.status(404).json({ error: "Lagu tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui lagu" });
  }
};

// Controller untuk menghapus lagu berdasarkan ID
const deleteSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await Song.findByPk(id);
    if (song) {
      await song.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Lagu tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal menghapus lagu" });
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
};
