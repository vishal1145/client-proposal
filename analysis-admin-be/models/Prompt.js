const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
  prompt: { type: String, required: true },
});

module.exports = mongoose.model("Prompt", PromptSchema, "prompts");
