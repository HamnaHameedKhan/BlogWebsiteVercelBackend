// api/index.js
const express = require("express");
const connectDB = require("../config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect to DB (do it once)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("../api/userRoute"));
app.use("/api/blogs", require("../api/blogRoute"));

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Serverless Backend Running 🚀" });
});

// Wrap express app for Vercel
const serverless = require("serverless-http");
module.exports = serverless(app);
