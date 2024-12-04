import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useRegisterMutation } from '../../redux/createAPI';
import Swal from "sweetalert2";

export default function Register() {
  const navigate = useNavigate();
  const [registers] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handleRegister(data) {
    // Prepare registration data
    const registrationData = {
      username: data.username,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      image: data.image, // image URL from the input field
    };
    console.log("new111",registrationData);
    

    // Perform the registration mutation with the data
    let dataRegister = await registers(registrationData);
    console.log(dataRegister);

    if (dataRegister.error) {
      console.error("Register failed:");
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: dataRegister.error.data.message || "Đăng ký không thành công!",
      });
      return;
    }

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Register is successfully!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/login");
    });
  }

  return (
    <div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="space-y-6">
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Username</label>
              <input
                name="username"
                {...register("username", { required: true })}
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Username"
              />
              {errors.username?.type === "required" && (
                <small className="text-red-500">This username is required</small>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                {...register("email", { required: true })}
                type="email"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter email"
              />
              {errors.email?.type === "required" && (
                <small className="text-red-500">This email is required</small>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                {...register('password', { required: true })}
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter password"
              />
              {errors.password?.type === "required" && (
                <small className="text-red-500">This password is required</small>
              )}
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter confirm password"
              />
            </div>

            {/* New image URL input */}
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Profile Image URL</label>
              <input
                name="image"
                {...register("image", { required: true })}
                type="text"
                className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                placeholder="Enter Image URL"
              />
              {errors.image?.type === "required" && (
                <small className="text-red-500">This image URL is required</small>
              )}
            </div>

          </div>

          <div className="!mt-12">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Create an account
            </button>
          </div>

          <p className="text-gray-800 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
