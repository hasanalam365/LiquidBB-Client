import React from "react";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

const Sparkle = ({ className, size = 10, delay = "0s", duration = "4s" }) => (
  <div
    className={`pointer-events-none absolute ${className}`}
    style={{
      animation: `lbbl-twinkle ${duration} ease-in-out infinite`,
      animationDelay: delay,
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0C12 6.5 12 12 12 12C12 12 6.5 12 0 12C6.5 12 12 12 12 12C12 12 12 17.5 12 24C12 17.5 12 12 12 12C12 12 17.5 12 24 12C17.5 12 12 12 12 12C12 12 12 6.5 12 0Z"
        fill="url(#lbbl-sparkle-grad)"
      />
      <defs>
        <linearGradient id="lbbl-sparkle-grad" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#7DF9FF" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#05080A]">
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes lbbl-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes lbbl-breathe {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes lbbl-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes lbbl-float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes lbbl-rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes lbbl-rotate-slow-rev {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes lbbl-pulse-ring {
          0% { box-shadow: 0 0 0px rgba(34,211,238,0.0); }
          50% { box-shadow: 0 0 45px rgba(34,211,238,0.35); }
          100% { box-shadow: 0 0 0px rgba(34,211,238,0.0); }
        }
        @keyframes lbbl-sheen {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .lbbl-anim, .lbbl-anim * { animation: none !important; }
        }
      `}</style>

      {/* ========================= BACKGROUND ========================= */}

      <div className="absolute inset-0 overflow-hidden lbbl-anim">
        {/* Base */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% -10%, #071319 0%, #060B0D 45%, #05080A 100%)",
          }}
        />

        {/* Main Glow */}
        <div
          className="absolute left-1/2 top-[-250px] h-[750px] w-[950px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[170px]"
          style={{ animation: "lbbl-breathe 7s ease-in-out infinite" }}
        />

        {/* Left Glow */}
        <div className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[170px]" />

        {/* Right Glow */}
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-400/20 blur-[180px]" />

        {/* Extra electric blue glow */}
        <div className="absolute left-1/3 top-1/3 h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-[130px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.25) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        {/* Fine film-grain texture for a premium, non-flat finish */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
          <filter id="lbbl-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#lbbl-noise)" />
        </svg>

        {/* Vignette for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_180px_60px_rgba(0,0,0,0.55)]" />
      </div>

      {/* ========================= CONTAINER ========================= */}

      <div className="relative flex flex-col items-center justify-center min-h-screen gap-16 px-6 mx-auto max-w-7xl py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* LEFT CONTENT */}
        {/* ========================================================= */}

        <div className="max-w-xl">
          {/* Small Label */}

          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-400/10 to-transparent px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[3px] text-cyan-300">
              UK Aesthetic Clinic
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-9 font-['Playfair_Display'] text-[50px] font-semibold leading-[1.05] tracking-[-1.5px] text-white sm:text-[62px]">
            Feeling Less
            <br />
            <span className="italic text-white/90">Confident</span> About
            <br />
            <span
              className="relative inline-block text-cyan-300"
              style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
            >
              Your Body Shape?
              <svg
                className="absolute left-0 w-full h-3 -bottom-3"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C60 2 240 2 298 8"
                  stroke="url(#lbbl-underline-grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="lbbl-underline-grad" x1="0" y1="0" x2="300" y2="0">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
                    <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Description */}

          <p className="mt-9 max-w-lg text-[16.5px] font-light leading-8 tracking-[0.1px] text-white/55">
            Many people feel self-conscious about the shape or volume of their
            buttocks, making certain clothing choices or swimwear feel
            uncomfortable. These feelings are far more common than many realise.
            If you've been searching for a natural-looking, non-surgical way to
            enhance your body contours, you're not alone—and you're in the right
            place to learn more.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap items-center gap-5 mt-12">
            <a
              href="#enquiry"
              className="group relative flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-b from-cyan-300 to-cyan-400 px-8 py-4 text-sm font-semibold text-[#041317] shadow-[0_8px_30px_rgba(34,211,238,0.3)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_10px_45px_rgba(34,211,238,0.5)]"
            >
              {/* Sheen sweep on hover */}
              <span className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-white/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[lbbl-sheen_1s_ease-in-out]" />
              <span className="relative">Request a Consultation</span>
              <ArrowRight size={18} className="relative transition group-hover:translate-x-1" />
            </a>

            {/* Trust indicator */}
            <div className="flex items-center gap-2 text-white/45">
              <ShieldCheck size={16} className="text-cyan-300/80" />
              <span className="text-[12.5px] tracking-[0.3px]">
                Regulated clinicians &nbsp;·&nbsp; Confidential consultation
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT IMAGE */}
        {/* ========================================================= */}

        <div className="relative flex items-center justify-center lbbl-anim">
          {/* Main Glow */}
          <div className="absolute h-[650px] w-[650px] rounded-full bg-cyan-400/20 blur-[130px]" />

          {/* Outer Rings */}
          <div
            className="absolute h-[520px] w-[520px] rounded-full border border-cyan-400/25"
            style={{ animation: "lbbl-rotate-slow 50s linear infinite" }}
          />
          <div
            className="absolute h-[600px] w-[600px] rounded-full border border-dashed border-cyan-400/10"
            style={{ animation: "lbbl-rotate-slow-rev 80s linear infinite" }}
          />

          {/* Gradient-ring frame behind the glass card, for a jewelled premium edge */}
          <div
            className="absolute h-[590px] w-[420px] rounded-[42px] opacity-70"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(34,211,238,0.5), rgba(125,249,255,0.05) 30%, rgba(34,211,238,0.05) 60%, rgba(34,211,238,0.5) 100%)",
              filter: "blur(1px)",
            }}
          />

          {/* Glass Card */}
          <div
            className="relative overflow-hidden rounded-[38px] border border-cyan-400/30 bg-white/[0.04] p-5 shadow-[0_0_80px_rgba(34,211,238,0.2),0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            style={{ animation: "lbbl-float-slow 8s ease-in-out infinite" }}
          >
            {/* Top inner highlight — glass edge realism */}
            <div className="absolute h-px pointer-events-none inset-x-5 top-5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src="https://i.ibb.co.com/HLzNsHhk/Liquid-BBL-Treatment-jpg.jpg"
                alt="Liquid BBL"
                className="h-[650px] w-[470px] object-fill transition duration-700 hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080A]/55 via-transparent to-[#05080A]/10" />

              {/* Neon edge glow along bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400/70 blur-[2px]" />
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-36 bg-gradient-to-t from-cyan-400/15 to-transparent" />
          </div>

          {/* Sparkles */}
          <Sparkle className="left-2 top-8" size={14} delay="0.2s" duration="4.5s" />
          <Sparkle className="right-4 top-28" size={9} delay="1.3s" duration="3.8s" />
          <Sparkle className="left-8 bottom-14" size={11} delay="0.7s" duration="4.2s" />
          <Sparkle className="right-10 bottom-36" size={8} delay="2s" duration="3.6s" />
          <Sparkle className="left-1/2 top-2" size={7} delay="1.6s" duration="4s" />

          {/* ================= Floating Card 1 ================= */}

          <div
            className="absolute -left-16 top-24 flex items-start gap-3 rounded-2xl border border-cyan-400/30 bg-[#081116]/95 px-5 py-4 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.2),0_15px_40px_rgba(0,0,0,.4)]"
            style={{ animation: "lbbl-float 7s ease-in-out infinite" }}
          >
            <div className="flex items-center justify-center w-8 h-8 mt-1 border rounded-full shrink-0 border-cyan-400/40 bg-cyan-400/10">
              <Sparkles size={14} className="text-cyan-300" />
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[3px] text-cyan-300">Treatment</p>
              <h4 className="mt-1 text-lg font-bold text-white">Non Surgical</h4>
              <p className="mt-0.5 text-sm text-white/50">Safe &amp; Effective</p>
            </div>
          </div>

          {/* ================= Floating Card 2 ================= */}

          <div
            className="absolute -right-12 bottom-24 flex items-start gap-3 rounded-2xl border border-cyan-400/30 bg-[#081116]/95 px-5 py-4 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,0.2),0_15px_40px_rgba(0,0,0,.4)]"
            style={{ animation: "lbbl-float 7.5s ease-in-out infinite", animationDelay: "0.5s" }}
          >
            <div className="flex items-center justify-center w-8 h-8 mt-1 border rounded-full shrink-0 border-cyan-400/40 bg-cyan-400/10">
              <ShieldCheck size={14} className="text-cyan-300" />
            </div>
            <div>
              <p className="text-[10.5px] uppercase tracking-[3px] text-cyan-300">Recovery</p>
              <h4 className="mt-1 text-lg font-bold text-white">Minimal Downtime</h4>
              <p className="mt-0.5 text-sm text-white/50">Return Quickly</p>
            </div>
          </div>

          {/* ================= Floating Circle ================= */}

          <div className="absolute flex items-center justify-center w-24 h-24 -top-8 right-20">
            <div
              className="absolute inset-0 border border-dashed rounded-full border-cyan-400/25"
              style={{ animation: "lbbl-rotate-slow 35s linear infinite" }}
            />
            <div
              className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-cyan-400/35 bg-[#081116]/90 backdrop-blur-xl"
              style={{ animation: "lbbl-pulse-ring 4s ease-in-out infinite" }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-black text-cyan-300">2D</h3>
                <p className="text-[10.5px] uppercase tracking-[2px] text-white/70">Course</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DECORATIVE ELEMENTS */}
        {/* ========================================================= */}

        <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="absolute left-[45%] top-40 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_45px_rgba(34,211,238,1)]" />

        {/* ========================================================= */}
        {/* CYAN LINE */}
        {/* ========================================================= */}

        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </div>

      {/* ========================================================= */}
      {/* MOBILE DECORATION */}
      {/* ========================================================= */}

      <div className="absolute flex gap-2 -translate-x-1/2 bottom-6 left-1/2 lg:hidden">
        <div className="w-10 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.6)]" />
        <div className="w-2 h-2 rounded-full bg-cyan-400/60" />
        <div className="w-2 h-2 rounded-full bg-cyan-400/40" />
      </div>
    </section>
  );
};

export default Banner;