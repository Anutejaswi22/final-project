const express = require('express');
const mongoose = require('mongoose');
const playerRoutes = require('./routes/players'); // Import player routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Use the player routes
app.use("/api/players", playerRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect('mongodb://localhost:27017/Packers', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
