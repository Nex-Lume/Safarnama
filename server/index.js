require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use(cors(
  {
        origin: "https://luminous-valkyrie-e8ac18.netlify.app", // Replace with your frontend URL
    methods: ["POST","GET"],
    credentials: true
  }
));

// Import routes
const bookingRoute = require('./routes/bookingRoutes');
const contactRoute = require('./routes/contact'); // Ensure filename matches

// Use routes
app.use('/api/booking', bookingRoute);
app.use('/api/contact', contactRoute);

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Root route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
