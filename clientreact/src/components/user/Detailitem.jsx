import React, { useEffect, useState } from "react";
import { useCreateCartMutation } from "../../redux/createAPI";
import { ToastContainer, toast } from "react-toastify";

export default function DetailItem({ productData, refetch }) {
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [quantity, setQuantity] = useState(1);
  const [createCart] = useCreateCartMutation();
  const [selectedImage, setSelectedImage] = useState(productData.image1);

  useEffect(() => {
    setSelectedImage(productData.image1);
  }, [productData, refetch]);

  const colorNew = {
    red: "Đỏ",
    blue: "Xanh dương",
    yellow: "Vàng",
    black: "Đen",
    white: "Trắng",
    violet: "Tím",
    "#C0C0C0": "bạc",
    gold: "Vàng kim",
    "#44526c": "Xanh than",
    "#ffb6C1": "Hồng nhạt",
    "#39b9e2": "Xanh nhạt",
    orange: "Cam",
  };

  const handleAddToCart = () => {
    toast.success("Đã xóa sản phẩm khỏi giỏ hàng", {
      autoClose: 1000,
      style: {
        backgroundColor: "white",
        fontSize: "16px",
        borderRadius: "10px",
        padding: "10px",
      },
    });

    createCart({
      userId: userId,
      productId: productData.id,
      name: productData.name,
      image1: selectedImage,
      price: productData.price,
      quantity: quantity,
    });
  };

  const handleColorChange = (color) => {
    switch (color) {
      case "color1":
        setSelectedImage(productData.image1);
        break;
      case "color2":
        setSelectedImage(productData.image2);
        break;
      case "color3":
        setSelectedImage(productData.image3);
        break;
      default:
        setSelectedImage(productData.image1);
    }
  };

  return (
    <div className="font-sans bg-white">
      <ToastContainer />
      <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-lg p-6 rounded-lg">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-8 rounded-lg shadow-lg relative">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Product"
                  className="w-full h-auto max-w-lg mx-auto rounded-lg object-cover shadow-md transition-transform duration-300 transform hover:scale-105"
                />
              )}
              <button
                type="button"
                className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#333"
                  className="mr-1 hover:fill-blue-600"
                  viewBox="0 0 64 64"
                >
                  <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productData.image1 && (
                <div
                  className="w-24 h-20 flex items-center justify-center rounded-lg p-3 shadow-md cursor-pointer transform transition-all hover:scale-105 hover:border-blue-500 border-2"
                  onClick={() => handleColorChange("color1")}
                >
                  <img
                    src={productData.image1}
                    alt="Product Color 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {productData.image2 && (
                <div
                  className="w-24 h-20 flex items-center justify-center rounded-lg p-3 shadow-md cursor-pointer transform transition-all hover:scale-105 hover:border-blue-500 border-2"
                  onClick={() => handleColorChange("color2")}
                >
                  <img
                    src={productData.image2}
                    alt="Product Color 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {productData.image3 && (
                <div
                  className="w-24 h-20 flex items-center justify-center rounded-lg p-3 shadow-md cursor-pointer transform transition-all hover:scale-105 hover:border-blue-500 border-2"
                  onClick={() => handleColorChange("color3")}
                >
                  <img
                    src={productData.image3}
                    alt="Product Color 3"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-900">
              {productData.name}
            </h2>
            <div className="flex space-x-2 mt-4 items-center">
              <svg
                className="w-6 h-6 text-yellow-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <span className="text-gray-500 text-sm">
                {productData.rating} stars
              </span>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              <p className="text-gray-800 text-4xl font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(productData.price)}
              </p>
              {productData.price2 && (
                <p className="text-gray-400 text-xl line-through mt-2">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(productData.price2)}
                </p>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Chọn màu</h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {productData.color1 && (
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      className="w-24 h-10 border-2 border-gray-300 hover:border-gray-800 rounded-lg transition-all transform hover:scale-105"
                      style={{ backgroundColor: productData.color1 }}
                      onClick={() => handleColorChange("color1")}
                    />
                    <div className="text-center mt-2 text-gray-600">
                      {colorNew[productData.color1.toLowerCase()]}
                    </div>
                  </div>
                )}
                {productData.color2 && (
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      className="w-24 h-10 border-2 border-gray-300 hover:border-gray-800 rounded-lg transition-all transform hover:scale-105"
                      style={{ backgroundColor: productData.color2 }}
                      onClick={() => handleColorChange("color2")}
                    />
                    <div className="text-center mt-2 text-gray-600">
                      {colorNew[productData.color2.toLowerCase()]}
                    </div>
                  </div>
                )}
                {productData.color3 && (
                  <div className="flex flex-col items-center">
                    <button
                      type="button"
                      className="w-24 h-10 border-2 border-gray-300 hover:border-gray-800 rounded-lg transition-all transform hover:scale-105"
                      style={{ backgroundColor: productData.color3 }}
                      onClick={() => handleColorChange("color3")}
                    />
                    <div className="text-center mt-2 text-gray-600">
                      {colorNew[productData.color3.toLowerCase()]}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                type="button"
                className="min-w-[200px] px-6 py-3 border border-blue-600 bg-blue-600 text-white text-lg font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
