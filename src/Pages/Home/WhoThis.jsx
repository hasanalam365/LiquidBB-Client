import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Clock3,
  HeartHandshake,
  Syringe,
  BadgeCheck,
  Timer,
  ScanFace,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Non-Surgical",
    text: "Minimally invasive treatment with no surgery or lengthy recovery.",
  },
  {
    icon: Clock3,
    title: "Minimal Recovery",
    text: "Return to everyday activities with little downtime.",
  },
  {
    icon: HeartHandshake,
    title: "Instant Results",
    text: "Notice visible improvement immediately after treatment.",
  },
  {
    icon: ScanFace,
    title: "Natural Contouring",
    text: "Designed to complement your body's natural proportions.",
  },
  {
    icon: Syringe,
    title: "Tailored Treatment",
    text: "Every treatment is customised to your goals and anatomy.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Procedure",
    text: "Performed using clinically approved techniques.",
  },
  {
    icon: Timer,
    title: "Quick Session",
    text: "Most treatments are completed within a single appointment.",
  },
  {
    icon: BadgeCheck,
    title: "Qualified Experts",
    text: "Performed by experienced aesthetic practitioners.",
  },
];

const WhoThis = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080A] py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[160px]" />

        <div className="absolute -left-40 top-32 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[150px]" />

      </div>

      <div className="relative px-6 mx-auto max-w-7xl">

        {/* Label */}

        <div className="flex items-center gap-3 mb-5">

          <div className="h-[2px] w-10 bg-cyan-400"></div>

          <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">

            WHY CHOOSE IT

          </span>

        </div>

        {/* Heading */}

        <h2 className="max-w-3xl text-5xl font-black tracking-tight text-white">

          The Benefits of
          <span className="text-cyan-300"> Liquid BBL</span>

        </h2>

        <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#9FB3BD]">

          A modern body contouring treatment designed to improve shape,
          enhance volume and deliver natural-looking results with minimal
          downtime.

        </p>

        {/* Cards */}

        <div className="grid gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#091114]/90 p-7 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
              >
                {/* Hover Glow */}

                <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100">

                  <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[70px]" />

                </div>

                {/* Icon */}

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#071013] transition duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-400/10">

                  <Icon
                    size={22}
                    strokeWidth={2.3}
                    className="text-cyan-300"
                  />

                </div>

                {/* Title */}

                <h3 className="relative mt-7 text-[20px] font-bold text-white transition group-hover:text-cyan-300">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="relative mt-4 text-[15px] leading-7 text-[#9FB3BD]">

                  {item.text}

                </p>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full" />

                {/* Corner Border */}

                <div className="absolute top-0 right-0 w-10 h-10 transition-all duration-500 border-t border-r border-cyan-400/0 group-hover:border-cyan-300/40" />

              </div>
            );
          })}
                  </div>

        {/* Bottom Divider */}

        <div className="flex justify-center mt-20">

          <div className="w-40 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[600px] -translate-x-1/2 bg-cyan-400/5 blur-[120px]" />

    </section>
  );
};

export default WhoThis;