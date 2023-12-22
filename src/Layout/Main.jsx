import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Sheared/Navbar/Navbar";
import Footer from "../Pages/Sheared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-270px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
