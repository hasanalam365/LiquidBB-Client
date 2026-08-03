import React from "react";
import { ArrowRight, Check } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* ========================= BACKGROUND ========================= */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Main Glow */}

        <div className="absolute left-1/2 top-[-250px] h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

        {/* Left Glow */}

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[170px]" />

        {/* Right Glow */}

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

        {/* Extra Glow */}

        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-cyan-300/10 blur-[120px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,20,24,.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,20,24,.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

      </div>

      {/* ========================= CONTAINER ========================= */}

      <div className="relative flex items-center justify-between min-h-screen gap-20 px-6 py-24 mx-auto max-w-7xl">

       
{/* LEFT CONTENT */}
{/* ========================================================= */}

<div className="max-w-xl">

  {/* Small Label */}

  <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-50 px-4 py-1.5 backdrop-blur-xl">
    <span className="text-[11px] font-semibold uppercase tracking-[3px] text-cyan-600">
      UK Aesthetic Clinic
    </span>
  </div>

  {/* Heading */}

  <h1 className="mt-8 font-['Playfair_Display'] text-[64px] font-semibold leading-[0.95] tracking-[-2px] text-[#0B1518]">
    Feeling Less
    <br />
    Confident About
    <br />
    Your Body Shape?
  </h1>

  {/* Description */}

  <p className="mt-8 max-w-lg text-[17px] leading-8 text-black/80">
    Many people feel self-conscious about the shape or volume of their
    buttocks, making certain clothing choices or swimwear feel
    uncomfortable. These feelings are far more common than many realise.
    If you've been searching for a natural-looking, non-surgical way to
    enhance your body contours, you're not alone—and you're in the right
    place to learn more.
  </p>

  {/* Buttons */}

  <div className="flex flex-wrap gap-4 mt-12">

    <a href="#enquiry" className="group flex items-center gap-3 rounded-xl bg-cyan-400 px-8 py-4 text-sm font-semibold text-[#041317] transition duration-300 hover:scale-105 hover:bg-cyan-300">

      Request a Consultation

      <ArrowRight
        size={18}
        className="transition group-hover:translate-x-1"
      />

    </a>

    {/* <button className="rounded-xl border border-cyan-400/30 bg-white px-8 py-4 text-sm font-medium text-[#0B1518] transition duration-300 hover:border-cyan-400 hover:bg-cyan-50">

      Learn More

    </button> */}

  </div>

</div>

        {/* ========================= */}
        {/* RIGHT SIDE COMES IN PART-2 */}
        {/* ========================= */}
                {/* ========================================================= */}
        {/* RIGHT IMAGE */}
        {/* ========================================================= */}

        <div className="relative items-center justify-center hidden lg:flex">

          {/* Main Glow */}

          <div className="absolute h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* Outer Ring */}

          <div className="absolute h-[520px] w-[520px] rounded-full border border-cyan-400/15" />

          <div className="absolute h-[600px] w-[600px] rounded-full border border-cyan-400/10" />

          {/* Glass Card */}

          <div className="relative overflow-hidden rounded-[38px] border border-cyan-400/20 bg-white/80 p-5 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,.12)]">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[28px]">

              <img
                src="https://i.ibb.co.com/mVgHVy3B/liquidbbl.jpg"
                alt="Liquid BBL"
                className="h-[650px] w-[470px] object-fill transition duration-700 hover:scale-105"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />

            </div>

            {/* Bottom Gradient */}

            <div className="absolute bottom-0 left-0 right-0 pointer-events-none h-36 bg-gradient-to-t from-cyan-400/10 to-transparent" />

          </div>

          {/* ================= Floating Card 1 ================= */}

          <div className="absolute -left-16 top-24 rounded-2xl border border-cyan-400/20 bg-white/95 px-5 py-4 backdrop-blur-xl shadow-[0_15px_40px_rgba(8,20,24,.12)]">

            <p className="text-[11px] uppercase tracking-[3px] text-cyan-600">

              Treatment

            </p>

            <h4 className="mt-2 text-lg font-bold text-[#0B1518]">

              Non Surgical

            </h4>

            <p className="mt-1 text-sm text-[#5C7079]">

              Safe & Effective

            </p>

          </div>

          {/* ================= Floating Card 2 ================= */}

          <div className="absolute -right-12 bottom-24 rounded-2xl border border-cyan-400/20 bg-white/95 px-5 py-4 backdrop-blur-xl shadow-[0_15px_40px_rgba(8,20,24,.12)]">

            <p className="text-[11px] uppercase tracking-[3px] text-cyan-600">

              Recovery

            </p>

            <h4 className="mt-2 text-lg font-bold text-[#0B1518]">

              Minimal Downtime

            </h4>

            <p className="mt-1 text-sm text-[#5C7079]">

              Return Quickly

            </p>

          </div>

          {/* ================= Floating Circle ================= */}

          <div className="absolute -top-8 right-20 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-white/90 backdrop-blur-xl shadow-[0_0_35px_rgba(34,211,238,.18)]">

            <div className="text-center">

              <h3 className="text-2xl font-black text-cyan-600">

                2D

              </h3>

              <p className="text-[11px] uppercase tracking-[2px] text-[#0B1518]/70">

                Course

              </p>

            </div>

          </div>

        </div>
                {/* ========================================================= */}
        {/* DECORATIVE ELEMENTS */}
        {/* ========================================================= */}

        {/* Top Left Blur */}
        <div className="absolute left-10 top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Bottom Right Blur */}
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Small Floating Glow */}
        <div className="absolute left-[45%] top-40 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_35px_rgba(34,211,238,.9)]" />


        {/* ========================================================= */}
        {/* CYAN LINE */}
        {/* ========================================================= */}

        <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      </div>
            {/* ========================================================= */}
      {/* MOBILE DECORATION */}
      {/* ========================================================= */}

      <div className="absolute flex gap-2 -translate-x-1/2 bottom-6 left-1/2 lg:hidden">

        <div className="w-10 h-2 rounded-full bg-cyan-400"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400/60"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400/40"></div>

      </div>

    </section>
  );
};

export default Banner;