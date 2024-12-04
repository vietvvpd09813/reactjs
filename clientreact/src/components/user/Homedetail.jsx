import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductDetailQuery } from '../../redux/createAPI'; // Import hook từ Redux Toolkit
import Homecomment from './Homecomment'; // Giả sử bạn muốn giữ phần bình luận
import Detailitem from './Detailitem'; // Import component Detailitem
import { useGetProductsAdminQuery } from "../../redux/createAPI";
import List from './List';


export default function Homedetail() {
    const {data : prodcut10} = useGetProductsAdminQuery();


  let listproduct = prodcut10?.data;
  console.log(listproduct);
  const { id } = useParams(); // Lấy id từ URL

  // Gọi API lấy chi tiết sản phẩm
  const { data: product, error, isLoading } = useGetProductDetailQuery(id);

  // Kiểm tra trạng thái loading và error
  if (isLoading) {
    return <div className="text-center py-8 text-lg">Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-lg text-red-600">Có lỗi xảy ra khi tải sản phẩm.</div>;
  }

  // Kiểm tra nếu không có id hoặc không có sản phẩm
  if (!id || !product?.data) {
    return <div className="text-center py-8 text-lg text-red-600">Không tìm thấy sản phẩm.</div>;
  }

  // Lấy dữ liệu sản phẩm từ `product?.data`
  const productData = product?.data;

  return (
    <>
      {/* Truyền productData vào component Detailitem */}
      <Detailitem productData={productData} />
   
      {/* Phần bình luận */}
      <Homecomment />
    </>
  );
}
