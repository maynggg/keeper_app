const Note = require('../models/note');

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  return res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
    user: req.user._id,
  });
  await newNote.save();
  return res.json(newNote);
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  const noteToDelete = await Note.findById(id);
  if (noteToDelete.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const deletedNote = await Note.findByIdAndDelete(id);
  return res.json(deletedNote);
};
