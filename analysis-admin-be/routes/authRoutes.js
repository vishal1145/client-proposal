const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const router = express.Router();

// Admin Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, adminId: admin._id, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Admin Logout Route (Handled in Frontend)
router.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

module.exports = router;
