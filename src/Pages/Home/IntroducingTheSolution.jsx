import React from "react";
import {
  CheckCircle2,
} from "lucide-react";

const IntroducingTheSolution = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-[#05080A] py-28">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/5 blur-[170px]" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[150px]" />

        <div className="absolute right-0 top-20 h-[320px] w-[320px] rounded-full bg-cyan-300/5 blur-[150px]" />

      </div>

      <div className="relative max-w-5xl px-6 mx-auto">

        {/* ================= IMAGE ================= */}

        {/* <div className="relative max-w-3xl mx-auto mb-16">

          <div className="absolute inset-0 rounded-[30px] bg-cyan-400/10 blur-[70px]" />

          <div className="relative overflow-hidden rounded-[30px] border border-cyan-400/20 bg-[#091215] p-4 backdrop-blur-xl">

            <img
              src="https://i.ibb.co.com/xSxz3Wdy/banner.jpg"
              alt="Liquid BBL"
              className="h-[420px] w-full rounded-[24px] object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-[#05080A]/65 via-transparent to-transparent" />

          </div>

        </div> */}

        {/* Section Label */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-3">

            <div className="h-[2px] w-10 bg-cyan-400" />

            <span className="text-[11px] uppercase tracking-[4px] font-semibold text-cyan-300">

              Introducing The Solution

            </span>

            <div className="h-[2px] w-10 bg-cyan-400" />

          </div>

        </div>

        {/* Heading */}

        <h2 className="mt-6 text-5xl font-bold text-center text-white md:text-6xl">

          A Non-Surgical Option
          <br />
          That May Help

        </h2>

        {/* Intro */}

        <p className="mx-auto mt-8 max-w-4xl text-center text-lg leading-8 text-[#9FB3BD]">

          Once you've identified the concerns that matter most to you,
          the next step is understanding the options available.
          Liquid BBL is a modern, minimally invasive treatment designed
          to enhance body contours without surgery, helping many people
          achieve a fuller and more balanced silhouette with minimal
          downtime.

        </p>

        {/* ================= WHAT IS LIQUID BBL ================= */}

        <div className="mt-16">

          <h3 className="text-3xl font-bold text-white">

            What is Liquid BBL?

          </h3>

          <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">

            Liquid BBL is a non-surgical body contouring treatment that
            uses carefully selected dermal fillers to enhance the shape,
            volume and definition of the buttocks. Unlike a traditional
            Brazilian Butt Lift, this procedure does not require fat
            transfer, liposuction or general anaesthesia. Instead,
            specially placed dermal fillers are used to improve contour,
            soften transitions around the hips and create a naturally
            fuller appearance while maintaining harmony with the body's
            existing proportions.

          </p>

          <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">

            Every treatment plan is personalised according to the
            individual's anatomy, body shape and desired outcome.
            Rather than dramatically changing the body, the goal is to
            achieve subtle, elegant improvements that complement your
            natural figure and boost overall confidence.

          </p>

        </div>

        {/* ================= WHY CALLED LIQUID ================= */}

        <div className="mt-16">

          <h3 className="text-3xl font-bold text-white">

            Why Is It Called "Liquid"?

          </h3>

          <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">

            The treatment is commonly referred to as "Liquid BBL"
            because volume is created using injectable dermal fillers
            rather than transferring fat from another part of the body.
            This innovative approach offers an alternative for people
            who want to improve their body contours without undergoing
            major surgery.

          </p>

        </div>

        {/* ================= HOW IT WORKS ================= */}

        <div className="mt-16">

          <h3 className="text-3xl font-bold text-white">

            How Does It Work?

          </h3>

          <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">

            During your consultation, your practitioner will assess your
            natural body proportions, discuss your goals and develop a
            personalised treatment plan. Carefully placed dermal fillers
            are then used to improve shape, add volume and refine the
            overall contour of the buttocks. The treatment focuses on
            creating smooth transitions and natural-looking enhancement
            rather than an artificial appearance.

          </p>
                    {/* ================= BENEFITS ================= */}

          <div className="mt-16 rounded-[28px] border border-cyan-400/15 bg-[#081114]/60 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Key Benefits of Liquid BBL
            </h3>

            <p className="mt-5 text-[17px] leading-9 text-[#9FB3BD]">
              While every treatment is tailored to the individual, many
              patients choose Liquid BBL because it offers a balance
              between subtle enhancement, convenience and minimal
              downtime. Rather than creating an artificial appearance,
              the treatment is designed to work with your natural body
              shape, enhancing areas where additional contour or volume
              may be desired.
            </p>

            <div className="grid gap-5 mt-10 md:grid-cols-2">

              {[
                "Non-surgical procedure",
                "No general anaesthetic",
                "Minimal downtime",
                "Natural-looking enhancement",
                "Personalised treatment plan",
                "Improved body contour",
                "Enhanced confidence",
                "Suitable after professional consultation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-xl border border-cyan-400/10 bg-[#0B1518]/80 p-4 transition duration-300 hover:border-cyan-300/40"
                >
                  <CheckCircle2
                    className="mt-1 text-cyan-300"
                    size={20}
                  />

                  <span className="leading-7 text-[#C8D6DC]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* ================= WHO MAY BENEFIT ================= */}

          <div className="mt-20">

            <h3 className="text-3xl font-bold text-white">
              Who May Benefit From This Treatment?
            </h3>

            <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">
              Liquid BBL may be considered by individuals who are looking
              for a subtle enhancement rather than dramatic surgical
              change. It is often explored by people who feel their body
              proportions could be more balanced, who have naturally
              flatter contours, or who have noticed changes in volume
              over time.
            </p>

            <p className="mt-6 text-[17px] leading-9 text-[#9FB3BD]">
              The treatment is not suitable for everyone, which is why a
              professional consultation is an essential part of the
              process. During this appointment, your practitioner will
              discuss your goals, assess your medical history and advise
              whether this treatment is appropriate for your individual
              circumstances.
            </p>

          </div>

          {/* ================= IMPORTANT ================= */}

          <div className="mt-20 rounded-[28px] border border-cyan-400/20 bg-gradient-to-br from-[#091215] to-[#071013] p-8">

            <h3 className="text-3xl font-bold text-white">
              Important Things to Know
            </h3>

            <div className="mt-8 space-y-6 text-[#9FB3BD]">

              <p className="leading-8">
                Every person's anatomy is unique, meaning results will
                naturally vary from one individual to another. A
                personalised treatment plan is always recommended to
                achieve the most balanced and natural-looking outcome.
              </p>

              <p className="leading-8">
                Temporary swelling, bruising or tenderness may occur
                after treatment. These effects are generally mild and
                form part of the normal healing process.
              </p>

              <p className="leading-8">
                Following the aftercare advice provided by your
                practitioner is essential for supporting recovery and
                helping you achieve the best possible outcome.
              </p>

            </div>

          </div>

          {/* ================= CTA ================= */}

          <div className="mt-24 overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[#081114] p-10 text-center shadow-[0_0_50px_rgba(34,211,238,.08)]">

            <div className="max-w-3xl mx-auto">

              <h3 className="text-4xl font-bold text-white">
                Curious Whether Liquid BBL Could Be Right For You?
              </h3>

              <p className="mt-6 text-lg leading-8 text-[#9FB3BD]">
                The best place to start is with a professional
                consultation. We'll take the time to understand your
                goals, answer your questions and explain your available
                options—helping you make an informed decision with
                confidence.
              </p>

              <button className="mt-10 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-[#041317] transition duration-300 hover:scale-105 hover:bg-cyan-300">
                Request a Consultation
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Line */}

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

    </section>
  );
};

export default IntroducingTheSolution;