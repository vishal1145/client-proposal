import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      description,
    } = await req.json();

    if (
      !fullName ||
      !email ||
      !phone ||
      !company ||
      !projectType ||
      !budget ||
      !timeline ||
      !description
    ) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password (not regular password)
      },
    });

    // Create the email body with all form data
    const emailBody = `
      <h2>New Quote Request</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Project Description:</strong><br>${description}</p>
    `;

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`, // Show user's name as sender
      to: process.env.EMAIL_USER, // Your email to receive this request
      replyTo: email, // So you can reply directly to the sender
      subject: `New Quote Request from ${fullName}`, // Email subject
      html: emailBody, // HTML body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Quote request sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
