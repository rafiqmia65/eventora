"use client";
import { useState } from "react";
import {
  MapPin,
  Calendar,
  DollarSign,
  Eye,
  Edit,
  Trash2,
  X,
} from "lucide-react";
import EventUpdateModal from "./EventUpdateModal";
import Link from "next/link";

export default function EventCard({ event, handleDelete }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden flex flex-col hover:shadow-2xl transition duration-300">
        <img
          src={event.eventImage}
          alt={event.eventName}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 flex flex-col gap-3 flex-grow">
          <h2 className="text-2xl font-semibold text-teal-600 dark:text-teal-400">
            {event.eventName}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {event.eventDescription}
          </p>

          <div className="text-gray-700 dark:text-gray-300 text-sm space-y-1 mt-2">
            <p className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> {event.eventLocation}
            </p>
            <p className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {event.eventRegStartDate &&
              !isNaN(new Date(event.eventRegStartDate))
                ? new Date(event.eventRegStartDate).toLocaleDateString()
                : "Invalid start date"}{" "}
              -{" "}
              {event.eventRegEndDate && !isNaN(new Date(event.eventRegEndDate))
                ? new Date(event.eventRegEndDate).toLocaleDateString()
                : "Invalid end date"}
            </p>
            <p className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />{" "}
              {event.isPaid ? `${event.eventEntryFee}৳` : "Free"}
            </p>
          </div>

          <div className="mt-auto flex flex-wrap justify-between gap-2 pt-4">
            <Link
              href={`/allEvents/${event._id}`}
              className="flex items-center gap-1 px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            >
              <Eye className="w-4 h-4" /> See More
            </Link>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1 px-4 py-2 text-sm bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
            >
              <Edit className="w-4 h-4" /> Update
            </button>

            <button
              onClick={() => handleDelete(event._id)}
              className="flex items-center gap-1 px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              <Trash2 className="w-4 h-4" /> Delete
            </button>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {modalOpen && (
        <EventUpdateModal event={event} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
