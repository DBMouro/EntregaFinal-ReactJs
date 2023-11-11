import { Navbar } from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";
import Principal from "./principal/Principal";

const Layout = () => {
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      <div style={{ height: "40vh" }}>
        <Principal />
      </div>
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <div style={{ height: "10vh" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
