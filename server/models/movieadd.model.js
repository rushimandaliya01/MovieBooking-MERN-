const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    moviePoster: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
