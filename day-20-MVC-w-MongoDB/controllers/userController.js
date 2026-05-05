const User = require('../models/userModel');

// CREATE
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User saved!");
};

// READ ALL
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// READ ONE
exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// UPDATE
exports.updateUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User updated!");
};

// DELETE
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted!");
};