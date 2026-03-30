const express = require('express');   // importing express module
const app = express();                // creating server using express

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>This is About page.</h1>');
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});