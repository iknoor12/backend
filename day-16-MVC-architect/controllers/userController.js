const users = require("../models/userModel");

// CREATE
exports.createUser = (req, res) => {
  users.push(req.body);
  res.send("User added ✅");
};

// READ
exports.getUsers = (req, res) => {
  res.json(users);
};

// UPDATE
exports.updateUser = (req, res) => {
  users[req.params.id] = req.body;
  res.send("User updated 🔄");
};

// DELETE
exports.deleteUser = (req, res) => {
  users.splice(req.params.id, 1);
  res.send("User deleted ❌");
};