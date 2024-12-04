import Swal from 'sweetalert2'
import { ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom"


export default function Homepay() {
    const navigate = useNavigate();
    
    
    function add() {
      Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Thanh toán thành công!',
      background: '#1e3a8a', // Dark blue background
      color: '#ffffff',
      showConfirmButton: false,
      timer: 1500
    });
        // toast("Wow so easy !");
      
    
        navigate("/order")
    }
    

    return (
      <div className="font-[sans-serif] bg-white mx-10 my-10">
        <div className="max-lg:max-w-xl mx-auto w-full">
        <ToastContainer></ToastContainer>
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
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Địa chỉ email"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Địa chỉ"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Thành phố"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Tỉnh/Thành"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Mã bưu điện"
                        className="px-2 pb-2 bg-white text-gray-800 w-full text-sm border-b focus:border-blue-600 outline-none"
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
                    <div className="flex flex-col gap-4">
                      <div className="max-w-[140px] p-4 shrink-0 bg-gray-200 rounded-lg">
                        <img
                          src="https://readymadeui.com/images/product10.webp"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-gray-800 font-bold">
                          Naruto: Split Sneakers
                        </h3>
                        <ul className="text-sm text-gray-800 space-y-2 mt-2">
                          <li className="flex flex-wrap gap-4">
                            Số lượng <span className="ml-auto">2</span>
                          </li>
                          <li className="flex flex-wrap gap-4">
                            Tổng giá <span className="ml-auto">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="max-w-[140px] p-4 shrink-0 bg-gray-200 rounded-lg">
                        <img
                          src="https://readymadeui.com/images/product11.webp"
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="w-full">
                        <h3 className="text-base text-gray-800 font-bold">
                          VelvetGlide Boots
                        </h3>
                        <ul className="text-sm text-gray-800 space-y-2 mt-2">
                          <li>
                            Số lượng <span className="float-right">2</span>
                          </li>
                          <li>
                            Tổng giá <span className="float-right">$40</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:absolute lg:left-0 lg:bottom-0 bg-gray-200 w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-gray-800 font-bold">
                    Tổng cộng <span className="ml-auto">$240.00</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
