import React, { useEffect, useRef, useState, useCallback } from 'react';

const results = [
  {
    title: 'Improved Contour',
    description:
      'A smoother, more defined shape that complements your natural frame. The aim is refinement rather than transformation — enhancing your existing silhouette so it feels more balanced.',
  },
  {
    title: 'Added Volume',
    description:
      'Subtle fullness in areas that may have lost proportion over time. Volume is built gradually and thoughtfully, so the result looks like a natural part of you rather than something added.',
  },
  {
    title: 'Enhanced Body Balance',
    description:
      "Greater harmony between your proportions for a silhouette that finally feels right. A small change in one area can bring the whole shape into proportion in a way that's surprisingly impactful.",
  },
  {
    title: 'Greater Confidence',
    description:
      "Feeling more at ease in your clothing and your own skin. For many, the most meaningful result isn't visible in a mirror — it's the quiet confidence that returns when you stop worrying.",
  },
  {
    title: 'Natural Appearance',
    description:
      "Results designed to look like you — enhanced, not altered. The treatment works with your body's own lines, so the outcome reads as natural rather than obvious.",
  },
  {
    title: 'Gradual Visible Results',
    description:
      'Some enhancement is visible immediately, though the final shape settles as swelling subsides and the filler integrates over the following weeks. Healing is gentle and the outcome develops naturally.',
  },
];

/**
 * Reveals items as they scroll into view. Returns a ref-callback each
 * item registers itself with, plus the array of visibility flags.
 */
const useReveal = (count) => {
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
      { threshold: 0.25, rootMargin: '0px 0px -8% 0px' }
    );

    nodesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return { visible, setNode };
};

const Marker = ({ active }) => (
  <span
    className={`mr-3 inline-block h-px shrink-0 self-center transition-all duration-500 ${
      active ? 'w-5 bg-cyan-500' : 'w-2.5 bg-cyan-400/40'
    }`}
  />
);

const ResultCard = ({ item, isVisible, delay, setNode, index }) => (
  <div
    ref={(el) => setNode(el, index)}
    data-index={index}
    style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    className={`group rounded-2xl border border-cyan-400/20 bg-white p-7 shadow-[0_2px_20px_rgba(8,20,24,.06)] backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,.18)] motion-reduce:transition-none motion-reduce:transform-none ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
  >
    <h3 className="flex items-baseline text-xl font-semibold text-[#0B1518]">
      <Marker active={isVisible} />
      {item.title}
    </h3>

    <p className="mt-3 text-[15px] leading-7 text-[#4A5C63]">
      {item.description}
    </p>
  </div>
);

const ExpectedResult = () => {
  const { visible, setNode } = useReveal(results.length);
  const [footerVisible, setFooterVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setFooterVisible(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-20 left-0 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-cyan-400/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite]" />

      <div className="relative max-w-5xl px-6 mx-auto lg:px-10">
        {/* Heading */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400/60" />
            <span className="text-[11px] font-bold uppercase tracking-[3px] text-cyan-600">
              Realistic Expectations
            </span>
            <span className="w-8 h-px bg-cyan-400/60" />
          </div>

          <h2 className="text-4xl font-bold text-[#0B1518] md:text-5xl">
            Expected Results
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#4A5C63]">
            Results are intended to be subtle and natural-looking. The aim is
            enhancement that complements you — never a dramatic, obvious
            change. Here's what the treatment is designed to achieve, and an
            honest look at how results develop over time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {results.map((item, index) => (
            <ResultCard
              key={item.title}
              item={item}
              index={index}
              isVisible={visible[index]}
              delay={(index % 2) * 100}
              setNode={setNode}
            />
          ))}
        </div>

        {/* Longevity & Maintenance — full width */}
        <div
          ref={footerRef}
          className={`mt-6 rounded-2xl border border-cyan-400/20 bg-white p-7 shadow-[0_2px_20px_rgba(8,20,24,.06)] backdrop-blur-sm transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            footerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <h3 className="flex items-baseline text-xl font-semibold text-[#0B1518]">
            <Marker active={footerVisible} />
            Longevity &amp; Maintenance
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-[#4A5C63]">
            Results are not permanent. Dermal filler is gradually broken down
            naturally by the body, so the volume you gain will soften over
            time. Exactly how long results last varies from person to person
            and depends on factors such as your metabolism, lifestyle and the
            amount of filler used. Your practitioner will explain what to
            expect during your consultation — so there are no surprises.
          </p>
        </div>

        {/* Footer note */}
        <p
          className={`mt-10 text-center text-[13px] italic text-[#6B7B83] transition-opacity duration-700 ${
            footerVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Individual results vary. A consultation is the only way to
          understand what may be possible for you.
        </p>
      </div>
    </section>
  );
};

export default ExpectedResult;