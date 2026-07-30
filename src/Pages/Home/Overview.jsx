import React from "react";

const Overview = () => {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#05080A] py-28">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-[-150px] h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[180px]" />

        <div className="absolute -left-32 top-20 h-[320px] w-[320px] rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute -right-32 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[150px]" />

      </div>

      <div className="relative flex items-center justify-between gap-24 px-6 mx-auto max-w-7xl">

        {/* ================= LEFT ================= */}

        <div className="max-w-xl">

          <div className="flex items-center gap-3 mb-6">

            <div className="h-[2px] w-10 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[5px] text-cyan-300">

              OVERVIEW

            </span>

          </div>

          <h2 className="text-[58px] font-black leading-[1.05] tracking-[-2px] text-white">

            What is

            <span className="text-cyan-300">

              {" "}Liquid BBL?

            </span>

          </h2>

          <p className="mt-8 text-[17px] leading-8 text-[#9FB3BD]">

            Liquid BBL (Brazilian Butt Lift) is a minimally invasive
            body contouring treatment that enhances the shape,
            projection and overall appearance of the buttocks
            using premium dermal fillers.

          </p>

          <p className="mt-6 text-[17px] leading-8 text-[#9FB3BD]">

            Unlike traditional surgery, Liquid BBL requires
            no fat transfer, no general anaesthesia and
            significantly less recovery time while delivering
            natural-looking enhancement.

          </p>

          <p className="mt-6 text-[17px] leading-8 text-[#9FB3BD]">

            The treatment focuses on creating smooth,
            balanced body proportions while prioritising
            patient comfort and safety.

          </p>

        </div>

        {/* RIGHT SIDE COMES IN PART-2 */}
                {/* ================= RIGHT ================= */}

        <div className="relative items-center justify-center hidden lg:flex">

          {/* Main Glow */}

          <div className="absolute h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-[120px]" />

          {/* Outer Decoration */}

          <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-400/10" />

          {/* Glass Card */}

          <div className="relative overflow-hidden rounded-[26px] border border-cyan-400/20 bg-[#091114]/80 p-4 backdrop-blur-xl shadow-[0_0_60px_rgba(34,211,238,.12)]">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[20px]">

              <img
                src="https://i.ibb.co.com/7dgcjY8Y/overview.jpg"
                alt="Liquid BBL Overview"
                className="h-[460px] w-[460px] object-cover transition duration-700 hover:scale-105"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#05080A]/70 via-transparent to-transparent"></div>

            </div>

            {/* Bottom Glow */}

            <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-cyan-400/10 to-transparent" />

          </div>

          {/* Floating Badge */}

          <div className="absolute -translate-x-1/2 -bottom-6 left-1/2">

            <div className="rounded-full border border-cyan-400/20 bg-[#0B1518]/95 px-7 py-3 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,.45)]">

              <span className="text-[11px] uppercase tracking-[2px] text-cyan-300">

                Premium Dermal Filler Technology

              </span>

            </div>

          </div>

          {/* Floating Accent */}

          <div className="absolute w-24 h-24 border rounded-full -right-8 top-10 border-cyan-400/20 bg-cyan-400/5 blur-sm"></div>

          <div className="absolute w-16 h-16 rounded-full -left-10 bottom-20 bg-cyan-300/10 blur-xl"></div>

        </div>
                {/* ================= Decorative Glow ================= */}

        <div className="pointer-events-none absolute -top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-10 left-10 h-32 w-32 rounded-full bg-cyan-400/5 blur-[90px]" />

        <div className="pointer-events-none absolute right-10 top-16 h-24 w-24 rounded-full bg-cyan-300/10 blur-[70px]" />

      </div>

      {/* Bottom Divider */}

      <div className="relative px-6 mx-auto mt-24 max-w-7xl">

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>

      </div>

      {/* Mobile Decoration */}

      <div className="absolute flex gap-2 -translate-x-1/2 bottom-8 left-1/2 lg:hidden">

        <div className="w-10 h-2 rounded-full bg-cyan-400"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400/70"></div>

        <div className="w-2 h-2 rounded-full bg-cyan-400/40"></div>

      </div>

    </section>
  );
};

export default Overview;