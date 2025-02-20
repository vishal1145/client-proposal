import connectDB from "@/lib/DB";
import Service from "@/app/models/service";
import { NextResponse, NextRequest } from "next/server";

// GET All Services
export async function GET() {
  await connectDB();
  try {
    const services = await Service.find({});
    return NextResponse.json(
      { success: true, data: services },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "An unknown error occurred" },
      { status: 400 }
    );
  }
}

// POST a New Service
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    const service = await Service.create(body);
    return NextResponse.json({ success: true, data: service }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "An unknown error occurred" },
      { status: 400 }
    );
  }
}
