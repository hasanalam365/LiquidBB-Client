import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Home } from "lucide-react";

const PageNavButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed z-50 flex flex-col gap-3 bottom-6 right-6">

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-white text-cyan-600 shadow-[0_4px_20px_rgba(8,20,24,.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-50 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* Back To Home */}
      <Link
        to="/"
        aria-label="Back to home"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400 text-[#041317] shadow-[0_4px_20px_rgba(34,211,238,.25)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-300"
      >
        <Home size={20} />
      </Link>

    </div>
  );
};

export default PageNavButtons;