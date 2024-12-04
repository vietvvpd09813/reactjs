import { useState } from 'react';  // Nhập hook useState từ React để quản lý trạng thái trong component
import {
  useGetCategoriesAdminQuery,  // Hook lấy dữ liệu danh mục từ API
  useDeleteCategoryMutation,    // Hook xóa danh mục từ API
  useNewCategoryMutation,       // Hook tạo mới danh mục qua API
  useUpdateCategoryMutation,    // Hook cập nhật danh mục qua API
} from '../redux/createAPI';      // Các hook này được định nghĩa trong file createAPI.js, sử dụng Redux Toolkit Query

export default function Addcategory() {  // Định nghĩa component Addcategory
  const [isAddCategoryVisible, setAddCategoryVisible] = useState(false);  // Trạng thái hiển thị form thêm danh mục
  const [isEditCategoryVisible, setEditCategoryVisible] = useState(false); // Trạng thái hiển thị form chỉnh sửa danh mục
  const [currentCategory, setCurrentCategory] = useState(null);  // Trạng thái lưu thông tin danh mục hiện tại khi chỉnh sửa
  const [newCategoryName, setNewCategoryName] = useState('');  // Trạng thái lưu tên danh mục mới
  const [newCategoryImage, setNewCategoryImage] = useState('');  // Trạng thái lưu hình ảnh của danh mục mới
  const [editedCategoryName, setEditedCategoryName] = useState('');  // Trạng thái lưu tên danh mục khi chỉnh sửa
  const [editedCategoryImage, setEditedCategoryImage] = useState('');  // Trạng thái lưu hình ảnh danh mục khi chỉnh sửa

  const { data, refetch } = useGetCategoriesAdminQuery();
    // Lấy dữ liệu danh mục từ API và hàm refetch để làm mới dữ liệu
  const [deleteCategory] = useDeleteCategoryMutation();  // Hook để xóa danh mục
  const [createCategory] = useNewCategoryMutation();  // Hook để tạo mới danh mục
  const [updateCategory] = useUpdateCategoryMutation();  // Hook để cập nhật danh mục
  const categories = data?.data || [];  // Danh sách danh mục từ API, nếu không có thì sử dụng mảng rỗng
console.log(categories);

  // Hàm để hiển thị form thêm danh mục
  const showAddCategoryForm = () => setAddCategoryVisible(true);
  
  // Hàm để ẩn form thêm danh mục
  const hideAddCategoryForm = () => {
    setAddCategoryVisible(false);
    setNewCategoryName('');  // Reset tên danh mục mới
    setNewCategoryImage('');  // Reset hình ảnh danh mục mới
  };

  // Hàm để hiển thị form chỉnh sửa danh mục
  const showEditCategoryForm = (category) => {
    setCurrentCategory(category);  // Lưu danh mục hiện tại để chỉnh sửa
    setEditedCategoryName(category.name);  // Đặt tên danh mục vào form chỉnh sửa
    setEditedCategoryImage(category.image);  // Đặt hình ảnh danh mục vào form chỉnh sửa
    setEditCategoryVisible(true);  // Hiển thị form chỉnh sửa
  };

  // Hàm để ẩn form chỉnh sửa danh mục
  const hideEditCategoryForm = () => {
    setEditCategoryVisible(false);
    setCurrentCategory(null);  // Xóa thông tin danh mục hiện tại
    setEditedCategoryName('');  // Reset tên danh mục
    setEditedCategoryImage('');  // Reset hình ảnh danh mục
  };

  // Hàm xử lý khi thêm danh mục mới
  const handleAddCategorySubmit = async (e) => {
    e.preventDefault();  // Ngừng hành động mặc định của form
    if (newCategoryName && newCategoryImage) {  // Kiểm tra nếu cả tên và hình ảnh đều có giá trị
      let result = {
        name: newCategoryName,
        image: newCategoryImage,
      };
      await createCategory(result);  // Gửi yêu cầu tạo danh mục mới
      refetch();  // Làm mới danh sách danh mục sau khi thêm
      hideAddCategoryForm();  // Ẩn form thêm danh mục
    }
  };

  // Hàm xử lý khi chỉnh sửa danh mục
  const handleEditCategorySubmit = async (e) => {
    e.preventDefault();  // Ngừng hành động mặc định của form
    if (editedCategoryName && editedCategoryImage) {  // Kiểm tra nếu cả tên và hình ảnh đều có giá trị
      let result = {
        name: editedCategoryName,
        image: editedCategoryImage,
      };
      await updateCategory({
        id: currentCategory.id,  // Truyền ID của danh mục cần chỉnh sửa
        body: result,  // Dữ liệu chỉnh sửa
      });
      refetch();  // Làm mới danh sách danh mục sau khi cập nhật
      hideEditCategoryForm();  // Ẩn form chỉnh sửa
    }
  };

  // Hàm xử lý khi xóa danh mục
  const handleDeleteCategory = async (categoryId) => {
    await deleteCategory(categoryId);  // Gửi yêu cầu xóa danh mục
    refetch();  // Làm mới danh sách danh mục sau khi xóa
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
                <label className="block text-sm font-medium text-gray-700">Tên danh mục</label>
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
                <label className="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
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
                <label className="block text-sm font-medium text-gray-700">Tên danh mục</label>
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
                <label className="block text-sm font-medium text-gray-700">Hình ảnh (URL)</label>
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID danh mục</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên danh mục</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hình ảnh</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
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
