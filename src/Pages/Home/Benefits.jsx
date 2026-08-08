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
    <section id="benefits" className="relative py-24 overflow-hidden bg-[#0A0F12]">
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes bnf-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bnf-anim, .bnf-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow — richer, matching the Understanding You section */}

      <div className="absolute inset-0 bnf-anim">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-44 h-[550px] w-[950px] rounded-full bg-cyan-400/20 blur-[190px]"
          style={{ animation: "bnf-breathe 8s ease-in-out infinite" }}
        />

        <div className="absolute left-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-[150px]" />

        <div className="absolute left-1/3 bottom-1/4 h-[240px] w-[240px] rounded-full bg-blue-500/15 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.1),transparent_65%)]" />

        {/* Faint glowing grid, consistent with the rest of the page */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Fine film-grain texture for a premium, non-flat finish */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03] mix-blend-overlay">
          <filter id="bnf-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#bnf-noise)" />
        </svg>
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
                The Benefits
              </span>
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </div>

          <h2
            className="text-4xl font-bold leading-tight text-white lg:text-5xl"
            style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
          >
            What This{" "}
            <span
              className="text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              Approach
            </span>{" "}
            Offers
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70">
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
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,.25)] sm:cursor-default"
              >
                {/* Corner glow that appears on hover */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-300 group-hover:bg-cyan-400/20" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between sm:block">
                  <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-xl border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
                    <Icon size={18} />
                  </div>

                  <ChevronDown
                    size={18}
                    className={`text-cyan-400/70 transition-transform duration-300 sm:hidden ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <h3 className="relative mt-4 text-[15px] font-semibold text-white">
                  {item.title}
                </h3>

                {/* Glowing divider, consistent with the Understanding You cards */}
                <div className="relative w-full h-px mt-3 transition-all duration-300 bg-gradient-to-r from-cyan-400/40 via-cyan-300/15 to-transparent group-hover:via-cyan-300/30" />

                {/* Description — collapsible on mobile, always visible from sm up */}
                <div
                  className={`relative overflow-hidden transition-all duration-300 ease-in-out sm:!mt-3 sm:!max-h-none sm:!opacity-100 ${
                    isOpen ? "mt-3 max-h-96 opacity-100" : "mt-0 max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[13px] leading-6 text-white/70">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default Benefits;