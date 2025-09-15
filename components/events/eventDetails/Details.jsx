"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import BookingModal from "./BookingModal";

const Details = ({ eventId, session }) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

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
      <div className="min-h-screen flex items-center justify-center">
        Loading event details...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error}
      </div>
    );

  if (!event)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Event not found
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="h-64 w-full overflow-hidden relative">
          <img
            src={event.eventImage || "/placeholder.jpg"}
            alt={event.eventName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{event.eventName}</h1>
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

          {/* Book Now button triggers modal */}
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-3 mt-4 rounded-lg text-white font-semibold bg-teal-500 hover:bg-teal-600"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Show modal only when button is clicked */}
      {showModal && (
        <BookingModal
          eventId={event._id}
          session={session}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Details;
