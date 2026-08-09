import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const AdvisorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const timeSlots = [
    "09:00 - 11:00",
    "11:00 - 13:00",
    "13:00 - 15:00",
    "15:00 - 17:00",
    "17:00 - 19:00",
    "19:00 - 21:00",
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus("error");
      setErrorMsg("Please fill in Name, Email and Phone.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/advisor-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", time: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send message.");
    }
  };

  return (
    <section id="enquiry" className="relative py-24 overflow-hidden bg-[#0a0e14]">
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes adv-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes adv-sheen {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .adv-anim, .adv-anim * { animation: none !important; }
        }
      `}</style>

      {/* ================= Background Glow ================= */}
      <div className="absolute inset-0 adv-anim">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-40 h-[560px] w-[950px] rounded-full bg-cyan-400/20 blur-[190px]"
          style={{ animation: "adv-breathe 8s ease-in-out infinite" }}
        />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/20 blur-[150px]" />
        <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-300/20 blur-[150px]" />
        <div className="absolute left-1/3 bottom-1/4 h-[220px] w-[220px] rounded-full bg-blue-500/15 blur-[130px]" />
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
          <filter id="adv-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#adv-noise)" />
        </svg>
      </div>

      {/* ================= Content ================= */}
      <div className="relative max-w-4xl px-6 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
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
                Request Information
              </span>
              <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-white lg:text-5xl"
            style={{ textShadow: "0 0 40px rgba(34,211,238,0.2)" }}
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Speak with an{" "}
            <span
              className="text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              advisor
            </span>
          </motion.h2>
        </div>

        {/* ================= Form Card ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={viewport}
          className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-cyan-400/25 bg-white/[0.03] p-8 shadow-[0_0_60px_rgba(34,211,238,.15)] backdrop-blur-xl"
        >
          {/* Ambient glow inside the card */}
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-[260px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]"
            style={{ animation: "adv-breathe 7s ease-in-out infinite" }}
          />

          {/* Top inner highlight — glass edge realism */}
          <div className="absolute top-0 h-px pointer-events-none inset-x-8 bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Full Name */}
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            variants={fadeUp}
            custom={0.05}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileFocus={{ scale: 1.01 }}
            className="relative mb-5 h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          />

          {/* Email + Phone */}
          <div className="relative grid gap-4 mb-5 md:grid-cols-2">
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileFocus={{ scale: 1.01 }}
              className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            />

            <motion.input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              variants={fadeUp}
              custom={0.15}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              whileFocus={{ scale: 1.01 }}
              className="h-14 rounded-xl border border-white/10 bg-white/5 px-5 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            />
          </div>

          {/* Best Time */}
          <motion.div
            className="relative mb-5"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <label className="block mb-3 text-xs font-medium tracking-wider uppercase text-slate-400">
              Preferred Time To Call
            </label>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-white/10 bg-white/5 px-5 text-white outline-none transition-all duration-300 hover:border-cyan-400/50 focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <option value="" className="bg-[#0a0e14] text-slate-400">
                Select a Time Slot
              </option>

              {timeSlots.map((time) => (
                <option key={time} value={time} className="bg-[#0a0e14] text-white">
                  {time}
                </option>
              ))}
            </select>
          </motion.div>

          {/* Message */}
          <motion.textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            variants={fadeUp}
            custom={0.25}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileFocus={{ scale: 1.01 }}
            className="relative w-full rounded-xl border border-white/10 bg-white/5 p-5 text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
          ></motion.textarea>

          {/* Status message */}
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative mt-4 text-sm text-emerald-400"
              >
                Thanks! Your message has been sent — we'll be in touch soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative mt-4 text-sm text-red-400"
              >
                {errorMsg}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={status === "sending"}
            variants={fadeUp}
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={status !== "sending" ? { scale: 1.02 } : {}}
            whileTap={status !== "sending" ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative mt-8 flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,.25)] transition-shadow duration-300 hover:shadow-[0_0_55px_rgba(34,211,238,.45)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {/* Sheen sweep on hover */}
            <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[adv-sheen_1s_ease-in-out]" />

            <span className="relative">
              {status === "sending" ? "Sending..." : "Request Information"}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-5 h-5 transition duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-6-6 6 6-6 6"
              />
            </svg>
          </motion.button>
        </motion.form>
      </div>

      {/* Bottom Glow Line — consistent with the rest of the page */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default AdvisorForm;