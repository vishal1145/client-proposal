const mongoose = require("mongoose");

const PrioritySchema = new mongoose.Schema({
  priority: { type: Number, required: true },
});

module.exports = mongoose.model("Priority", PrioritySchema, "priorities");
