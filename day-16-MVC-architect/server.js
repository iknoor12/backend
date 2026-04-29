const express = require("express");

const app = express();

app.use(express.json());

// import routes
const userRoutes = require("./routes/userRoutes");

// use routes
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running...");
});