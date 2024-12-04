import React, { useState } from "react";
import Homeitemproduct from "./Homeitemproduct";
import {
  useGetProductsAdminQuery,
  useGetCategoriesAdminQuery,
} from "../../redux/createAPI"; // Import đúng API

export default function Homeproduct() {
  // State để theo dõi danh mục được chọn và từ khóa tìm kiếm
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Thêm state để lưu từ khóa tìm kiếm
  const [submittedQuery, setSubmittedQuery] = useState(""); // State để lưu từ khóa khi submit

  // Lấy dữ liệu sản phẩm từ Redux (API slice)
  const {
    data: products,
    isLoading: loadingProducts,
    isError: errorProducts,
  } = useGetProductsAdminQuery();

  // Lấy dữ liệu danh mục từ Redux (API slice)
  const {
    data: categories,
    isLoading: loadingCategories,
    isError: errorCategories,
  } = useGetCategoriesAdminQuery();

  // Xử lý khi dữ liệu sản phẩm hoặc danh mục đang tải hoặc có lỗi
  if (loadingProducts || loadingCategories) {
    return <div>Loading...</div>;
  }

  if (errorProducts || errorCategories) {
    return <div>Đã xảy ra lỗi khi tải dữ liệu!</div>;
  }

  // Nếu không có sản phẩm hoặc danh mục
  const productList = products?.data || [];
  const categoryList = categories?.data || [];

  // Lọc sản phẩm theo danh mục được chọn
  const filteredByCategory = selectedCategory
    ? productList.filter(
        (product) => product.categoryId === selectedCategory.id
      )
    : productList;

  // Lọc sản phẩm theo tên (dựa trên từ khóa tìm kiếm đã submit)
  const filteredProducts = filteredByCategory.filter(
    (product) =>
      product.name.toLowerCase().includes(submittedQuery.toLowerCase()) // Lọc theo tên sản phẩm
  );

  // Xử lý khi click vào danh mục
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Xử lý khi người dùng nhập vào ô tìm kiếm
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Xử lý khi nhấn nút submit tìm kiếm
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Ngừng hành vi mặc định của form (reload trang)
    setSubmittedQuery(searchQuery); // Cập nhật từ khóa tìm kiếm đã submit
  };

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav className="bg-gray-800 shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16 space-x-6">
              {/* Thanh điều hướng */}
              <div className="flex items-center space-x-6">
                {/* Danh mục */}
                {categoryList.length > 0 ? (
                  categoryList.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category)} // Set danh mục được chọn
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      {category.name}
                    </button>
                  ))
                ) : (
                  <div>Không có danh mục</div>
                )}
              </div>

              {/* Form tìm kiếm */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="py-2 px-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Tìm kiếm
                </button>
              </form>
            </div>
          </div>
        </nav>

        {/* Hiển thị sản phẩm */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <Homeitemproduct key={index} item={item} />
            ))
          ) : (
            <div>Không có sản phẩm nào phù hợp với từ khóa tìm kiếm</div>
          )}
        </div>
      </div>
    </section>
  );
}
