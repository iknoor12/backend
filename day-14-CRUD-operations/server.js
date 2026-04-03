const express = require('express');
const app = express();

app.use(express.json());

// Temporary database
const users = [];

// CREATE operation
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send('User added successfully');
});

// READ operation
app.get('/users', (req, res) => {
    res.json(users);
});

// UPDATE operation
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.send('User updated successfully');
});

// DELETE operation
app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.send('User deleted successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});