const { Review, Song } = require("../models");

// Controller untuk mendapatkan semua ulasan
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({
      include: Song,
    });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Gagal mendapatkan ulasan" });
  }
};

// Controller untuk mendapatkan ulasan berdasarkan ID
const getReviewById = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id, {
      include: Song,
    });
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: "Ulasan tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal mendapatkan ulasan" });
  }
};

// Controller untuk membuat ulasan baru
const createReview = async (req, res) => {
  const { title, description, comment, rating, userId, songId } = req.body;
  try {
    const review = await Review.create({
      title,
      description,
      rating,
      comment,
      userId,
      songId,
    });
    res.status(201).json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Gagal membuat ulasan" });
  }
};

// Controller untuk memperbarui ulasan berdasarkan ID
const updateReview = async (req, res) => {
  const { id } = req.params;
  const { title, description, comment, rating } = req.body;

  try {
    const review = await Review.findByPk(id);
    if (review) {
      review.title = title;
      review.description = description;
      review.comment = comment;
      review.rating = rating;
      await review.save();
      res.json(review);
    } else {
      res.status(404).json({ error: "Ulasan tidak ditemukan" });
    }
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui ulasan" });
  }
};

// Controller untuk menghapus ulasan berdasarkan ID
const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findByPk(id);
    if (review) {
      await review.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: "Ulasan tidak ditemukan" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gagal menghapus ulasan" });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
};
