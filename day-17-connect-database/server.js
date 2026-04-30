const express = require('express');
const mongoose  = require('mongoose');

const app = express();

app.use(express.json());

// Connect database
mongoose.connect('mongodb+srv://imiknoor_db_user:iknoor$123@cluster0.pecgpxs.mongodb.net/learnbackend?appName=Cluster0')
.then(() => {console.log("database connected!")})
.catch((err) => {console.log(err)});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});