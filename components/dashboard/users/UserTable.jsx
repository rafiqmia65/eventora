import React from "react";

const UsersTable = ({ users, loading, makeAdmin }) => {
  return (
    <div className="overflow-x-auto w-full">
      <div className="min-w-[700px] bg-white dark:bg-gray-800 shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Email
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Number
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Role
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {loading ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  Loading...
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-4 py-4 text-gray-700 dark:text-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-4 py-4 flex items-center gap-3 min-w-[120px]">
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover shadow"
                    />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      {user.name}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-400 min-w-[150px]">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-400 min-w-[120px]">
                    {user.number}
                  </td>
                  <td className="px-4 py-4 min-w-[100px]">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        user.role === "admin"
                          ? "bg-green-100 dark:bg-green-700 text-green-700 dark:text-green-100"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-4 py-4 min-w-[120px]">
                    {user.role !== "admin" ? (
                      <button
                        onClick={() => makeAdmin(user.email)}
                        className="px-3 py-1.5 bg-teal-500 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-700 text-white rounded-md text-sm font-medium transition w-full"
                      >
                        Make Admin
                      </button>
                    ) : (
                      <button
                        className="px-3 py-1.5 bg-teal-300 dark:bg-teal-500 text-white rounded-md text-sm font-medium cursor-default w-full"
                        disabled
                      >
                        Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
