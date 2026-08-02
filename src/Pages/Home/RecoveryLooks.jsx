import React from "react";
import {
  Clock,
  Droplet,
  HeartPulse,
  ClipboardList,
  Ban,
  Briefcase,
  Dumbbell,
  CalendarCheck2,
} from "lucide-react";

const recoveryPoints = [
  {
    icon: Clock,
    title: "Immediately Afterwards",
    description:
      "It's completely normal for the treated area to look and feel a little fuller than the final result, and for the skin to feel tight. You'll be able to leave the clinic the same day. We'll check that you're comfortable and go over your aftercare instructions before you head home.",
  },
  {
    icon: Droplet,
    title: "Normal Swelling",
    description:
      "Some swelling is expected in a normal part of the process as the fillers settle and the body responds. This is expected and usually subsides over the first week. The swelling contributes to the initial fullness, which is why the final shape only becomes clear once everything has settled.",
  },
  {
    icon: HeartPulse,
    title: "Bruising & Tenderness",
    description:
      "Mild bruising and tenderness around the injection points are common and nothing to worry about. They typically fade on their own within a week to ten days. Gentle comfort measures and simple advice will help you through this short phase.",
  },
  {
    icon: ClipboardList,
    title: "Aftercare Advice",
    description:
      "You'll receive clear, written guidance specific to your care for the short period, staying hydrated and keeping the skin clean. Following these simple steps helps your results settle beautifully.",
  },
  {
    icon: Ban,
    title: "Activities to Avoid",
    description:
      "For a short time afterwards we advise avoiding strenuous exercise, prolonged pressure on the area (such as sitting directly on the treated area) and any hot environments like saunas. Your practitioner will let you know exactly what to avoid so you can plan with confidence.",
  },
  {
    icon: Briefcase,
    title: "Returning to Work",
    description:
      "Most people feel comfortable returning to work within a few days, depending on the nature of their role. If your work is physically demanding, we may suggest a little longer. We'll always tailor our advice to your day-to-day life.",
  },
  {
    icon: Dumbbell,
    title: "Resuming Exercise",
    description:
      "Gentle movement is encouraged soon after treatment, but strenuous exercise is best paused for around a week or so, as advised. Easing back into activity gradually helps the filler settle and supports a smooth recovery.",
  },
  {
    icon: CalendarCheck2,
    title: "Follow-up Care",
    description:
      "A review appointment is arranged once the area has fully settled, so we can assess your results and answer any questions. If anything is on your mind in the meantime, you're always welcome to contact us — you won't be left to wonder.",
  },
];

const RecoveryLooks = () => {
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

          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[2px] w-8 bg-cyan-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-600">
              Recovery & Aftercare
            </span>
            <div className="h-[2px] w-8 bg-cyan-400" />
          </div>

          <h2 className="text-4xl font-bold leading-tight text-[#0B1518] lg:text-5xl">
            What Recovery Looks Like
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#4A5C63]">
            Knowing what to expect afterwards is just as important as
            understanding the treatment itself. Recovery from a Liquid BBL is
            gentle and straightforward, and a little guidance goes a long
            way. Here's an honest, practical look at the days and weeks that
            follow.
          </p>

        </div>

        {/* Recovery Grid */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recoveryPoints.map((item) => {
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

      </div>

    </section>
  );
};

export default RecoveryLooks;