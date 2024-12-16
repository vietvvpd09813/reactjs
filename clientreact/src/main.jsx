import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./Root.jsx";
import Home from "./components/user/home.jsx";
import HomeUser from "./components/user/HomeUser.jsx";
import Pagenot from "./components/Pagenot.jsx";
import "react-toastify/dist/ReactToastify.css";
import List from "./components/user/List.jsx";
import Item from "./layout/user/item.jsx";
import Adhome from "./components/adhome.jsx";
import UserAdmin from "./components/UserAdmin.jsx";
import Adorder from "./components/Adorder.jsx";
import Adproduct from "./components/Adrpduct.jsx";
import Homedetail from "./components/user/Homedetail.jsx";
import Addcategory from "./components/Adcategory.jsx";
import Adcomment from "./components/Adcomment.jsx";
import Homecomment from "./components/user/Homecomment.jsx";
import Homeproduct from "./components/user/Homeproduct.jsx";
import Homecart from "./components/user/Homecart.jsx";
import Homepay from "./components/user/Homepay.jsx";
import Homeorder from "./components/user/Homeorder.jsx";
import Login from "./components/user/Login.jsx";
import Homeproductsale from "./components/user/Homeproductsale.jsx";
import Homeconten1 from "./components/user/Homeconten1.jsx";
import Homevideo from "./components/user/Homevideo.jsx";
import Homeitem1 from "./components/user/Homeitem1.jsx";
import Homelogin from "./components/user/Homelogin.jsx";
import store from "./redux/store";
import { Provider } from "react-redux";
import Register from "./components/user/register.jsx";
import CanvasEffect from "./components/user/canvar.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/homelogin", element: <Homelogin /> },
  { path: "/canvar", element: <CanvasEffect /> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <HomeUser /> },
      { path: "/list", element: <List /> },
      { path: "/item", element: <Item /> },
      { path: "/product", element: <Homeproduct /> },
      { path: "/cart", element: <Homecart /> },
      { path: "/pay", element: <Homepay /> },
      { path: "/order", element: <Homeorder /> },
      { path: "", element: <Homeproductsale /> },
      { path: "", element: <Homeconten1 /> },
      { path: "", element: <Homevideo /> },
      { path: "", element: <Homeitem1 /> },
      { path: "/detail/:id", element: <Homedetail /> },
      { path: "/homecomment", element: <Homecomment /> },
      { path: "contact", element: <h2>contact</h2> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { path: "products", element: <Home /> },
      { path: "product", element: <Adproduct /> },
     
      { path: "", element: <Adhome /> },
      { path: "user", element: <UserAdmin /> },
      { path: "danhmuc", element: <Addcategory /> },
      { path: "binhluan", element: <Adcomment /> },
      { path: "order", element: <Adorder /> },
    ],
  },
  { path: "*", element: <Pagenot /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
