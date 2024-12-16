import  { useEffect, useState } from "react";
import { useGetProductsAdminQuery } from "../redux/createAPI";

export default function Adhome() {
  const { data: product } = useGetProductsAdminQuery();

 
  let productlist = product?.data || [];

 
  const [barData, setBarData] = useState([]);
  const [animatedBarData, setAnimatedBarData] = useState(new Array(7).fill(0)); 

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-teal-500",
  ]; 

  useEffect(() => {
   
    const sortedProducts = [...productlist]
      .sort((a, b) => b.price - a.price) 
      .slice(0  , 7); 

    const barDataValues = sortedProducts.map((item) => item.price); 
    setBarData(barDataValues);
  }, [productlist]);

 
  useEffect(() => {
    if (barData.length > 0) {
      // Thực hiện hiệu ứng trượt lên
      const maxHeight = Math.max(...barData); // Tính chiều cao tối đa của cột
      const increment = (maxHeight / 50); // Chia nhỏ sự tăng dần
      let currentValues = new Array(7).fill(0); // Bắt đầu từ 0

      const animate = () => {
        let finished = true;
        currentValues = currentValues.map((value, index) => {
          if (value < barData[index]) {
            finished = false;
            return value + increment;
          }
          return value;
        });

        setAnimatedBarData([...currentValues]);

        if (!finished) {
          requestAnimationFrame(animate); 
        }
      };

      animate(); 
    }
  }, [barData]);

 
  const formatPrice = (price) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <main className="flex-1 p-4 ">
      <div className="mb-6"> 
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Sản Phẩm</h2>
        
        <div className="flex flex-col lg:flex-row gap-4">
         
          <div className="flex-1  rounded-xl  p-6 h-80 transition-transform duration-300 transform ">
            <div className="flex items-end justify-between h-48 space-x-4">
              {animatedBarData.map((price, index) => (
                <div
                  key={index}
                  className={`${colors[index]} rounded-t-md`}
                  style={{
                    width: "90px", 
                    height: `${(price / Math.max(...barData)) * 100}%`, 
                    transition: "height 0.5s ease",
                    position: "relative",
                  }}
                >
                 
                  <div
                    className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 text-black font-bold"
                    style={{ fontSize: "12px" }}
                  >
                    {formatPrice(Math.round(price))}
                  </div>
                  
                  <div
                    className="absolute bottom-[-170px] left-1/2 transform -translate-x-1/2"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    <img
                      src={productlist[index]?.image1 || '/default-image.jpg'} 
                      alt={`Product ${index + 1}`}
                      className="w-16 h-16 object-cover rounded-full mx-auto"
                    />
                   
                    <p className="mt-2 text-xs font-semibold text-gray-700">{productlist[index]?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
