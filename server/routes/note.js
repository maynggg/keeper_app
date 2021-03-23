const express = require('express');
const { getAllNotes, createNote, deleteNote } = require('../controllers/note');

const router = express.Router();

// Get all notes
router.get('/', getAllNotes);

// Create a new note
router.post('/', createNote);

// Delete a note
router.delete('/:id', deleteNote);

module.exports = router;
