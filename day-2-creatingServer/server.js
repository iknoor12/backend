const http = require('http');  // Importing the built-in 'http' module

// Creating server
const server = http.createServer((req, res) => {
    res.write('Hello IKNOOR, your first server is running!');   //send data to browser
    res.end();
});

// running server
server.listen(3000, () => {
    console.log('server is running on port:3000');
});