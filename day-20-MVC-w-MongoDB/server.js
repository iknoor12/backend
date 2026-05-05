require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());    
// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });
app.use('/users', userRoutes);
//app.use("/orders", orderRoutes);
//app.use("/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {console.log("Connected to MongoDB");})
  .catch((err) => {console.log(err)});

app.listen((process.env.PORT), () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});