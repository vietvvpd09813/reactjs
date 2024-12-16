import  { useState } from "react";
import {
  useGetOrder2Query,
  useUpdateOrderStatusMutation,
} from "../redux/createAPI";

export default function Adorder() {
  const { data, refetch } = useGetOrder2Query();
  const [updateOrderStatus] = useUpdateOrderStatusMutation(); 
  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false); 
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newStatus, setNewStatus] = useState(""); 

 
  const handleUpdateStatus = async (orderId) => {
    if (!newStatus) return; 
    try {
      await updateOrderStatus({ orderId, status: newStatus }).unwrap();
      alert("Cập nhật trạng thái thành công");
      refetch();
      setShowUpdateModal(false);
      setNewStatus(""); 
    } catch (err) {
      alert("Cập nhật trạng thái thất bại: " + err.message);
    }
  };

 
  const toggleModal = (order) => {
    setShowModal(!showModal);
    setSelectedOrder(order);
  };

  return (
    <div className="p-1 max-w-5xl mx-auto bg-white">
    
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white text-black">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Tên khách hàng
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Địa chỉ
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Số điện thoại
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Trạng thái
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data?.orders?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{item.fullname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
              <td className="px-6 py-4 whitespace-nowrap flex space-x-2">
           
                <button
                  onClick={() => toggleModal(item)}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  Chi tiết
                </button>

              
                {item.status !== "Đã huỷ" && (
                  <button
                    onClick={() => {
                      setSelectedOrder(item); 
                      setShowUpdateModal(true); 
                    }}
                    className="px-4 py-2 font-semibold text-white bg-yellow-500 rounded-lg shadow hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Cập nhật
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      {showModal && selectedOrder && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-500 ease-out"
          onClick={() => setShowModal(false)} 
        >
          <div
            id="kk" 
            className="bg-white p-8 rounded-3xl w-9/12 max-w-2xl shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Chi tiết đơn hàng #{selectedOrder.id}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900 font-semibold text-lg"
              >
                X
              </button>
            </div>
            <table className="min-w-full border-collapse text-sm text-gray-700">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-4 py-2">Hình ảnh</th>
                  <th className="px-4 py-2">Tên sản phẩm</th>
                  <th className="px-4 py-2">Giá</th>
                  <th className="px-4 py-2">Số lượng</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.orderItems.map((orderItem) => (
                  <tr key={orderItem.id} className="hover:bg-gray-100">
                    <td className="px-4 py-3 text-center">
                      <img
                        src={orderItem.product.image1}
                        alt={orderItem.product.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3">{orderItem.product.name}</td>
                    <td className="px-4 py-3">
                      {orderItem.product.price.toLocaleString()} VND
                    </td>
                    <td className="px-4 py-3">{orderItem.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

     
      {showUpdateModal && selectedOrder && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 transition-opacity duration-500 ease-out"
          onClick={() => setShowUpdateModal(false)} 
        >
          <div
            id="update-modal"
            className="bg-white p-8 rounded-3xl w-9/12 max-w-md shadow-2xl animate__animated animate__fadeIn animate__delay-1s"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-center text-gray-800">
                Cập nhật trạng thái đơn hàng #{selectedOrder.id}
              </h3>
              <button
                onClick={() => setShowUpdateModal(false)}
                className="text-gray-600 hover:text-gray-900 font-semibold text-lg"
              >
                X
              </button>
            </div>

            <div className="mt-4">
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700"
              >
                Chọn trạng thái
              </label>
              <select
                id="status"
                name="status"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Chờ xác nhận">Chờ xác nhận</option>
                <option value="Đã xác nhận">Đã xác nhận</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
                <option value="Đang giao hàng">Đang giao hàng</option>
                <option value="Đã giao">Đã giao</option>
                <option value="Đã hoàn thành">Đã hoàn thành</option>
                <option value="Đã hủy đơn">Đã hủy đơn</option>
               
              </select>

             
              <button
                onClick={() => handleUpdateStatus(selectedOrder.id)} 
                className="mt-2 w-full px-4 py-2 font-semibold text-white bg-green-500 rounded-lg shadow hover:bg-green-600 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Cập nhật trạng thái
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
