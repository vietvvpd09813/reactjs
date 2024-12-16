import { Link } from "react-router-dom";

export default function Item({ item }) {
  return (
    <Link to={`/detail/${item.id}`}>
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl border-4 border-gray-300 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <div className="relative">
          {/* Căn giữa hình ảnh */}
          <div className="flex justify-center items-center h-48">
            <img
              src={item.image1}
              alt="Product Image"
              className="object-contain object-center w-auto h-full rounded-t-2xl mt-10" // Căn giữa và điều chỉnh kích thước hình ảnh
            />
          </div>
        </div>
        <div className="p-6">
          {/* Title with max 2 lines and ellipsis */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate-multi-line">
            {item.name}
          </h2>
    
          <div className="flex items-center justify-between mb-4">
            {/* Original price with a line-through, subtle color */}
            <span className="text-sm font-medium text-gray-500 line-through mr-2">
              {item.price2 && item.price2.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
            {/* New price with accent color */}
            <span className="text-2xl font-bold text-blue-600">
              {item.price && item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
            </span>
          </div>
    
          {/* Button with a gradient background */}
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    </Link>
  );
}



