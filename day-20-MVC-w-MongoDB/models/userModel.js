const mongoose = require('mongoose');

// define schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// create model
const User = mongoose.model('user', userSchema);

// export model
module.exports = User;