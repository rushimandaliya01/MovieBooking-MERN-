const express = require("express");
const movieRouter = express.Router();
const authController = require("../controllers/auth.controller");
const movieaddcontroller = require("../controllers/movieadd.controller");

movieRouter.post("/add",movieaddcontroller.addMovie);
movieRouter.get("/getmovies",movieaddcontroller.getMovies);

module.exports = movieRouter;
