import Homeconten1 from "./Homeconten1";
import Homeproductsale from "./Homeproductsale";
import Homevideo from "./Homevideo";
import List from "./List";
import Slider from "./slider";
import Camvar from "./canvar"
import { useGetProductsAdminQuery } from "../../redux/createAPI";

export default function HomeUser() {
  const {
    data: productResponse,
    error,
    isLoading,
  } = useGetProductsAdminQuery();

  const product = productResponse?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const productsCategory5 = product?.filter((item) => item.categoryId === 5);
  const productsCategory6 = product?.filter((item) => item.categoryId === 6);

  console.log("Products with categoryId = 5:", productsCategory5);
  console.log("Products with categoryId = 5:", productsCategory6);

  return (
    <>
      <Slider />

      <Homeconten1 productsCategory5={productsCategory5} />

      <Homeproductsale />
      <Homevideo />

      <List productsCategory6={productsCategory6} />
      <Camvar></Camvar>
    </>
  );
}
