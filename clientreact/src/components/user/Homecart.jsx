import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useGetAllCartsQuery, useDeleteCartMutation } from "../../redux/createAPI";
import { Link } from "react-router-dom";

export default function Homecart() {
  const [deleteCart] = useDeleteCartMutation();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const { data: cart, refetch } = useGetAllCartsQuery(userId, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (!userId) {
      toast.error("Bạn chưa đăng nhập!");
    }
  }, [userId]);

  const handleDeleteCart = async (id) => {
    try {
      await deleteCart(id); // Gửi yêu cầu xóa sản phẩm
      refetch(); // Làm mới danh sách sản phẩm sau khi xóa
      toast.success("Đã xóa sản phẩm khỏi giỏ hàng");
    } catch (error) {
      toast.error("Xóa sản phẩm không thành công");
    }
  };

  const datacart = cart?.data || [];

  if (!userId) {
    return (
      <div className="font-sans bg-white py-4 mx-auto mx-10">
        <ToastContainer />
        <p className="text-red-500 text-xl">Bạn chưa đăng nhập!</p>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white py-4 mx-auto mx-10">
      <ToastContainer />
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Giỏ hàng</h2>
          <hr className="border-gray-300 mt-4 mb-8" />
          {datacart.length > 0 ? (
            datacart.map((item, index) => (
              <div key={index} className="grid md:grid-cols-4 items-center gap-4 py-4">
                <div className="col-span-2 flex items-center gap-6">
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src={item.product.image1 || "https://readymadeui.com/images/product14.webp"}
                      className="w-full h-full object-contain"
                      alt={item.productName}
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-800">{item.product.name || "Product Name"}</h3>
                    <h6 className="text-sm text-gray-500 mt-1">
                      Color: <span className="ml-2 font-semibold">{item.color || "Black/White"}</span>
                    </h6>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 124 124">
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">{item.quantity}</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2 fill-white" viewBox="0 0 42 42">
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <h4 className="text-base font-bold text-gray-800">
                    {(item.product.price || 0).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                  </h4>
                  <button
                    onClick={() => handleDeleteCart(item.id)}
                    className="w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center ml-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 fill-white"
                      viewBox="0 0 320.591 320.591"
                    >
                      <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                      <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Giỏ hàng của bạn đang trống.</p>
          )}
        </div>

        <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-base">
              Giảm giá <span className="ml-auto font-bold">$0.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Vận chuyển <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base">
              Thuế <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-base font-bold">
              Tổng cộng <span className="ml-auto">$52.00</span>
            </li>
          </ul>
          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              <Link to="/pay">Thanh toán</Link>
            </button>
            <button  
              type="button"
              className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
            >
              <Link to="/">Mua sắm</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}