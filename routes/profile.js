const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (error) { next(error); }
});

router.put('/', async (req, res, next) => {
  try {
    const { name, address, bio, profilePicture } = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { name, address, bio, profilePicture }, { new: true });
    res.json(user);
  } catch (error) { next(error); }
});

module.exports = router;