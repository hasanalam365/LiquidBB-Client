import React from "react";
import { motion } from "framer-motion";

// Adjust this relative path to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";

const results = [
  {
    title: "Improved Contour",
    description:
      "A smoother, more defined shape that complements your natural frame. The aim is refinement rather than transformation — enhancing your existing silhouette so it feels more balanced.",
  },
  {
    title: "Added Volume",
    description:
      "Subtle fullness in areas that may have lost proportion over time. Volume is built gradually and thoughtfully, so the result looks like a natural part of you rather than something added.",
  },
  {
    title: "Enhanced Body Balance",
    description:
      "Greater harmony between your proportions for a silhouette that finally feels right. A small change in one area can bring the whole shape into proportion in a way that's surprisingly impactful.",
  },
  {
    title: "Greater Confidence",
    description:
      "Feeling more at ease in your clothing and your own skin. For many, the most meaningful result isn't visible in a mirror — it's the quiet confidence that returns when you stop worrying.",
  },
  {
    title: "Natural Appearance",
    description:
      "Results designed to look like you — enhanced, not altered. The treatment works with your body's own lines, so the outcome reads as natural rather than obvious.",
  },
  {
    title: "Gradual Visible Results",
    description:
      "Some enhancement is visible immediately, though the final shape settles as swelling subsides and the filler integrates over the following weeks. Healing is gentle and the outcome develops naturally.",
  },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Marker inherits "hidden"/"visible" from its parent card automatically,
   since it declares matching variant keys with no initial/animate of its own. */
const markerVariant = {
  hidden: { width: "10px", backgroundColor: "rgba(34,211,238,0.4)" },
  visible: {
    width: "20px",
    backgroundColor: "#22d3ee",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, margin: "-60px" };

const Marker = () => (
  <motion.span
    variants={markerVariant}
    className="self-center inline-block h-px mr-3 shrink-0"
  />
);

const ResultCard = ({ item, delay }) => (
  <motion.div
    variants={cardVariant}
    custom={delay}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-7 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,.22)]"
  >
    {/* Corner glow on hover, consistent with the rest of the page */}
    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-300 group-hover:bg-cyan-400/20" />

    <h3 className="relative flex items-baseline text-xl font-semibold text-white">
      <Marker />
      {item.title}
    </h3>

    <p className="relative mt-3 text-[15px] leading-7 text-slate-300/85">
      {item.description}
    </p>
  </motion.div>
);

const ExpectedResult = () => {
  // "expected-results" matches the section-naming convention used
  // across the site. section_index 8 is a placeholder — adjust to
  // match this section's real position in the page.
  const sectionRef = useSectionTracking({
    sectionName: "expected-results",
    sectionIndex: 8,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[#05080C]"
    >
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes exr-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .exr-anim, .exr-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow — richer, matching the rest of the page */}

      <div className="absolute inset-0 exr-anim">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-40 h-[500px] w-[850px] rounded-full bg-cyan-400/20 blur-[190px]"
          style={{ animation: "exr-breathe 8s ease-in-out infinite" }}
        />
        <div className="absolute top-20 left-0 h-[340px] w-[340px] rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] rounded-full bg-cyan-300/20 blur-[130px]" />
        <div className="absolute left-1/3 bottom-1/4 h-[220px] w-[220px] rounded-full bg-blue-500/15 blur-[120px]" />

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
          <filter id="exr-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#exr-noise)" />
        </svg>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto lg:px-10">
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
              <span className="w-8 h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              <span className="text-[11px] font-bold uppercase tracking-[3px] text-cyan-300">
                Realistic Expectations
              </span>
              <span className="w-8 h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Expected{" "}
            <span
              className="text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              Results
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-slate-300/85"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Results are intended to be subtle and natural-looking. The aim is
            enhancement that complements you — never a dramatic, obvious
            change. Here's what the treatment is designed to achieve, and an
            honest look at how results develop over time.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {results.map((item) => (
            <ResultCard key={item.title} item={item} />
          ))}
        </motion.div>

        {/* Longevity & Maintenance — full width */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="group relative mt-6 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-7 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,.22)]"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-300 group-hover:bg-cyan-400/20" />

          <h3 className="relative flex items-baseline text-xl font-semibold text-white">
            <motion.span
              initial={{ width: "10px", backgroundColor: "rgba(34,211,238,0.4)" }}
              whileInView={{ width: "20px", backgroundColor: "#22d3ee" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={viewport}
              className="self-center inline-block h-px mr-3 shrink-0"
            />
            Longevity &amp; Maintenance
          </h3>

          <p className="relative mt-3 text-[15px] leading-7 text-slate-300/85">
            Results are not permanent. Dermal filler is gradually broken down
            naturally by the body, so the volume you gain will soften over
            time. Exactly how long results last varies from person to person
            and depends on factors such as your metabolism, lifestyle and the
            amount of filler used. Your practitioner will explain what to
            expect during your consultation — so there are no surprises.
          </p>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={viewport}
          className="mt-10 text-center text-[13px] italic text-slate-400/70"
        >
          Individual results vary. A consultation is the only way to
          understand what may be possible for you.
        </motion.p>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default ExpectedResult;