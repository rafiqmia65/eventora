"use client";

import React from "react";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col">
      {/* Event Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={event.eventImage || "/placeholder.jpg"}
          alt={event.eventName}
          className="w-full h-full object-cover"
        />
        {/* Optional overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Event Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-2">
            {event.eventName}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm line-clamp-3">
            {event.eventDescription}
          </p>

          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>
              <strong>Category:</strong> {event.eventCategory}
            </p>
            <p>
              <strong>Location:</strong> {event.eventLocation}
            </p>
            <p>
              <strong>Type:</strong> {event.eventType}
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

        {/* See Details Button */}
        <Link
          href={`/events/${event._id}`}
          className="mt-4 w-full text-center py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
