import React from "react";
import {
  GraduationCap,
  Sparkles,
  Stethoscope,
  Syringe,
  Building2,
  Layers3,
} from "lucide-react";

const WhoThis = () => {
  const cards = [
    {
      icon: <GraduationCap size={18} />,
      title: "Beginners entering aesthetics",
      desc: "Start your journey with a strong foundation.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Beauty professionals",
      desc: "Elevate your existing skill set.",
    },
    {
      icon: <Stethoscope size={18} />,
      title: "Medical professionals",
      desc: "Expand your clinical offerings.",
    },
    {
      icon: <Syringe size={18} />,
      title: "Existing injectors",
      desc: "Refine and diversify techniques.",
    },
    {
      icon: <Building2 size={18} />,
      title: "Clinic owners",
      desc: "Add profitable new treatments.",
    },
    {
      icon: <Layers3 size={18} />,
      title: "Anyone expanding services",
      desc: "Grow your treatment portfolio.",
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

      <div className="relative px-6 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Who This Course Is For
            </span>

          </div>

          <h2 className="max-w-2xl mx-auto text-4xl font-bold leading-tight text-white lg:text-5xl">
            Built for ambitious aesthetics professionals
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {cards.map((card) => (

            <div
              key={card.title}
              className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,.12)]"
            >

              {/* Icon */}

              <div className="flex items-center justify-center mb-6 transition duration-300 border h-11 w-11 rounded-xl border-cyan-400/20 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">

                {card.icon}

              </div>

              {/* Title */}

              <h3 className="text-lg font-semibold text-white">

                {card.title}

              </h3>

              {/* Description */}

              <p className="mt-3 text-sm leading-7 text-white/55">

                {card.desc}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhoThis;