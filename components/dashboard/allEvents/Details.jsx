"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

export default function Details({ eventId }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`/api/events/${eventId}`);
        setEvent(res.data.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch event details");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Loading event details...
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );

  if (!event)
    return (
      <div className="min-h-screen flex items-center justify-center py-10 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Event not found
        </div>
      </div>
    );

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="h-64 w-full relative overflow-hidden">
          <img
            src={event.eventImage || "/placeholder.jpg"}
            alt={event.eventName}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {event.eventName}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {event.eventDescription}
          </p>

          <div className="text-gray-500 dark:text-gray-400 space-y-1 text-sm">
            <p>
              <strong>Category:</strong> {event.eventCategory}
            </p>
            <p>
              <strong>Type:</strong> {event.eventType}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
            <p>
              <strong>Venue:</strong> {event.eventVenue}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(event.eventDate).toLocaleString()}
            </p>
            <p>
              <strong>Attendees:</strong> {event.maxAttendees}
            </p>
            {event.isPaid && (
              <p className="text-teal-600 dark:text-teal-400 font-medium">
                Entry Fee: ${event.eventEntryFee}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
