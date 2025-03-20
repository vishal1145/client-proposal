const express = require("express");
const Priority = require("../models/Priority");

const router = express.Router();

// GET API for Priority
router.get("/priority", async (req, res) => {
  try {
    const priorityData = await Priority.findOne();
    if (!priorityData) {
      return res.status(404).json({ message: "No priority data found" });
    }
    res.json(priorityData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT API for Priority
router.put("/priority", async (req, res) => {
  const { priority } = req.body;

  if (typeof priority !== "number") {
    return res.status(400).json({ message: "Priority must be a number" });
  }

  try {
    let priorityData = await Priority.findOne();

    if (!priorityData) {
      priorityData = new Priority({ priority });
    } else {
      priorityData.priority = priority;
    }

    await priorityData.save();
    res.json({ message: "Priority updated successfully", data: priorityData });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
