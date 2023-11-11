const express = require("express");
const router = express.Router();
const songController = require("../controllers/songController");
const authentication = require("../middlewares/authentication");
const isAdmin = require("../middlewares/isAdmin");

// Endpoint untuk mendapatkan semua film
router.get("/", songController.getAllSongs);

// Endpoint untuk mendapatkan film berdasarkan ID
router.get("/:id", songController.getSongById);

// Endpoint untuk membuat film baru
router.post("", authentication, isAdmin, songController.createSong);

// Endpoint untuk memperbarui film berdasarkan ID
router.put("/:id", authentication, isAdmin, songController.updateSong);

// Endpoint untuk menghapus film berdasarkan ID
router.delete("/:id", authentication, isAdmin, songController.deleteSong);

module.exports = router;
