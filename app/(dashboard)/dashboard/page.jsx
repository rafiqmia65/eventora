"use client";

import React from "react";
import { useSession } from "next-auth/react";

// Dashboard card configuration
const DASHBOARD_CARDS = {
  admin: [
    {
      title: "Manage Users",
      description: "View, edit, or remove users from your platform.",
      bgColor: "bg-teal-100 dark:bg-teal-800",
    },
    {
      title: "Manage Events",
      description: "Create, edit, and approve events submitted by users.",
      bgColor: "bg-teal-100 dark:bg-teal-800",
    },
    {
      title: "Reports",
      description: "View platform analytics, bookings, and revenue reports.",
      bgColor: "bg-teal-100 dark:bg-teal-800",
    },
    {
      title: "Settings",
      description: "Adjust platform-wide settings and preferences.",
      bgColor: "bg-teal-100 dark:bg-teal-800",
    },
  ],
  user: [
    {
      title: "My Events",
      description:
        "View your booked or created events, and manage them easily.",
      bgColor: "bg-yellow-100 dark:bg-yellow-700",
    },
    {
      title: "Profile",
      description: "Update your personal information and account settings.",
      bgColor: "bg-yellow-100 dark:bg-yellow-700",
    },
    {
      title: "Bookings",
      description: "Track all your event bookings and payment status.",
      bgColor: "bg-yellow-100 dark:bg-yellow-700",
    },
    {
      title: "Support",
      description: "Contact support or check FAQs if you have any questions.",
      bgColor: "bg-yellow-100 dark:bg-yellow-700",
    },
  ],
};

const Dashboard = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 dark:text-gray-300">Loading dashboard...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700 dark:text-gray-300">
          You must be logged in to view the dashboard.
        </p>
      </div>
    );
  }

  const role = session.user.role || "user"; // fallback to "user"
  const cards = DASHBOARD_CARDS[role] || [];

  return (
    <div className="p-6 md:p-10 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {role === "admin" ? "Admin" : "User"}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div key={index} className={`${card.bgColor} p-6 rounded-lg shadow`}>
            <h2 className="font-semibold text-xl mb-2">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
