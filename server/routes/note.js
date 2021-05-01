const express = require('express');
const { requireTokenAuth } = require('../utils/auth');
const {
  getAllNotes,
  createNote,
  deleteNote,
  editNote,
} = require('../controllers/note');

const router = express.Router();

// Get all notes
router.get('/', requireTokenAuth, getAllNotes);

// Create a new note
router.post('/', requireTokenAuth, createNote);

// Delete a note
router.delete('/:id', requireTokenAuth, deleteNote);

// Update a note
router.patch('/:id', requireTokenAuth, editNote);

module.exports = router;
