import React, { useState } from "react";

const AdvisorForm = () => {
const [selectedTime, setSelectedTime] = useState("");

const timeSlots = [
  "09:00 - 11:00",
  "11:00 - 13:00",
  "13:00 - 15:00",
  "15:00 - 17:00",
  "17:00 - 19:00",
  "19:00 - 21:00",
];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* ================= Background Glow ================= */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[520px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute top-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/5 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      {/* ================= Content ================= */}

      <div className="relative max-w-4xl px-6 mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Request Information
            </span>

          </div>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Speak with an advisor
          </h2>

        </div>

        {/* ================= Form Card ================= */}

        <div className="mx-auto max-w-2xl rounded-3xl border border-cyan-400/15 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_0_45px_rgba(34,211,238,.10)]">

          {/* Full Name */}

          <input
            type="text"
            placeholder="Full Name"
            className="mb-5 h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-cyan-300 focus:bg-white/[0.05]"
          />

          {/* Email + Phone */}

          <div className="grid gap-4 mb-5 md:grid-cols-2">

            <input
              type="email"
              placeholder="Email Address"
              className="h-14 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-cyan-300 focus:bg-white/[0.05]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="h-14 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-cyan-300 focus:bg-white/[0.05]"
            />

          </div>

        {/* Best Time */}

<div className="mb-5">

  <label className="block mb-3 text-xs font-medium tracking-wider uppercase text-white/45">
    Preferred Time To Call
  </label>

  <select
    value={selectedTime}
    onChange={(e) => setSelectedTime(e.target.value)}
    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 text-white outline-none transition-all duration-300 hover:border-cyan-300/40 focus:border-cyan-300 focus:bg-white/[0.05]"
  >
    <option value="" className="bg-[#0B1215] text-white/60">
      Select a Time Slot
    </option>

    {timeSlots.map((time) => (
      <option
        key={time}
        value={time}
        className="bg-[#0B1215] text-white"
      >
        {time}
      </option>
    ))}

  </select>

</div>
          {/* Message */}

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white placeholder:text-white/35 outline-none transition duration-300 focus:border-cyan-300 focus:bg-white/[0.05]"
          ></textarea>
                    

        

          {/* Submit Button */}

          <button
            type="submit"
            className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(34,211,238,.45)]"
          >

            Request Information

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 transition duration-300 group-hover:translate-x-1"
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

          </button>

        
        </div>

      </div>

    </section>
  );
};

export default AdvisorForm;