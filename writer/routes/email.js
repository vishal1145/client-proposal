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
// import express from "express";
// import nodemailer from "nodemailer";
// import fs from "fs";
// import path from "path";
// import dotenv from "dotenv";
// dotenv.config();
// const router = express.Router();

// router.get("/get-proposal-email", async (req, res) => {
//   const { serviceId } = req.query; // Get service ID from frontend
//   // Read the dynamically generated HTML template
//   const emailTemplatePath = path.join(
//     process.cwd(),
//     `./config/prompts/business-proposal-${serviceId}.html`
//   );
//   const proposalHtml = fs.readFileSync(emailTemplatePath, "utf-8");
//   res.status(200).json({ success: true, data: proposalHtml });
// });

// // Email sending API
// router.post("/send-email", async (req, res) => {
//   try {
//     const { to, serviceId } = req.body; // Get recipient email and service ID from frontend

//     if (!to || !serviceId) {
//       return res.status(400).json({
//         success: false,
//         message: "Recipient email and service ID are required",
//       });
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_APP_PASSWORD,
//       },
//     });

//     // Read the dynamically generated HTML template
//     const emailTemplatePath = path.join(
//       process.cwd(),
//       `./config/prompts/business-proposal-${serviceId}.html`
//     );

//     if (!fs.existsSync(emailTemplatePath)) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Generated proposal not found" });
//     }

//     const emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

//     // Configure email options
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to,
//       subject: "Project Proposal",
//       html: emailTemplate,
    
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
      subject: "Project Proposal",
      html: emailTemplate,
      attachments: [
        {
          filename: "logo.webp",
          path: path.join(process.cwd(), "logo.webp"),
          cid: "logo",
        },
        {
          filename: "bg1.png",
          path: path.join(process.cwd(), "bg1.png"),
          cid: "background",
        },
        {
          filename: "cir-img.jpg",
          path: path.join(process.cwd(), "cir-img.jpg"),
          cid: "profile",
        },
        {
          filename: "circle.png",
          path: path.join(process.cwd(), "circle.png"),
          cid: "decorative",
        },
      ],
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    // Save email record in database
    const emailRecord = new Email({ to, serviceId, status: "sent" });
    await emailRecord.save();

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);

    // Save failed email record
    await Email.create({
      to: req.body.to,
      serviceId: req.body.serviceId,
      status: "failed",
    });

    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Get sent emails
router.get("/sent-emails", async (req, res) => {
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
