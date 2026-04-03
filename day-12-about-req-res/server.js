// Req ans res object - query and params
const express = require('express');
const app = express();


// Route Params - is used to capture values from the URL
app.get('/user/:name', (req, res) => {
    const userName = req.params.name;
    res.send(`Hello ${userName}`);
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Product ID: ${productId}`);
});


// Query Params - is used for kind of filtering or searching
app.get('/search', (req, res) => {
    const keyword = req.query.q;
    res.send(`You searched for ${keyword}`);
});

app.get('/filter', (req, res) => {
    const name = req.query.name;
    const price = req.query.price;
    res.send(`Filtering products with name: ${name} and price: ${price}`);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});