import connectDB from "@/database";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  try {
    await connectDB();
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "An error occurred while adding the blog.",
    });
  }
};
