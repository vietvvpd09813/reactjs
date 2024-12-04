import { useState } from 'react';

export default function Adorder() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 1,
      items: [
        { productId: 1, name: 'Điện thoại thông minh', price: 10000000, quantity: 2 },
        { productId: 2, name: 'Laptop', price: 20000000, quantity: 1 },
      ],
      total: 40000000,
      status: 'Đã giao',
    },
    {
      id: 2,
      items: [
        { productId: 3, name: 'Tai nghe Bluetooth', price: 1500000, quantity: 1 },
      ],
      total: 1500000,
      status: 'Đang xử lý',
    },
    // Add more orders as needed
  ];

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Đơn Hàng Của Tôi</h1>

      {/* Orders Table */}
      <table className="min-w-full divide-y divide-gray-200 mb-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Đơn</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tổng giá</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {orders.map(order => (
            <tr key={order.id} onClick={() => handleOrderClick(order)} className="cursor-pointer hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.total.toLocaleString()} VND</td>
              <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out">
                  Xem chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Overlay and Selected Order Details */}
      {selectedOrder && (
        <div  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div id="kkk" className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold">Chi tiết đơn hàng #{selectedOrder.id}</h3>
            <table className="min-w-full divide-y divide-gray-200 mt-2">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số lượng</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {selectedOrder.items.map(item => (
                  <tr key={item.productId}>
                    <td className="px-4 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap">{item.price.toLocaleString()} VND</td>
                    <td className="px-4 py-4 whitespace-nowrap">{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2">
              <strong>Tổng giá: </strong>
              {selectedOrder.total.toLocaleString()} VND
            </div>
            <button
              className="mt-4 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              onClick={handleCloseOrderDetails}
            >
              Đóng
            </button>
          </div>
        </div>
      )}
    </>
  );
}