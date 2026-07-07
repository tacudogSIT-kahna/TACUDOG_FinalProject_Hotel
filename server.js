require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware Configuration
app.use(cors());
app.use(express.json());

// MongoDB Database URI String Initialization
const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log('Hotel Management Database Connected Successfully'))
    .catch(err => console.error('MongoDB Connection Error:', err));

// Database Model Schema Configuration Mapping
const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    selectedRoom: { type: String, required: true },
    partySize: { type: Number, required: true },
    reservedRestaurantTable: { type: Boolean, default: false },
    restaurantCoverage: { type: String, default: '' },
    stayDate: { type: String, required: true },       // Serves as the Check-In Date string (YYYY-MM-DD)
    checkOutDate: { type: String, required: true },   // New field for the explicit Check-Out Date string
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

// --- API ENDPOINTS ---

// 1. POST: Process and save a secure booking verification record
app.post('/api/bookings', async (req, res) => {
    try {
        const { selectedRoom, stayDate } = req.body;

        // Conflict check: block reservation if the selected room is already booked for that check-in date
        const existingBooking = await Booking.findOne({ selectedRoom, stayDate });
        if (existingBooking) {
            return res.status(409).send({ 
                message: `The ${selectedRoom} is already reserved for ${stayDate}. Please choose another date or room.` 
            });
        }

        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).send(newBooking);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// 2. GET: Pull down all historical reservation documents for dashboard analytics
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).send(bookings);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

// Launch Server Process Pipeline
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Hotel Management API is running on port ${PORT}`);
});
