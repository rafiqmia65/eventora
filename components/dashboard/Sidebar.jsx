"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { X, Home } from "lucide-react";
import Logout from "../auth/Logout";

const Sidebar = ({ links, sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 z-50`}
    >
      <div className="sticky top-0 flex flex-col h-full justify-between p-6">
        <div className="relative">
          {/* Close button for mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute right-0 top-0 md:hidden px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 z-50"
          >
            <X size={20} />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Eventora
          </h2>

          {/* Home button */}
          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-2 px-4 py-2 mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
          >
            <Home className="text-teal-500" size={20} />
            Home
          </Link>

          {/* Links */}
          <nav className="flex flex-col gap-4 mt-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-teal-500 text-white dark:bg-yellow-500 dark:text-gray-900 font-semibold"
                      : "hover:bg-teal-500 hover:text-white dark:hover:bg-yellow-500 dark:hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Controls */}
        <div className="flex flex-col gap-4 mt-4">
          <ModeToggle />
          <Logout></Logout>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
