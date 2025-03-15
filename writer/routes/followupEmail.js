// import express from "express";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import followupEmailTemplate from "../config/templates/followupEmail.js";

// dotenv.config();

// const router = express.Router();

// // Send follow-up email
// router.post("/followup-email", async (req, res) => {
//   try {
//     const { to, serviceId } = req.body;

//     if (!to || !serviceId) {
//       return res.status(400).json({
//         success: false,
//         message: "Recipient email and service ID are required",
//       });
//     }

//     // Email transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to,
//       subject: "Follow-up on Your Inquiry",
//       html: followupEmailTemplate,
//     };

//     // Send email
//     await transporter.sendMail(mailOptions);

//     res
//       .status(200)
//       .json({ success: true, message: "Follow-up email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending follow-up email:", error);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to send follow-up email" });
//   }
// });

// export default router;



import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import FollowupEmail from "../models/followupEmail.js"; // Import Follow-up Email Model
import generateFollowupEmailTemplate from "../config/templates/followupEmail.js";

dotenv.config();

const router = express.Router();

// Send Follow-up Email & Save in Database
router.post("/followup-email", async (req, res) => {
  try {
    const { to, serviceId, subject, body } = req.body;

    if (!to || !serviceId || !subject || !body) {
      return res.status(400).json({
        success: false,
        message:
          "Recipient email, service ID, subject, and email body are required",
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

const emailBody = generateFollowupEmailTemplate(req.body.body);
// Email options
const mailOptions = {
  from: process.env.GMAIL_USER,
  to,
  subject,
  html: emailBody,
};

    // Email options
    // const mailOptions = {
    //   from: process.env.GMAIL_USER,
    //   to,
    //   subject,
    //   html: body,
    // };



    // Send email
    await transporter.sendMail(mailOptions);

    // Save follow-up email record in the database
    const followupRecord = new FollowupEmail({
      to,
      serviceId,
      subject,
      body,
      status: "sent",
    });
    await followupRecord.save();

    res
      .status(200)
      .json({ success: true, message: "Follow-up email sent successfully!" });
  } catch (error) {
    console.error("Error sending follow-up email:", error);

    // Save failed follow-up email record in the database
    await FollowupEmail.create({
      to: req.body.to,
      serviceId: req.body.serviceId,
      subject: req.body.subject || "Follow-up Email",
      body: req.body.body || "No body provided",
      status: "failed",
    });

    res
      .status(500)
      .json({ success: false, message: "Failed to send follow-up email" });
  }
});

// Get all Follow-up Emails
router.get("/followup-details", async (req, res) => {
  try {
    const followupEmails = await FollowupEmail.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: followupEmails,
    });
  } catch (error) {
    console.error("Error fetching follow-up emails:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch follow-up emails" });
  }
});

export default router;

