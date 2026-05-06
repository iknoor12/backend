const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const header = req.headers.authorization;

    if (!header) {
        return res.status(401).send("Access denied");
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); 
    } catch {
        res.status(400).send("Invalid token");
    }
};

module.exports = auth;