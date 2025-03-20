const express = require("express");
const Prompt = require("../models/Prompt");

const router = express.Router();

// GET API for Prompts
router.get("/prompt", async (req, res) => {
  try {
    const promptData = await Prompt.findOne();
    if (!promptData) {
      return res.status(404).json({ message: "No prompt data found" });
    }
    res.json(promptData);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// PUT API for Prompts
router.put("/prompt", async (req, res) => {
  const { prompt } = req.body;

  if (typeof prompt !== "string") {
    return res.status(400).json({ message: "Prompt must be a string" });
  }

  try {
    let promptData = await Prompt.findOne();

    if (!promptData) {
      promptData = new Prompt({ prompt });
    } else {
      promptData.prompt = prompt;
    }

    await promptData.save();
    res.json({ message: "Prompt updated successfully", data: promptData });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
