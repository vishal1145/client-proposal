import { NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    const headersList = headers();
    const token = (await headersList).get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 401 }
      );
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "your-secret-key"
      );
      return NextResponse.json(
        { success: true, user: decoded },
        { status: 200 }
      );
    } catch (error) {
      console.error("Token validation error:", error); 
      return NextResponse.json(
        { success: false, message: "Invalid token" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Token validation error:", error); 
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
