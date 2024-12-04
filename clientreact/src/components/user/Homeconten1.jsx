import React from "react";
import { Link } from "react-router-dom";
import Homeitem1 from "./Homeitem1";

export default function Homeconten1({ product }) {
  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Sản phẩm mới
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {product.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={index}>  {/* Sử dụng Link để điều hướng */}
              <Homeitem1 item={item} />  {/* Item sẽ được truyền vào Homeitem1 */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
