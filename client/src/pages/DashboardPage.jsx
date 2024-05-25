import React, { useState } from "react";

const DashboardPage = () => {
  const movieRecommendations = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
      id: 2,
      title: "The Godfather",
      poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg",
      description: "When the menace known as The Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    
    {
      id: 4,
      title: "Forrest Gump",
      poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart."
    }
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8 text-white">
      <h1 className="text-center text-4xl font-bold mb-8">Welcome to Your Movie Booking Dashboard</h1>

      <section className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl mb-4">Movie Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movieRecommendations.map(movie => (
            <div key={movie.id} className="flex flex-col items-center" onClick={() => handleMovieClick(movie)}>
              <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg mb-2 cursor-pointer" />
              <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-400">{movie.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedMovie && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-80 z-50">
          <div className="bg-white p-8 rounded-lg">
            <button className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-600" onClick={() => setSelectedMovie(null)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} alt={selectedMovie.title} className="w-full h-auto rounded-lg mb-4" />
            <p className="text-gray-600">{selectedMovie.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
