const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    if (!header) {
        return res.status(401).json({
            message: "Unauthorized access",
        });
    }

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid Token",
        });
    }
}

module.exports = authMiddleware;