import { useState } from "react";
import { useGetUsersQuery, useUpdateStatusUserMutation } from "../redux/createAPI";

export default function Useradmin() {
  const { data, refetch } = useGetUsersQuery();
  const [updateUserStatus] = useUpdateStatusUserMutation(); // Mutation to update user status

  let b = data?.data;
  console.log(b);

  // Handle status update
  const handleStatusChange = async (userId, status) => {
    try {
      // Call the mutation to update user status
      await updateUserStatus({ id: userId, isActive: status });
      refetch(); // Refetch the users after updating
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <>
      <div className="mb-4">
        <h2 className="text-xl font-bold">Quản lý người dùng</h2>
      </div>

      {/* User Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tên
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Trạng thái
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Vai trò
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Dynamically render user rows */}
          {b?.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.isActive ? "Hoạt động" : "Không hoạt động"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="ml-2 px-4 py-2 font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
                  onClick={() => handleStatusChange(item.id, !item.isActive)} // Toggle status
                >
                  {item.isActive ? "Khóa" : "Mở khóa"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
