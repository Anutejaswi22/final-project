const express = require("express");
const router = express.Router();
const Player = require("../models/playerModel");
const mongoose = require("mongoose");
const axios = require('axios'); // Import Axios for HTTP requests

// GET data from the PokéAPI
router.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;
  
    try {
        // Fetch data from the PokéAPI
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        // Customize the response to include only selected fields
        const customResponse = {
          name: response.data.name, // Pokémon name
          abilities: response.data.abilities, // Pokémon abilities
          base_experience: response.data.base_experience, // Pokémon base experience
          forms: response.data.forms, // Pokémon forms
        };
    
        // Send the customized response as JSON
        res.status(200).json(customResponse);
      } catch (error) {
        // Handle errors if the API request fails
        res.status(500).json({ error: "Failed to fetch data from PokéAPI" });
      }
    });

// POST a new player
router.post("/", async (req, res) => {
  const { name, number, position } = req.body;
  
  try {
    const player = await Player.create({ name, number, position });
    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET all players
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET a single player by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  const player = await Player.findById(id);
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  res.status(200).json(player);
});

// PATCH a single player's information
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  const player = await Player.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  res.status(200).json(player);
});

// DELETE a single player
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  const player = await Player.findOneAndDelete({ _id: id });
  if (!player) {
    return res.status(404).json({ error: "Player does not exist." });
  }

  res.status(200).json(player);
});



module.exports = router;
