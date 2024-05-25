const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.router"));
router.use("/movie", require("./movie.router"));

module.exports = router;