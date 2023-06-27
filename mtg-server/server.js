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

app.listen(PORT, ()=>{
  console.log(`listening on port${PORT}`)
});