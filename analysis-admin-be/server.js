require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/review");
const priorityRoutes = require("./routes/priority");
const promptRoutes = require("./routes/prompt");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/settings", priorityRoutes);
app.use("/api/settings", promptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
