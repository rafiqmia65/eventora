"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../events/EventCard";

const Features = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events/latest"); // latest 6 events
        setEvents(res.data.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-teal-600 dark:text-teal-400">
        Loading events...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400 mb-8">
        Featured Events
      </h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No events found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Features;
