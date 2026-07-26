import React from "react";
import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const leftBenefits = [
    "Understand Liquid BBL treatment",
    "Assess suitable clients",
    "Manage complications",
    "Build confidence",
  ];

  const rightBenefits = [
    "Perform professional consultations",
    "Apply safe injection techniques",
    "Deliver professional aftercare",
    "Expand treatment offerings",
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      <div className="relative max-w-6xl px-6 mx-auto">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Course Benefits
            </span>

          </div>

          <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            From student to professional
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-white/60">
            After completing this course, students will be able to
            confidently perform and deliver a full Liquid BBL treatment
            journey.
          </p>

        </div>

        {/* Benefits Box */}

        <div className="rounded-3xl border border-cyan-400/15 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,.08)]">

          <div className="grid gap-12 md:grid-cols-2">

            {/* Left Column */}

            <div className="space-y-6">

              {leftBenefits.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 group"
                >

                  <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full border-cyan-400/30 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">

                    <CheckCircle2 size={16} />

                  </div>

                  <span className="text-[15px] text-white/85">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Right Column */}

            <div className="space-y-6">

              {rightBenefits.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 group"
                >

                  <div className="flex items-center justify-center w-8 h-8 transition-all duration-300 border rounded-full border-cyan-400/30 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">

                    <CheckCircle2 size={16} />

                  </div>

                  <span className="text-[15px] text-white/85">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Benefits;