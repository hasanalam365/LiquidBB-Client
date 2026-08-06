import React, { useEffect, useRef, useState, useCallback } from 'react';
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
    title: 'Private Consultation',
    text: "Everything begins with a relaxed, confidential conversation. There's no rush and no pressure — simply the space to share what's been on your mind, the concerns you'd like to address and what you hope to achieve. We listen first, and we explain second.",
  },
  {
    icon: ClipboardCheck,
    title: 'Medical Assessment',
    text: "A thorough review of your medical history, anatomy and the area you'd like treated. This ensures the treatment is safe and genuinely suitable for you, and helps your practitioner understand your body's unique structure and how best to work with it.",
  },
  {
    icon: ListTree,
    title: 'Personalised Treatment Plan',
    text: "If the treatment is appropriate for you, a tailored plan is created — covering the amount of filler, placement and the results you can realistically expect. Everything is explained in plain language, and you're free to ask as many questions as you like before deciding.",
  },
  {
    icon: Syringe,
    title: 'Treatment',
    text: "On the day, the treatment area is prepared and numbing is used for comfort. Filler is then placed in precise layers and gently sculpted to build shape and projection. Sessions are typically shorter than expected, and you'll be guided throughout.",
  },
  {
    icon: HeartPulse,
    title: 'Aftercare Guidance',
    text: "Before you leave, you'll receive clear, written aftercare advice so you know exactly what to expect and how to care for the area. We'll talk through normal settling, what to avoid and how to reach us if anything is on your mind in the days that follow.",
  },
  {
    icon: CalendarCheck2,
    title: 'Review & Follow-up',
    text: 'A follow-up appointment is arranged to review your results once everything has settled. This is your opportunity to discuss how you feel about the outcome, ask any further questions and, if you wish, talk about maintenance in the future.',
  },
];

/**
 * Tracks which step indices have scrolled into view, and returns a setter
 * so each <li> can register itself as an observation target.
 */
const useStepReveal = (count) => {
  const [visible, setVisible] = useState(() => new Array(count).fill(false));
  const nodesRef = useRef([]);

  const setNode = useCallback((el, i) => {
    nodesRef.current[i] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const i = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisible((prev) => {
              if (prev[i]) return prev;
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' }
    );

    nodesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { visible, setNode };
};

const Card = ({ step, align, isVisible, delay }) => {
  const Icon = step.icon;
  return (
    <div
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
      className={`group relative rounded-2xl border border-cyan-400/15 bg-white/[0.03] shadow-[0_2px_20px_rgba(0,0,0,.35)] backdrop-blur-sm px-6 py-6 transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(34,211,238,.15)] motion-reduce:transition-none motion-reduce:transform-none ${
        align === 'right' ? 'md:text-right' : 'md:text-left'
      } text-left ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-6 md:translate-y-8'
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          align === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <span
          className={`flex items-center justify-center w-10 h-10 transition-all duration-500 border shrink-0 rounded-xl border-cyan-400/25 bg-cyan-400/10 text-cyan-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/15 group-hover:rotate-6 md:hidden ${
            isVisible ? 'scale-100' : 'scale-75'
          }`}
        >
          <Icon size={18} strokeWidth={1.8} />
        </span>

        <span
          className={`hidden md:block text-[11px] font-mono tracking-[2px] text-cyan-400/70 transition-opacity duration-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          0{steps.indexOf(step) + 1}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>

      <p className="text-[15px] leading-7 text-slate-300/85">{step.text}</p>
    </div>
  );
};

const HowItWorks = () => {
  const { visible, setNode } = useStepReveal(steps.length);
  const activeCount = visible.filter(Boolean).length;
  const fillPct = steps.length > 1 ? (activeCount / steps.length) * 100 : 0;

  return (
    <section id="how-it-works" className="relative w-full px-4 py-24 overflow-hidden bg-[#05080C] sm:px-8">
      {/* ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-cyan-400/15 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400/60" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-cyan-400">
              The Process
            </span>
            <span className="w-8 h-px bg-cyan-400/60" />
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            How the Process Works
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-slate-300/85">
            Every stage is designed around your comfort, understanding and
            safety — from first conversation to final follow-up. Here's
            exactly what to expect, so nothing feels unknown.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* center line - desktop, base + progressive fill */}
          <div className="absolute top-0 hidden w-px h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent md:block" />
          <div
            className="absolute top-0 hidden w-px -translate-x-1/2 left-1/2 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-[height] duration-700 ease-out md:block"
            style={{ height: `${fillPct}%` }}
          />

          {/* left line - mobile, base + progressive fill */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent md:hidden" />
          <div
            className="absolute left-[19px] top-0 w-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-[height] duration-700 ease-out md:hidden"
            style={{ height: `${fillPct}%` }}
          />

          <ol className="space-y-8 md:space-y-10">
            {steps.map((step, i) => {
              const isRight = i % 2 === 1;
              const Icon = step.icon;
              const isVisible = visible[i];
              return (
                <li
                  key={step.title}
                  ref={(el) => setNode(el, i)}
                  data-index={i}
                  className="relative grid grid-cols-1 items-center gap-4 pl-12 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:pl-0"
                >
                  {/* mobile dot */}
                  <span
                    className={`absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#05080C] ring-1 transition-all duration-500 md:hidden ${
                      isVisible
                        ? 'ring-cyan-400/70'
                        : 'ring-cyan-400/25'
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-500 ${
                        isVisible
                          ? 'bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)] scale-100'
                          : 'bg-cyan-400/40 scale-75'
                      }`}
                    />
                  </span>

                  {/* left column - desktop only */}
                  <div className="hidden md:block">
                    {!isRight && (
                      <Card
                        step={step}
                        align="left"
                        isVisible={isVisible}
                        delay={100}
                      />
                    )}
                  </div>

                  {/* center dot - desktop */}
                  <span
                    className={`relative z-10 hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#05080C] ring-1 transition-all duration-500 md:flex ${
                      isVisible ? 'ring-cyan-400/70' : 'ring-cyan-400/25'
                    }`}
                  >
                    {isVisible && (
                      <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400/20 motion-reduce:hidden" />
                    )}
                    <span
                      className={`relative flex items-center justify-center rounded-full h-7 w-7 transition-colors duration-500 ${
                        isVisible
                          ? 'bg-cyan-400/15 text-cyan-300'
                          : 'bg-cyan-400/5 text-cyan-400/40'
                      }`}
                    >
                      <Icon size={15} strokeWidth={1.75} />
                    </span>
                  </span>

                  {/* right column - desktop only */}
                  <div className="hidden md:block">
                    {isRight && (
                      <Card
                        step={step}
                        align="right"
                        isVisible={isVisible}
                        delay={100}
                      />
                    )}
                  </div>

                  {/* mobile card (always full width, hidden on desktop) */}
                  <div className="md:hidden">
                    <Card
                      step={step}
                      align="left"
                      isVisible={isVisible}
                      delay={0}
                    />
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