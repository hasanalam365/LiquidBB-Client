import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";


const STICKY_HEADER_OFFSET = 90;
const PAGE_NAME = "home"; // change per page if this component is reused elsewhere
const SECTION_NAME = "faq";

const faqData = [
  {
    category: "General",
    questions: [
      {
        q: "What is a Liquid BBL treatment?",
        a: "Liquid BBL is a non-surgical body contouring treatment that enhances the shape and volume of the buttocks using injectable fillers. It offers a subtle, natural-looking enhancement without the need for implants or surgery.",
      },
      {
        q: "Who is Liquid BBL suitable for?",
        a: "Liquid BBL is ideal for adults looking to improve the shape, symmetry, or volume of their buttocks without undergoing surgery. A consultation is required to determine if the treatment is appropriate for you.",
      },
      {
        q: "How is Liquid BBL different from a surgical BBL?",
        a: "Unlike a surgical Brazilian Butt Lift, Liquid BBL does not involve liposuction, general anaesthesia, or implants. The treatment is minimally invasive, has less downtime, and focuses on subtle, natural enhancement.",
      },
    ],
  },

  {
    category: "Eligibility",
    questions: [
      {
        q: "Am I a good candidate for Liquid BBL?",
        a: "Most healthy adults seeking a modest improvement in shape or volume may be suitable candidates. Your practitioner will assess your medical history and aesthetic goals during your consultation.",
      },
      {
        q: "Who should avoid this treatment?",
        a: "This treatment may not be suitable for individuals who are pregnant or breastfeeding, have active infections, certain medical conditions, or allergies to the filler ingredients. A consultation is essential before treatment.",
      },
      {
        q: "Do I need a consultation first?",
        a: "Yes. Every patient must attend a consultation before treatment to ensure the procedure is safe and appropriate for their individual needs.",
      },
    ],
  },

  {
    category: "Treatment Process",
    questions: [
      {
        q: "How long does the procedure take?",
        a: "The treatment usually takes between 60 and 90 minutes, depending on the treatment plan and the amount of product required.",
      },
      {
        q: "Is the procedure painful?",
        a: "Most clients experience only mild discomfort. A local anaesthetic or numbing agent may be used to maximise comfort throughout the procedure.",
      },
      {
        q: "Will I need more than one session?",
        a: "Some clients achieve their desired results in a single session, while others may benefit from additional treatments depending on their goals.",
      },
      {
        q: "How much filler will I need?",
        a: "The amount of filler required varies depending on your anatomy, desired outcome, and the practitioner's assessment during your consultation.",
      },
    ],
  },

  {
    category: "Results",
    questions: [
      {
        q: "When will I see the results?",
        a: "Results are visible immediately after treatment, although the final appearance will continue to improve as swelling settles over the following days.",
      },
      {
        q: "How long do the results last?",
        a: "Results typically last between 12 and 24 months, depending on the product used, your metabolism, and lifestyle factors.",
      },
      {
        q: "Will the results look natural?",
        a: "Yes. Liquid BBL is designed to provide subtle, balanced, and natural-looking enhancement that complements your body shape.",
      },
      {
        q: "Can I have touch-up treatments?",
        a: "Yes. Maintenance or touch-up appointments can help preserve your results over time.",
      },
    ],
  },

  {
    category: "Recovery & Aftercare",
    questions: [
      {
        q: "Is there any downtime?",
        a: "Downtime is minimal. Most clients return to their normal daily activities within 24 to 48 hours, following the aftercare advice provided by their practitioner.",
      },
      {
        q: "What should I avoid after treatment?",
        a: "You should avoid strenuous exercise, excessive pressure on the treated area, hot baths, saunas, and alcohol for the period recommended by your practitioner.",
      },
      {
        q: "Will there be swelling or bruising?",
        a: "Mild swelling, bruising, or tenderness is common and usually resolves within a few days to two weeks.",
      },
      {
        q: "When can I exercise again?",
        a: "Most clients can resume light activities after 24 to 48 hours, while more intense exercise should be delayed according to your practitioner's advice.",
      },
    ],
  },

  {
    category: "Safety",
    questions: [
      {
        q: "Is Liquid BBL safe?",
        a: "When performed by a qualified and experienced medical practitioner using approved products, Liquid BBL is considered a safe procedure. Every treatment begins with a comprehensive consultation and assessment.",
      },
      {
        q: "Are there any risks or side effects?",
        a: "As with any injectable treatment, temporary swelling, bruising, redness, tenderness, or discomfort may occur. Serious complications are rare but will be discussed during your consultation.",
      },
      {
        q: "Who performs the treatment?",
        a: "All treatments are performed by trained, qualified, and experienced aesthetic practitioners following strict clinical safety standards.",
      },
    ],
  },

  {
    category: "Pricing & Booking",
    questions: [
      {
        q: "How much does Liquid BBL cost?",
        a: "The cost depends on the amount of filler required and your personalised treatment plan. You'll receive a full quotation during your consultation.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes. Flexible payment options may be available. Please contact our team for the latest finance and payment plan information.",
      },
      {
        q: "How do I book a consultation?",
        a: "Simply complete our enquiry form or contact our clinic directly. A member of our team will arrange your consultation and answer any questions you may have before booking.",
      },
      {
        q: "Can I reschedule my appointment?",
        a: "Yes. Please contact us as early as possible if you need to rearrange your appointment. Our booking team will be happy to assist you.",
      },
    ],
  },
];

const FAQ = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState({});
  const categoryRefs = useRef([]);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    if (openCategory === null) return;
    const el = categoryRefs.current[openCategory];
    if (!el) return;

    el.scrollIntoView({ behavior: "auto", block: "start" });
  }, [openCategory]);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let tracked = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked) {
          tracked = true;

          

          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const toggleCategory = (index) => {
    const isOpening = openCategory !== index;

    

    setOpenCategory(isOpening ? index : null);

    if (isOpening) {
      setOpenQuestion({});
    }
  };

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    const opening = !openQuestion[key];

    
    setOpenQuestion((prev) => ({
      ...prev,
      [key]: opening,
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#05080A] py-24"
      style={{ overflowAnchor: "none" }}
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />
<div className="absolute right-0 bottom-0 h-[260px] w-[260px] rounded-full bg-cyan-400/5 blur-[120px]" />

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

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#9FB3BD]">
            Find answers to the most common questions about our CPD accredited
            Foundation Aesthetics Course.
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
              style={{ overflowAnchor: "none", scrollMarginTop: STICKY_HEADER_OFFSET }}
              className="overflow-hidden rounded-2xl border border-cyan-400/15 bg-[#081116]/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,.18)]"
            >
              <button
                onClick={() => toggleCategory(index)}
                className="flex w-full items-center justify-between px-8 py-6 text-left transition-colors hover:bg-cyan-400/[0.03]"
              >
                <span className="text-xl font-semibold text-white">
                  {section.category}
                </span>

                {openCategory === index ? (
                  <ChevronUp size={22} className="text-cyan-400" />
                ) : (
                  <ChevronDown size={22} className="text-cyan-400" />
                )}
              </button>

              {openCategory === index && (
                <div className="border-t border-cyan-400/10">
                  {section.questions.map((item, i) => {
                    const key = `${index}-${i}`;

                    return (
                      <div
                        key={i}
                        className="border-b border-cyan-400/10 last:border-b-0"
                      >
                        <button
                          onClick={() => toggleQuestion(index, i)}
                          className="flex items-center justify-between w-full px-8 py-6 text-left transition-colors hover:bg-cyan-400/[0.03]"
                        >
                          <h3 className="pr-6 text-[18px] font-semibold text-white">
                            {i + 1}. {item.q}
                          </h3>

                          {openQuestion[key] ? (
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

                        {openQuestion[key] && (
                          <div className="px-8 pb-6">
                            <p className="whitespace-pre-line text-[15px] leading-8 text-[#9FB3BD]">
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