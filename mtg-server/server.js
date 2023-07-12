// require("dotenv").config()
import dotenv from "dotenv/config"
import express from "express";
import pkg from "cors"

const cors = pkg

// const express = require("express");
// const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8008

// Middleware arrangement

app.use(cors());

app.get("/about", (req,res) => {
  console.log("i am here")
  const message = "connection successful"
  res.send(message)
})

app.get('/random', async (req, res) => {
  try {
    const response = await axios.get('https://api.scryfall.com/cards/random');
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/search/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const response = await axios.get(`https://api.scryfall.com/cards/search?q=${name}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, ()=>{
  console.log(`listening on port${PORT}`)
});