const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const routes = require("./routes");
require("./config/db.config");

// Load environment variables
dotenv.config();

// global variables
const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";

// Middlewares
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    })
);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// Routes and handlers
app.use("/api/v1/", routes);

// 404 Error handling
app.get("/404", (req, res) => {
    res.status(404).json({
        message: "Resource not found",
    });
});
app.use("*", (req, res) => {
    res.status(404).redirect("/404");
});



// Listen for incoming requests
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
