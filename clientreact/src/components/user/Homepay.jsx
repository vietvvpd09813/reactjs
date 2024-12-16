import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { useState } from 'react';
import { useGetAllCartsQuery, useNewOrderItemMutation, useNewOrderMutation,useDeleteAllCartsMutation } from '../../redux/createAPI';

export default function Homepay() {
  const [addOrders] = useNewOrderMutation();
  const [deleteAllCarts] = useDeleteAllCartsMutation();
  const [addOrderItem] = useNewOrderItemMutation();
  const [userId, setUserId] = useState(localStorage.getItem("userId") || '');

  const { data: cart, refetch } = useGetAllCartsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  const datacart = cart?.data || [];

  // Tính tổng số lượng và tổng giá trị trong giỏ hàng
  const tongSoLuong = datacart.reduce((total, item) => total + item.quantity, 0);
  const tongTien = datacart.reduce((total, item) => total + item.product.price * item.quantity, 0);

  // Khai báo các biến trạng thái để lưu giá trị nhập từ form
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [redirect, setRedirect] = useState(false); // Biến điều hướng

  // Hàm xử lý khi người dùng thanh toán
  async function add(event) {
    event.preventDefault();

    // Kiểm tra ràng buộc không để trường trống
    if (!fullName || !email || !address || !phoneNumber) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Vui lòng điền đầy đủ thông tin!',
        background: 'white',
        color: 'black',
        showConfirmButton: true,
      });
      return;
    }

    try {
      const fullname = fullName;
      const phone = phoneNumber;
      const totalPrice = tongTien;
      const orders = { fullname, address, phone, totalPrice, userId };

      const responseOrders = await addOrders({ body: orders });
      const orderId = responseOrders.data.order.id;

      const newBody = { orderId, datacart };

      const orderItems = await addOrderItem({ body: newBody });
      await deleteAllCarts(userId);

     
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Thanh toán thành công!',
        background: 'white',
        color: 'black',
        showConfirmButton: false,
        timer: 1500
      });

      // Chuyển hướng về trang chủ sau khi thanh toán thành công
      setRedirect(true);
    } catch (error) {
      console.error('Error during the API request', error);
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Đã xảy ra lỗi! Vui lòng thử lại.',
        background: '#1e3a8a',
        color: '#ffffff',
        showConfirmButton: true,
      });
    }
  }

  // Nếu thanh toán thành công, chuyển hướng về trang chủ
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="font-[sans-serif] bg-white mx-10 my-10">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <ToastContainer />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Thanh toán
              </h2>
            </div>
            <form className="lg:mt-16">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Thông tin</h2>
                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <input
                      type="text"
                      placeholder="Họ và tên"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)} 
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Địa chỉ email"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Địa chỉ"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)} 
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Số điện thoại"
                      className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)} 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={add}
                  type="button"
                  className="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Thanh toán
                </button>
              </div>
            </form>
          </div>

          <div className="bg-gray-100 lg:h-screen lg:sticky lg:top-0">
            <div className="relative h-full">
              <div className="p-6 overflow-auto max-lg:max-h-[400px] lg:h-[calc(100vh-60px)] max-lg:mb-8">
                <h2 className="text-xl font-bold text-gray-800">Tóm tắt đơn hàng</h2>
                <div className="space-y-8 mt-8">
                  {datacart.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="max-w-[140px] p-4 shrink-0 bg-gray-200 rounded-lg">
                        <img
                          src={item.product.image1 || 'default-image.jpg'} 
                          className="w-full object-contain"
                          alt={item.product.name}
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-gray-800 font-bold">
                          {item.product.name}
                        </h3>
                        <ul className="text-sm text-gray-800 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">
                            Số lượng <span className="ml-auto">{item.quantity}</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Tổng giá <span className="ml-auto">{(item.product.price * item.quantity).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                  Tổng số lượng <span className="ml-auto">{tongSoLuong}</span>
                </h4>
                <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                  Tổng cộng <span className="ml-auto">{tongTien.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
