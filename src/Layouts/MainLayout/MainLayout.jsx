import React, {
  useEffect,
} from "react";

import {
  Outlet,
} from "react-router-dom";

import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import ScrollToTop from "../../Shared/ScrollToTop/ScrollToTop";

import {
  initializeAnalytics,
} from "../../analytics/analytics";

import usePageTracking from "../../hooks/usePageTracking";
import useScrollTracking from "../../hooks/useScrollTracking";


const MainLayout = () => {

  // Initialize GA4 once
  useEffect(() => {
    initializeAnalytics();
  }, []);


  // Track every SPA route/page view
  usePageTracking();


  // Track scroll depth
  useScrollTracking();


  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">

      <ScrollToTop />

      <Navbar />

      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};


export default MainLayout;