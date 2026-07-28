import React from "react";
import { Check } from "lucide-react";

const items = [
  "Want fuller buttocks",
  "Want better body proportions",
  "Want improved contour",
  "Prefer non-surgical procedures",
  "Want little downtime",
  "Are in good overall health",
];

const WhoIsThis = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080A] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative flex flex-col items-center gap-16 px-6 mx-auto max-w-7xl lg:flex-row lg:items-center lg:px-10">
        {/* Left Content */}
        <div className="w-full lg:w-5/12">
          <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[3px] text-cyan-400">
            Ideal Candidate
          </span>

          <h2 className="max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">
            Who Is This <br /> Treatment For?
          </h2>

          <p className="mt-6 max-w-md text-[16px] leading-8 text-[#9FB3BD]">
            Liquid BBL is suited to individuals seeking subtle,
            <span className="text-cyan-400"> natural enhancement </span>
            without the commitment of surgery.
          </p>
        </div>

        {/* Right Grid */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:w-7/12">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 rounded-xl border border-cyan-400/15 bg-[#081116]/80 px-6 py-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,.18)]"
            >
              <div className="flex items-center justify-center w-8 h-8 border rounded-lg border-cyan-400/30 bg-cyan-400/10">
                <Check
                  size={16}
                  className="transition text-cyan-400 group-hover:scale-110"
                />
              </div>

              <p className="text-[15px] font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsThis;