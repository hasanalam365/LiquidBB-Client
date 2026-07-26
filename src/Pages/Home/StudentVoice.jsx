import React from "react";
import { Quote, Star } from "lucide-react";

const StudentVoice = () => {
  const testimonials = [
    {
      name: "Dr. Amira Sinclair",
      role: "Aesthetic Practitioner",
      review:
        "The most comprehensive training I have ever attended. The hands-on approach and live models gave me the confidence to start offering Liquid BBL immediately.",
    },
    {
      name: "Nadia Hassan",
      role: "Clinic Owner",
      review:
        "Faces On Faces sets the benchmark. Small classes, expert trainers and a genuinely professional environment. My whole team benefited enormously.",
    },
    {
      name: "Priya Sharma",
      role: "Beauty Professional",
      review:
        "As a beginner I was nervous, but the educators guided me through every step. I left feeling skilled, safe and certified. Truly world-class.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      <div className="relative px-6 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Student Voices
            </span>

          </div>

          <h2 className="text-4xl font-bold text-white lg:text-5xl">
            Trusted by professionals
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-7 lg:grid-cols-3">

          {testimonials.map((item) => (

            <div
              key={item.name}
              className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
            >

              {/* Quote */}

              <Quote
                size={28}
                className="text-cyan-300/70"
              />

              {/* Rating */}

              <div className="flex gap-1 mt-5">

                {[...Array(5)].map((_, index) => (

                  <Star
                    key={index}
                    size={14}
                    className="fill-cyan-300 text-cyan-300"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-6 text-[15px] leading-8 text-white/70">
                "{item.review}"
              </p>

              {/* Divider */}

              <div className="border-t my-7 border-white/10"></div>

              {/* User */}

              <div className="flex items-center gap-4">

                <div className="flex items-center justify-center text-sm font-semibold border rounded-full h-11 w-11 border-cyan-400/25 bg-cyan-400/5 text-cyan-300">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-white/45">
                    {item.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default StudentVoice;