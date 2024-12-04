export default function ItemProduct({ name, email, role, index, deleteItem }) {
  function handleDelete() {
    deleteItem(index);
  }

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-800">{name}</td>
      <td className="px-4 py-3 text-sm text-gray-800">{email}</td>
      <td className="px-4 py-3 text-sm text-gray-800">{role}</td>
      <td className="px-4 py-3 text-sm text-gray-800">2022-05-15</td>
      <td className="px-4 py-3 text-sm text-gray-800">
        <div className="flex space-x-2">
          <button
            onClick={handleDelete}
            type="button"
            className="px-4 py-2 text-white text-sm font-medium rounded-lg border border-red-600 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-800"
          >
            Delete
          </button>

          <button
            type="button"
            className="px-4 py-2 text-white text-sm font-medium rounded-lg border border-blue-600 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-800"
          >
            Blue
          </button>
        </div>
      </td>
    </tr>
  );
}
