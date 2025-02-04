require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// CORS Configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://luminous-valkyrie-e8ac18.netlify.app"); // Allow frontend
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

// Import Routes
const bookingRoute = require("./routes/bookingRoutes");
const contactRoute = require("./routes/contact");

// Use Routes
app.use("/api/booking", bookingRoute);
app.use("/api/contact", contactRoute);

// Root Route for Testing
app.get("/", (req, res) => {
  res.send("✅ API is running...");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
