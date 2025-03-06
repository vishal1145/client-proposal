import { NextResponse } from "next/server";
import Razorpay from "razorpay";

if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error("RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined");
}

// Initialize Razorpay with proper error handling
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log(
  "Razorpay Key ID:",
  process.env.RAZORPAY_KEY_ID?.substring(0, 10) + "..."
);

// Add this temporarily to debug (remove before production)
console.log({
  keyId: process.env.RAZORPAY_KEY_ID?.slice(0, 8) + "...",
  hasSecret: !!process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount, name, description } = body;

    // Create order with proper error handling
    const options = {
      amount: Number(amount * 100), // Convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name: name || "Anonymous",
        description: description || "No description provided",
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Payment Error:", error.message);
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
  }
}
