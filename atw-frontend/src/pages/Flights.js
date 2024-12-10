import React from 'react';
import './Flights.css'; // For custom styles

const Flights = () => {
  return (
    <div className="flights-container">
      <div className="flights-content">
        <h1>Find the Best Flights</h1>
        <p>Book flights to your favorite destinations with great deals.</p>
        <button className="search-flights-btn">Search Flights</button>
      </div>
    </div>
  );
};

export default Flights;
