import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Must be an authenticated sender
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_USER, 
      replyTo: email, 
      text: `You received a new message from ${fullName} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
