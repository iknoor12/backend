// Handling routes in backend
const http =require('http');

const server = http.createServer((req, res) => {

    if(req.url === '/'){
        res.write("Welcome to Home Page 🏠");
    } else if(req.url === '/about'){
        res.write("Welcome to About Page 📄");
    } else if(req.url === '/contact'){
        res.write("Welcome to Contact us at contact@example.com 📞 page");
    } else {
        res.write("404 Page not found!");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("server is running on port 3000");
});