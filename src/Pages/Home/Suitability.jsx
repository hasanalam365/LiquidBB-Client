import React from "react";
import { X } from "lucide-react";

const suitablePoints = [
  "People wanting more balanced body proportions and a silhouette that feels in harmony.",
  "People concerned about hip dips who'd like a smoother, more continuous line.",
  "People wanting fuller, rounder contours without the look of obvious augmentation.",
  "People who wish to avoid surgery, general anaesthesia or a long recovery.",
  "People looking for minimal downtime so they can return to everyday life quickly.",
  "People wanting subtle enhancement that looks entirely natural on their frame.",
];

const notSuitableLeft = [
  "Those who are pregnant or breastfeeding",
  "Those with certain bleeding disorders or on specific medications",
];

const notSuitableRight = [
  "People with active infection or skin inflammation in the area",
  "Anyone with unrealistic expectations of dramatic, surgical-style results",
];

const Suitability = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[2px] w-8 bg-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-600">
              Suitability
            </span>
            <div className="h-[2px] w-8 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#0B1518] lg:text-5xl">
            Who May Benefit
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-black/80">
            The treatment may be worth considering if any of the following
            resonate with you. Equally, it's important to know that it isn't
            right for everyone — a consultation is the only way to confirm
            genuine suitability.
          </p>
        </div>

        {/* Suitable Points Grid */}
        <div className="grid gap-5 mb-10 sm:grid-cols-2">
          {suitablePoints.map((point, index) => (
            <div
              key={point}
              className="group flex items-start gap-4 rounded-2xl border border-cyan-400/20 bg-white p-6 shadow-[0_2px_20px_rgba(8,20,24,.06)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-50 text-[13px] font-semibold text-cyan-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-100">
                {index + 1}
              </div>
              <p className="pt-1 text-[15px] leading-6 text-[#33454C]">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Not Suitable Box */}
        <div className="rounded-3xl border border-amber-400/30 bg-amber-50/60 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(251,191,36,.08)]">
          <h3 className="mb-3 text-xl font-bold text-[#0B1518]">
            When It May Not Be Suitable
          </h3>
          <p className="mb-8 max-w-3xl text-[14px] leading-7 text-black/80">
            Honesty matters. This treatment isn't appropriate for everyone,
            and we will always let you know if it isn't the right fit for
            you. The following are common reasons a treatment may be delayed
            or not advised:
          </p>

          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {[...notSuitableLeft, ...notSuitableRight].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-400/50 bg-amber-100 text-amber-600">
                  <X size={12} />
                </div>
                <p className="text-[14px] leading-6 text-black/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Suitability;