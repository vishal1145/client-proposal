import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    // Verify signature
    const sign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment signature",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Payment verification failed",
      },
      { status: 500 }
    );
  }
}
