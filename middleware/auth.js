const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.sendStatus(403);
  }
};

module.exports = { authenticateJWT };