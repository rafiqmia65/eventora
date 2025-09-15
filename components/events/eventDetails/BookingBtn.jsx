import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

const BookingBtn = ({ eventData }) => {
  const [bookingLoading, setBookingLoading] = useState(false);
  const { data: session } = useSession();

  const handleBooking = async () => {
    if (!eventData || !session?.user) {
      alert("Please log in to book events");
      return;
    }

    // Check if user has a phone number (required by schema)
    if (!session.user.phone) {
      const phoneNumber = prompt(
        "Phone number is required for booking. Please enter your phone number:"
      );
      if (!phoneNumber || phoneNumber.trim() === "") {
        alert("Booking cancelled. Phone number is required.");
        return;
      }
      // You might want to save this to the user's profile
      session.user.phone = phoneNumber;
    }

    setBookingLoading(true);

    try {
      const userData = {
        userId: session.user.id,
        userName: session.user.name,
        userEmail: session.user.email,
        userImg: session.user.image || "",
        userNumber: session.user.phone || "",
      };

      // Prepare complete event data according to your schema
      const eventBookingData = {
        eventId: eventData._id,
        eventType: eventData.eventType,
        eventCategory: eventData.eventCategory,
        eventLocation: eventData.eventLocation,
        eventVenue: eventData.eventVenue,
        eventEntryFee: eventData.eventEntryFee || 0,
      };

      const paymentHistory={

      }

      console.log("Sending booking data:", {
        user: userData,
        event: eventBookingData,
      });

      const res = await axios.post("/api/bookings", {
        user: userData,
        event: eventBookingData,
      });

      if (res.data.success) {
        alert("Booking successful!");
      } else {
        alert(res.data.message || "Booking failed!");
      }
    } catch (err) {
      console.error("Booking error:", err);
      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else if (err.response?.data?.error) {
        alert(`Booking failed: ${err.response.data.error}`);
      } else {
        alert("Booking failed! Please try again.");
      }
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleBooking}
        disabled={bookingLoading || !eventData || !session?.user}
        className={`w-full py-3 mt-4 rounded-lg text-white font-semibold transition-colors ${
          bookingLoading || !eventData || !session?.user
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-teal-500 hover:bg-teal-600"
        }`}
      >
        {!session?.user
          ? "Please login to book"
          : bookingLoading
          ? "Booking..."
          : "Book Now"}
      </button>
    </div>
  );
};

export default BookingBtn;
