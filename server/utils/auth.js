const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET || 'THIS_IS_A_SECRET';

// eslint-disable-next-line
const requireTokenAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Validate Authorization Header
  if (authHeader === undefined || !authHeader.startsWith('Bearer')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Retrieve the token from the Authorization Header
  const token = authHeader.substring(7);

  try {
    const payload = jwt.verify(token, JWT_SECRET);

    if (payload === undefined || payload.id === undefined) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await User.findById(payload.id);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

const createAuthToken = (user) => {
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

module.exports = {
  requireTokenAuth,
  createAuthToken,
};
