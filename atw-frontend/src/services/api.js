import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this if your backend is hosted elsewhere

// Fetch all hotels
export const fetchHotels = () => {
  return axios.get(`${API_URL}/hotels`);
};

// Fetch hotel by ID
export const fetchHotelById = (id) => {
  return axios.get(`${API_URL}/hotels/${id}`);
};

// Create a booking
export const createBooking = (bookingData) => {
  return axios.post(`${API_URL}/bookings`, bookingData);
};

// Register user (New function to register user)
export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

// Login user
export const loginUser = (credentials) => {
  return axios.post(`${API_URL}/auth/login`, credentials);
};
