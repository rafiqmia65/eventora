"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "@/components/dashboard/users/UserTable";
import UserCard from "@/components/dashboard/users/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/api/auth/register");
      setUsers(res.data);
      setFiltered(res.data);
    } catch (err) {
      console.error(err);
      setMessage("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 Filter users when search changes
  useEffect(() => {
    const term = search.toLowerCase();
    const results = users.filter(
      (u) =>
        u.name?.toLowerCase().includes(term) ||
        u.email?.toLowerCase().includes(term)
    );
    setFiltered(results);
  }, [search, users]);

  const makeAdmin = async (email) => {
    try {
      const res = await axios.patch(`/api/auth/register?email=${email}`, {
        role: "admin",
      });

      if (res.status === 200) {
        setUsers((prev) =>
          prev.map((user) =>
            user.email === email ? { ...user, role: "admin" } : user
          )
        );
        setMessage("✅ User promoted to admin!");
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to promote user.");
    }
  };
  return (
    <div className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-6 text-teal-700 dark:text-teal-400">
        All Users
      </h1>

      {/* ✅ Search Bar */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      {message && (
        <div className="text-center mb-4 text-sm font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-800 border border-green-300 dark:border-green-600 rounded-md py-2">
          {message}
        </div>
      )}

      <div className="hidden md:block">
        <UsersTable users={filtered} loading={loading} makeAdmin={makeAdmin} />
      </div>

      <div className="md:hidden space-y-4">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            Loading...
          </p>
        ) : (
          filtered.map((user, index) => (
            <UserCard
              key={user._id}
              user={user}
              index={index}
              makeAdmin={makeAdmin}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
