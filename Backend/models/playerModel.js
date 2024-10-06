const mongoose = require('mongoose'); // Import Mongoose

// Create a Schema constructor
const Schema = mongoose.Schema;

// Define the player schema
const playerSchema = new Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  number: {
    type: Number,
    required: true, // Uniform number is required
  },
  position: {
    type: String,
    required: true, // Position is required
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt timestamps

// Create and export the Player model
module.exports = mongoose.model('Player', playerSchema);
