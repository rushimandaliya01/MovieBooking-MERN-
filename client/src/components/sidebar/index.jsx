import React from "react";
import { Link } from "react-router-dom";

const SidebarComponent = () => {
  return (
    <div className="sidebar">
      <h2>Movie Booking App</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/theaters">Theaters</Link>
        </li>
        <li>
          <Link to="/account">My Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;
