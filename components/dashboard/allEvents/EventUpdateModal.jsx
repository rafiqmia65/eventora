"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";

const eventCategories = [
  "Conference",
  "Workshop",
  "Webinar",
  "Seminar",
  "Meetup",
];

const EventUpdateModal = ({ event, onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      eventName: "",
      eventDescription: "",
      eventImage: "",
      eventType: "offline",
      eventCategory: "",
      eventLocation: "",
      eventVenue: "",
      eventRegStartDate: "",
      eventRegEndDate: "",
      eventDate: "",
      maxAttendees: 0,
      isPaid: false,
      eventEntryFee: 0,
    },
  });

  const isPaid = watch("isPaid");

  // Pre-populate form with existing event data
  useEffect(() => {
    if (event) {
      reset({
        eventName: event.eventName || "",
        eventDescription: event.eventDescription || "",
        eventImage: event.eventImage || "",
        eventType: event.eventType || "offline",
        eventCategory: event.eventCategory || "",
        eventLocation: event.eventLocation || "",
        eventVenue: event.eventVenue || "",
        eventRegStartDate: event.eventRegStartDate
          ? new Date(event.eventRegStartDate).toISOString().split("T")[0]
          : "",
        eventRegEndDate: event.eventRegEndDate
          ? new Date(event.eventRegEndDate).toISOString().split("T")[0]
          : "",
        eventDate: event.eventDate
          ? new Date(event.eventDate).toISOString().split("T")[0]
          : "",
        maxAttendees: event.maxAttendees || 0,
        isPaid: event.isPaid || false,
        eventEntryFee: event.eventEntryFee || 0,
      });
    }
  }, [event, reset]);

  const onSubmit = async (data) => {
    try {
      // Update event by ID
      await axios.put(`/api/events/${event._id}`, data);
      toast.success("Event updated successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 overflow-auto p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-3xl p-6 md:p-10 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 z-10 bg-white dark:bg-gray-700 rounded-full p-1"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Update Event
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Event Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Event Details
            </h3>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Event Name
              </label>
              <input
                type="text"
                {...register("eventName", {
                  required: "Event Name is required",
                })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {errors.eventName && (
                <p className="text-red-500 text-sm">
                  {errors.eventName.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Event Description
              </label>
              <textarea
                {...register("eventDescription", {
                  required: "Description is required",
                })}
                rows={4}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {errors.eventDescription && (
                <p className="text-red-500 text-sm">
                  {errors.eventDescription.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Event Image URL
              </label>
              <input
                type="text"
                {...register("eventImage")}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Event Type
              </label>
              <select
                {...register("eventType")}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Category & Location */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Category & Location
            </h3>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Category
              </label>
              <select
                {...register("eventCategory", {
                  required: "Category is required",
                })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="">Select Category</option>
                {eventCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.eventCategory && (
                <p className="text-red-500 text-sm">
                  {errors.eventCategory.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                {...register("eventLocation", {
                  required: "Location is required",
                })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {errors.eventLocation && (
                <p className="text-red-500 text-sm">
                  {errors.eventLocation.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Venue
              </label>
              <input
                type="text"
                {...register("eventVenue", { required: "Venue is required" })}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              {errors.eventVenue && (
                <p className="text-red-500 text-sm">
                  {errors.eventVenue.message}
                </p>
              )}
            </div>
          </div>

          {/* Dates & Attendees */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
              Dates & Attendees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-1">
                  Registration Start Date
                </label>
                <input
                  type="date"
                  {...register("eventRegStartDate", {
                    required: "Start date required",
                  })}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.eventRegStartDate && (
                  <p className="text-red-500 text-sm">
                    {errors.eventRegStartDate.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-1">
                  Registration End Date
                </label>
                <input
                  type="date"
                  {...register("eventRegEndDate", {
                    required: "End date required",
                  })}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.eventRegEndDate && (
                  <p className="text-red-500 text-sm">
                    {errors.eventRegEndDate.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  {...register("eventDate", {
                    required: "Event date required",
                  })}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                {errors.eventDate && (
                  <p className="text-red-500 text-sm">
                    {errors.eventDate.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-gray-600 dark:text-gray-300 mb-1">
                Max Attendees
              </label>
              <input
                type="number"
                {...register("maxAttendees")}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
          </div>

          {/* Paid Event */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("isPaid")}
                className="w-5 h-5 accent-teal-500"
              />
              <label className="text-gray-700 dark:text-gray-300 font-medium">
                Is Paid Event?
              </label>
            </div>
            {isPaid && (
              <div>
                <label className="block text-gray-600 dark:text-gray-300 mb-1">
                  Entry Fee
                </label>
                <input
                  type="number"
                  {...register("eventEntryFee", { min: 0 })}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Updating..." : "Update Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventUpdateModal;
