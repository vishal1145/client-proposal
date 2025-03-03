import { NextResponse } from "next/server";
import connectDB from "@/lib/DB";
import User from "@/app/models/User";
import jwt from "jsonwebtoken";

// This is the actual route handler for POST requests in Next.js App Router.
export async function POST(request: Request) {
  try {
    await connectDB();
    const { name, email, password } = await request.json();

    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // Create new user
    const user = await User.create({
      name,
      email,
      password, // Ideally, hash this before saving (bcrypt recommended)
    });

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" }
    );

    // Set cookie in response
    const response = NextResponse.json(
      {
        success: true,
        message: "User created successfully",
        user: {
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { success: false, message: "Error creating user" },
      { status: 500 }
    );
  }
}
