import React from 'react';
import {
  MessagesSquare,
  ClipboardCheck,
  ListTree,
  Syringe,
  HeartPulse,
  CalendarCheck2,
} from 'lucide-react';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Consultation',
    text: 'Discuss your goals and learn whether liquid BBL is right for you.',
  },
  {
    icon: ClipboardCheck,
    title: 'Personalized Assessment',
    text: 'A full medical and anatomical review by a qualified practitioner.',
  },
  {
    icon: ListTree,
    title: 'Treatment Planning',
    text: 'A bespoke plan mapped precisely to your proportions and goals.',
  },
  {
    icon: Syringe,
    title: 'Dermal Filler Procedure',
    text: 'The treatment is performed in a sterile, comfortable clinical setting.',
  },
  {
    icon: HeartPulse,
    title: 'Recovery Guidance',
    text: 'Clear aftercare instructions to guide optimal, smooth recovery.',
  },
  {
    icon: CalendarCheck2,
    title: 'Follow-up Support',
    text: 'A scheduled review to assess your results and answer any questions.',
  },
];

const Card = ({ step, align }) => {
  const Icon = step.icon;
  return (
    <div
      className={`relative rounded-2xl border border-slate-700/40 bg-slate-800/40 backdrop-blur-sm px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${
        align === 'right' ? 'md:text-right' : 'md:text-left'
      } text-left`}
    >
      <div
        className={`mb-3 flex items-center gap-3 ${
          align === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <span className="flex items-center justify-center rounded-full h-9 w-9 shrink-0 bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/30 md:hidden">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <h3 className="text-[15px] font-semibold tracking-wide text-slate-100">
          {step.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-slate-400">{step.text}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-[#0a0f16] px-4 py-20 sm:px-8">
      {/* ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
              The Process
            </span>
            <span className="w-8 h-px bg-cyan-400/50" />
          </div>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            How the Treatment Works
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-sm text-slate-400 sm:text-base">
            A clear, structured journey from first conversation to follow-up —
            built around your safety and comfort.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line - desktop */}
          <div className="absolute top-0 hidden w-px h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent md:block" />
          {/* left line - mobile */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent md:hidden" />

          <ol className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1;
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative grid grid-cols-1 items-center gap-4 pl-12 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:pl-0"
                >
                  {/* mobile dot */}
                  <span className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0a0f16] ring-1 ring-cyan-500/30 md:hidden">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  </span>

                  {/* left column - desktop only */}
                  <div className="hidden md:block">
                    {!isRight && <Card step={step} align="left" />}
                  </div>

                  {/* center dot - desktop */}
                  <span className="relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0a0f16] ring-1 ring-cyan-500/30 md:flex">
                    <span className="flex items-center justify-center rounded-full h-7 w-7 bg-cyan-400/10 text-cyan-300">
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                  </span>

                  {/* right column - desktop only */}
                  <div className="hidden md:block">
                    {isRight && <Card step={step} align="right" />}
                  </div>

                  {/* mobile card (always full width, hidden on desktop) */}
                  <div className="md:hidden">
                    <Card step={step} align="left" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;