import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetProductDetailQuery } from "../../redux/createAPI";
import Homecomment from "./Homecomment";
import Detailitem from "./Detailitem";
import { useGetProductsAdminQuery } from "../../redux/createAPI";

export default function Homedetail() {
  const { data: prodcut10 } = useGetProductsAdminQuery();
  const listproduct = prodcut10?.data;
  console.log("/alksndlask", listproduct);

  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
    refetch,
  } = useGetProductDetailQuery(id);
  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (isLoading) {
    return <div className="text-center py-8 text-lg">Đang tải sản phẩm...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-8 text-lg text-red-600">
        Có lỗi xảy ra khi tải sản phẩm.
      </div>
    );
  }

  if (!id || !product?.data) {
    return (
      <div className="text-center py-8 text-lg text-red-600">
        Không tìm thấy sản phẩm.
      </div>
    );
  }

  const productData = product?.data;

  const categoryId = productData?.categoryId;
  const relatedProducts = listproduct?.filter(
    (item) => item.categoryId === categoryId && item.id !== productData.id
  );

  return (
    <>
      <Detailitem productData={productData} refetch={refetch} />

      <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <div className="flex overflow-x-auto gap-6 px-4 scrollbar-hide">
          {relatedProducts?.map((item, index) => (
            <Link to={`/detail/${item.id}`} key={item.id}>
              <div className="max-w-xs w-full flex-shrink-0">
                <div className="bg-white w-[290px] h-[370px] rounded-2xl border-2 border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition duration-300 mb-10">
                  <div className="relative">
                    <div className="flex justify-center items-center h-[220px]">
                      <img
                        src={
                          item.image1 ||
                          "https://readymadeui.com/images/product9.webp"
                        }
                        alt={item.name}
                        className="object-cover w-[180px] h-[180px] rounded-t-2xl"
                      />
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                      {item.name}
                    </h2>

                    <div className="flex items-center justify-between mb-3">
                      {item.price2 && (
                        <span className="text-xs font-medium text-gray-400 line-through mr-2">
                          {item.price2.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      )}

                      {/* New Price */}
                      <span className="text-sm font-semibold text-blue-600">
                        {item.price &&
                          item.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Homecomment productId={id} />
    </>
  );
}
