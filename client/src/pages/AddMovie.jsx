import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const AddMovie = () => {
    const [formData, setFormData] = useState({
        movieName: '',
        moviePoster: '',
        releaseDate: '',
        director: '',
        genre: '',
        duration: '',
        synopsis: '',
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/api/v1/movie/add',
                formData
            );
            console.log(response.data);
            toast.success('Movie Successfully Added'); // Display success toast notification
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container bg-gray-900">
            <ToastContainer />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card login-card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4 text-sky-600 text-5xl">
                                Add Movie
                            </h2>
                            <form onSubmit={handleSubmit} method="post">
                                {/* Movie Name */}
                                <div className="form-group text-white">
                                    <label htmlFor="movieName">Movie Name</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="text"
                                        name="movieName"
                                        id="movieName"
                                        placeholder="Enter movie name"
                                        value={formData.movieName}
                                    />
                                </div>
                                {/* Movie Poster URL */}
                                <div className="form-group text-white">
                                    <label htmlFor="moviePoster">
                                        Movie Poster URL
                                    </label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="text"
                                        name="moviePoster"
                                        id="moviePoster"
                                        placeholder="Enter movie poster URL"
                                        value={formData.moviePoster}
                                    />
                                    {formData.moviePoster && (
                                        <img
                                            src={formData.moviePoster}
                                            alt="Movie poster"
                                            className="mt-4 w-60"
                                        />
                                    )}
                                </div>
                                {/* Release Date */}
                                <div className="form-group text-white">
                                    <label htmlFor="releaseDate">
                                        Release Date
                                    </label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="date"
                                        name="releaseDate"
                                        id="releaseDate"
                                        value={formData.releaseDate}
                                    />
                                </div>
                                {/* Director */}
                                <div className="form-group text-white">
                                    <label htmlFor="director">Director</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="text"
                                        name="director"
                                        id="director"
                                        placeholder="Enter director's name"
                                        value={formData.director}
                                    />
                                </div>
                                {/* Genre */}
                                <div className="form-group text-white">
                                    <label htmlFor="genre">Genre</label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="text"
                                        name="genre"
                                        id="genre"
                                        placeholder="Enter movie genre"
                                        value={formData.genre}
                                    />
                                </div>
                                {/* Duration */}
                                <div className="form-group text-white">
                                    <label htmlFor="duration">
                                        Duration (minutes)
                                    </label>
                                    <input
                                        className="form-control"
                                        onChange={handleChange}
                                        type="number"
                                        name="duration"
                                        id="duration"
                                        placeholder="Enter movie duration in minutes"
                                        value={formData.duration}
                                    />
                                </div>
                                {/* Synopsis */}
                                <div className="form-group text-white">
                                    <label htmlFor="synopsis">Synopsis</label>
                                    <textarea
                                        className="form-control"
                                        onChange={handleChange}
                                        name="synopsis"
                                        id="synopsis"
                                        rows="3"
                                        placeholder="Enter movie synopsis"
                                        value={formData.synopsis}
                                    ></textarea>
                                </div>
                                {/* Submit Button */}
                                <div className="form-group flex justify-center">
                                    <button
                                        className="btn bg-blue-500 text-white w-100 hover:bg-blue-700"
                                        type="submit"
                                    >
                                        Add Movie
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMovie;
