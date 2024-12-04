// import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoginMutation } from '../../redux/createAPI';
import "react-toastify/dist/ReactToastify.css";
import { setUser } from '../../redux/slice/authSlice';

export default function Login() {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleLogin(data) {
    let dataLogin = await login(data);
    console.log('data login:', dataLogin.data.data);

    // Kiểm tra status và isActive từ phản hồi
    if (dataLogin.data.status === 200) {
      const { accessToken, refreshToken, role, username, email, id, isActive } = dataLogin.data.data;

      if (!isActive) {
        // Nếu isActive = false, thông báo tài khoản bị khoá
        Swal.fire({
          icon: "error",
          title: "Tài khoản bị khoá",
          text: "Tài khoản của bạn đã bị khoá. Vui lòng liên hệ với quản trị viên.",
        });
      } else {
        // Nếu isActive = true, đăng nhập thành công
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("userId", id);

        const userInfo = { role, username, email, id };  
        dispatch(setUser({ ...userInfo }));

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Đăng nhập thành công!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          if (role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        });
      }
    } else {
      console.error("Login failed:");
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: dataLogin.data.message || "Đăng nhập không thành công!",
      });
    }
  }

  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit(handleLogin)}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">User name</label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    {...register("email", { required: true })}
                    type="text"
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter user name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={10} cy={7} r={6} />
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    />
                  </svg>
                </div>
                {errors.email?.type === "required" && (
                  <small className="text-red-500">This email is required</small>
                )}
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    {...register("password", { required: true, maxLength: 20 })}
                    type="password"
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    />
                  </svg>
                </div>
                {errors.password?.type === "required" && (
                  <small className="text-red-500">This password is required</small>
                )}
                {errors.password?.type === "maxLength" && (
                  <small className="text-red-500">Password must be less than 10 characters</small>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm text-gray-800"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>

              <p className="text-gray-800 text-sm !mt-8 text-center">
                {/* Don't have an account?{" "} */}
                <Link
                  to="/register"
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
