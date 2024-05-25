const Movie = require('../models/movieadd.model'); // Assuming you have a Movie model defined

const addMovie = async (movieData) => {
    try {
        // Create a new movie instance
        const newMovie = new Movie(movieData);

        // Save the new movie to the database
        await newMovie.save();

        // Return the added movie data
        return newMovie;
    } catch (error) {
        // Throw error if saving fails
        throw new Error('Failed to add movie. Please try again later.');
    }
};

module.exports = {
    addMovie
};
