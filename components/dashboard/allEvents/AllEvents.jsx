"use client";

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import FilterBar from "./FilterBar";
import EventCard from "./EventCard";
import Pagination from "./Pagination";

export default function AllEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get("/api/events");
        if (res.data?.success && Array.isArray(res.data.data)) {
          setEvents(res.data.data);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.error(err);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    try {
      const res = await axios.delete("/api/events", {
        data: { id },
      });
      if (res.data?.success) {
        alert("Event deleted successfully");
        setEvents((prev) => prev.filter((e) => e._id !== id));
      } else {
        alert(res.data?.message || "Failed to delete event");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting event");
    }
  };

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchSearch = e.eventName
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category ? e.eventCategory === category : true;
      return matchSearch && matchCategory;
    });
  }, [events, search, category]);

  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading events...</p>;

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-teal-600 dark:text-teal-400">
        All Events
      </h1>

      <FilterBar
        search={search}
        setSearch={(val) => {
          setSearch(val);
          setCurrentPage(1);
        }}
        category={category}
        setCategory={(val) => {
          setCategory(val);
          setCurrentPage(1);
        }}
      />

      {paginatedEvents.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {paginatedEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
