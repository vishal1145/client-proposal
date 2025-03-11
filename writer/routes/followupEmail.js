import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Hardcoded follow-up email template
const followupEmailTemplate = `
  <html>
  <head>
    <title>Follow-up on Your Inquiry</title>
  </head>
  <body>
    <p>Dear Customer,</p>
    <p>We are following up regarding your recent inquiry.</p>
    <p>Please let us know if you need any further information.</p>
    <p>Best regards,</p>
    <p>Algofolks</p>
  </body>
  </html>
`;

// Send follow-up email
router.post("/followup-email", async (req, res) => {
  try {
    const { to, serviceId } = req.body;

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

    // Email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject: "Follow-up on Your Inquiry",
      html: followupEmailTemplate,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Follow-up email sent successfully!" });
  } catch (error) {
    console.error("Error sending follow-up email:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to send follow-up email" });
  }
});

export default router;
