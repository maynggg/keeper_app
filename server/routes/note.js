const express = require('express');
const { requireTokenAuth } = require('../utils/auth');
const { getAllNotes, createNote, deleteNote } = require('../controllers/note');

const router = express.Router();

// Get all notes
router.get('/', requireTokenAuth, getAllNotes);

// Create a new note
router.post('/', requireTokenAuth, createNote);

// Delete a note
router.delete('/:id', requireTokenAuth, deleteNote);

module.exports = router;
