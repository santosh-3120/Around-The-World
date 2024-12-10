const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const hotelRoutes = require('./routes/hotels');
const bookingRoutes = require('./routes/bookings');
const flightRoutes = require('./routes/flights');
const attractionRoutes = require('./routes/attractions');
const reviewRoutes = require('./routes/reviews');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AroundTheWorld', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB - Database "AroundTheWorld" is ready to use');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Integrate Routes
app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/attractions', attractionRoutes);
app.use('/api/reviews', reviewRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
