import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Adjust this relative path to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";

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

/* ================= Motion presets ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, margin: "-60px" };

const Suitability = () => {
  // "suitability" matches the section-naming convention used across the
  // site. section_index 4 — adjust if this section sits elsewhere on
  // the page relative to "benefits" (index 3).
  const sectionRef = useSectionTracking({
    sectionName: "suitability",
    sectionIndex: 4,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[#0A0F12]"
    >
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes sut-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sut-anim, .sut-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow */}

      <div className="absolute inset-0 sut-anim">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-44 h-[550px] w-[950px] rounded-full bg-cyan-400/20 blur-[190px]"
          style={{ animation: "sut-breathe 8s ease-in-out infinite" }}
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
          <filter id="sut-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#sut-noise)" />
        </svg>
      </div>

      <div className="relative max-w-6xl px-6 mx-auto">
        {/* Heading */}
        <div className="mb-16 text-center">
          <motion.div
            className="flex items-center justify-center gap-2 mb-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
                Suitability
              </span>
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold leading-tight text-white lg:text-5xl"
            style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Who May{" "}
            <span
              className="text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              Benefit
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/70"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            The treatment may be worth considering if any of the following
            resonate with you. Equally, it's important to know that it isn't
            right for everyone — a consultation is the only way to confirm
            genuine suitability.
          </motion.p>
        </div>

        {/* Suitable Points Grid */}
        <motion.div
          className="grid gap-5 mb-10 sm:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {suitablePoints.map((point, index) => (
            <motion.div
              key={point}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-6 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,.25)]"
            >
              {/* Corner glow that appears on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-300 group-hover:bg-cyan-400/20" />

              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.25 }}
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-[13px] font-semibold text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)] group-hover:bg-cyan-400/20 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              >
                {index + 1}
              </motion.div>

              <p className="relative pt-1 text-[15px] leading-6 text-white/80">
                {point}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Not Suitable Box */}

        <motion.div
          className="relative overflow-hidden rounded-3xl border border-amber-400/30 bg-amber-400/[0.06] p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(251,191,36,.08)]"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
        >
          {/* Ambient amber glow inside the box */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-400/10 blur-[80px]"
            style={{ animation: "sut-breathe 7s ease-in-out infinite" }}
          />

          {/* Top inner highlight — glass edge realism */}
          <div className="absolute top-0 h-px pointer-events-none inset-x-10 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <h3 className="relative mb-3 text-xl font-bold text-white">
            When It May Not Be Suitable
          </h3>
          <p className="relative mb-8 max-w-3xl text-[14px] leading-7 text-white/70">
            Honesty matters. This treatment isn't appropriate for everyone,
            and we will always let you know if it isn't the right fit for
            you. The following are common reasons a treatment may be delayed
            or not advised:
          </p>

          <motion.div
            className="relative grid gap-x-10 gap-y-4 sm:grid-cols-2"
            variants={gridContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {[...notSuitableLeft, ...notSuitableRight].map((item) => (
              <motion.div
                key={item}
                variants={listItem}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-amber-400/50 bg-amber-400/20 text-amber-400">
                  <X size={12} />
                </div>
                <p className="text-[14px] leading-6 text-white/70">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default Suitability;