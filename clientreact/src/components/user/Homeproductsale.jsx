import { useGetCategoriesAdminQuery } from "../../redux/createAPI";

export default function Homeproductsale() {
  const { data: categories, isLoading, isError } = useGetCategoriesAdminQuery();
  const categoryList = categories?.data || [];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>There was an error loading categories.</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Danh mục sản phẩm
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Large item - first category */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={categoryList[0]?.image || "https://via.placeholder.com/150"}
              alt={categoryList[0]?.name || "Category Image"}
              className="w-full h-full object-contain pt-5 transform transition-transform duration-500 ease-in-out group-hover:scale-105" // Mượt khi hover
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-2xl font-bold text-white">{categoryList[0]?.name}</h3>
                <p className="text-white">Vượt trội về sức khỏe và kết nối, với nhiều tính năng thông minh.</p>
              </div>
            </div>
          </div>

          {/* Two small items - second and third categories */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={categoryList[1]?.image || "https://via.placeholder.com/150"}
              alt={categoryList[1]?.name || "Category Image"}
              className="w-full h-48 object-contain pt-5 transform transition-transform duration-500 ease-in-out group-hover:scale-105" // Mượt khi hover
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">{categoryList[1]?.name}</h4>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src={categoryList[2]?.image || "https://via.placeholder.com/150"}
              alt={categoryList[2]?.name || "Category Image"}
              className="w-full h-48 object-contain pt-5 transform transition-transform duration-500 ease-in-out group-hover:scale-105" // Mượt khi hover
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-xl font-bold text-white">{categoryList[2]?.name}</h4>
              </div>
            </div>
          </div>

          {/* Three medium items - subsequent categories */}
          {categoryList.slice(3, 9).map((category) => (
            <div key={category.id} className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={category.image || "https://via.placeholder.com/150"}
                alt={category.name}
                className="w-full h-48 object-contain pt-3 pb-3 transform transition-transform duration-500 ease-in-out group-hover:scale-105" // Mượt khi hover
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-xl font-bold text-white">{category.name}</h4>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
