import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { useCreateCartMutation } from "../../redux/createAPI";

export default function Detailitem( productData ) {
  const [largeImage, setLargeImage] = useState(productData.productData.image1);
  const [smallImages, setSmallImages] = useState([productData.productData.image2, productData.productData.image3]);
  const [addCart] = useCreateCartMutation();

  // Hàm thay đổi hình ảnh khi nhấn vào ảnh nhỏ
  const handleImageClick = (index) => {
    const newLargeImage = smallImages[index];
    const newSmallImages = [smallImages[1 - index], largeImage];

    setLargeImage(newLargeImage); // Cập nhật hình ảnh lớn
    setSmallImages(newSmallImages); // Cập nhật hình ảnh nhỏ
  };

  // Hàm xử lý khi nhấn nút "Thêm vào giỏ hàng"
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Bạn chưa đăng nhập!');
      return;
    }

    // Lấy thông tin sản phẩm
    const product = {
      id: productData.productData.id,
      name: productData.productData.name,
      price: productData.productData.price,
      image1: productData.productData.image1,
      image2: productData.productData.image2,
      image3: productData.productData.image3,
    };

    const productId = product.id;
    const quantity = 1;
    const body = { userId, productId, quantity };

    // Log ra thông tin sản phẩm
    console.log("Thông tin sản phẩm:", product);
    console.log('UserId:', userId);

    // Thực hiện gọi API thêm sản phẩm vào giỏ hàng
    const result = await addCart(body);
    console.log('Kết quả thêm vào giỏ hàng:', result);

    // Hiển thị thông báo thành công
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Thêm sản phẩm vào giỏ hàng thành công!",
      background: "#1e3a8a",
      color: "#ffffff",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
      <ToastContainer />
      <form onSubmit={handleFormSubmit}>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Phần hình ảnh */}
          <div className="space-y-4 text-center lg:sticky top-8">
            {/* Hình ảnh lớn */}
            <div className="bg-gray-10 p-4 flex items-center sm:h-[380px] rounded-lg">
              <img
                src={largeImage}
                alt="Sản phẩm"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Hình ảnh nhỏ */}
            <div className="grid grid-cols-2 gap-4">
              {smallImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="bg-gray-10 p-4 flex items-center rounded-lg sm:h-[182px] cursor-pointer"
                >
                  <img
                    src={image}
                    alt="Sản phẩm"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="max-w-xl">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-800">{productData.productData.name}</h2>
              <p className="text-sm text-gray-600 mt-2">Thương hiệu Well-Versed Commerce</p>
            </div>

            {/* Đánh giá sao */}
            <div className="flex space-x-1 mt-4">
              {[...Array(4)].map((_, index) => (
                <svg
                  key={index}
                  className={`w-5 ${index < 3 ? "fill-yellow-400" : "fill-[#CED5D8]"}`}
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>

            {/* Giá sản phẩm */}
            <div className="mt-4">
              <h3 className="text-gray-800 text-4xl font-bold">{new Intl.NumberFormat().format(productData.productData.price)} đ</h3>
            </div>

            {/* Chọn kích thước */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Chọn kích thước</h3>
              <div className="flex flex-wrap gap-4 mt-4">
                {['SM', 'MD', 'LG', 'XL'].map((size, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                type="button"
                className="min-w-[200px] px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg"
              >
                Mua ngay
              </button>
              <button
                type="submit"
                className="min-w-[200px] px-4 py-2.5 border border-yellow-400 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-lg"
              >
                Thêm vào giỏ hàng
              </button>
            </div>

            {/* Mô tả sản phẩm */}
            <div className="mt-8">
              <ul className="flex border-b">
                <li className="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                  Mô tả
                </li>
                <li className="text-gray-600 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                  Đánh giá
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800">Mô tả sản phẩm</h3>
                <p className="text-sm text-gray-600 mt-4">
                  Đôi giày này là sự kết hợp hoàn hảo giữa sự thoải mái và thẩm mỹ hiện đại, giúp bạn tự tin hơn trong mọi hoàn cảnh. Với chất liệu mềm mại, thoáng khí, đôi giày này sẽ mang lại sự thoải mái cả ngày dài.
                </p>
              </div>
              <ul className="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                <li>Được thiết kế để dễ dàng kết hợp với nhiều trang phục.</li>
                <li>Đa dạng về kích thước, từ nhỏ đến lớn.</li>
                <li>Dễ dàng giặt và bảo quản, có thể giặt máy.</li>
                <li>Có thể cá nhân hóa bằng cách thêm họa tiết riêng.</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
