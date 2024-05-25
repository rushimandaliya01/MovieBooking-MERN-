const Movie = require('../models/movieadd.model'); // Assuming you have a Movie model defined
const getMovies = async (req, res) => {
    try {
      const movies = await Movie.find({});

      res.status(200).json({ message: 'Movies fetched successfully', movies });
    } catch (error) {
      // Handle errors
      console.error('Error fetching movies:', error);
      res.status(500).json({ message: 'Failed to fetch movies. Please try again later.' });
    }
  };
  
const addMovie = async (req, res) => {
    try {
        // Destructure movie attributes from request body
        const { movieName, moviePoster, releaseDate, director, genre, duration, synopsis } = req.body;

        console.log('Received request to add movie:', req.body);

        const newMovie = new Movie({
            movieName,
            moviePoster,
            releaseDate,
            director,
            genre,
            duration,
            synopsis
        });

        console.log('New movie created:', newMovie);

        // Save the new movie to the database
        await newMovie.save();

        console.log('Movie added to database:', newMovie);

        // Send success response
        res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
    } catch (error) {
        // Handle errors
        console.error('Error adding movie:', error);
        if (error.name === "ValidationError") {
            // Handle validation errors
            const validationErrors = Object.values(error.errors).map(err => ({
                field: err.path,
                message: err.message
            }));
            console.log('Validation errors:', validationErrors);
            return res.status(400).json({ errors: validationErrors });
        } else {
            // Handle other errors
            console.error('Unexpected error:', error);
            res.status(500).json({ message: 'Failed to add movie. Please try again later.' });
        }
    }
};

module.exports = {
    addMovie,getMovies
};