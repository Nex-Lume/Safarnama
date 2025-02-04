const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact form data
router.post('/', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ success: true, message: 'Contact form data saved successfully!' });
    } catch (error) {
        console.error("Error:", error); // For debugging
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
});

module.exports = router;
