import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { ToastContainer } from "react-toastify";
export default function Homeitem1({item}) {
  function login1() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'sản phẩm đã thêm!',
      background: '#1e3a8a', // Dark blue background
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500
    });
    
    navigate("/home");  // Redirect to home page after login
  }
  return (
<article className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
  <div>
  <ToastContainer />  
    <img
      className="object-cover h-64 w-full"
      src={item.image2}
      alt="Converse sneakers"
    />
  </div>
  <div className="flex flex-col gap-1 mt-4 px-4">
    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">
     {item.name}
    </h2>
    <span className="font-normal text-gray-600 dark:text-gray-300">
      High Top (Lemon Yellow)
    </span>
    <span className="font-semibold text-gray-800 dark:text-gray-50">$60</span>
  </div>
  <div className="flex gap-4 mt-4 px-4">
    <span className="sr-only">Colors available</span>
    <button
      aria-label="Yellow"
      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
    />
    <button
      aria-label="Red"
      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
    />
    <button
      aria-label="Blue"
      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
    />
    <button
      aria-label="Black"
      className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
    />
  </div>
  <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
    <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
      <span       onClick={login1} className="text-base">Add to Cart</span>
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </button>
  </div>
</article>

  )
}
