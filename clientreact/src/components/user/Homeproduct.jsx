import { useState } from "react";
import Homeitemproduct from "./Homeitemproduct";
import {
  useGetProductsAdminQuery,
  useGetCategoriesAdminQuery,
} from "../../redux/createAPI";

export default function Homeproduct() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");  

  const {
    data: products,
    isLoading: loadingProducts,
    isError: errorProducts,
  } = useGetProductsAdminQuery();

  const {
    data: categories,
    isLoading: loadingCategories,
    isError: errorCategories,
  } = useGetCategoriesAdminQuery();

  if (loadingProducts || loadingCategories) {
    return <div>Loading...</div>;
  }

  if (errorProducts || errorCategories) {
    return <div>Đã xảy ra lỗi khi tải dữ liệu!</div>;
  }

  const productList = products?.data || [];
  const categoryList = categories?.data || [];

  const filteredByCategory = selectedCategory
    ? productList.filter(
        (product) => product.categoryId === selectedCategory.id
      )
    : productList;

  const filteredProducts = filteredByCategory.filter((product) =>
    product.name.toLowerCase().includes(submittedQuery.toLowerCase())
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllProductsClick = () => {
    setSelectedCategory(null);  
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmittedQuery(searchQuery);
  };

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/5 bg-gray-800 p-4 rounded-lg border-2 border-gray-600">
            <div className="absolute top-1/2 right-0 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-gray-800 border-b-8 border-b-transparent transform -translate-y-1/2"></div>
            <h3 className="text-xl font-bold mb-4 text-white">Danh Mục</h3>
            <div className="space-y-2">
              <button
                onClick={handleAllProductsClick}
                className="text-white hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-colors duration-300"
              >
                Tất cả
              </button>

              {/* Hiển thị danh sách tất cả các danh mục ngay lập tức */}
              <div>
                {categoryList.length > 0 ? (
                  categoryList.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryClick(category)}
                      className="text-white hover:bg-gray-700 hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium w-full text-left transition-colors duration-300"
                    >
                      {category.name}
                    </button>
                  ))
                ) : (
                  <div>Không có danh mục</div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-4/5">
            <div className="flex justify-between items-center mb-6">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center space-x-2 w-full max-w-lg"
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="py-2 px-4 border border-blue-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  search
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 lg:gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <Homeitemproduct key={index} item={item} />
                ))
              ) : (
                <div>Không có sản phẩm nào phù hợp với từ khóa tìm kiếm</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
