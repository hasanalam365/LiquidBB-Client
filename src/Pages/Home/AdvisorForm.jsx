import React, { useState } from "react";

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
    <section id="enquiry" className="relative py-24 overflow-hidden bg-white">
      {/* ================= Background Glow ================= */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[520px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute top-0 right-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />
      </div>

      {/* ================= Content ================= */}
      <div className="relative max-w-4xl px-6 mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[2px] w-8 bg-cyan-400"></div>
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-600">
              Request Information
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#0B1518] lg:text-5xl">
            Speak with an advisor
          </h2>
        </div>

        {/* ================= Form Card ================= */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-3xl border border-cyan-400/20 bg-white p-8 shadow-[0_0_45px_rgba(34,211,238,.10)] backdrop-blur-xl"
        >
          {/* Full Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="mb-5 h-14 w-full rounded-xl border border-[#0B1518]/10 bg-[#F5F9FA] px-5 text-[#0B1518] placeholder:text-[#5C7079] outline-none transition duration-300 focus:border-cyan-400 focus:bg-white"
          />

          {/* Email + Phone */}
          <div className="grid gap-4 mb-5 md:grid-cols-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="h-14 rounded-xl border border-[#0B1518]/10 bg-[#F5F9FA] px-5 text-[#0B1518] placeholder:text-[#5C7079] outline-none transition duration-300 focus:border-cyan-400 focus:bg-white"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="h-14 rounded-xl border border-[#0B1518]/10 bg-[#F5F9FA] px-5 text-[#0B1518] placeholder:text-[#5C7079] outline-none transition duration-300 focus:border-cyan-400 focus:bg-white"
            />
          </div>

          {/* Best Time */}
          <div className="mb-5">
            <label className="block mb-3 text-xs font-medium tracking-wider uppercase text-[#5C7079]">
              Preferred Time To Call
            </label>

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="h-14 w-full rounded-xl border border-[#0B1518]/10 bg-[#F5F9FA] px-5 text-[#0B1518] outline-none transition-all duration-300 hover:border-cyan-400/50 focus:border-cyan-400 focus:bg-white"
            >
              <option value="" className="bg-white text-[#5C7079]">
                Select a Time Slot
              </option>

              {timeSlots.map((time) => (
                <option key={time} value={time} className="bg-white text-[#0B1518]">
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full rounded-xl border border-[#0B1518]/10 bg-[#F5F9FA] p-5 text-[#0B1518] placeholder:text-[#5C7079] outline-none transition duration-300 focus:border-cyan-400 focus:bg-white"
          ></textarea>

          {/* Status message */}
          {status === "success" && (
            <p className="mt-4 text-sm text-emerald-600">
              Thanks! Your message has been sent — we'll be in touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-red-600">{errorMsg}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-300 font-semibold text-black shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_55px_rgba(34,211,238,.45)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Request Information"}

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
        </form>
      </div>
    </section>
  );
};

export default AdvisorForm;