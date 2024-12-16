import React, { useState } from "react";

export default function CanvasEffect() {
  return (
    <>
      <div dir="rtl">
        <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
          <div className="flex flex-col items-center justify-between lg:flex-row md:gap-10 gap-5">
            <div className="relative lg:block lg:w-1/2">
              <div className="relative my-10 flex h-full flex-col overflow-hidden rounded-2xl bg-white text-gray-600 shadow-lg ring-1 ring-gray-200">
                <h2 className="m-5 bg-teal-500 p-3 rounded-xl text-center text-xl font-bold">
                  Những tính năng nổi bật của đồng hồ thông minh
                </h2>
                <div className="flex-auto p-6">
                  <div className="relative flex flex-col justify-center">
                    <div className="absolute right-4 h-full border-l-2" />
                    <div className="relative mb-4">
                      <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                        1
                      </span>
                      <div className="mr-12 w-auto pt-1">
                        <h6 className="text-sm font-semibold text-blue-900">
                          Màn hình hiển thị cao cấp
                        </h6>
                        <p className="mt-1 text-xs text-gray-500">
                          Màn hình cảm ứng sắc nét, hỗ trợ độ phân giải cao và khả năng hiển thị rõ ràng dưới ánh sáng mạnh.
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                        2
                      </span>
                      <div className="mr-12 w-auto pt-1">
                        <h6 className="text-sm font-semibold text-blue-900">
                          Theo dõi sức khỏe 24/7
                        </h6>
                        <p className="mt-1 text-xs text-gray-500">
                          Đo nhịp tim, theo dõi giấc ngủ và mức độ hoạt động thể chất với các cảm biến chính xác.
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                        3
                      </span>
                      <div className="mr-12 w-auto pt-1">
                        <h6 className="text-sm font-semibold text-blue-900">
                          Kết nối thông minh với điện thoại
                        </h6>
                        <p className="mt-1 text-xs text-gray-500">
                          Nhận thông báo cuộc gọi, tin nhắn và thông báo từ các ứng dụng trực tiếp trên đồng hồ.
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                        4
                      </span>
                      <div className="mr-12 w-auto pt-1">
                        <h6 className="text-sm font-semibold text-blue-900">
                          Tính năng chống nước
                        </h6>
                        <p className="mt-1 text-xs text-gray-500">
                          Khả năng chống nước và bụi bẩn, phù hợp cho các hoạt động ngoài trời và thể thao.
                        </p>
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <span className="absolute inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">
                        5
                      </span>
                      <div className="mr-12 w-auto pt-1">
                        <h6 className="text-sm font-semibold text-blue-900">
                          Thời lượng pin lâu dài
                        </h6>
                        <p className="mt-1 text-xs text-gray-500">
                          Với một lần sạc, đồng hồ có thể hoạt động liên tục trong vài ngày.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:block lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dt9k74vof/image/upload/v1712581499/New_Project_4_jlzbhj.webp"
                className="w-5/6"
                alt="Smartwatch"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
