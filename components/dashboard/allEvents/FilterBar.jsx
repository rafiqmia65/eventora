"use client";
import { Search } from "lucide-react";

const eventCategories = [
  "Conference",
  "Workshop",
  "Webinar",
  "Seminar",
  "Meetup",
];

export default function FilterBar({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
      <div className="relative w-full md:w-1/2">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search events by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                     shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:w-1/3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                   shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
      >
        <option value="">All Categories</option>
        {eventCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
