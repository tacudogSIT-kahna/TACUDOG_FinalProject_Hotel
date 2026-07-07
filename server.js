require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI; 

mongoose.connect(mongoURI)
    .then(() => console.log('Hotel Management Database Connected Successfully'))
    .catch(err => console.error('MongoDB Connection Error:', err));

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    selectedRoom: { type: String, required: true },
    partySize: { type: Number, required: true },
    reservedRestaurantTable: { type: Boolean, default: false },
    restaurantCoverage: { type: String, default: '' },
    stayDate: { type: String, required: true },
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', bookingSchema);

app.post('/api/bookings', async (req, res) => {
    try {
        const { selectedRoom, stayDate } = req.body;

        // Prevent double booking for the same room on the same date
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

app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.status(200).send(bookings);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Hotel Management API is running on port ${PORT}`);
});
