import { eventsModel } from "@/models/events-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

// API route to handle fetching all   events
export async function GET() {
  try {
    // Establish a connection with the database
    await dbConnect();
    const events = await eventsModel.find({}).lean();

    return NextResponse.json({ success: true, data: events }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// API route to handle creating a new  events ( for admin )
export async function POST(request) {
  try {
    // Establish a connection with the database
    await dbConnect();
    const body = await request.json();

    const event = new eventsModel(body);
    const savedEvent = await event.save();

    return NextResponse.json(
      { success: true, data: savedEvent },
      { status: 201 }
    );
  } catch (error) {
    console.error("Actual error:", error); // <-- logs full error to your server console
    return NextResponse.json(
      {
        success: false,
        message: error?.message || error || "Failed to create event",
      },
      { status: 500 }
    );
  }
}

// API route to handle deleting an events by ID ( for admin )
export async function DELETE(request) {
  try {
    // Establish a connection with the database
    await dbConnect();

    const { id } = await request.json();

    // Validate required ID
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Event ID is required" },
        { status: 404 }
      );
    }

    await eventsModel.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Event deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to Delete events" },
      { status: 500 }
    );
  }
}

// API route to handle updating an expense ( for admin )
export async function PUT(request) {
  try {
    // Establish a connection with the database
    await dbConnect();

    const {
      id,
      eventName,
      eventDescription,
      eventStartDate,
      eventEndDate,
      eventDate,
      maxAttendees,
    } = await request.json();

    // Validate required ID
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Event ID is required" },
        { status: 404 }
      );
    }

    const updatedEvent = await eventsModel.findByIdAndUpdate(
      id,
      {
        eventName,
        eventDescription,
        eventStartDate,
        eventEndDate,
        eventDate,
        maxAttendees,
      },
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, data: updatedEvent },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Failed to update events" },
      { status: 500 }
    );
  }
}
