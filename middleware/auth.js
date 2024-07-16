const jwt = require('jsonwebtoken');
const User = require('../models/usersModels');
require('dotenv').config();

const authenticateToken = async (req, res, next) => {
    const authReader = req.header('Authorization');
    if (!authReader) {
        return res.status(401).send({ error: 'Impossible' });
    }
    const token = authReader.replace('Bearer ', '');
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        // console.log(decoded.id);
        const user = await User.findOne({ where: { id: decoded.id } });
        if (!user) {
            throw new Error('User not found');
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Unauthorized request!' });
    }
};
const authorizeRole = (roles) => {
    // console.log(roles);

  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.sendStatus(403);
    }
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
