import React from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Syringe,
  FileCheck2,
  UserCheck,
  Building2,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";

// Adjust this relative path to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";

const safetyPoints = [
  {
    icon: UserCheck,
    title: "Qualified Practitioners",
    description:
      "Every treatment is carried out by a trained, qualified medical professional with specific experience in body contouring. You're never treated by anyone without the proper clinical background to do so safely.",
  },
  {
    icon: FileCheck2,
    title: "Thorough Medical Screening",
    description:
      "Before any treatment, your medical history, current medications and general health are carefully reviewed. If anything raises a concern, we'll always be upfront about it — your safety comes before any procedure.",
  },
  {
    icon: BadgeCheck,
    title: "Licensed, Regulated Products",
    description:
      "Only licensed dermal fillers from reputable, regulated manufacturers are used. Each product has a traceable batch history, so you can be confident in exactly what's being placed in your body.",
  },
  {
    icon: Building2,
    title: "Clinical Setting & Hygiene",
    description:
      "Treatments take place in a clean, medical-grade clinical environment, following strict hygiene and sterilisation protocols at every stage — from preparation through to aftercare.",
  },
  {
    icon: Syringe,
    title: "Careful, Measured Technique",
    description:
      "Filler is placed gradually and precisely, layer by layer, rather than in large volumes at once. This measured approach reduces risk and allows your practitioner to continually reassess as they work.",
  },
  {
    icon: AlertTriangle,
    title: "Honest Risk Information",
    description:
      "Every treatment carries some risk, and we won't downplay that. Possible side effects and rare complications are explained clearly during your consultation, so your decision is fully informed.",
  },
  {
    icon: ShieldCheck,
    title: "Informed Consent, Always",
    description:
      "Nothing proceeds until you've had time to ask questions, understand your options and feel genuinely comfortable. Consent is an ongoing conversation, not a form signed in a rush.",
  },
  {
    icon: PhoneCall,
    title: "Support After Treatment",
    description:
      "If anything feels wrong or simply concerns you after your appointment, you're never left to figure it out alone. Direct aftercare support is available so help is always within reach.",
  },
];

const YourSafety = () => {
  // "your-safety" matches the section-naming convention used across
  // the site. section_index 10 is a placeholder — adjust to match this
  // section's real position in the page.
  const sectionRef = useSectionTracking({
    sectionName: "your-safety",
    sectionIndex: 10,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[#05080C]"
    >

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/15 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-[130px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.1),transparent_65%)]" />

      </div>

      <div className="relative max-w-6xl px-6 mx-auto">

        {/* Heading */}

        <div className="mb-16 text-center">

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[2px] w-8 bg-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-400">
              Safety & Standards
            </span>
            <div className="h-[2px] w-8 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
            Your Safety Comes First
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-slate-300/85">
            Enhancement should never come at the cost of your wellbeing. From
            the products we use to the people who treat you, every part of
            the process is built around clinical safety and honest,
            informed care.
          </p>

        </div>

        {/* Safety Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safetyPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-cyan-400/15 bg-white/[0.03] p-6 shadow-[0_2px_20px_rgba(0,0,0,.35)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-xl border-cyan-400/25 bg-cyan-400/10 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/15">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-[15px] font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-slate-300/80">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default YourSafety;