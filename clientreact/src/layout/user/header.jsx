import { Link, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate();
  function logout(){
    
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("User logged out");

    navigate("/login");
  }
  return (
    
    <header className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50">
  <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
    <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 192.904 192.904"
        width="20px"
        className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block"
      >
        <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
      </svg>
      <input
     
        type="text"
        placeholder="Search..."
        className="outline-none bg-transparent w-full text-sm"
      />
    </div>
    
    <a href="javascript:void(0)" className="shrink-0">
      <img id="logoa"
        src="https://classic.vn/wp-content/uploads/2020/05/logo-ngang.png"

        alt="logo"
        className="md:w-[170px] w-36"
      />
    </a>
   
    <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
    <Link to="order">
  <span className="relative">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
      viewBox="0 0 64 64"
    >
      <path
        d="M20 54a4 4 0 1 1 0-8h32a4 4 0 1 1 0 8H20zm0-4h32v-4H20v4zm34-8H10a2 2 0 0 1-1.94-1.5L1.2 11H0V9.5A2.5 2.5 0 0 1 2.5 7h1a2.5 2.5 0 0 1 2 2H16a2 2 0 0 1 1.94 1.5L20 19h32a4 4 0 0 1 3.84 5l-4.12 16.5A2 2 0 0 1 48 43H20a4 4 0 1 1 0-8h26l3.56-14h-32l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5l1.44 5.5a4 4 0 0 1-3.84 5H14a2 2 0 0 1-1.94-1.5L10 19H6.5a2.5 2.5 0 0 1-2.5-2.5V9.5C4 8.67 4.67 8 5.5 8h1A2.5 2.5 0 0 1 9 10.5V12h3l1.5 6H48l4-16a2 2 0 0 1 1.76-1.5H54a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-1.76l-4 16H20a4 4 0 1 1 0-8h26l2.5-10H10l-1.5-6H5.5A2.5 2.5 0 0 1 3 9.5V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V9.5A2.5 2.5 0 0 1 6.5 12H4l1.5 6H12l2.5-10H9.5C8.67 8 8 8.67 8 9.5V10a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 9.5V8c0-1.33 1-2 2-2h1a2 2 0 0 1 2 2v1.5A2.5 2.5 0 0 1 9 10h1.5l2.5 10h32a4 4 0 0 1 3.84 5l-4.12 16.5A2 2 0 0 1 48 43H20a4 4 0 0 1 0-8h26l3.56-14H10l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5L48 43H20a4 4 0 1 1 0-8h26l3.56-14H10l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5l1.44 5.5a4 4 0 0 1-3.84 5H14a2 2 0 0 1-1.94-1.5L10 19H6.5a2.5 2.5 0 0 1-2.5-2.5V9.5C4 8.67 4.67 8 5.5 8h1A2.5 2.5 0 0 1 9 10.5V12h3l1.5 6H48l4-16a2 2 0 0 1 1.76-1.5H54a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-1.76l-4 16H20a4 4 0 1 1 0-8h26l2.5-10H10l-1.5-6H5.5A2.5 2.5 0 0 1 3 9.5V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V9.5A2.5 2.5 0 0 1 6.5 12H4l1.5 6H12l2.5-10H9.5C8.67 8 8 8.67 8 9.5V10a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 9.5V8c0-1.33 1-2 2-2h1a2 2 0 0 1 2 2v1.5A2.5 2.5 0 0 1 9 10h1.5l2.5 10h32a4 4 0 0 1 3.84 5l-4.12 16.5A2 2 0 0 1 48 43H20a4 4 0 1 1 0-8h26l3.56-14H10l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5L48 43H20a4 4 0 0 1 0-8h26l3.56-14H10l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5l1.44 5.5a4 4 0 0 1-3.84 5H14a2 2 0 0 1-1.94-1.5L10 19H6.5a2.5 2.5 0 0 1-2.5-2.5V9.5C4 8.67 4.67 8 5.5 8h1A2.5 2.5 0 0 1 9 10.5V12h3l1.5 6H48l4-16a2 2 0 0 1 1.76-1.5H54a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-1.76l-4 16H20a4 4 0 1 1 0-8h26l2.5-10H10l-1.5-6H5.5A2.5 2.5 0 0 1 3 9.5V8c0-1.33 1-2 2-2h1a2 2 0 0 1 2 2V9.5A2.5 2.5 0 0 1 9 10h1.5l2.5 10h32a4 4 0 0 1 3.84 5l-4.12 16.5A2 2 0 0 1 48 43H20a4 4 0 1 1 0-8h26l3.56-14H10l-2.5-10H4.5L6 19h32a2 2 0 0 1 1.94 1.5l1.44 5.5a4 4 0 0 1-3.84 5H14a2 2 0 0 1-1.94-1.5L10 19H6.5a2.5 2.5 0 0 1-2.5-2.5V9.5C4 8.67 4.67 8 5.5 8h1A2.5 2.5 0 0 1 9 10.5V12h3l1.5 6H48l4-16a2 2 0 0 1 1.76-1.5H54a2 2 0 0 1 2 2v1.5a2 2 0 0 1-2 2h-1.76l-4 16H20a4 4 0 1 1 0-8h26l2.5-10H10l-1.5-6H5.5A2.5 2.5 0 0 1 3 9.5V8c0-1.33 1-2 2-2h1a2 2 0 0 1 2 2z"
      />
    </svg>
    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
      1
    </span>
  </span>
</Link>
      <Link to ="cart"><span className="relative"> 
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block"
          viewBox="0 0 512 512"
        >
          <path
            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
            data-original="#000000"
          />
        </svg>
        <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
          4
        </span>
      </span></Link>
     <kj onClick={logout}> <div className="inline-block cursor-pointer border-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          className="hover:fill-[#007bff]"
        >
          <circle cx={10} cy={7} r={6} data-original="#000000" />
          <path
            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
            data-original="#000000"
          />
        </svg>
      </div></kj>
     
    </div>
  </section>
  <div className="flex flex-wrap justify-center px-10 py-3 relative">
    <div
      id="collapseMenu"
      className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
    >
      
      <button
        id="toggleClose"
        className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 fill-black"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          />
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          />
        </svg>
      </button>
      <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
        <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
          <a href="javascript:void(0)">
            
            <img
              src="https://readymadeui.com/readymadeui.svg"
              
              alt="logo"
              className="w-36"
            />
          </a>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <Link to = ""
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]"
          >
            Trang chủ
          </Link>
        </li>
       
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <Link to = "product"
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            Sản phẩm
          </Link>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            Chi nhánh
          </a>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            Khuyến mãi
          </a>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            liên hệ
          </a>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            Blog
          </a>
        </li>
        <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
          <a
            href="javascript:void(0)"
            className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
          >
            Tuyển dụng
          </a>
        </li>
        <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
  <a
    href="javascript:void(0)"
    className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
  >
    Thao tác 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      className="ml-1 inline-block"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
        data-name={16}
        data-original="#000000"
      />
    </svg>
  </a>
  <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
  
    <li className="border-b py-3">
      <Link to="/login"
        
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 17l5-5-5-5v4H3v2h7v4zm9-11V4h-4V2h-2v2h-4V2h-2v2H4v2H2v2h2v6h2v-6h4v6h2v-6h4v6h2v-6h2V8h-2z"
            fill="#000000"
          />
        </svg>
        Đăng nhập
      </Link>
    </li>

   
    <li className="border-b py-3">
      <Link to="/login"
        
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 3c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0-2c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zM12 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0 6c2.21 0 4 1.79 4 4v6h-8v-6c0-2.21 1.79-4 4-4zm0-1c-3.31 0-6 2.69-6 6v7h12v-7c0-3.31-2.69-6-6-6z"
            fill="#000000"
          />
        </svg>
        Đăng ký
      </Link>
    </li>

   
    <li className="border-b py-3">
      <Link to="/admin"
        
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2h14c1.1 0 1.99-.9 1.99-2L21 5c0-1.1-.89-2-1.99-2zm-7 14H9v-2h3v2zm0-4H9v-2h3v2zm0-4H9V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2z"
            fill="#000000"
          />
        </svg>
        Quản trị viên
      </Link>
    </li>

 
    <li className="border-b py-3">
      <a
        href="/shoes/men"
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2z"
            fill="#000000"
          />
        </svg>
        Giày Nam
      </a>
    </li>

 
    <li className="border-b py-3">
      <a
        href="/shoes/women"
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-12h2v6h-2z"
            fill="#000000"
          />
        </svg>
        Giày Nữ
      </a>
    </li>

  
    <li className="border-b py-3">
      <a
        href="/shoes/sports"
        className="hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          className="mr-4 inline-block"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2z"
            fill="#000000"
          />
        </svg>
        Giày Thể Thao
      </a>
    </li>
  </ul>
</li>

      </ul>
    </div>
    <div id="toggleOpen" className="flex ml-auto lg:hidden">
      <button>
        <svg
          className="w-7 h-7"
          fill="#000"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

  )
}
