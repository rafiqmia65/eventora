"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "@/components/events/EventCard";

const eventCategories = [
  "Conference",
  "Workshop",
  "Webinar",
  "Seminar",
  "Meetup",
];

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events");
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

  // Filter by search term and category
  useEffect(() => {
    let filtered = events;

    if (selectedCategory) {
      filtered = filtered.filter(
        (event) =>
          event.eventCategory?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredEvents(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, events]);

  // Pagination
  const indexOfLast = currentPage * eventsPerPage;
  const indexOfFirst = indexOfLast - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* 📝 Sidebar */}
        <div className="md:w-1/4 w-full md:sticky md:top-24 h-fit bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-6">
          <h2 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
            Filter Events
          </h2>

          {/* Search Box */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 dark:text-gray-200 font-medium">
              Search by Name
            </label>
            <input
              type="text"
              placeholder="Type event name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            />
          </div>

          {/* Category Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 dark:text-gray-200 font-medium">
              Select Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            >
              <option value="">All Categories</option>
              {eventCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 📋 Events + Pagination */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-8 text-center md:text-left">
            All Events
          </h1>

          {filteredEvents.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No events found.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentEvents.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>

              {/* 📑 Pagination */}
              <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 disabled:opacity-50"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === i + 1
                        ? "bg-teal-500 text-white"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md bg-gray-300 dark:bg-gray-700 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
