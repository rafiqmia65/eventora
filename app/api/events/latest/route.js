// API route to handle fetching latest 6 events
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";
import { eventsModel } from "@/models/events-model";

export async function GET() {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Fetch latest 8 events
    const events = await eventsModel
      .find({})
      .sort({ createdAt: -1 }) // newest first
      .limit(8)
      .lean();

    return NextResponse.json({ success: true, data: events }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
