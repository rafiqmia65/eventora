import EventForm from "@/components/dashboard/addEvent/EventForm";
import React from "react";

const AddEventPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-teal-600 dark:text-teal-400 text-center">
          Add New Event
        </h2>
        <EventForm />
      </div>
    </div>
  );
};

export default AddEventPage;
