import { useState } from "react"; 
import {
  useGetCategoriesAdminQuery,
  useGetProductsAdminQuery, 
  useCreateProductMutation, 
  useUpdateProductMutation, 
  useDeleteProductMutation, 
} from "../redux/createAPI"; 

export default function Adproduct() {
  const [isAddProductVisible, setAddProductVisible] = useState(false); 
  const [isEditProductVisible, setEditProductVisible] = useState(false); 
  const [currentProduct, setCurrentProduct] = useState(null); 
  const [newProductName, setNewProductName] = useState(""); 
  const [newProductPrice, setNewProductPrice] = useState(""); 
  const [newProductDescription, setNewProductDescription] = useState(""); 
  const [newProductCategory, setNewProductCategory] = useState(""); 
  const [newProductImage1, setNewProductImage1] = useState(""); 
  const [newProductImage2, setNewProductImage2] = useState(""); 
  const [newProductImage3, setNewProductImage3] = useState(""); 
  const [newProductColor1, setNewProductColor1] = useState(""); 
  const [newProductColor2, setNewProductColor2] = useState(""); 
  const [newProductColor3, setNewProductColor3] = useState(""); 

  const { data, refetch } = useGetProductsAdminQuery(); 
  const { data: categories, refetch: refetchCategories } = useGetCategoriesAdminQuery();

  let ok = categories?.data; 

  const [deleteProduct] = useDeleteProductMutation(); 
  const [createProduct] = useCreateProductMutation(); 
  const [updateProduct] = useUpdateProductMutation(); 
  const products = data?.data || [];

  const showAddProductForm = () => setAddProductVisible(true);

  const hideAddProductForm = () => {
    setAddProductVisible(false);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductDescription("");
    setNewProductCategory("");
    setNewProductImage1("");
    setNewProductImage2("");
    setNewProductImage3("");
    setNewProductColor1("");
    setNewProductColor2("");
    setNewProductColor3("");
  };

  const showEditProductForm = (product) => {
    setCurrentProduct(product);
    setNewProductName(product.name);
    setNewProductPrice(product.price);
    setNewProductDescription(product.description);
    setNewProductCategory(product.categoryId);
    setNewProductImage1(product.image1);
    setNewProductImage2(product.image2);
    setNewProductImage3(product.image3);
    setNewProductColor1(product.color1);
    setNewProductColor2(product.color2);
    setNewProductColor3(product.color3);
    setEditProductVisible(true);
  };

  const hideEditProductForm = () => {
    setEditProductVisible(false);
    setCurrentProduct(null);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductDescription("");
    setNewProductCategory("");
    setNewProductImage1("");
    setNewProductImage2("");
    setNewProductImage3("");
    setNewProductColor1("");
    setNewProductColor2("");
    setNewProductColor3("");
  };

  const handleAddProductSubmit = async (e) => {
    e.preventDefault();

    let result = {
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
      categoryId: Number(newProductCategory),
      image1: newProductImage1,
      image2: newProductImage2,
      image3: newProductImage3,
      color1: newProductColor1,
      color2: newProductColor2,
      color3: newProductColor3,
    };

    await createProduct(result);
    refetch(); 
    hideAddProductForm(); 
  };

  const handleEditProductSubmit = async (e) => {
    e.preventDefault();

    let result = {
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
      categoryId: Number(newProductCategory),
      image1: newProductImage1,
      image2: newProductImage2,
      image3: newProductImage3,
      color1: newProductColor1,
      color2: newProductColor2,
      color3: newProductColor3,
    };
    
    await updateProduct({
      id: currentProduct.id,
      body: result,
    });
    refetch();
    hideEditProductForm();
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    refetch(); 
  };




  return (
    <>
      <div className="mb-4">
        <button
          id="addProductBtn"
          className="px-5 py-3 font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          onClick={showAddProductForm}
        >
          Thêm sản phẩm
        </button>
      </div>

      {/* Backdrop Overlay */}
      {(isAddProductVisible || isEditProductVisible) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Add Product Form */}
      {isAddProductVisible && (
        <div
          id="addProductForm"
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96 transition-transform transform scale-100">
            <h2 className="text-xl font-bold mb-4">Thêm sản phẩm mới</h2>
            <form onSubmit={handleAddProductSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column: Product details */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Tên sản phẩm
                    </label>
                    <input
                      type="text"
                      value={newProductName}
                      onChange={(e) => setNewProductName(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập tên sản phẩm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Giá
                    </label>
                    <input
                      type="number"
                      value={newProductPrice}
                      onChange={(e) => setNewProductPrice(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập giá sản phẩm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Mô tả
                    </label>
                    <textarea
                      value={newProductDescription}
                      onChange={(e) => setNewProductDescription(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập mô tả sản phẩm"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Danh mục
                    </label>
                    <select
                      value={newProductCategory} // Lưu giá trị đã chọn của select vào state
                      onChange={(e) => setNewProductCategory(e.target.value)} // Cập nhật state khi người dùng chọn danh mục
                      name="categoryId"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                      <option value="">Chọn danh mục</option>{" "}
                      {ok.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} {/* Tên của danh mục */}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Right Column: Product images */}
                <div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Hình ảnh 1 (URL)
                    </label>
                    <input
                      type="url"
                      value={newProductImage1}
                      onChange={(e) => setNewProductImage1(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 1"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Hình ảnh 2 (URL)
                    </label>
                    <input
                      type="url"
                      value={newProductImage2}
                      onChange={(e) => setNewProductImage2(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Hình ảnh 3 (URL)
                    </label>
                    <input
                      type="url"
                      value={newProductImage3}
                      onChange={(e) => setNewProductImage3(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 3"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                     màu 1
                    </label>
                    <input
                      type="text"
                      value={newProductColor1}
                      onChange={(e) => setNewProductColor1(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                     màu 1
                    </label>
                    <input
                      type="text"
                      value={newProductColor2}
                      onChange={(e) => setNewProductColor2(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 3"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                     màu 1
                    </label>
                    <input
                      type="text"
                      value={newProductColor3}
                      onChange={(e) => setNewProductColor3(e.target.value)}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                      placeholder="Nhập URL hình ảnh 3"
                    />
                  </div>



                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                >
                  Thêm
                </button>
                <button
                  type="button"
                  className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                  onClick={hideAddProductForm}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

     {/* Edit Product Form */}
{isEditProductVisible && currentProduct && (
  <div
    id="editProductForm"
    className="fixed inset-0 flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-96 transition-transform transform scale-100">
      <h2 className="text-xl font-bold mb-4">Chỉnh sửa sản phẩm</h2>
      <form onSubmit={handleEditProductSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Product details */}
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tên sản phẩm
              </label>
              <input
                type="text"
                value={newProductName} // Sử dụng state value
                onChange={(e) => setNewProductName(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập tên sản phẩm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Giá
              </label>
              <input
                type="number"
                value={newProductPrice} // Sử dụng state value
                onChange={(e) => setNewProductPrice(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập giá sản phẩm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Mô tả
              </label>
              <textarea
                value={newProductDescription} // Sử dụng state value
                onChange={(e) => setNewProductDescription(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập mô tả sản phẩm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Danh mục
              </label>
              <select
                value={newProductCategory} // Sử dụng state value
                onChange={(e) => setNewProductCategory(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                <option value="">Chọn danh mục</option>
                {ok.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right Column: Product images */}
          <div>


          <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
               màu 1 
              </label>
              <input
                type="text"
                value={newProductImage1} // Sử dụng state value
                onChange={(e) => setNewProductColor1(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 1"
              />
            </div>
            
          <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
               màu 1 
              </label>
              <input
                type="text"
                value={newProductImage2} // Sử dụng state value
                onChange={(e) => setNewProductColor2(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 1"
              />
            </div>
            
          <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
               màu 1 
              </label>
              <input
                type="text"
                value={newProductImage3} // Sử dụng state value
                onChange={(e) => setNewProductColor3(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 1"
              />
            </div>




            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hình ảnh 1 (URL)
              </label>
              <input
                type="url"
                value={newProductImage1} // Sử dụng state value
                onChange={(e) => setNewProductImage1(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hình ảnh 2 (URL)
              </label>
              <input
                type="url"
                value={newProductImage2} // Sử dụng state value
                onChange={(e) => setNewProductImage2(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hình ảnh 3 (URL)
              </label>
              <input
                type="url"
                value={newProductImage3} // Sử dụng state value
                onChange={(e) => setNewProductImage3(e.target.value)} // Cập nhật giá trị
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                placeholder="Nhập URL hình ảnh 3"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          >
            Lưu thay đổi
          </button>
          <button
            type="button"
            className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
            onClick={hideEditProductForm}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Tên</th>
              <th className="px-4 py-2 border-b">Giá</th>
              <th className="px-4 py-2 border-b">Danh mục</th>
              <th className="px-4 py-2 border-b">Hình ảnh</th>
              <th className="px-4 py-2 border-b">Hành động</th>
              <th className="px-4 py-2 border-b">màu1</th>
              <th className="px-4 py-2 border-b">màu2</th>
              <th className="px-4 py-2 border-b">màu3</th>
            </tr>
          </thead>
          <tbody>
         
            
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-2 border-b">{product.id}</td>
                <td className="px-4 py-2 border-b">{product.name}</td>
                <td className="px-4 py-2 border-b">{product.price}</td>
                <td className="px-4 py-2 border-b">{product.categoryId}</td>
                <td className="px-4 py-2 border-b">{product.color1}</td>
                <td className="px-4 py-2 border-b">{product.color2}</td>
                <td className="px-4 py-2 border-b">{product.color3}</td>
                
                <td className="px-4 py-2 border-b">
                  <img
                    src={product.image1}
                 
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2 border-b">
                  <button
                    className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                    onClick={() => showEditProductForm(product)}
                  >
                    Sửa
                  </button>
                  <button
                    className="ml-2 px-4 py-2 font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 ease-in-out"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
