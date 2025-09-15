import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    // user: {
    //   userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "users",
    //     required: true,
    //   },
    //   userName: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //   },
    //   userImg: {
    //     type: String,
    //     trim: true,
    //   },
    //   userEmail: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //     lowercase: true,
    //   },
    //   userNumber: {
    //     type: String,
    //     required: true,
    //     trim: true,
    //   },
    // },
    // event: {
    //   eventId: {
    //     type: Schema.Types.ObjectId,
    //     ref: "events",
    //     required: true,
    //   },
    //   eventType: {
    //     type: String,
    //     enum: ["online", "offline", "hybrid"],
    //   },
    //   eventCategory: {
    //     type: String,
    //     trim: true,
    //   },
    //   eventLocation: {
    //     type: String,
    //     trim: true,
    //   },
    //   eventVenue: {
    //     type: String,
    //     trim: true,
    //   },
    //   eventEntryFee: {
    //     type: Number,
    //     default: 0,
    //   },
    // },
    // paymentHistory: {
    //   paymentMethod: {
    //     type: String,
    //     enum: ["card", "paypal", "bank_transfer", "cash", "other"],
    //   },
    //   paymentAmount: {
    //     type: Number,
    //     required: true,
    //   },
    //   paymentId: {
    //     type: String,
    //     trim: true,
    //   },
    // },
    // registrationDate: {
    //   type: Date,
    //   default: Date.now,
    // },
    // status: {
    //   type: String,
    //   enum: ["pending", "paid", "cancelled", "refunded"],
    //   default: "pending",
    // },
    userNumber: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    userId: {
      type: String,
      ref: "users",
      required: true,
    },
    eventId: {
      type: String,
      ref: "events",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const bookingModel =
  mongoose.models.bookings ?? mongoose.model("bookings", bookingSchema);
