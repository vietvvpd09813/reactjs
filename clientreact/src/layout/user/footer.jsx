export default function Footer() {
  return (
    <div className="mt-8 bg-black pt-9">
    <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
      <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
        <div className="md:w-[316px]">
          <p className="text-[18px] font-medium text-white"></p>
          <h1 className="text-white font-extrabold">
            <span className="text-rose-600">V-</span>watch
          </h1>
          <p />
          <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit
            non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere
            officiis enim animi placeat eaque nesciunt alias beatae id, at dicta.
          </p>
          <div className="mt-[18px] flex gap-4">
            <a className="hover:scale-110" target="_blank" href="#">
              <img
                alt="facebook icon"
                loading="lazy"
                width={36}
                height={36}
                
                decoding="async"
                data-nimg={1}
                style={{
                  color: "transparent",
                  borderRadius: "50%",   // Makes the image circular
                  objectFit: "cover",    // Ensures the image is properly contained
                  width: "36px",         // Uniform width
                  height: "36px"         // Uniform height
                }}
                src="data:image/jpeg;base64,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"
              />
            </a>
            <a className="hover:scale-110" target="_blank" href="/">
              <img
                alt="linkdin icon"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                data-nimg={1}
                style={{
                  color: "transparent",
                  borderRadius: "50%",   // Makes the image circular
                  objectFit: "cover",    // Ensures the image is properly contained
                  width: "36px",         // Uniform width
                  height: "36px"         // Uniform height
                }}
                src="data:image/png;base64,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"
              />
            </a>
            <a className="hover:scale-110" target="_blank" href="/">
              <img
                alt="instagram icon"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                data-nimg={1}
                style={{
                  color: "transparent",
                  borderRadius: "50%",   // Makes the image circular
                  objectFit: "cover",    // Ensures the image is properly contained
                  width: "36px",         // Uniform width
                  height: "36px"         // Uniform height
                }}
                src="data:image/png;base64,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"
              />
            </a>
            <a className="hover:scale-110" target="_blank" href="">
              <img
                alt="twitter icon"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                data-nimg={1}
                style={{
                  color: "transparent",
                  borderRadius: "50%",   // Makes the image circular
                  objectFit: "cover",    // Ensures the image is properly contained
                  width: "36px",         // Uniform width
                  height: "36px"         // Uniform height
                }}
                src="data:image/png;base64,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"
              />
            </a>
            <a
              className="hover:scale-110"
              target="_blank"
              href="https://www.youtube.com/"
            >
              <img
                alt="youtube icon"
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                data-nimg={1}
                style={{
                  color: "transparent",
                  borderRadius: "50%",   // Makes the image circular
                  objectFit: "cover",    // Ensures the image is properly contained
                  width: "36px",         // Uniform width
                  height: "36px"         // Uniform height
                }}
                src="data:image/png;base64,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"
              />
            </a>
          </div>
        </div>
        <div className="md:w-[316px]">
          <div className="mt-[23px] flex">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-[18px]">
              <a
                href="tel:+911800123444"
                className="font-Inter text-[14px] font-medium text-white"
              >
                +91 1800123444
              </a>
              <p className="font-Inter text-[12px] font-medium text-white">
                Support Number
              </p>
            </div>
          </div>
          <div className="mt-[23px] flex">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
              <svg
                width={20}
                height={15}
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-[18px]">
              <a
                href="mailto:help@lorem.com"
                className="font-Inter text-[14px] font-medium text-[#fff]"
              >
                help@lorem.com
              </a>
              <p className="font-Inter text-[12px] font-medium text-[#fff]">
                Support Email
              </p>
            </div>
          </div>
          <div className="mt-[23px] flex">
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
              <svg
                width={18}
                height={21}
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="ml-[18px]">
              <a
                href="mailto:help@lorem.com"
                className="font-Inter text-[14px] font-medium text-[#fff]"
              >
                Sub Nerul, Mumbia, India, 123456
              </a>
              <p className="font-Inter text-[12px] font-medium text-white">
                Address
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
          <div className="">
            <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">
              Pages
            </p>
            <ul>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/our-tutors"
                >
                  News
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/become-a-tutor"
                >
                  Contact
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/plans-and-pricing"
                >
                  Plans and pricing
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/terms-and-conditions"
                >
                  Terms and conditions
                </a>
              </li>
              <li className="mt-[15px]">
                <a
                  className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold"
                  href="/privacy-policy"
                >
                  Privcay policy
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:mt-0">
            <p className="text-deutziawhite font-inter text-[18px] font-medium">
              Download the app
            </p>
            <div className="flex gap-4 sm:flex-col">
              <a target="_blank" href="#">
                <img
                  alt="facebook icon"
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  style={{
                    color: "transparent",
                    borderRadius: "10%",   // Makes the image circular
                    objectFit: "cover",    // Ensures the image is properly contained
                    width: "60px",         // Uniform width
                    height: "60px"         // Uniform height
                  }}
                  src="data:image/jpeg;base64,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"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  alt="facebook icon"
                  loading="lazy"
                  width={60}
                  height={60}
                  decoding="async"
                  data-nimg={1}
                  style={{
                    color: "transparent",
                    borderRadius: "10%",   // Makes the image circular
                    objectFit: "cover",    // Ensures the image is properly contained
                    width: "60px",         // Uniform width
                    height: "60px"         // Uniform height
                  }}
                  src="data:image/jpeg;base64,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"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[30px] text-white" />
      <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
        <p className="text-[10px] font-normal text-white md:text-[12px]">
          © Copyright
          {/* */}2024
          {/* */}, All Rights Reserved by YOUR WEBSITES. PVT. LTD
        </p>
      </div>
    </div>
  </div>
  
  );
}