const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// SIGNUP
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    await user.save();
    res.send('User registered!');
};

// LOGIN
exports.login = async (req, res) => {
    const { email, password } = req.body;
    // console.log("BODY:", req.body);

    const user = await User.findOne({ email });

    // console.log("FOUND USER:", user);
    // console.log("USER PASSWORD:", user?.password);

    if (!user) {
        return res.status(404).send("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.json({ token });
};