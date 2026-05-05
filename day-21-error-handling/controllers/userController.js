const User = require("../models/userModel");

// CREATE
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("User created ✅");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET ALL
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// GET ONE
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).send("User not found ❌");
    }

    res.json(user);
  } catch (err) {
    res.status(400).send("Invalid ID ❌");
  }
};

// UPDATE
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!user) {
      return res.status(404).send("User not found ❌");
    }

    res.send("User updated 🔄");
  } catch (err) {
    res.status(400).send("Invalid ID ❌");
  }
};

// DELETE
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send("User not found ❌");
    }

    res.send("User deleted ❌");
  } catch (err) {
    res.status(400).send("Invalid ID ❌");
  }
};