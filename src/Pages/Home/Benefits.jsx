import React, { useState } from "react";
import {
  Sparkles,
  Layers,
  Waves,
  Clock,
  Leaf,
  ClipboardList,
  ShieldCheck,
  Zap,
  ChevronDown,
} from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Natural Looking Enhancement",
    description:
      "The aim isn't to change how you look — it's to enhance what's already there. Filler is placed to complement your natural shape, so the results feel like you, only more confident.",
  },
  {
    icon: Layers,
    title: "Improved Shape",
    description:
      "Shape matters as much as size. By building volume where it's most flattering, the treatment can create a rounder, more defined contour. For patients who have always felt their silhouette lacked definition, this is often the change that makes the biggest difference to how they feel day to day.",
  },
  {
    icon: Waves,
    title: "Better Body Contours",
    description:
      "Contouring is about harmony between areas. Smoothing dips, adding proportion and balancing curves helps the whole silhouette feel more in tune. Rather than focusing on one feature, the treatment considers how each area relates to the next — so the result looks balanced from every angle.",
  },
  {
    icon: Clock,
    title: "Minimal Recovery",
    description:
      "Compared with surgery, recovery is gentle and brief. Most people return to their usual routine within a few days, with straightforward aftercare. This makes it a realistic option for those who can't easily pause a busy life, work, or family commitments for weeks of healing.",
  },
  {
    icon: Leaf,
    title: "Non Surgical",
    description:
      "There are no incisions, no general anaesthetic and no operating theatre. For anyone who feels uneasy about surgery, its recovery and its permanence — a non-surgical route offers a way to explore enhancement without taking that bigger step.",
  },
  {
    icon: ClipboardList,
    title: "Personalised Treatment Plan",
    description:
      "No two bodies are the same, and neither will your treatment be. The amount of filler, the placement and the goals are all discussed around you during your consultation. You remain in control throughout — nothing happens until you're comfortable and fully informed.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Medical Care",
    description:
      "Treatment is carried out by qualified practitioners in a clean, clinical setting, with your safety prioritised at every stage. Knowing your treatment is performed to proper medical standards brings a peace of mind that's just as valuable as the results themselves.",
  },
  {
    icon: Zap,
    title: "Quick Procedure",
    description:
      "Treatment sessions are typically shorter than most people expect. You're in and out on the same day, with no overnight stay. It's one of the reasons patients choose this approach — meaningful results without putting your life on hold.",
  },
];

const Benefits = () => {
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (index) => {
    setOpenCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[2px] w-8 bg-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              The Benefits
            </span>
            <div className="h-[2px] w-8 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            What This Approach Offers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/60">
            A thoughtful, measured option for those seeking enhancement
            without the commitment of surgery. Here's why each of these
            matters — not just as a feature, but as something that can
            genuinely change how you feel.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const isOpen = !!openCards[index];

            return (
              <div
                key={item.title}
                onClick={() => toggleCard(index)}
                className="group cursor-pointer rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:cursor-default"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between sm:block">
                  <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-xl border-cyan-400/30 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">
                    <Icon size={18} />
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-cyan-300/70 transition-transform duration-300 sm:hidden ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <h3 className="mt-4 text-[15px] font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description — collapsible on mobile, always visible from sm up */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out sm:!mt-3 sm:!max-h-none sm:!opacity-100 ${
                    isOpen ? "mt-3 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[13px] leading-6 text-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;