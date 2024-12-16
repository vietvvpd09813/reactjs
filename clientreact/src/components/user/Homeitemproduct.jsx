import { Link } from "react-router-dom";

export default function Homeitemproduct({ item }) {
  return (
    <Link to={`/detail/${item.id}`}>
      <div className="max-w-sm w-full main w-[240px]">
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="relative">
            <div className="flex justify-center items-center h-40">
              <img
                src={item.image1}
                alt="Product Image"
                className="object-contain object-center w-auto h-full rounded-t-2xl pt-4"
              />
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-800 mb-2 truncate">
              {item.name}
            </h2>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-gray-400 line-through mr-2">
                {item.price2 && item.price2.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {item.price && item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
