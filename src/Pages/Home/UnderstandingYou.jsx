import React from "react";

const concerns = [
  {
    number: "01",
    title: "Hip Dips",
    description:
      "Hip dips are natural inward curves found just below the hip bone. While completely normal, they can create a less rounded silhouette, leading some people to feel their body shape lacks balance or softness. Many people look for subtle, non-surgical ways to create smoother transitions between the hips and thighs, enhancing overall body proportions while maintaining a natural appearance.",
  },
  {
    number: "02",
    title: "Naturally Flat Appearance",
    description:
      "Some people naturally have less volume in the buttocks due to genetics, body structure, or muscle distribution. This can make certain clothing styles feel less flattering and may leave individuals wishing for a fuller, more balanced shape. A personalised approach can help enhance natural contours while maintaining harmony with the rest of the body.",
  },
  {
    number: "03",
    title: "Loss of Volume",
    description:
      "Over time, natural ageing, lifestyle changes, and weight fluctuations can affect the body's natural volume. This gradual change may alter body proportions and leave some individuals feeling less confident. Understanding why these changes occur is the first step towards exploring options that may restore shape and improve overall body confidence.",
  },
  {
    number: "04",
    title: "Changes After Weight Loss",
    description:
      "Significant weight loss is an incredible achievement, but it can sometimes leave areas of the body looking flatter than expected. Many people notice reduced fullness around the buttocks after losing weight, making them feel their silhouette no longer reflects how healthy they feel. Non-surgical body contouring may be considered as part of restoring balanced proportions.",
  },
  {
    number: "05",
    title: "Body Proportions & Balance",
    description:
      "Every individual has a unique body shape, and even small differences in proportion can influence overall confidence. Some people simply want to create a smoother transition between the waist, hips, and buttocks without dramatically changing their appearance. A subtle enhancement can often create a more balanced and harmonious silhouette.",
  },
  {
    number: "06",
    title: "Confidence & Clothing",
    description:
      "Body confidence is about much more than appearance. Feeling comfortable in fitted clothing, swimwear, or everyday outfits can make a meaningful difference to how people see themselves. If concerns about body shape affect your confidence, learning about available non-surgical options may help you understand what is possible.",
  },
];

const UnderstandingYou = () => {
  return (
    <section className="relative overflow-hidden bg-[#0A0F12] py-28">
      {/* ========================= LOCAL ANIMATION KEYFRAMES ========================= */}
      <style>{`
        @keyframes uy-breathe {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
        @keyframes uy-twinkle {
          0%, 100% { opacity: 0.15; transform: scale(0.7); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes uy-float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .uy-anim, .uy-anim * { animation: none !important; }
        }
      `}</style>

      {/* Background Glow — stronger, more saturated neon cyan */}

      <div className="absolute inset-0 uy-anim">
        <div
          className="absolute left-1/2 top-0 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[180px]"
          style={{ animation: "uy-breathe 8s ease-in-out infinite" }}
        />

        <div className="absolute -left-32 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-[160px]" />

        <div className="absolute left-1/4 bottom-0 h-[260px] w-[260px] rounded-full bg-blue-500/15 blur-[130px]" />

        {/* Faint glowing grid, matching the banner */}
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
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Small Label */}

        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)]">
            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Understanding Your Concerns
            </span>

            <div className="h-[2px] w-8 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </div>
        </div>

        {/* Heading */}

        <h2
          className="max-w-3xl mx-auto mt-6 text-5xl font-bold text-center text-white md:text-6xl"
          style={{ textShadow: "0 0 40px rgba(34,211,238,0.25)" }}
        >
          You're Not{" "}
          <span
            className="text-cyan-300"
            style={{ textShadow: "0 0 30px rgba(34,211,238,0.55), 0 0 70px rgba(34,211,238,0.25)" }}
          >
            Alone
          </span>
        </h2>

        {/* Description */}

        <p className="max-w-3xl mx-auto mt-6 text-lg leading-8 text-center text-white/70">
          Many people share similar concerns about body shape, balance and
          confidence. Whether you've noticed changes over time, have naturally
          flatter contours, or simply wish to feel more comfortable in your own
          skin, understanding these concerns is the first step towards making an
          informed decision about your options.
        </p>

        {/* Cards */}

        <div className="grid gap-6 mt-20 md:grid-cols-2 xl:grid-cols-3">
          {concerns.map((item) => (
            <div
              key={item.number}
              className="group relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-7 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/60 hover:shadow-[0_0_45px_rgba(34,211,238,.25)]"
            >
              {/* Corner glow that appears on hover */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/0 blur-[60px] transition-all duration-300 group-hover:bg-cyan-400/20" />

              {/* Number */}

              <div className="relative flex items-center justify-between">
                <span
                  className="text-3xl font-black text-cyan-400"
                  style={{ textShadow: "0 0 20px rgba(34,211,238,0.4)" }}
                >
                  {item.number}
                </span>

                <div className="w-16 h-px transition-all duration-300 bg-cyan-400/30 group-hover:w-24 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>

              {/* Title */}

              <h3 className="relative mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Divider */}

              <div className="relative w-full h-px mt-4 bg-gradient-to-r from-cyan-400/40 via-cyan-300/15 to-transparent" />

              {/* Description */}

              <p className="relative mt-5 text-[15px] leading-8 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}

        <div className="relative max-w-5xl mx-auto mt-20 uy-anim">
          {/* Glow — brighter neon */}

          <div
            className="absolute inset-0 rounded-[32px] bg-cyan-400/20 blur-[100px]"
            style={{ animation: "uy-breathe 7s ease-in-out infinite" }}
          />

          {/* Image Card */}

          <div
            className="relative overflow-hidden rounded-[32px] border border-cyan-400/30 bg-white/[0.03] p-4 shadow-[0_0_70px_rgba(34,211,238,.18)] backdrop-blur-xl"
            style={{ animation: "uy-float-slow 9s ease-in-out infinite" }}
          >
            <img
              src="https://i.ibb.co.com/mVgHVy3B/liquidbbl.jpg"
              alt="Liquid BBL"
              className="h-[500px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Neon edge glow along bottom */}
            <div className="absolute inset-x-4 bottom-4 h-1 bg-cyan-400/70 blur-[3px]" />
          </div>

          {/* Small electric-blue sparkle accents, matching the banner */}
          <div
            className="absolute pointer-events-none -left-3 -top-3"
            style={{ animation: "uy-twinkle 4.5s ease-in-out infinite" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0C12 6.5 12 12 12 12C12 12 6.5 12 0 12C6.5 12 12 12 12 12C12 12 12 17.5 12 24C12 17.5 12 12 12 12C12 12 17.5 12 24 12C17.5 12 12 12 12 12C12 12 12 6.5 12 0Z"
                fill="#7DF9FF"
              />
            </svg>
          </div>
          <div
            className="absolute pointer-events-none -right-3 -bottom-3"
            style={{ animation: "uy-twinkle 3.8s ease-in-out infinite", animationDelay: "1s" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0C12 6.5 12 12 12 12C12 12 6.5 12 0 12C6.5 12 12 12 12 12C12 12 12 17.5 12 24C12 17.5 12 12 12 12C12 12 17.5 12 24 12C17.5 12 12 12 12 12C12 12 12 6.5 12 0Z"
                fill="#22D3EE"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line — brighter */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
    </section>
  );
};

export default UnderstandingYou;