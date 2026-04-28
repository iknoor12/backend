const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});