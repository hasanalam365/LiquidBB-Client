import React from "react";
import {
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  BadgePlus,
  TrendingUp,
} from "lucide-react";

const results = [
  {
    icon: TrendingUp,
    title: "Improved Contour",
    description: "A more sculpted, defined silhouette.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Volume",
    description: "Greater fullness where you desire it.",
  },
  {
    icon: HeartHandshake,
    title: "Natural Appearance",
    description: "Results that complement your natural shape.",
  },
  {
    icon: ShieldCheck,
    title: "More Confidence",
    description: "Feel more comfortable and self-assured.",
  },
  {
    icon: BadgePlus,
    title: "Long-Lasting Results",
    description: "Durability that depends on individual factors.",
  },
];

const ExpectedResult = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080A] py-24">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[3px] text-cyan-400">
          Outcomes
        </span>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Expected Results
        </h2>

        <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#9FB3BD]">
          Results develop into a
          <span className="text-cyan-400">
            {" "}
            refined, natural-looking enhancement{" "}
          </span>
          — never overdone, always considered.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-14 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-cyan-400/15 bg-[#081116]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,.18)]"
              >
                <div className="flex items-center justify-center mb-6 transition-all duration-300 border h-11 w-11 rounded-xl border-cyan-400/25 bg-cyan-400/10 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/15">
                  <Icon
                    size={18}
                    className="transition-transform duration-300 text-cyan-400 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[#9FB3BD]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpectedResult;