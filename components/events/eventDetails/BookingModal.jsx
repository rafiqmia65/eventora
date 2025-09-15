import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const BookingModal = ({ eventId, session, onClose }) => {
  const [email, setEmail] = useState(session.user.email);
  const [number, setNumber] = useState(""); // phone number
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const userId = session?.user?.id;

  const handleConfirm = async () => {
    if (!email || !number) {
      setMessage("Please fill in both fields");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post("/api/bookings", {
        userEmail: email,
        userId: userId,
        userNumber: number,
        eventId,
      });

      if (res.data.success) {
        setMessage("Booking confirmed!");
        toast.success("Booking confirmed!");
      } else {
        setMessage(res.data.message || "Booking failed");
        toast.error(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setMessage("An error occurred. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Confirm Booking
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
          />
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none"
          />

          {message && (
            <p className="text-sm text-red-500 dark:text-red-400">{message}</p>
          )}

          <div className="flex gap-3 mt-2">
            <button
              onClick={handleConfirm}
              disabled={loading}
              className="flex-1 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition"
            >
              {loading ? "Booking..." : "Confirm"}
            </button>
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg font-semibold hover:bg-gray-400 dark:hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
