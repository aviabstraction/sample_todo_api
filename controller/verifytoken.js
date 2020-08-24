const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(400).send('Access Denied');

  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    //verifytoken will hold our payload

    req.user = verifyToken;
    next();
  } catch (err) {
    return res.status(400).send('Invalid token');
  }
};

module.exports = verifyToken;
