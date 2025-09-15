"use client";

import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { toast } from "sonner";

const Logout = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login", redirect: true });
    toast.success("Logout successful");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-colors 
                 text-black/80 dark:text-gray-200 
                 hover:text-red-500 dark:hover:text-yellow-400
                 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      <CiLogout size={20} />
      Sign Out
    </button>
  );
};

export default Logout;

