import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./layout/user/header";
import Footer from "./layout/user/footer";
import ScrollToTop from "./components/user/tritri"
const Root = () => {
  return (
    <>
      <Header />
    <ScrollToTop></ScrollToTop>
      <main>
   
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
