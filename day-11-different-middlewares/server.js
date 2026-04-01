// Types of Middlewares in Express
const express = require('express');
const app = express();

// Global Middleware
app.use((req, res, next) => {
    console.log('Global Middleware is running');
    next();
});

// Route-level Middleware
const checkAuth = (req, res, next) => {
    console.log('Checking authentication');
    next();
};

// Public route
app.get('/', (req, res) => {
    res. send('Welcome to the public Home page!');
});

// protected Route
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('welcome to Dashboard, The dashbord is protected.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});