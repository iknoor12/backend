const express = require('express');
const router = express.Router();
let users = [];

router.post('/', (req, res) => {
    users.push(req.body);
    res.send('user added!');
});

router.get('/', (req, res) => {
    res.json(users);
});

router.put('/:id', (req, res) => {
    users[req.params.id] = req.body;
    res.send('user updated!');
});

router.delete("/:id", (req, res) => {
  users.splice(req.params.id, 1);
  res.send("User deleted ❌");
});

module.exports = router;