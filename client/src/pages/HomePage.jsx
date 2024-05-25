import React, { useState, useEffect } from "react";
import pic1 from "../assets/pic1.jpg";
import scroll2 from "../assets/scroll2.jpg";
import scroll3 from "../assets/scroll3.jpg";
import scroll4 from "../assets/scroll4.jpeg";
import scroll5 from "../assets/scroll5.jpeg";
import axios from "axios";
import { Link } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
const MovieHomePage = () => {
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

  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
    {
      url: pic1,
    },
    {
      url: scroll2,
    },
    {
      url: scroll3,
    },
    {
      url: scroll4,
    },
    {
      url: scroll5,
    },
  ];

  return (
    <form className="bg-gray-900">

      <div>
        <SimpleImageSlider
          width={1518}
          height={510}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          onStartSlide={(index, length) => {
            setImageNum(index);
          }}
          autoPlayDelay={3}
        />

      </div>


      <div>
        {/* Featured Movies */}
        <section>

          <h2 className="text-center m-5 text-red-700 text-bold text-7xl underline " style={{ fontFamily: "Times New Roman", fontWeight: 'bold', fontSize: '40px' }}>Movies</h2>

          <div style={{ textAlign: 'center' }}>
            {movies.map((movie) => (
              <div className="movie bg-gray-800 mx-10 p-3 rounded-lg" style={{ display: "inline-block", margin: "0 20px" }} key={movie.id}>
                <img src={movie.moviePoster} alt="Movie" className="w-40 h-60" />
                {/* {movie.moviePoster} */}
                <div />
                <h3 className="text-center pt-2 text-white ">{movie.movieName}</h3>
                <p className="text-center text-white">{movie.description}</p>
                {/* <p className="text-center text-white">Release Year: {movie.releaseDate}</p> */}
                {/* Button for booking */}
                <section className="booking" style={{ padding: "10px 0", textAlign: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    {/* <Link to={`/Bookings?bookingId=${movie.id}`} className="btn btn-primary" style={{ backgroundColor: "#007bff", color: "#fff", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}>Book Now</Link> */}
                    {/* <Link
                      to={{
                        pathname: '/Bookings',
                        search: `?bookingId=${movie._id}`, // Include URL query parameter
                        state: { bookingId: movie._id, movieData: movie } // Pass the movie data as state
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded inline-block mt-2"
                      style={{ backgroundColor: "#007bff", color: "#fff", borderRadius: "5px", border: "none", cursor: "pointer" }}
                    >
                      Book Now
                    </Link> */}
                  </div>
                </section>

              </div>
            ))}

          </div>


          <footer className="footer" style={{ padding: "40px" }}>
            <div className="contact-us" style={{ textAlign: "center" }}>
              <h3 className="text-white">Contact Us</h3>
              <p className="text-white">For any inquiries or assistance, please contact us at:</p>
              <p className="text-white">Email: rmandaliya722@rku.ac.in</p>
              <p className="text-white">Phone: 7874601504</p>
            </div>
          </footer>

        </section>
      </div>
    </form>
  );
};

export default MovieHomePage;
