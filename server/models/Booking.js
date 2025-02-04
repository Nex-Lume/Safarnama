const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    dates: String,
    price: String,
    destination: String,
    country: String,
    city: String,
    num_adults: Number,
    num_kids: Number,
    message: String
});

module.exports = mongoose.model('Booking', bookingSchema);
