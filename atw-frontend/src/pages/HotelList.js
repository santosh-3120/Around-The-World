import React, { useState, useEffect } from 'react';
import { fetchHotels } from '../services/api';
import './HotelList.css';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const getHotels = async () => {
      const response = await fetchHotels();
      setHotels(response.data);
    };
    getHotels();
  }, []);

  return (
    <div className="hotel-list">
      <h1>Available Hotels</h1>
      <div className="hotel-cards">
        {hotels.map(hotel => (
          <div key={hotel._id} className="hotel-card">
            <h2>{hotel.name}</h2>
            <p>{hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <p>Price: ₹{hotel.pricePerNight}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
