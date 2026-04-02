const express = require("express");
const app = express();

// Middleware to read Json data from the request body
app.use(express.json());

// POST route to handle incoming user data and to send data
app.post('/user', (req, res) => {
    const data = req.body;
    res.send(`User received ${JSON.stringify(data)}`);
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});