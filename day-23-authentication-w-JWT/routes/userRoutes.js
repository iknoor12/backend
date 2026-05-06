const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/userController');
const auth = require("../middleware/auth");

router.post('/signup', signup);
router.post('/login', login);

// protected route
router.get('/profile', auth, (req, res) => {
    res.send(`Welcome ${req.user.id} to your profile!`);
});

module.exports = router;