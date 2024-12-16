import { useState, useEffect } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://macad.vn/upload/banner-watch-seri4.jpg",
    "https://cdnv2.tgdd.vn/mwg-static/topzone/Banner/92/27/9227efc5a1f954b26084be2b28d33a6e.png",
    "https://taoquangsang.vn/wp-content/uploads/2023/09/apple-watch-banner-1.jpg"
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
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full shrink-0 ">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] object-cover image-rendering-crisp-edges" // Add image-rendering for sharpness
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
