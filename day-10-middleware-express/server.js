const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('middleware is running');
    next();
});

app.get("/", (req, res) => {
    res.send('HOME page');
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});