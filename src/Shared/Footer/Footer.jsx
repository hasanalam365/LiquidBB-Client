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
    { name: "About", id: "about" },
    { name: "Benefits", id: "benefits" },
    { name: "How it Works", id: "how-it-works" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-[#0B1518]">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -top-44 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

      </div>

      <div className="relative px-6 pt-20 pb-8 mx-auto max-w-7xl">

        {/* ================= TOP ================= */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}

          <div>

<img src="https://www.facesonfaces.com/wp-content/uploads/2025/03/pdf-logo.png" alt="" />
            {/* <h3 className="text-xl font-bold text-[#0B1518]">
              Faces On Faces Academy
            </h3> */}

            <p className="max-w-sm mt-5 text-sm leading-7 text-black">
              A premier aesthetics training academy dedicated to
              advancing professional mastery in non-surgical beauty,
              contouring and advanced injectable techniques.
            </p>

            {/* Social */}

            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 text-black transition border rounded-full border-cyan-400/30 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 text-black transition border rounded-full border-cyan-400/30 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
              >
                <Facebook size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-black">
              Quick Links
            </h4>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>

                  <a
                    href={`#${item.id}`}
                    className="text-sm text-black transition hover:text-cyan-600"
                  >
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-black">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <Mail
                  size={17}
                  className="mt-1 text-cyan-600"
                />

                <span className="text-sm text-black">
                  support@facesonfaces.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={17}
                  className="mt-1 text-cyan-600"
                />

                <span className="text-sm text-black">
                  +44 08009991751
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 border-t border-[#0B1518]/10"></div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-[#5C7079] md:flex-row">

          <div className="flex gap-6">

            <Link
              to="/privacy-policy"
              className="hover:text-cyan-600"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-cyan-600"
            >
              Terms & Conditions
            </Link>

          </div>

          <p>
            © 2026 Faces On Faces Academy. All rights reserved.
          </p>

        </div>

        {/* Bottom Text */}

        <div className="pt-6 mt-8 text-center border-t border-[#0B1518]/5">

          <p className="text-[10px] uppercase tracking-[6px] text-[#0B1518]/25">
            Faces On Faces Academy
          </p>

        </div>

      </div>

    </footer>
  );
}