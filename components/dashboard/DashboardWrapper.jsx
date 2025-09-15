"use client";

import { useState, useEffect } from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";
import { useSession } from "next-auth/react";

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

  if (status === "loading") return null; // or a loading spinner

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
