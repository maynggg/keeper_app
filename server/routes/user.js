const express = require('express');
const { signUp, logIn } = require('../controllers/user');

const router = express.Router();

// Sign up
router.post('/signup', signUp);

// Log in
router.post('/login', logIn);

module.exports = router;
