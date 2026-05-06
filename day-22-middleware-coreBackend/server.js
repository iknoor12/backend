
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// Import middlware
const logger = require('./middleware/logger');

// global middleware
app.use(logger);

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// Mongodb connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('mongodb connected!')})
.catch((err) => {console.log(err)});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});