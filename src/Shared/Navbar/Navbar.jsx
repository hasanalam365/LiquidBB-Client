import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 const navLinks = [
  { name: "About", id: "about" },
  { name: "Benefits", id: "benefits" },
  // { name: "Highlights", id: "highlights" },
  // { name: "Why Us", id: "why-us" },
  { name: "FAQ", id: "faq" },
];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-[#050B0D]" />

      {/* Main Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.16),transparent_65%)]" />

      {/* Left Glow */}
      <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-32 h-[450px] w-[900px] rounded-full bg-cyan-400/10 blur-[200px]" />

      {/* Right Glow */}
      <div className="absolute -right-20 top-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Blur */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/20" />

      {/* ================= Navbar ================= */}

      <div className="relative flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">

        {/* Logo

        <Link to="/" className="flex items-center">
          <img
            src="DEMOLOGO"
            alt="Logo"
            className="object-contain w-auto h-12"
          />
        </Link> */}

        {/* Desktop */}

        <div className="absolute hidden -translate-x-1/2 left-1/2 lg:flex">

          <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/10 bg-white/[0.04] px-3 py-1 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,.08)]">

            {navLinks.map((link) => (
             <a
  key={link.name}
  href={`#${link.id}`}
  className="whitespace-nowrap rounded-xl px-5 py-3 text-[13px] font-medium text-white/70 transition duration-300 hover:bg-white/5 hover:text-white"
>
  {link.name}
</a>
            ))}

            {/* CTA */}

            <a
  href="#enquiry"
  className="
    whitespace-nowrap
    rounded-xl
    bg-gradient-to-r
    from-cyan-400
    to-cyan-300
    px-6
    py-2.5
    text-[13px]
    font-semibold
    text-black
    shadow-[0_0_30px_rgba(34,211,238,.25)]
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(34,211,238,.45)]
  "
>
  Enquire Now
</a>

          </div>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white lg:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* ================= Mobile Menu ================= */}

      {mobileMenuOpen && (
        <div className="relative border-t border-white/10 bg-[#081114]/95 backdrop-blur-xl lg:hidden">

          <div className="px-6 py-6 space-y-3">

            {navLinks.map((link) => (
              <a
  key={link.name}
  href={`#${link.id}`}
  onClick={() => setMobileMenuOpen(false)}
  className="block px-4 py-3 transition rounded-lg text-white/80 hover:bg-white/5 hover:text-white"
>
  {link.name}
</a>
            ))}

            <a
  href="#enquiry"
  onClick={() => setMobileMenuOpen(false)}
  className="mt-4 block rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 py-3 text-center font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,.25)]"
>
  Enquire Now
</a>

          </div>

        </div>
      )}

    </nav>
  );
}