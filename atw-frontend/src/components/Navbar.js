import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ATW</Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/hotels">Hotels</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/flights">Flights</Link>
          <Link to="/attractions">Attractions</Link>
          
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
