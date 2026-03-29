// file Handling in backend
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        const filePath = path.join(__dirname, "public", "home.html");

        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });

    } else if (req.url === '/about') {
        const filePath = path.join(__dirname, "public", "about.html");

        fs.readFile(filePath, (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });

    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Page Not Found</h1>");
        res.end();
    }

});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});