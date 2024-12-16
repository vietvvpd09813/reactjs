import React, { useState } from "react";
import { useGetOrdersQuery, useUpdateOrderStatusMutation } from "../../redux/createAPI";

export default function Homeorder() {
  const userId = localStorage.getItem("userId") || "";
  const { data, refetch } = useGetOrdersQuery(userId);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showConfirmCancel, setShowConfirmCancel] = useState(false); // State for confirmation modal

  const nonCancelableStatuses = [
    "Đã xác nhận",
    "Đang vận chuyển",
    "Đang giao hàng",
    "Đã giao",
    "Đã hoàn thành",
  ];

  const toggleModal = (order) => {
    setShowModal(!showModal);
    setSelectedOrder(order);
  };

  const formatCurrency = (value) => {
    if (typeof value === "number") {
      return value.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    }
    return "0 VND";
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await updateOrderStatus({ orderId, status: "Đã hủy đơn" }).unwrap();
      alert("Đơn hàng đã được hủy.");
      refetch(); 
    } catch (err) {
      alert("Hủy đơn hàng thất bại: " + err.message);
    }
  };

  const openConfirmCancel = (order) => {
    if (!nonCancelableStatuses.includes(order.status)) {
      setSelectedOrder(order);
      setShowConfirmCancel(true);
    } else {
      alert("Không thể hủy đơn hàng .");
    }
  };

  const confirmCancel = () => {
    handleCancelOrder(selectedOrder.id);
    setShowConfirmCancel(false); 
  };

  const cancelCancel = () => {
    setShowConfirmCancel(false); 
  };

  // If userId is not present, show an empty cart message
  if (!userId) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-semibold text-gray-700">Giỏ hàng của bạn hiện tại trống.</h2>
        <p className="text-gray-600">Vui lòng đăng nhập để xem và quản lý đơn hàng của bạn.</p>
      </div>
    );
  }

  return (
    <div>
      {data?.orders?.length === 0 ? (
        <div className="text-center p-6">
          <h2 className="text-2xl font-semibold text-gray-700">Không có đơn hàng nào.</h2>
          <p className="text-gray-600">Bạn chưa có đơn hàng nào để quản lý.</p>
        </div>
      ) : (
        data?.orders?.map((item) => (
          <div
            key={item.id}
            className="p-6 max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-lg mt-10"
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Thông tin đơn hàng
            </h2>
            <div className="space-y-3 mb-6">
              <p>
                <strong className="font-semibold text-gray-700">
                  Tên khách hàng:
                </strong>{" "}
                {item.fullname}
              </p>
              <p>
                <strong className="font-semibold text-gray-700">Địa chỉ:</strong>{" "}
                {item.address}
              </p>
              <p>
                <strong className="font-semibold text-gray-700">
                  Số điện thoại:
                </strong>{" "}
                {item.phone}
              </p>
              <p>
                <strong className="font-semibold text-gray-700">
                  Tổng tiền:
                </strong>{" "}
                {formatCurrency(parseFloat(item.totalPrice))}
              </p>

              <p>
                <strong className="font-semibold text-gray-700">
                  Trạng thái đơn hàng:
                </strong>{" "}
                {item.status}
              </p>
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => toggleModal(item)}
                className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                {showModal && selectedOrder?.id === item.id
                  ? "Ẩn chi tiết"
                  : "Xem chi tiết"}
              </button>

              {/* Add Hủy đơn hàng button */}
              <button
                onClick={() => openConfirmCancel(item)} // Use the new function for confirming cancel
                className="px-8 py-3 bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-red-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Hủy đơn hàng
              </button>
            </div>

            {showModal && selectedOrder?.id === item.id && (
              <div
                className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-md transition-opacity duration-500 ease-out"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="bg-white p-8 rounded-3xl w-11/12 max-w-3xl shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-semibold text-center text-gray-800">
                      Chi tiết đơn hàng
                    </h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-gray-600 hover:text-gray-900 font-semibold text-lg"
                    >
                      X
                    </button>
                  </div>
                  <table className="min-w-full border-collapse text-sm text-gray-700">
                    <thead className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                      <tr>
                        <th className="px-4 py-2">Hình ảnh</th>
                        <th className="px-4 py-2">Tên sản phẩm</th>
                        <th className="px-4 py-2">Giá</th>
                        <th className="px-4 py-2">Số lượng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.orderItems.map((orderItem) => (
                        <tr
                          key={orderItem.id}
                          className="border-b hover:bg-gray-100"
                        >
                          <td className="px-4 py-3 text-center">
                            <img
                              src={orderItem.product.image1}
                              alt={orderItem.product.name}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                          </td>
                          <td className="px-4 py-3">{orderItem.product.name}</td>
                          <td className="px-4 py-3">
                            {formatCurrency(orderItem.product.price)}
                          </td>
                          <td className="px-4 py-3">{orderItem.quantity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))
      )}

      {/* Confirmation Modal for canceling the order */}
      {showConfirmCancel && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 backdrop-blur-md transition-opacity duration-500 ease-out"
          onClick={cancelCancel}
        >
          <div
            className="bg-white p-8 rounded-3xl w-11/12 max-w-md shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
              Bạn có chắc muốn hủy đơn hàng này?
            </h3>
            <div className="flex justify-between">
              <button
                onClick={confirmCancel}
                className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-lg"
              >
                Hủy đơn
              </button>
              <button
                onClick={cancelCancel}
                className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-lg"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
