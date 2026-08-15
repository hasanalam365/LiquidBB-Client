import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";

// Adjust these relative paths to match this file's actual location in your src/ tree.
import useSectionTracking from "../../hooks/useSectionTracking";
import { trackEvent } from "../../analytics/analytics";
import { EVENTS } from "../../analytics/events";
import { trackFaqOpen, trackFaqClose } from "../../analytics/trackers";

const STICKY_HEADER_OFFSET = 90;

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is a Liquid BBL?",
        a: "A Liquid BBL is a non-surgical treatment that uses carefully placed dermal fillers to add shape, volume and contour to the buttocks. Rather than surgically transferring fat, the treatment sculpts the area with a soft, gel-based filler, creating a fuller and more balanced appearance without incisions or general anaesthesia.",
      },
      {
        q: "Why is it called 'Liquid' BBL?",
        a: "The name refers to the soft, gel-like filler used in the treatment. Unlike a traditional BBL, which moves solid fat tissue from one area to another, this approach uses a pliable 'liquid' filler that can be sculpted and shaped as it's placed. This quality is what helps the results look and feel natural.",
      },
      {
        q: "Will it look natural?",
        a: "Yes. The goal isn't a dramatic transformation, but a refined enhancement that complements your natural body shape. Filler is placed to work with your existing proportions, so the results look like an improved, more balanced version of you rather than an obviously altered one.",
      },
      {
        q: "Is surgery required?",
        a: "No. A Liquid BBL is entirely non-surgical. There's no cutting, no general anaesthetic, and no hospital stay. The treatment is performed using injections only, making it a suitable option for people who want to avoid the risks and recovery time associated with surgery.",
      },
      {
        q: "How is it different from a surgical BBL?",
        a: "A surgical BBL involves liposuction to harvest fat from one area, which is then transferred to the buttocks under general anaesthesia. A Liquid BBL skips this process entirely, using dermal filler instead. This means less risk, less downtime and no need for a surgical fat transfer.",
      },
      {
        q: "How does the treatment work?",
        a: "During your appointment, filler is injected at carefully selected points around the buttocks to add volume, lift and shape. Your practitioner will assess your anatomy and desired outcome beforehand, tailoring the placement to suit your body and goals.",
      },
    ],
  },
  {
    category: "Treatment Process",
    questions: [
      {
        q: "How long does the treatment take?",
        a: "Most Liquid BBL appointments take between 45 and 90 minutes, depending on how much filler is required and the complexity of the treatment plan. Your practitioner will confirm timings during your consultation.",
      },
      {
        q: "Does it hurt?",
        a: "Some discomfort is normal, but numbing cream or local anaesthetic is typically used to keep things comfortable. Most people describe the sensation as mild pressure or a pinching feeling rather than significant pain.",
      },
    ],
  },
  {
    category: "Results",
    questions: [
      {
        q: "How long do results last?",
        a: "Results generally last 12 to 24 months, although this varies from person to person depending on metabolism, lifestyle and the specific filler used. Many people choose to have maintenance treatments to preserve their results long-term.",
      },
      {
        q: "When will I see results?",
        a: "You'll notice a visible difference immediately after treatment, though some swelling is expected. Final results typically settle within 2 to 4 weeks, once any temporary swelling has fully resolved.",
      },
    ],
  },
  {
    category: "Suitability",
    questions: [
      {
        q: "Who is suitable for a Liquid BBL?",
        a: "This treatment is best suited to adults who want subtle to moderate enhancement without surgery. It works well for those looking to improve shape, symmetry or fullness while avoiding the risks and recovery time of a surgical procedure.",
      },
      {
        q: "Who is NOT suitable?",
        a: "This treatment isn't suitable for anyone who is pregnant or breastfeeding, has an active skin infection in the area, or has certain bleeding disorders. A full medical history is reviewed at consultation to check suitability.",
      },
      {
        q: "Is it mummy safe?",
        a: "While many mums do have this treatment, it is not recommended during pregnancy or while breastfeeding. Once you've finished breastfeeding and your body has settled, a consultation can confirm if and when treatment may be appropriate.",
      },
    ],
  },
  {
    category: "Recovery & Aftercare",
    questions: [
      {
        q: "What should I avoid afterwards?",
        a: "You should avoid strenuous exercise, sitting for long periods, hot baths, saunas and alcohol for the timeframe advised by your practitioner, typically 48 to 72 hours, to support healing and reduce swelling.",
      },
      {
        q: "Are there any side effects or risks?",
        a: "Mild swelling, bruising, tenderness or redness at the injection sites is common and usually settles within a few days. Rare risks include infection, asymmetry or filler migration, which your practitioner will explain during your consultation.",
      },
    ],
  },
  {
    category: "Consultation & Booking",
    questions: [
      {
        q: "Is a consultation required?",
        a: "Yes. Every client must attend a consultation before treatment. This allows your practitioner to assess your suitability, discuss your goals and agree on a treatment plan tailored to you.",
      },
      {
        q: "Will I be pressured into having treatment?",
        a: "No. Consultations are relaxed, informative sessions with no obligation to proceed. You'll have time to ask questions and consider your options before deciding if and when to go ahead.",
      },
      {
        q: "Can I combine this with other treatments?",
        a: "Yes, in some cases. Your practitioner can advise whether combining treatments is appropriate for your goals, spacing out procedures as needed to ensure safety and optimal results.",
      },
      {
        q: "Do I need a consultation?",
        a: "Yes, a consultation is required before any treatment to ensure it's right for you and to create a personalised plan based on your goals and medical history.",
      },
    ],
  },
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState({});
  const categoryRefs = useRef([]);

  // "faq" matches the section-naming convention used across the site.
  // section_index 11 is a placeholder — adjust to match this section's
  // real position in the page.
  const sectionRef = useSectionTracking({
    sectionName: "faq",
    sectionIndex: 11,
  });

  useLayoutEffect(() => {
    if (openCategory === null) return;
    const el = categoryRefs.current[openCategory];
    if (!el) return;

    el.scrollIntoView({ behavior: "auto", block: "start" });
  }, [openCategory]);

  const toggleCategory = (index) => {
    const isOpening = openCategory !== index;
    setOpenCategory(isOpening ? index : null);

    if (isOpening) {
      setOpenQuestion({});
    }

    trackEvent(isOpening ? EVENTS.FAQ_OPEN : EVENTS.FAQ_CLOSE, {
      faq_level: "category",
      faq_id: String(index),
      faq_question: faqData[index]?.category,
      section_name: "faq",
      page_path: window.location.pathname,
    });
  };

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    const isOpening = !openQuestion[key];

    setOpenQuestion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    const questionText =
      faqData[categoryIndex]?.questions[questionIndex]?.q;

    if (isOpening) {
      trackFaqOpen({
        faqId: key,
        faqQuestion: questionText,
        sectionName: "faq",
        pagePath: window.location.pathname,
      });
    } else {
      trackFaqClose({
        faqId: key,
        faqQuestion: questionText,
        sectionName: "faq",
        pagePath: window.location.pathname,
      });
    }
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-[#05080C]"
      style={{ overflowAnchor: "none" }}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-cyan-500/15 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-cyan-400/15 blur-[120px]" />

      <div className="relative z-10 max-w-5xl px-4 mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 inline-block text-[11px] font-bold uppercase tracking-[3px] text-cyan-400">
            Frequently Asked Questions
          </p>

          <h2 className="font-bold leading-tight text-white">
            <span className="block text-4xl md:text-5xl">
              Everything You Need
            </span>
            <span className="block text-4xl md:text-5xl text-cyan-400">
              To Know
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-slate-300/85">
            It's natural to have questions — the more you ask, the more
            confident your decision will be. Here are some of the most common
            questions we hear, answered honestly and in plain language.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-5" style={{ overflowAnchor: "none" }}>
          {faqData.map((section, index) => (
            <motion.div
              key={index}
              ref={(el) => (categoryRefs.current[index] = el)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              style={{
                overflowAnchor: "none",
                scrollMarginTop: STICKY_HEADER_OFFSET,
              }}
              className="overflow-hidden rounded-2xl border border-cyan-400/15 bg-white/[0.03] shadow-[0_2px_20px_rgba(0,0,0,.35)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,.15)]"
            >
              <button
                onClick={() => toggleCategory(index)}
                className="flex items-center justify-between w-full px-6 py-6 text-left transition-colors hover:bg-cyan-400/[0.06] sm:px-8"
              >
                <span className="text-lg font-semibold text-white sm:text-xl">
                  {section.category}
                </span>

                {openCategory === index ? (
                  <ChevronUp size={22} className="flex-shrink-0 text-cyan-400" />
                ) : (
                  <ChevronDown size={22} className="flex-shrink-0 text-cyan-400" />
                )}
              </button>

              {openCategory === index && (
                <div className="border-t border-cyan-400/15">
                  {section.questions.map((item, i) => {
                    const key = `${index}-${i}`;
                    const isOpen = openQuestion[key];

                    return (
                      <div
                        key={i}
                        className="border-b border-cyan-400/15 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleQuestion(index, i)}
                          className="flex items-center justify-between w-full gap-4 px-6 py-5 text-left transition-colors hover:bg-cyan-400/[0.06] sm:px-8"
                        >
                          <h3 className="pr-4 text-[15px] font-semibold text-white sm:text-[16px]">
                            {item.q}
                          </h3>

                          {isOpen ? (
                            <Minus
                              size={18}
                              className="flex-shrink-0 text-cyan-400"
                            />
                          ) : (
                            <Plus
                              size={18}
                              className="flex-shrink-0 text-cyan-400"
                            />
                          )}
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-6 sm:px-8">
                            <p className="whitespace-pre-line text-[14px] leading-7 text-slate-300/85">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;