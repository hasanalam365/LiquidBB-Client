import React from "react";
import {
  Activity,
  Clock3,
  TrendingUp,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Overview = () => {
  const features = [
    {
      icon: <Activity size={18} />,
      title: "Non-surgical approach",
      desc: "A minimally invasive alternative to surgical procedures.",
    },
    {
      icon: <Clock3 size={18} />,
      title: "Minimal downtime",
      desc: "Patients return quickly to their daily routine.",
    },
    {
      icon: <TrendingUp size={18} />,
      title: "High patient demand",
      desc: "A fast-growing treatment market worldwide.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Safe professional techniques",
      desc: "Delivered within a strict clinical framework.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Growing treatment market",
      desc: "Position yourself in one of the fastest growing sectors.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

      </div>

      <div className="relative flex flex-col items-center gap-16 px-6 mx-auto max-w-7xl lg:flex-row">

        {/* LEFT IMAGE */}

        <div className="w-full lg:w-1/2">

          <div className="overflow-hidden rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.08)]">

            <img
              src="https://i.ibb.co.com/HLWnVKkK/overview.jpg"
              alt="Clinic"
              className="h-[420px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="w-full lg:w-1/2">

          {/* Label */}

          <div className="flex items-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Course Overview
            </span>

          </div>

          {/* Heading */}

          <h2 className="text-4xl font-bold text-white xl:text-5xl">
            What is a Liquid BBL?
          </h2>

          {/* Description */}

          <p className="leading-8 mt-7 text-white/70">
            A Liquid BBL (Brazilian Butt Lift) is a non-surgical,
            minimally invasive alternative to traditional buttock
            augmentation procedures using dermal fillers.
          </p>

          <p className="mt-5 leading-8 text-white/55">
            The treatment carefully injects dermal fillers into the
            buttocks and hips to improve contour, increase volume,
            and create a fuller lifted appearance without surgery
            or general anaesthesia.
          </p>

          {/* Feature Cards */}

          <div className="grid gap-4 mt-10 sm:grid-cols-2">

            {features.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-300 hover:bg-cyan-400/5"
              >

                <div className="flex items-center justify-center w-10 h-10 mb-4 border rounded-xl border-cyan-400/20 bg-cyan-400/5 text-cyan-300">

                  {item.icon}

                </div>

                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Overview;