// HTML responses from backend
const http = require('http');
// 200 and 404 are status codes: 200 means success and 404 means page not found

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });   // This tells browser that i'm sending html content
        res.write(`
            <html>
                <head>
                    <title>My App</title>
                    <style>
                        body {
                            background-color: #3498db;
                        }
                    </style>
                </head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <a href="/contact">go to contact page</a>
                </body>
            </html>
        `);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });      
        res.write(`
            <html>
                <head>
                    <title>My App</title>
                </head>
                <body>
                    <h1 style="color: orange;">Welcome to the contact Page</h1>
                    <a href="/about">go to extra page</a>
                </body>
            </html>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
                <head>
                    <title>My App</title>
                </head>
                <body>
                    <h1>Page Not Found</h1>
                </body>
            </html>
        `);
    }

    res.end();
});

server.listen(3000, () => {
    console.log('server is running on port 3000');
});