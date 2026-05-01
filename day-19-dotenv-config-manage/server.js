const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());

// import model
const User = require('./models/userModel');

// connect database
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Database connected!')})
.catch((err) => {console.log(err)});


// Create post
app.post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send('user saved!');
});


// Read (get all users)
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});


// READ (GET single)
app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});


// UPDATE
app.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send("User updated!");
});


// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running...");
});