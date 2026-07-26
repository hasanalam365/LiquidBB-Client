import React from "react";
import {
  BookOpen,
  ShieldAlert,
  ShieldCheck,
  HeartPulse,
  Syringe,
  Droplets,
  ScanFace,
  ClipboardList,
  UserCheck,
  Stethoscope,
  Activity,
  Award,
  FileText,
  Microscope,
  Sparkles,
} from "lucide-react";

const WhatYouLearn = () => {
  const modules = [
    {
      icon: <BookOpen size={18} />,
      title: "Anatomy & Physiology Level 3",
    },
    {
      icon: <ShieldAlert size={18} />,
      title: "Complication Management",
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Infection Control",
    },
    {
      icon: <HeartPulse size={18} />,
      title: "Safety in Medicine",
    },
    {
      icon: <Droplets size={18} />,
      title: "Aseptic Rule",
    },
    {
      icon: <Syringe size={18} />,
      title: "Injection Administration",
    },
    {
      icon: <ScanFace size={18} />,
      title: "Foundation Dermal Fillers",
    },
    {
      icon: <Sparkles size={18} />,
      title: "Liquid Brazilian Bum Lift",
    },
    {
      icon: <ClipboardList size={18} />,
      title: "Consultation Process",
    },
    {
      icon: <UserCheck size={18} />,
      title: "Patient Assessment",
    },
    {
      icon: <Activity size={18} />,
      title: "Injection Techniques",
    },
    {
      icon: <FileText size={18} />,
      title: "Treatment Planning",
    },
    {
      icon: <Microscope size={18} />,
      title: "Live Models",
    },
    {
      icon: <Stethoscope size={18} />,
      title: "Aftercare",
    },
    {
      icon: <Award size={18} />,
      title: "Professional Best Practices",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[250px] w-[250px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-400/5 blur-[120px]" />

      </div>

      <div className="relative max-w-6xl px-6 mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <div className="flex items-center justify-center gap-2 mb-4">

            <div className="h-[2px] w-8 bg-cyan-400"></div>

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              The Curriculum Matrix
            </span>

          </div>

          <h2 className="text-4xl font-bold text-white">
            What you will learn
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-sm leading-7 text-white/60">
            Fifteen meticulously structured modules guiding you from
            foundational anatomy to advanced Liquid BBL techniques.
          </p>

        </div>

        {/* Modules */}

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {modules.map((item) => (

            <div
              key={item.title}
              className="group flex items-center gap-4 rounded-xl border border-cyan-400/15 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_25px_rgba(34,211,238,.12)]"
            >

              <div className="flex items-center justify-center w-10 h-10 transition duration-300 border rounded-lg border-cyan-400/20 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">

                {item.icon}

              </div>

              <span className="text-sm font-medium text-white">

                {item.title}

              </span>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatYouLearn;