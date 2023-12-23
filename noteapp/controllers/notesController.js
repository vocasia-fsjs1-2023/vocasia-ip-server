const Note = require('../models').note;

const getAllNotes = async (req, res) => {
  try {
    const Admin = req.user.isAdmin
    if (Admin) {
      const notes = await Note.findAll();
      return res.status(200).json(notes);
    }
    
    const notes = await Note.findAll({ where: { userId: req.user.userId } });
    return res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content, userId: req.user.userId });
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByPk(req.params.id);
    if (!note || note.userId !== req.user.userId) {
      return res.status(404).json({ message: 'Note not found' });
    }

    note.title = title;
    note.content = content;
    await note.save();

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    if (!note || note.userId !== req.user.userId) {
      return res.status(404).json({ message: 'Note not found' });
    }
    await note.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
