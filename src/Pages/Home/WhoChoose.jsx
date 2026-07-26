import React from "react";
import {
  GraduationCap,
  FlaskConical,
  Building2,
  Sparkles,
  Briefcase,
  Users,
  ShieldCheck,
  Trophy,
} from "lucide-react";

const WhoChoose = () => {
  const reasons = [
    {
      icon: <GraduationCap size={18} />,
      title: "Experienced educators",
      desc: "Learn from trainers with years of clinical and teaching expertise.",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Practical learning",
      desc: "A hands-on approach that builds real, usable confidence.",
    },
    {
      icon: <Building2 size={18} />,
      title: "Modern training facilities",
      desc: "Train in a clinical environment built to professional standards.",
    },
    {
      icon: <Sparkles size={18} />,
      title: "High-quality education",
      desc: "Curriculum crafted to the highest industry benchmark.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "Career support",
      desc: "Guidance to help you take your next professional step.",
    },
    {
      icon: <Users size={18} />,
      title: "Small student groups",
      desc: "Personalised attention in every session.",
    },
    {
      icon: <FlaskConical size={18} />,
      title: "Professional environment",
      desc: "A calm, focused space dedicated to learning.",
    },
    {
      icon: <Trophy size={18} />,
      title: "Hands-on confidence",
      desc: "Leave ready to perform with assurance and precision.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-40 h-[520px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />

        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[130px]" />

      </div>

      <div className="relative flex flex-col items-center gap-20 px-6 mx-auto max-w-7xl lg:flex-row">

        {/* LEFT IMAGE */}

        <div className="w-full lg:w-[42%]">

          <div className="overflow-hidden rounded-2xl border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,.08)]">

            <img
              src="https://i.ibb.co.com/C3Y7L15y/Banner-Img.jpg"
              alt="Training"
              className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full lg:w-[58%]">

          {/* Label */}

          <div className="flex items-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Why Choose Faces On Faces
            </span>

          </div>

          {/* Heading */}

          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white lg:text-5xl">
            A standard above the rest
          </h2>

          {/* Cards */}

          <div className="grid gap-5 mt-10 md:grid-cols-2">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/5"
              >
                <div className="flex items-center justify-center mb-4 transition duration-300 border h-11 w-11 rounded-xl border-cyan-400/20 bg-cyan-400/5 text-cyan-300 group-hover:scale-110">

                  {item.icon}

                </div>

                <h3 className="text-[15px] font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-white/55">
                  {item.desc}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhoChoose;