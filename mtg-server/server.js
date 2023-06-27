require("dotenv").config()
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8008

// Middleware arrangement

app.use(cors());
