import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

// Adjust this relative path to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";
import { trackAdvisorClick } from "../../analytics/trackers";

/* ================= Shared motion presets ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const viewport = { once: true, margin: "-80px" };

const benefits = [
  "Non-surgical procedure",
  "No general anaesthetic",
  "Minimal downtime",
  "Natural-looking enhancement",
  "Personalised treatment plan",
  "Improved body contour",
  "Enhanced confidence",
  "Suitable after professional consultation",
];

const IntroducingTheSolution = () => {
  // "introducing-solution" matches the section-naming convention used
  // across the site. section_index 2 because this is the third section
  // on the Home page (after "hero" and "understanding-treatment").
  const sectionRef = useSectionTracking({
    sectionName: "introducing-solution",
    sectionIndex: 2,
  });

  const handleCtaClick = () => {
    trackAdvisorClick({
      buttonName: "Request a Consultation",
      buttonLocation: "introducing-solution",
      sectionName: "introducing-solution",
      pagePath: window.location.pathname,
    });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0A0F12] py-28"
    >
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes its-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes its-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .its-anim, .its-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow — richer, more saturated to match the banner */}

      <div className="absolute inset-0 its-anim">
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[180px]"
          style={{ animation: "its-breathe 8s ease-in-out infinite" }}
        />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[160px]" />

        <div className="absolute right-0 top-20 h-[380px] w-[380px] rounded-full bg-cyan-300/20 blur-[160px]" />

        <div className="absolute left-1/4 bottom-1/4 h-[240px] w-[240px] rounded-full bg-blue-500/15 blur-[130px]" />

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
          <filter id="its-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#its-noise)" />
        </svg>
      </div>

      <div className="relative max-w-5xl px-6 mx-auto">
        {/* Section Label */}

        <motion.div
          className="flex justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            <span className="text-[11px] uppercase tracking-[4px] font-semibold text-cyan-300">
              Introducing The Solution
            </span>
            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
        </motion.div>

        {/* Heading */}

        <motion.h2
          className="mt-6 text-5xl font-bold text-center text-white md:text-6xl"
          style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          A Non-Surgical Option
          <br />
          That{" "}
          <span
            className="text-cyan-300"
            style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
          >
            May Help
          </span>
        </motion.h2>

        {/* Intro */}

        <motion.p
          className="max-w-4xl mx-auto mt-8 text-lg leading-8 text-center text-white/70"
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Once you've identified the concerns that matter most to you, the
          next step is understanding the options available. Liquid BBL is a
          modern, minimally invasive treatment designed to enhance body
          contours without surgery, helping many people achieve a fuller and
          more balanced silhouette with minimal downtime.
        </motion.p>

        {/* ================= WHAT IS LIQUID BBL ================= */}

        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-3xl font-bold text-white">What is Liquid BBL?</h3>

          <p className="mt-6 text-[17px] leading-9 text-white/70">
            Liquid BBL is a non-surgical body contouring treatment that uses
            carefully selected dermal fillers to enhance the shape, volume
            and definition of the buttocks. Unlike a traditional Brazilian
            Butt Lift, this procedure does not require fat transfer,
            liposuction or general anaesthesia. Instead, specially placed
            dermal fillers are used to improve contour, soften transitions
            around the hips and create a naturally fuller appearance while
            maintaining harmony with the body's existing proportions.
          </p>

          <p className="mt-6 text-[17px] leading-9 text-white/70">
            Every treatment plan is personalised according to the
            individual's anatomy, body shape and desired outcome. Rather than
            dramatically changing the body, the goal is to achieve subtle,
            elegant improvements that complement your natural figure and
            boost overall confidence.
          </p>
        </motion.div>

        {/* ================= WHY CALLED LIQUID ================= */}

        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-3xl font-bold text-white">
            Why Is It Called "Liquid"?
          </h3>

          <p className="mt-6 text-[17px] leading-9 text-white/70">
            The treatment is commonly referred to as "Liquid BBL" because
            volume is created using injectable dermal fillers rather than
            transferring fat from another part of the body. This innovative
            approach offers an alternative for people who want to improve
            their body contours without undergoing major surgery.
          </p>
        </motion.div>

        {/* ================= HOW IT WORKS ================= */}

        <motion.div
          className="mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="text-3xl font-bold text-white">How Does It Work?</h3>

          <p className="mt-6 text-[17px] leading-9 text-white/70">
            During your consultation, your practitioner will assess your
            natural body proportions, discuss your goals and develop a
            personalised treatment plan. Carefully placed dermal fillers are
            then used to improve shape, add volume and refine the overall
            contour of the buttocks. The treatment focuses on creating smooth
            transitions and natural-looking enhancement rather than an
            artificial appearance.
          </p>

          {/* ================= BENEFITS ================= */}

          <motion.div
            className="relative mt-16 overflow-hidden rounded-[28px] border border-cyan-400/25 bg-cyan-400/[0.06] p-8 shadow-[0_0_50px_rgba(34,211,238,0.1)] backdrop-blur-xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Corner glow accent */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-[80px]" />

            <div className="relative flex items-center gap-3">
              <Sparkles size={22} className="text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">
                Key Benefits of Liquid BBL
              </h3>
            </div>

            <p className="relative mt-5 text-[17px] leading-9 text-white/70">
              While every treatment is tailored to the individual, many
              patients choose Liquid BBL because it offers a balance between
              subtle enhancement, convenience and minimal downtime. Rather
              than creating an artificial appearance, the treatment is
              designed to work with your natural body shape, enhancing areas
              where additional contour or volume may be desired.
            </p>

            <motion.div
              className="relative grid gap-5 mt-10 md:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.6)" }}
                  transition={{ duration: 0.25 }}
                  className="flex items-start gap-4 p-4 bg-white/[0.03] border rounded-xl border-cyan-400/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                >
                  <CheckCircle2 className="mt-1 text-cyan-400 shrink-0" size={20} />
                  <span className="leading-7 text-white/80">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= WHO MAY BENEFIT ================= */}

          <motion.div
            className="mt-20"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h3 className="text-3xl font-bold text-white">
              Who May Benefit From This Treatment?
            </h3>

            <p className="mt-6 text-[17px] leading-9 text-white/70">
              Liquid BBL may be considered by individuals who are looking for
              a subtle enhancement rather than dramatic surgical change. It
              is often explored by people who feel their body proportions
              could be more balanced, who have naturally flatter contours,
              or who have noticed changes in volume over time.
            </p>

            <p className="mt-6 text-[17px] leading-9 text-white/70">
              The treatment is not suitable for everyone, which is why a
              professional consultation is an essential part of the process.
              During this appointment, your practitioner will discuss your
              goals, assess your medical history and advise whether this
              treatment is appropriate for your individual circumstances.
            </p>
          </motion.div>

          {/* ================= IMPORTANT ================= */}

          <motion.div
            className="relative mt-20 overflow-hidden rounded-[28px] border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.1] to-white/[0.02] p-8 shadow-[0_0_50px_rgba(34,211,238,0.1)]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-[80px]" />

            <div className="relative flex items-center gap-3">
              <ShieldCheck size={22} className="text-cyan-300" />
              <h3 className="text-3xl font-bold text-white">
                Important Things to Know
              </h3>
            </div>

            <motion.div
              className="relative mt-8 space-y-6 text-white/70"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p variants={staggerItem} className="leading-8">
                Every person's anatomy is unique, meaning results will
                naturally vary from one individual to another. A personalised
                treatment plan is always recommended to achieve the most
                balanced and natural-looking outcome.
              </motion.p>

              <motion.p variants={staggerItem} className="leading-8">
                Temporary swelling, bruising or tenderness may occur after
                treatment. These effects are generally mild and form part of
                the normal healing process.
              </motion.p>

              <motion.p variants={staggerItem} className="leading-8">
                Following the aftercare advice provided by your practitioner
                is essential for supporting recovery and helping you achieve
                the best possible outcome.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* ================= CTA ================= */}

          <motion.div
            className="relative mt-24 overflow-hidden rounded-[32px] border border-cyan-400/30 bg-white/[0.03] p-10 text-center shadow-[0_0_60px_rgba(34,211,238,.15)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={viewport}
          >
            {/* Ambient glow inside the CTA card */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]"
              style={{ animation: "its-breathe 6s ease-in-out infinite" }}
            />

            {/* Top inner highlight — glass edge realism */}
            <div className="absolute top-0 h-px pointer-events-none inset-x-10 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="relative max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-white">
                Curious Whether Liquid BBL Could Be Right For You?
              </h3>

              <p className="mt-6 mb-10 text-lg leading-8 text-white/70">
                The best place to start is with a professional consultation.
                We'll take the time to understand your goals, answer your
                questions and explain your available options—helping you
                make an informed decision with confidence.
              </p>

              <motion.a
                href="#enquiry"
                onClick={handleCtaClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-400 px-8 py-4 font-semibold text-[#041317] shadow-[0_8px_30px_rgba(34,211,238,0.3)] transition duration-300 hover:shadow-[0_10px_45px_rgba(34,211,238,0.5)]"
              >
                Request a Consultation
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Line */}

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default IntroducingTheSolution;