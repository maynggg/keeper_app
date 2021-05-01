const User = require('../models/user');
const { createAuthToken } = require('../utils/auth');
const pw = require('../utils/pw');

exports.signUp = async (req, res) => {
  const {
    email,
    password,
    firstName,
    lastName,
  } = req.body;

  // Check if this email has been used
  const user = await User.findOne({ email });
  if (user !== null) {
    return res.status(400).json({ error: 'This email has already been registered.' });
  }

  // Create password hash and salt
  const passwordSalt = pw.createPasswordSalt();
  const passwordHash = pw.createPasswordHash(password, passwordSalt);

  try {
    const newUser = User({
      email,
      passwordHash,
      passwordSalt,
      firstName,
      lastName,
    });

    // Save the user to database
    await newUser.save();

    return res.json({
      accessToken: createAuthToken(newUser),
      user: newUser,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.logIn = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  // Check if this user exists
  const user = await User.findOne({ email });
  if (user === null) {
    return res.status(401).json({ error: 'Wrong email or password.' });
  }

  const passwordHash = pw.createPasswordHash(password, user.passwordSalt);

  if (passwordHash !== user.passwordHash) {
    return res.status(401).json({ error: 'Wrong email or password.' });
  }
  return res.json({
    accessToken: createAuthToken(user),
    user,
  });
};
