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

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

        <div className="absolute -left-32 top-40 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-300/10 blur-[150px]" />

      </div>

      <div className="relative px-6 mx-auto max-w-7xl">

        {/* Small Label */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-3">

            <div className="h-[2px] w-10 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-400">
              Understanding Your Concerns
            </span>

            <div className="h-[2px] w-10 bg-cyan-400" />

          </div>

        </div>

        {/* Heading */}

        <h2 className="max-w-3xl mx-auto mt-6 text-5xl font-bold text-center text-white md:text-6xl">
          You're Not Alone
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
              className="group rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-7 shadow-[0_2px_20px_rgba(0,0,0,.4)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
            >
              {/* Number */}

              <div className="flex items-center justify-between">

                <span className="text-3xl font-black text-cyan-400">
                  {item.number}
                </span>

                <div className="w-16 h-px transition-all duration-300 bg-cyan-400/30 group-hover:w-24 group-hover:bg-cyan-400" />

              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Divider */}

              <div className="w-full h-px mt-4 bg-gradient-to-r from-cyan-400/40 via-cyan-300/15 to-transparent" />

              {/* Description */}

              <p className="mt-5 text-[15px] leading-8 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Image */}

        <div className="relative max-w-5xl mx-auto mt-20">

          {/* Glow */}

          <div className="absolute inset-0 rounded-[32px] bg-cyan-400/10 blur-[80px]" />

          {/* Image Card */}

          <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/[0.03] p-4 shadow-[0_0_50px_rgba(34,211,238,.08)] backdrop-blur-xl">

            <img
              src="https://i.ibb.co.com/mVgHVy3B/liquidbbl.jpg"
              alt="Liquid BBL"
              className="h-[500px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />

            {/* Overlay */}

            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          </div>

        </div>

      </div>

      {/* Bottom Glow Line */}

      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

    </section>
  );
};

export default UnderstandingYou;