import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { ToastContainer } from "react-toastify";

export default function Homeitem1({ item }) {
  function login1() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Sản phẩm đã thêm!',
      background: '#1e3a8a', // Dark blue background
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
        <div className="relative">
          {/* Image adjustments with border-radius for smoother look */}
          <img
            src={item.image1}
            alt="Product Image"
            className="w-full h-48 object-contain object-center rounded-t-2xl pt-5"  // Ensuring smooth corners
          />
          {/* "Hot" badge */}
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md">
            Hot
          </div>
        </div>
        <div className="p-6">
          {/* Product title with color and spacing adjustments */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>

          <div className="flex items-center justify-between mb-4">
            {/* Original price with strike-through and subtle color */}
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
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}
