require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected ✅"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});