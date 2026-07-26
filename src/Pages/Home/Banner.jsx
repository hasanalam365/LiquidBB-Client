import React from "react";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

const Banner = () => {
  const features = [
    "Beginner Friendly",
    "2 Days Intensive Training",
    "Live Models",
    "Expert Trainers",
    "International Certification",
    "Lifetime Support",
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute top-0 left-0 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[170px]" />

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(75,230,255,.08),transparent_60%)]" />
      </div>

      <div className="relative flex items-center justify-between min-h-screen px-6 mx-auto max-w-7xl py-28">

        {/* ================= LEFT CONTENT ================= */}

        <div className="max-w-xl">

          {/* Small Label */}

          <div className="flex items-center gap-2 mb-6">
            <div className="h-[2px] w-10 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Faces On Faces Academy
            </span>
          </div>

          {/* Heading */}

          <h1 className="leading-none text-white">
            <span className="block text-6xl font-black tracking-tight">
              Liquid BBL
            </span>

            <span className="block mt-2 text-4xl font-bold text-white/95">
              2 Days Course
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-white/70">
            Master one of the fastest-growing non-surgical body contouring
            treatments with expert-led practical training.
          </p>

          <p className="mt-5 text-[15px] leading-7 text-white/55">
            Learn advanced Liquid BBL techniques, patient safety, anatomy,
            consultation, treatment planning and live model practice in an
            intensive beginner-friendly course designed for aesthetic
            professionals.
          </p>

          {/* Feature Pills */}

          <div className="flex flex-wrap gap-3 mt-10">

            {features.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-[#0E1618] px-4 py-2 text-sm text-white/85 transition hover:border-cyan-300 hover:bg-[#111E22]"
              >
                <Check
                  size={13}
                  className="text-cyan-300"
                  strokeWidth={3}
                />

                {item}
              </div>
            ))}

          </div>

          {/* CTA Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <button className="flex items-center gap-3 py-4 font-semibold text-black transition duration-300 group rounded-xl bg-cyan-400 px-7 hover:bg-cyan-300">

              Enquire Now

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </button>

           

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <div className="relative hidden lg:flex">

          {/* Glow */}

          <div className="absolute inset-0 scale-110 rounded-full bg-cyan-400/10 blur-[80px]" />

          {/* Oval Frame */}

          <div className="relative h-[540px] w-[400px] overflow-hidden rounded-[50%] border border-cyan-400/30 bg-[#081114] shadow-[0_0_50px_rgba(34,211,238,.15)]">

            <img
              src="/banner-image.jpg"
              alt="Liquid BBL"
              className="object-cover w-full h-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Banner;