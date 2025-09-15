"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

export default function BookingsList() {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.email) {
      const fetchData = async () => {
        try {
          const res = await axios.get("/api/bookings", {
            params: { email: session.user.email },
          });

          if (res.data.success) {
            setBookings(res.data.data);
            setEvents(res.data.events);
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else if (status === "unauthenticated") {
      setLoading(false);
    }
  }, [status, session]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (status === "unauthenticated")
    return (
      <div className="text-center mt-10">
        Please login to view your bookings.
      </div>
    );

  const combined = bookings.map((booking) => {
    const event = events.find((ev) => ev._id === booking.eventId);
    return { ...booking, event };
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {combined.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
        >
          {item.event?.eventImage && (
            <div className="relative">
              <img
                src={item.event.eventImage}
                alt={item.event.eventName}
                className="w-full h-44 object-cover"
              />
              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {item.event?.eventCategory}
              </span>
            </div>
          )}

          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              {item.event?.eventName}
            </h2>
            <p className="text-sm text-gray-500 mb-3">
              📍 {item.event?.eventLocation || "Unknown location"}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Date:</span>{" "}
              {new Date(item.event?.eventDate).toLocaleDateString()}
            </p>
            <p className="text-xs text-gray-500 mt-4 border-t pt-3">
              Booked on:{" "}
              <span className="font-medium">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
