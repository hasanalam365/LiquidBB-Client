import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Adjust this relative path to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";
import { trackAdvisorClick } from "../../analytics/trackers";

/* ================= Motion presets ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const viewport = { once: true, margin: "-60px" };

const EnquiryNow = () => {
  // "enquiry-now" matches the section-naming convention used across the
  // site. section_index 6 — adjust if this isn't the last section on
  // the page.
  const sectionRef = useSectionTracking({
    sectionName: "enquiry-now",
    sectionIndex: 6,
  });

  const handleCtaClick = () => {
    trackAdvisorClick({
      buttonName: "Enquire Now",
      buttonLocation: "enquiry-now",
      sectionName: "enquiry-now",
      pagePath: window.location.pathname,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#05080C] py-28"
    >
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes enq-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes enq-sheen {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .enq-anim, .enq-anim * { animation: none !important; }
        }
      `}</style>

      {/* ================= Background Glow ================= */}

      <div className="absolute inset-0 enq-anim">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[950px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[210px]"
          style={{ animation: "enq-breathe 8s ease-in-out infinite" }}
        />

        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute top-0 right-0 h-[360px] w-[360px] rounded-full bg-cyan-300/20 blur-[150px]" />

        <div className="absolute left-1/3 top-1/3 h-[240px] w-[240px] rounded-full bg-blue-500/15 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,.14),transparent_65%)]" />

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
          <filter id="enq-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#enq-noise)" />
        </svg>
      </div>

      {/* ================= Content ================= */}

      <div className="relative flex flex-col items-center max-w-5xl px-6 mx-auto text-center">
        {/* Label */}

        <motion.div
          className="flex items-center gap-2 mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Begin Your Journey
            </span>
            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
          className="max-w-4xl text-5xl font-extrabold leading-tight text-white lg:text-6xl"
          style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Ready To Start Your
          <br />
          <span
            className="text-cyan-300"
            style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
          >
            Aesthetic Career?
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          className="mt-8 max-w-2xl text-[16px] leading-8 text-slate-300/85"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Leave your details and one of our advisors will contact you to
          discuss the course, available locations and upcoming training
          dates.
        </motion.p>

        {/* Button */}

        <motion.div
          className="mt-12"
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a
            href="#enquiry"
            onClick={handleCtaClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 px-8 py-4 font-semibold text-black shadow-[0_0_40px_rgba(34,211,238,.3)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,.5)]"
          >
            {/* Sheen sweep on hover */}
            <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[enq-sheen_1s_ease-in-out]" />

            <span className="relative">Enquire Now</span>

            <ArrowRight
              size={18}
              className="relative transition duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default EnquiryNow;