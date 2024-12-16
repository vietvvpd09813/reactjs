import { useState } from "react";
import {
  useGetCategoriesAdminQuery,
  useDeleteCategoryMutation,
  useNewCategoryMutation,
  useUpdateCategoryMutation,
} from "../redux/createAPI";

export default function Addcategory() {
  const [isAddCategoryVisible, setAddCategoryVisible] = useState(false);
  const [isEditCategoryVisible, setEditCategoryVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [newCategoryImage, setNewCategoryImage] = useState("");
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [editedCategoryImage, setEditedCategoryImage] = useState("");

  const { data, refetch } = useGetCategoriesAdminQuery();

  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory] = useNewCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const categories = data?.data || [];
  console.log(categories);

  const showAddCategoryForm = () => setAddCategoryVisible(true);

  const hideAddCategoryForm = () => {
    setAddCategoryVisible(false);
    setNewCategoryName("");
    setNewCategoryImage("");
  };

  const showEditCategoryForm = (category) => {
    setCurrentCategory(category);
    setEditedCategoryName(category.name);
    setEditedCategoryImage(category.image);
    setEditCategoryVisible(true);
  };

  const hideEditCategoryForm = () => {
    setEditCategoryVisible(false);
    setCurrentCategory(null);
    setEditedCategoryName("");
    setEditedCategoryImage("");
  };

  const handleAddCategorySubmit = async (e) => {
    e.preventDefault();
    if (newCategoryName && newCategoryImage) {
      let result = {
        name: newCategoryName,
        image: newCategoryImage,
      };
      await createCategory(result);
      refetch();
      hideAddCategoryForm();
    }
  };

  const handleEditCategorySubmit = async (e) => {
    e.preventDefault();
    if (editedCategoryName && editedCategoryImage) {
      let result = {
        name: editedCategoryName,
        image: editedCategoryImage,
      };
      await updateCategory({
        id: currentCategory.id,
        body: result,
      });
      refetch();
      hideEditCategoryForm();
    }
  };

  const handleDeleteCategory = async (categoryId) => {
  
    const isConfirmed = window.confirm("Bạn có chắc chắn muốn xóa danh mục này?");
    
    if (isConfirmed) {
    
      await deleteCategory(categoryId);
      refetch();
    } else {
   
      console.log("Xóa danh mục bị hủy.");
    }
  };
  

  return (
    <>
      <div className="mb-4">
        <button
          id="addCategoryBtn"
          className="px-5 py-3 font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          onClick={showAddCategoryForm}
        >
          Thêm danh mục
        </button>
      </div>

      {/* Backdrop Overlay */}
      {(isAddCategoryVisible || isEditCategoryVisible) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={hideAddCategoryForm} // Close form on backdrop click
        />
      )}

      {/* Add Category Form */}
      {isAddCategoryVisible && (
        <div
          id="addCategoryForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Thêm danh mục mới</h2>
            <form onSubmit={handleAddCategorySubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tên danh mục
                </label>
                <input
                  type="text"
                  required
                  value={newCategoryName}
                  onChange={(e) => setNewCategoryName(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên danh mục"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Hình ảnh (URL)
                </label>
                <input
                  type="url"
                  required
                  value={newCategoryImage}
                  onChange={(e) => setNewCategoryImage(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Thêm
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={hideAddCategoryForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Form */}
      {isEditCategoryVisible && (
        <div
          id="editCategoryForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Sửa danh mục</h2>
            <form onSubmit={handleEditCategorySubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Tên danh mục
                </label>
                <input
                  type="text"
                  required
                  value={editedCategoryName}
                  onChange={(e) => setEditedCategoryName(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập tên danh mục"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Hình ảnh (URL)
                </label>
                <input
                  type="url"
                  required
                  value={editedCategoryImage}
                  onChange={(e) => setEditedCategoryImage(e.target.value)}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Cập nhật
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={hideEditCategoryForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Table */}
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID danh mục
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tên danh mục
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hình ảnh
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories?.map((category) => (
            <tr key={category.id}>
              <td className="px-6 py-4 whitespace-nowrap">{category.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{category.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  data-action="edit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                  onClick={() => showEditCategoryForm(category)}
                >
                  Sửa
                </button>
                <button
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={() => handleDeleteCategory(category.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
