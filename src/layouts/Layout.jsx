// src/components/Layout.jsx
import Banner from "./Banner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Banner />
      <Navbar />
      <main style={{ padding: "1rem" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
