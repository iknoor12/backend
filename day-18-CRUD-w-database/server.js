const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// import model
const User = require('./models/userModel');

// connect database
mongoose.connect('mongodb+srv://imiknoor_db_user:iknoor$123@cluster0.pecgpxs.mongodb.net/learnbackend?appName=Cluster0')
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


app.listen(3000, () => {
  console.log("Server running...");
});