const mongoose = require("mongoose");

// Define schema (structure of data)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

// Create model
const User = mongoose.model("User", userSchema);

// Export model
module.exports = User;