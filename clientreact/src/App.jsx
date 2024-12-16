import { useGetUsersQuery } from "./redux/createAPI";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";

export default function App() {
  const { data: user } = useGetUsersQuery();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  let image2 = ""; 
  let name2 = ""; 
  user?.data?.map((item) => {
    if (item.id == userId) {
      image2 = item.image;
      name2 = item.username
    }
  });
  console.log("userAvatar", image2);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("User logged out");

    navigate("/login");
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Responsive Dashboard</title>

      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        /* Only keeping necessary custom styles, using Tailwind classes for colors */\n        :root {\n            --header-height: 4rem;\n            --sidebar-width: 240px;\n        }\n\n        @keyframes slideDown {\n            from {\n                transform: translateY(-100%);\n                opacity: 0;\n            }\n            to {\n                transform: translateY(0);\n                opacity: 1;\n            }\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n\n        @keyframes slideUp {\n            from {\n                transform: translateY(20px);\n                opacity: 0;\n            }\n            to {\n                transform: translateY(0);\n                opacity: 1;\n            }\n        }\n\n        .animate-slide-down {\n            animation: slideDown 0.5s ease-out;\n        }\n\n        .animate-fade-in {\n            animation: fadeIn 0.5s ease-out;\n        }\n\n        .animate-slide-up {\n            animation: slideUp 0.5s ease-out forwards;\n        }\n    ",
        }}
      />
      <div className="overlay fixed inset-0 bg-indigo-900/50 z-40 hidden opacity-0 transition-opacity duration-300" />
      <header className="fixed w-full bg-white text-indigo-800 z-50 shadow-lg animate-slide-down">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
          <button className="mobile-menu-button p-2 lg:hidden">
            <span className="material-icons-outlined text-2xl">menu</span>
          </button>
          <div className="text-xl font-bold text-blue-900">
            Watch<span className="text-indigo-800">Store</span> Admin
          </div>
          <div className="flex items-center space-x-2 mr-5">
            <img
              className="w-10 h-10 rounded-full border-2 border-gray-500 transition-transform duration-300 hover:scale-110 object-cover"
              src={image2}
              alt="Profile"
            />
            <span className="text-lg font-semibold text-gray-800 ">
              {name2} 
            </span>
          </div>
        </div>
      </header>
      <div className="pt-16 max-w-7xl mx-auto flex">
        <aside className="sidebar fixed lg:static w-[240px] bg-indigo-50 h-[calc(100vh-4rem)] lg:h-auto z-45 overflow-y-auto p-4">
          <div className="bg-white rounded-xl shadow-lg mb-6 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">local_offer</span>
              <Link to=""> Home </Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">
                format_list_bulleted
              </span>
              <Link to="/admin/product"> Sản phẩm </Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">category</span>
              <Link to="/admin/danhmuc">Danh mục</Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">person</span>
              <Link to="user">Người dùng</Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">settings</span>
              <Link to="/admin/binhluan"> Bình luận</Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
            >
              <span className="material-icons-outlined mr-2">settings</span>
              <Link to="/admin/order">Đơn hàng</Link>
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
            <a
              href="#"
              className="flex items-center text-gray-600 hover:text-indigo-800 py-4 transition-all duration-300 hover:translate-x-1"
              onClick={logout} // Gọi hàm logout khi người dùng nhấn vào "Đăng xuất"
            >
              <span className="material-icons-outlined mr-2">
                power_settings_new
              </span>
              Đăng xuất
              <span className="material-icons-outlined ml-auto">
                keyboard_arrow_right
              </span>
            </a>
          </div>
        </aside>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
}
