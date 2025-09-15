"use client";

import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const DashboardWrapper = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.role) {
      if (session.user.role === "admin") {
        setLinks([
          { name: "Dashboard", href: "/dashboard" },
          { name: "Users", href: "/users" },
          { name: "Add Event", href: "/addEvent" },
          { name: "All Events", href: "/allEvents" },
        ]);
      } else if (session.user.role === "user") {
        setLinks([
          { name: "Dashboard", href: "/dashboard" },
          { name: "My Booking Event", href: "/myBookingEvent" },
        ]);
      }
    }
  }, [session, status]);

  if (status === "loading")
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-teal-500 dark:border-yellow-400 mb-6"></div>

        {/* Loading text */}
        <p className="text-xl md:text-2xl font-semibold">
          Loading, please wait...
        </p>
      </div>
    );

  if (status !== "authenticated") return redirect("/login");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex">
      <Sidebar
        links={links}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <MainContent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </MainContent>
    </div>
  );
};

export default DashboardWrapper;
