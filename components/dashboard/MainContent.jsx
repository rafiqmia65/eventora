"use client";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const MainContent = ({ children, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="flex-1 md:ml-64 min-h-screen p-6">
      {/* Mobile Hamburger */}
      <div className="flex items-center justify-between mb-6 md:hidden sticky top-0 bg-gray-50 dark:bg-gray-900 z-40 p-2 rounded shadow">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-3 py-2 rounded-md bg-teal-500 dark:bg-yellow-400 text-white dark:text-gray-900"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ModeToggle />
      </div>

      {/* Children */}
      {children}
    </div>
  );
};

export default MainContent;
