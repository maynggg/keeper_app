const Note = require('../models/note');

exports.getAllNotes = async (req, res) => {
  const notes = await Note.find();
  return res.json(notes);
};

exports.createNote = async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  return res.json(newNote);
};

exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  const deletedNote = await Note.findByIdAndDelete(id);
  return res.json(deletedNote);
};
