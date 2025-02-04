const mongoose = require('mongoose');

// Define the Contact Schema
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
}, { timestamps: true });

// Create and export the Contact model
const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;
