import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../redux/createAPI";
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
  
    const registrationData = {
      username: data.username,
      email: data.email,
      password: data.password,
      cpassword: data.cpassword,
      image: data.image, 
    };
   

  
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
      title: "Đăng kí thành công",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/login");
    });
  }

  return (
    <div className="bg-gray-50 font-sans">
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-50 text-gray-900">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium text-indigo-700">register</div>
  
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-8">
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="username"
              {...register("username", { required: true })}
              type="text"
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
            />
            {errors.username?.type === "required" && (
              <small className="text-red-500">
                This username is required
              </small>
            )}
          </div>
  
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="email"
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
            />
            {errors.email?.type === "required" && (
              <small className="text-red-500">This email is required</small>
            )}
          </div>
  
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
            />
            {errors.password?.type === "required" && (
              <small className="text-red-500">
                This password is required
              </small>
            )}
          </div>
  
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
            />
          </div>
  
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              name="image"
              {...register("image", { required: true })}
              type="text"
              placeholder="Profile Image URL"
              className="w-full border-none bg-transparent outline-none placeholder:text-gray-400 focus:outline-none text-gray-900"
            />
            {errors.image?.type === "required" && (
              <small className="text-red-500">
                This image URL is required
              </small>
            )}
          </div>
  
          <div className="mt-8">
            <button
              type="submit"
              className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-500 w-full"
            >
              Create an account
            </button>
          </div>
        </form>
  
        <p className="text-center text-lg text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-indigo-600 underline-offset-4 hover:underline"
          >
            Login here
          </Link>
        </p>
      </section>
    </main>
  </div>
  
  );
}
