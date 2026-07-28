import React from "react";
import {
  Stethoscope,
  ShieldCheck,
  ClipboardList,
  FileText,
  HeartHandshake,
} from "lucide-react";

const safetyItems = [
  {
    icon: Stethoscope,
    title: "Qualified Practitioners",
    description:
      "All treatments performed by experienced, trained medical professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Clinical Environment",
    description:
      "Procedures conducted in a purpose-built, hygienic clinical setting.",
  },
  {
    icon: ClipboardList,
    title: "Medical Consultation Required",
    description:
      "A full consultation ensures suitability before any treatment.",
  },
  {
    icon: FileText,
    title: "Personal Treatment Plan",
    description:
      "Every plan is tailored to your anatomy, history, and goals.",
  },
  {
    icon: HeartHandshake,
    title: "Aftercare Guidance",
    description:
      "Comprehensive aftercare instructions and ongoing support.",
  },
];

const Welbeing = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080A] py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative px-6 mx-auto max-w-7xl lg:px-10">
        {/* Heading */}
        <span className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[3px] text-cyan-400">
          Your Wellbeing
        </span>

        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Safety Information
        </h2>

        <p className="mt-5 max-w-2xl text-[16px] leading-8 text-[#9FB3BD]">
          Safety is the foundation of every treatment we perform — from
          consultation through to aftercare.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 mt-14 md:grid-cols-2 xl:grid-cols-3">
          {safetyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-cyan-400/15 bg-[#081116]/80 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,.18)]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-6 transition-all duration-300 border h-11 w-11 rounded-xl border-cyan-400/25 bg-cyan-400/10 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/15">
                  <Icon
                    size={18}
                    className="transition-transform duration-300 text-cyan-400 group-hover:scale-110"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
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

export default Welbeing;