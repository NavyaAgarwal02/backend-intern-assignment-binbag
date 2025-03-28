const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, address, bio, profilePicture } = req.body;
    const user = new User({ name, email, password, address, bio, profilePicture });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) { next(error); }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) { next(error); }
});

module.exports = router;
