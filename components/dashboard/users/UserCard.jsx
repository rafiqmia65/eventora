import React from "react";

const UserCard = ({ user, index, makeAdmin }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <img
          src={user.image}
          alt={user.name}
          className="w-16 h-16 rounded-full object-cover shadow-sm"
        />
        <div>
          <p className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
            {user.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {user.email}
          </p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Number: {user.number}
      </p>
      <p className="text-gray-700 dark:text-gray-300 text-sm">
        Role:{" "}
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            user.role === "admin"
              ? "bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          }`}
        >
          {user.role}
        </span>
      </p>

      <div className="flex gap-2 mt-2">
        {user.role !== "admin" ? (
          <button
            onClick={() => makeAdmin(user.email)}
            className="flex-1 px-3 py-2 bg-teal-500 dark:bg-teal-600 text-white rounded-md text-sm font-medium hover:bg-teal-600 dark:hover:bg-teal-700 transition"
          >
            Make Admin
          </button>
        ) : (
          <button
            className="flex-1 px-3 py-2 bg-teal-300 dark:bg-teal-500 text-white rounded-md text-sm font-medium cursor-default"
            disabled
          >
            Admin
          </button>
        )}
      </div>
    </div>
  );
};

export default UserCard;
