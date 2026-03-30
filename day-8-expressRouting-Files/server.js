const express = require('express');
const path = require('path');       
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public' ,'home.html'));  // Sends a file directly to browser
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.listen(5000, () => {
    console.log('server is running on port 5000');
});