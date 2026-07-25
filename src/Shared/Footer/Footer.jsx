import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Course Overview", path: "#" },
    { name: "Curriculum", path: "#" },
    { name: "Highlights", path: "#" },
    { name: "Why Us", path: "#" },
    { name: "FAQ", path: "#" },
    { name: "Enquire", path: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050B0D] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -top-44 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

      </div>

      <div className="relative px-6 pt-20 pb-8 mx-auto max-w-7xl">

        {/* ================= TOP ================= */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h3 className="text-xl font-bold text-white">
              Faces On Faces Academy
            </h3>

            <p className="max-w-sm mt-5 text-sm leading-7 text-white/60">
              A premier aesthetics training academy dedicated to
              advancing professional mastery in non-surgical beauty,
              contouring and advanced injectable techniques.
            </p>

            {/* Social */}

            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition border rounded-full border-cyan-400/20 text-white/70 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition border rounded-full border-cyan-400/20 text-white/70 hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    to={item.path}
                    className="text-sm transition text-white/60 hover:text-cyan-300"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-white">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail
                  size={17}
                  className="mt-1 text-cyan-300"
                />

                <span className="text-sm text-white/60">
                  info@facesonfacesacademy.co.uk
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={17}
                  className="mt-1 text-cyan-300"
                />

                <span className="text-sm text-white/60">
                  +44 20 0000 0000
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="mt-1 text-cyan-300"
                />

                <span className="text-sm leading-6 text-white/60">
                  Premium Training Institute
                  <br />
                  United Kingdom
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-white/40 md:flex-row">

          <div className="flex gap-6">

            <Link
              to="#"
              className="hover:text-cyan-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="#"
              className="hover:text-cyan-300"
            >
              Terms & Conditions
            </Link>

          </div>

          <p>
            © 2026 Faces On Faces Academy. All rights reserved.
          </p>

        </div>

        {/* Bottom Text */}

        <div className="pt-6 mt-8 text-center border-t border-white/5">

          <p className="text-[10px] uppercase tracking-[6px] text-white/20">
            Faces On Faces Academy
          </p>

        </div>

      </div>

    </footer>
  );
}