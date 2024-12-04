import Homeconten1 from "./Homeconten1";
import Homeproductsale from "./Homeproductsale";
import Homevideo from "./Homevideo";
import List from "./List";
import Slider from "./slider";
import { useGetProductsAdminQuery } from "../../redux/createAPI";

export default function HomeUser() {
  // Truy vấn dữ liệu từ API
  const { data: productResponse, error, isLoading } = useGetProductsAdminQuery();

  // Gán dữ liệu sản phẩm từ productResponse
  const product = productResponse?.data;

  // Log dữ liệu sản phẩm ra console (truy cập vào product)
  console.log('Product DataGHGH:', useGetProductsAdminQuery());
  console.log('Product Data:', product);

  // Kiểm tra trạng thái loading và lỗi
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;

  }

  return (
    <>
      <Slider />
      {/* Truyền biến product vào Homeconten1 */}
      <Homeconten1 product={product} />
      <Homeproductsale />
      <Homevideo />
     <List product={product}  />
    </>
  );
}
