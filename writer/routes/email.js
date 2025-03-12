import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import Email from "../models/email.js"; // Import Email model
dotenv.config();

const router = express.Router();

// Fetch email proposal template
router.get("/get-proposal-email", async (req, res) => {
  try {
    const { serviceId } = req.query;

    if (!serviceId) {
      return res.status(400).json({
        success: false,
        message: "Service ID is required",
      });
    }

    const emailTemplatePath = path.join(
      process.cwd(),
      `./config/prompts/business-proposal-${serviceId}.html`
    );

    if (!fs.existsSync(emailTemplatePath)) {
      return res
        .status(404)
        .json({ success: false, message: "Template not found" });
    }

    const proposalHtml = fs.readFileSync(emailTemplatePath, "utf-8");

    res.status(200).json({ success: true, data: proposalHtml });
  } catch (error) {
    console.error("Error fetching email template:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to get email template" });
  }
});

// Send email and save details
router.post("/send-email", async (req, res) => {
  try {
    const { to, serviceId, subject } = req.body;

    if (!to || !serviceId) {
      return res.status(400).json({
        success: false,
        message: "Recipient email and service ID are required",
      });
    }

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Fetch email template
    const emailTemplatePath = path.join(
      process.cwd(),
      `./config/prompts/business-proposal-${serviceId}.html`
    );

    if (!fs.existsSync(emailTemplatePath)) {
      return res
        .status(404)
        .json({ success: false, message: "Generated proposal not found" });
    }

    const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      // subject: "Project Proposal",
      subject: subject || "Project Proposal",
      html: emailTemplate,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    // Save email record in database
    const emailRecord = new Email({ to, serviceId, subject, status: "sent" });
    await emailRecord.save();

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Save failed email record
    // Save failed email record
    await Email.create({
      to: req.body.to,
      serviceId: req.body.serviceId,
      subject: req.body.subject || "Project Proposal",
      status: "failed",
    });

    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Get sent emails
router.get("/email-details", async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: emails,
    });
  } catch (error) {
    console.error("Error fetching emails:", error);
    res.status(500).json({ success: false, message: "Failed to fetch emails" });
  }
});

export default router;
