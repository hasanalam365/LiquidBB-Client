import React from "react";
import {
  ClipboardCheck,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  AlertTriangle,
  ShieldAlert,
  Ban,
  MessagesSquare,
  HeartHandshake,
} from "lucide-react";

const safetyPoints = [
  {
    icon: ClipboardCheck,
    title: "Patient Assessment",
    description:
      "Before any treatment, a full assessment is carried out to understand your medical history, anatomy and goals. This ensures the treatment is genuinely appropriate for you before anything is agreed.",
  },
  {
    icon: BadgeCheck,
    title: "Practitioner Qualifications",
    description:
      "Treatments are performed by qualified practitioners with appropriate training and experience. Understanding exactly who is treating you, and what their credentials are, gives you confidence in every step.",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Clinical Environment",
    description:
      "Treatment takes place in a clean, properly equipped clinical setting. Every technique and product used is maintained to a professional standard, so hygiene and safety are never left to chance.",
  },
  {
    icon: Sparkles,
    title: "Hygiene & Protocols",
    description:
      "Strict hygiene protocols are followed at every stage, from single-use needles and sterile products to careful preparation of the treatment area, keeping risk to an absolute minimum.",
  },
  {
    icon: AlertTriangle,
    title: "Possible Side Effects",
    description:
      "As with any injectable treatment, mild swelling, bruising or tenderness is common and expected. Your practitioner will always talk you through what's normal and what to look out for.",
  },
  {
    icon: ShieldAlert,
    title: "Risks & Complications",
    description:
      "While complications are uncommon, every treatment carries some risk. These are discussed openly during your consultation so you can make a fully informed decision, without any surprises.",
  },
  {
    icon: Ban,
    title: "Contraindications",
    description:
      "Certain medical conditions, medications or circumstances mean the treatment isn't suitable for everyone. We'll screen for these during your consultation and let you know honestly if it isn't right for you.",
  },
  {
    icon: MessagesSquare,
    title: "Importance of Consultation",
    description:
      "Nothing proceeds without a proper consultation first. It's your chance to ask questions, be understood, and decide with confidence — there's never any pressure to go ahead.",
  },
  {
    icon: HeartHandshake,
    title: "Aftercare & Support",
    description:
      "Your safety continues after treatment. Clear aftercare guidance is provided, and we're always just a message away if anything is on your mind during your recovery.",
  },
];

const YourSafety = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[500px] w-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />

      </div>

      <div className="relative max-w-6xl px-6 mx-auto">

        {/* Heading */}

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold leading-tight text-[#0B1518] lg:text-5xl">
            Your Safety & Peace of Mind
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-[#4A5C63]">
            Transparency builds trust. We believe you deserve to understand
            not only what the treatment involves, but how your safety is
            protected at every stage. Nothing here is hidden — the more
            confident you know, the more confident your decision can be.
          </p>

        </div>

        {/* Safety Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safetyPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-cyan-400/20 bg-white p-6 shadow-[0_2px_20px_rgba(8,20,24,.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(34,211,238,.15)]"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 border rounded-xl border-cyan-400/30 bg-cyan-50 text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-100">
                  <Icon size={18} />
                </div>

                <h3 className="mt-5 text-[15px] font-semibold text-[#0B1518]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#4A5C63]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <p className="mx-auto mt-14 max-w-3xl text-center text-[13px] italic leading-7 text-[#5C7079]">
          Your safety is the priority in every consultation. If a treatment
          isn't right for you, we'll always let you know honestly, before
          anything else is discussed.
        </p>

      </div>

    </section>
  );
};

export default YourSafety;