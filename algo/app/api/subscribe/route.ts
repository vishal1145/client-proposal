import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/DB";
import Subscriber from "@/app/models/subscriber";

 // Ensure DB connection

export async function POST(req:NextRequest) {
  try {
    connectDB();
    const { email } = await req.json();

    // Validate email input
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if the email is already subscribed
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json(
        { success: false, message: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Save new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return NextResponse.json(
      { success: true, message: "Subscription successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
