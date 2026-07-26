import React from "react";
import { ArrowRight } from "lucide-react";

const EnquiryNow = () => {
  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-28">

      {/* ================= Background Glow ================= */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[200px]" />

        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute top-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      {/* ================= Content ================= */}

      <div className="relative flex flex-col items-center max-w-5xl px-6 mx-auto text-center">

        {/* Label */}

        <div className="flex items-center gap-2 mb-6">

          <div className="h-[2px] w-8 bg-cyan-400"></div>

          <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
            Begin Your Journey
          </span>

        </div>

        {/* Heading */}

        <h2 className="max-w-4xl text-5xl font-extrabold leading-tight text-white lg:text-6xl">

          Ready To Start Your
          <br />
          Aesthetic Career?

        </h2>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-[16px] leading-8 text-white/60">

          Leave your details and one of our advisors will contact you to
          discuss the course, available locations and upcoming training
          dates.

        </p>

        {/* Button */}

        <div className="mt-12">

          <button className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(34,211,238,.45)]">

            Enquire Now

            <ArrowRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </section>
  );
};

export default EnquiryNow;