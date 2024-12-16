import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../redux/createAPI";
import "react-toastify/dist/ReactToastify.css";
import { setUser } from "../../redux/slice/authSlice";

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
    console.log("data", data);

    let dataLogin = await login(data);
    console.log("data login:", dataLogin.data.data);

   
    if (dataLogin.data.status === 200) {
      const { accessToken, refreshToken, role, username, email, id, isActive } =
        dataLogin.data.data;

      if (!isActive) {
       
        Swal.fire({
          icon: "error",
          title: "Tài khoản bị khoá",
          text: "Tài khoản của bạn đã bị khoá. Vui lòng liên hệ với quản trị viên.",
        });
      } else {
     
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
    <div className="bg-gray-50 font-sans">
  <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-50 text-gray-900">
    <section className="flex w-[30rem] flex-col space-y-10">
      <div className="text-center text-4xl font-medium text-indigo-700">Log In</div>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-8">
        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            name="email"
            {...register("email", { required: true })}
            type="text"
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
          />
          {errors.email?.type === "required" && (
            <small className="text-red-500">This email is required</small>
          )}
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            name="password"
            {...register("password", { required: true, maxLength: 20 })}
            type="password"
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
          />
          {errors.password?.type === "required" && (
            <small className="text-red-500">
              This password is required
            </small>
          )}
          {errors.password?.type === "maxLength" && (
            <small className="text-red-500">
              Password must be less than 20 characters
            </small>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-3 text-gray-500">
              Remember me
            </label>
          </div>
          <a
            href="javascript:void(0);"
            className="text-indigo-500 hover:underline font-semibold"
          >
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-500 w-full"
        >
          LOG IN
        </button>
      </form>

      <p className="text-center text-lg text-gray-700">
        No account?{" "}
        <Link
          to="/register"
          href="#"
          className="font-medium text-indigo-600 underline-offset-4 hover:underline"
        >
          Create One
        </Link>
      </p>
    </section>
  </main>
</div>

  );
}
