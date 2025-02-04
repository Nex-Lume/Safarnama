const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST route to save booking
router.post('/', async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        res.status(201).json({ success: true, message: 'Booking saved successfully!' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error', error });
    }
});


module.exports = router;
