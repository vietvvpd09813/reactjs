

export default function ContentAdmin() {
  return (
    <div
    id="main-content"
    className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
  >
      <div className="font-sans overflow-x-auto">
      
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100 whitespace-nowrap">
        <tr>
          <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Role
          </th>
          <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Joined At
          </th>
          <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
        <tr>
          <td className="px-4 py-4 text-sm text-gray-800">John Doe</td>
          <td className="px-4 py-4 text-sm text-gray-800">john@example.com</td>
          <td className="px-4 py-4 text-sm text-gray-800">Admin</td>
          <td className="px-4 py-4 text-sm text-gray-800">2022-05-15</td>
          <td className="px-4 py-4 text-sm text-gray-800">
            <button className="text-blue-600 mr-4">Edit</button>
            <button className="text-red-600">Delete</button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-4 text-sm text-gray-800">Jane Smith</td>
          <td className="px-4 py-4 text-sm text-gray-800">jane@example.com</td>
          <td className="px-4 py-4 text-sm text-gray-800">User</td>
          <td className="px-4 py-4 text-sm text-gray-800">2022-07-20</td>
          <td className="px-4 py-4 text-sm text-gray-800">
            <button className="text-blue-600 mr-4">Edit</button>
            <button className="text-red-600">Delete</button>
          </td>
        </tr>
        <tr>
          <td className="px-4 py-4 text-sm text-gray-800">Alen doe</td>
          <td className="px-4 py-4 text-sm text-gray-800">alen@example.com</td>
          <td className="px-4 py-4 text-sm text-gray-800">User</td>
          <td className="px-4 py-4 text-sm text-gray-800">2022-07-21</td>
          <td className="px-4 py-4 text-sm text-gray-800">
            <button className="text-blue-600 mr-4">Edit</button>
            <button className="text-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   
   
  </div>

  )
}
