import mongoose, { Schema } from "mongoose";

const eventsSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventDescription: {
      type: String,
      required: true,
      trim: true,
    },
    eventImage: {
      type: String,
      required: false,
      trim: true,
    },
    eventType: {
      type: String,
      enum: ["online", "offline", "hybrid"],
      default: "offline",
    },
    eventCategory: {
      type: String,
      required: true,
      trim: true,
    },
    eventLocation: {
      type: String,
      required: true,
      trim: true,
    },
    eventVenue: {
      type: String,
      required: true,
      trim: true,
    },
    eventRegStartDate: {
      type: Date,
      required: true,
    },
    eventRegEndDate: {
      type: Date,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    maxAttendees: {
      type: Number,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    eventEntryFee: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const eventsModel =
  mongoose.models.events ?? mongoose.model("events", eventsSchema);
