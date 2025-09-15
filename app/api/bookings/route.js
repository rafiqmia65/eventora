import { NextResponse } from "next/server";
import { bookingModel } from "@/models/booking-model";
import { eventsModel } from "@/models/events-model";
import { dbConnect } from "@/service/mongo";

export async function POST(req) {
  try {
    await dbConnect();
    const { userEmail, userId, userNumber, eventId } = await req.json();

    console.log("Received booking request:", {
      userEmail,
      userId,
      userNumber,
      eventId,
    });

    // Check if the user has already booked this event
    const existingBooking = await bookingModel.findOne({
      userId,
      eventId,
    });

    if (existingBooking) {
      return NextResponse.json(
        { success: false, message: "You have already booked this event" },
        { status: 400 }
      );
    }

    // Create a new booking
    const booking = await bookingModel.create({
      userEmail,
      userId,
      userNumber,
      eventId,
    });

    console.log("Booking created successfully:", booking);

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Booking failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    await dbConnect();

    // Get email from query params
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Fetch all bookings for the given user email
    const bookings = await bookingModel.find({ userEmail: email }).lean();

    if (bookings.length === 0) {
      return NextResponse.json(
        { success: true, data: [], events: [] },
        { status: 200 }
      );
    }

    // Extract all eventIds from the bookings
    const eventIds = bookings.map((b) => b.eventId);

    // Fetch events by those eventIds from eventsModel
    const events = await eventsModel.find({ _id: { $in: eventIds } }).lean();

    return NextResponse.json(
      { success: true, data: bookings, events },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch bookings/events" },
      { status: 500 }
    );
  }
}
