const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// POST: Add a new review (Default status is "pending")
router.post("/", async (req, res) => {
  try {
    const { place, companyname, review, percentage } = req.body;

    if (!place || !companyname || !review || percentage === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newReview = new Review({
      place,
      companyname,
      review,
      percentage,
      approval_status: null,
    });

    await newReview.save();
    res.status(201).json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT: Update review status (Accept or Reject)
router.put("/:id/approval", async (req, res) => {
  try {
    const { approval_status } = req.body;

    if (!["approved", "rejected"].includes(approval_status)) {
      return res.status(400).json({ error: "Invalid approval status value" });
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      { approval_status },
      { new: true } // Returns the updated document
    );

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res
      .status(200)
      .json({
        message: `Review ${approval_status} successfully`,
        review: updatedReview,
      });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET: Fetch all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdate: -1 });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
