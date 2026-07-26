import React from "react";
import {
  CalendarDays,
  Brain,
  Eye,
  Users,
  UserRound,
  GraduationCap,
  Award,
  LifeBuoy,
} from "lucide-react";

const CourseHighlights = () => {
  const highlights = [
    {
      icon: <CalendarDays size={18} />,
      title: "2 Days Intensive",
      desc: "Condensed, focused training schedule.",
    },
    {
      icon: <Brain size={18} />,
      title: "Hands-on Practical Training",
      desc: "Real practice, not just theory.",
    },
    {
      icon: <Eye size={18} />,
      title: "Live Demonstrations",
      desc: "Watch expert techniques in real time.",
    },
    {
      icon: <Users size={18} />,
      title: "Real Client Models",
      desc: "Train on genuine clinical cases.",
    },
    {
      icon: <UserRound size={18} />,
      title: "Small Class Experience",
      desc: "Personalised attention throughout.",
    },
    {
      icon: <GraduationCap size={18} />,
      title: "Industry Experienced Trainers",
      desc: "Learn from active practitioners.",
    },
    {
      icon: <Award size={18} />,
      title: "Certification",
      desc: "Professional recognition on completion.",
    },
    {
      icon: <LifeBuoy size={18} />,
      title: "Ongoing Support",
      desc: "Continued guidance after training.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050B0D] py-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      <div className="relative px-6 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-2 mb-5">

            <div className="h-[2px] w-8 bg-cyan-400" />

            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
              Course Highlights
            </span>

          </div>

          <h2 className="max-w-3xl mx-auto text-4xl font-bold leading-tight text-white lg:text-5xl">
            An experience designed for
            <br />
            mastery
          </h2>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item) => (

            <div
              key={item.title}
              className="group flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
            >

              {/* Icon */}

              <div className="flex items-center justify-center w-12 h-12 mb-6 transition duration-300 border rounded-xl border-cyan-400/20 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="text-[15px] font-semibold text-white">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mt-3 text-[13px] leading-6 text-white/55">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default CourseHighlights;