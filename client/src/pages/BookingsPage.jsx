import React, { useState, useEffect } from 'react';
import { MdOutlineEventSeat } from "react-icons/md";
import axios from "axios";

const BookingsPage = () => {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
    const [bookingDetails, setBookingDetails] = useState({ movie: null, seats: [] }); // State to hold booking details
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/movie/getmovies");
                setMovies(response.data.movies);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } 
        };

        fetchMovies();
    }, []);

    const availableSeatsPerMovie = {};

    movies.forEach(movie => {
        availableSeatsPerMovie[movie._id] = Array.from({ length: 50 }, (_, index) => ({
            id: index + 1,
            seatNumber: `${movie.movieName}_${index + 1}`,
            booked: false, 
        }));
    });


    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setSelectedSeats([]);
    };

    const handleSeatSelection = (seatNumber) => {
        setSelectedSeats([...selectedSeats, seatNumber]);
    };

    const handleBooking = () => {
        setBookingDetails({ movie: selectedMovie, seats: selectedSeats });
        setShowPopup(true);
    };

    const renderSeat = (seat) => {
        const isBooked = seat.booked;
        const isSelected = selectedSeats.includes(seat.seatNumber);

        return (
            <div
                key={seat.id}
                className={`seat ${isBooked ? 'bg-gray-500 cursor-not-allowed' : isSelected ? 'bg-red-500' : 'bg-green-500 hover:bg-green-600 cursor-pointer'}`}
                onClick={() => handleSeatSelection(seat.seatNumber)}
            >
                <MdOutlineEventSeat />
                {seat.seatNumber}
            </div>
        );
    };

    const PopupWindow = ({ onClose, movie, seats }) => {
        const handlePrint = () => {
            window.print();
        };
    
        return (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="movie bg-gray-800 p-4 rounded">
                        <h2 className="text-2xl font-semibold mb-4">Ticket Details</h2>
                        <p className="mb-2">Movie: {movie.movieName}</p>    
                        <p className="mb-2">Release Year: {movie.releaseDate}</p>
                        <p className="mb-2">Genre: {movie.genre}</p>
                        <p className="mb-2">Duration: {movie.duration}</p>
                        <p className="mb-2">Seats: {seats.join(', ')}</p>
                    </div>
                    <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Print Ticket</button>
                </div>
            </div>
        );
    };    

    return (
        <div className='bg-gray-900 text-white'>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4">Movie Tickets Booking</h1>
                <div className="grid grid-cols-2 gap-4">
                    {movies.map(movie => (
                        <div key={movie._id} className="movie bg-gray-800 p-4 rounded flex">
                            <img src={movie.moviePoster} alt={movie.title} className="mb-2 w-1/2" />
                            <div className='w-1/2 px-20 py-40' >
                                <h2 className="text-4xl font-semibold mb-1">{movie.movieName}</h2>
                                <p className="text-sm mb-2">{movie.movieDescription}</p>
                                <p className="text-sm mb-1">Release Year: {movie.releaseDate}</p>
                                <p className="text-sm mb-1">Genre: {movie.genre}</p>
                                <p className="text-sm mb-1">Duration: {movie.duration}</p>
                                <p className="text-sm mb-1">Genre: {movie.synopsis}</p>
                                <button onClick={() => handleMovieSelection(movie)} className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Select Movie</button>
                            </div>
                        </div>
                    ))}
                </div>
                {showPopup && (
                    <PopupWindow
                        onClose={() => setShowPopup(false)}
                        movie={bookingDetails.movie}
                        seats={bookingDetails.seats}
                    />
                )}
                {selectedMovie && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold">Selected Movie: {selectedMovie.movieName}</h2>
                        <h3 className="text-lg font-semibold mt-4">Select Seats:</h3>
                        <div className="grid grid-cols-12 gap-2">
                            {availableSeatsPerMovie[selectedMovie._id].map(seat => renderSeat(seat))}
                        </div>
                        <button onClick={handleBooking} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Book Now</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingsPage;
