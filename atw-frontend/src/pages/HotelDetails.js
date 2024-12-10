import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelById } from '../services/api';
import './HotelDetails.css';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    const getHotel = async () => {
      const response = await fetchHotelById(id);
      setHotel(response.data);
    };
    getHotel();
  }, [id]);

  if (!hotel) return <p>Loading...</p>;

  return (
    <div className="hotel-details">
      <h1>{hotel.name}</h1>
      <p>{hotel.location}</p>
      <p>Rating: {hotel.rating}</p>
      <p>Price per night: ₹{hotel.pricePerNight}</p>
    </div>
  );
};

export default HotelDetails;
