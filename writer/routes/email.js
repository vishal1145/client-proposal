// import express from "express";
// import nodemailer from "nodemailer";
// import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";

// dotenv.config();
// const router = express.Router();

// // Email sending API
// router.post("/send-email", async (req, res) => {
//   try {
//     const { to } = req.body; // Get recipient email from frontend

//     if (!to) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Recipient email is required" });
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // Read the HTML template
//     const emailTemplatePath = path.join(process.cwd(), "email-template.html");
//     const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

//     // Configure email options
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to,
//       subject: "Project Proposal",
//       html: emailTemplate,
//       attachments: [
//         {
//           filename: "logo.webp",
//           path: path.join(process.cwd(), "logo.webp"),
//           cid: "logo",
//         },
//         {
//           filename: "bg1.png",
//           path: path.join(process.cwd(), "bg1.png"),
//           cid: "background",
//         },
//         {
//           filename: "cir-img.jpg",
//           path: path.join(process.cwd(), "cir-img.jpg"),
//           cid: "profile",
//         },
//         {
//           filename: "circle.png",
//           path: path.join(process.cwd(), "circle.png"),
//           cid: "decorative",
//         },
//       ],
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent:", info.messageId);
//     res
//       .status(200)
//       .json({ success: true, message: "Email sent successfully!" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ success: false, message: "Failed to send email" });
//   }
// });

// export default router;
import express from "express";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

router.get("/get-proposal-email", async (req, res) => {
  const { serviceId } = req.query; // Get service ID from frontend
  // Read the dynamically generated HTML template
  const emailTemplatePath = path.join(
    process.cwd(),
    `./config/prompts/business-proposal-${serviceId}.html`
  );  
  const proposalHtml = fs.readFileSync(emailTemplatePath, "utf-8");
  res.status(200).json({ success: true, data: proposalHtml });
});

// Email sending API
router.post("/send-email", async (req, res) => {
  try {
    const { to, serviceId } = req.body; // Get recipient email and service ID from frontend

    if (!to || !serviceId) {
      return res.status(400).json({
        success: false,
        message: "Recipient email and service ID are required",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Read the dynamically generated HTML template
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

    // Configure email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to,
      subject: "Project Proposal",
      html: emailTemplate,
    
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

export default router;

