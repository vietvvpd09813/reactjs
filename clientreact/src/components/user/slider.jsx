import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://media.licdn.com/dms/image/v2/C5112AQEaaI6z3NxGLQ/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1520238935596?e=1735171200&v=beta&t=jl-XgafPwa3291jO5ow7ff3TuFDKa8x7V_yRxxsOCRw",
    "https://intphcm.com/data/upload/poster-giay-dep-mat.jpg",
    "https://file.hstatic.net/1000230642/collection/3_da9a91027cd0488581c18e767bd6e453.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Set up an interval to automatically move the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="max-w-full mx-auto">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full shrink-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover" // Cập nhật chiều cao cố định cho ảnh
              />
            </div>
          ))}
        </div>
        
        {/* Slider controls */}
        <button
          className="absolute top-1/2 left-0 z-30 p-2 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <GrFormPrevious />
        </button>
        <button
          className="absolute top-1/2 right-0 z-30 p-2 text-white bg-black bg-opacity-50 rounded-full transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <MdNavigateNext />
        </button>
        
        {/* Slider indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-white dark:bg-gray-800"
                  : "bg-white/50 dark:bg-gray-800/50 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
