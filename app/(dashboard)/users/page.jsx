import { auth } from "@/auth";
import Users from "@/components/dashboard/users/Users";

const UsersPage = async () => {
  const session = await auth();

  if (session?.user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center max-w-md">
          <h1 className="text-4xl font-bold text-red-500 mb-4">403</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
            Forbidden
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You do not have permission to access this page.
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Users></Users>
    </>
  );
};

export default UsersPage;
