// MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      {/* Resets scroll position on every route change */}
      <ScrollToTop />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default MainLayout;