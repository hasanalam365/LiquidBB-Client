import React from "react";
import {
  ShieldCheck,
  Database,
  CreditCard,
  Mail,
  Lock,
  UserCheck,
} from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: <Database size={22} />,
      title: "Information We Collect",
      content: [
        "Full Name",
        "Email Address",
        "Phone Number",
        "Course Booking Details",
        "Billing Information",
        "IP Address and Device Information",
      ],
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "How We Use Your Information",
      content: [
        "Process course bookings and payments",
        "Provide customer support",
        "Send booking confirmations and updates",
        "Improve website performance and user experience",
        "Comply with legal and regulatory obligations",
      ],
    },
    {
      icon: <CreditCard size={22} />,
      title: "Payment Processing",
      content: [
        "All payments are securely processed through Stripe.",
        "We never store your credit card details.",
        "Payment information is encrypted and handled by trusted payment providers.",
      ],
    },
    {
      icon: <Mail size={22} />,
      title: "Marketing Communications",
      content: [
        "We may occasionally send training updates and promotional offers.",
        "You can unsubscribe from marketing communications at any time.",
      ],
    },
    {
      icon: <Lock size={22} />,
      title: "Data Security",
      content: [
        "We use appropriate security measures to protect your personal data.",
        "Your information is protected against unauthorised access, misuse, or disclosure.",
      ],
    },
    {
      icon: <UserCheck size={22} />,
      title: "Your Rights",
      content: [
        "Request access to your personal data",
        "Request correction of inaccurate information",
        "Request deletion of your data",
        "Withdraw marketing consent at any time",
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#050B0D] text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 -translate-x-1/2 -top-44 h-[700px] w-[1100px] rounded-full bg-cyan-500/10 blur-[220px]" />
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-400/5 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,.08),transparent_65%)]" />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden text-white bg-transparent">
        <div className="px-6 mx-auto max-w-7xl py-28">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-[2px] w-8 bg-cyan-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[4px] text-cyan-300">
                Privacy Policy
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
              Your Privacy Matters
            </h1>

            <p className="max-w-2xl mt-6 text-lg text-white/55">
              At Faces On Faces Academy, we are committed to protecting
              your personal information and ensuring transparency in
              how your data is collected, used, and stored.
            </p>

            <div className="inline-flex px-4 py-2 mt-8 text-sm border rounded-full border-cyan-400/20 bg-cyan-400/10 text-cyan-300 backdrop-blur-xl">
              Last Updated: June 2026
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative px-6 py-20 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto">
          {/* INTRO */}
          <div className="p-8 mb-12 border rounded-3xl border-cyan-400/15 bg-white/[0.03] backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Introduction
            </h2>

            <p className="leading-relaxed text-white/55">
              This Privacy Policy explains how Faces On Faces Academy
              collects, uses, stores, and protects personal information
              when you visit our website, book a training course, or
              contact us regarding our services.
            </p>
          </div>

          {/* POLICY SECTIONS */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group p-8 transition-all duration-300 border rounded-3xl border-cyan-400/15 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-2 hover:border-cyan-300 hover:bg-cyan-400/5 hover:shadow-[0_0_30px_rgba(34,211,238,.12)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex items-center justify-center transition duration-300 border h-11 w-11 rounded-xl border-cyan-400/20 bg-cyan-400/5 text-cyan-300 group-hover:scale-110 group-hover:bg-cyan-400/10">
                    {section.icon}
                  </div>

                  <h2 className="text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/55">
                      <span className="w-2 h-2 mt-2 rounded-full bg-cyan-300"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* THIRD PARTY */}
          <div className="p-8 mt-8 border rounded-3xl border-cyan-400/15 bg-white/[0.03] backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Third-Party Services
            </h2>

            <p className="leading-relaxed text-white/55">
              Our website may use trusted third-party services such as
              Stripe for payment processing and social media platforms
              for communication. These providers have their own privacy
              policies governing how they handle your information.
            </p>
          </div>

          {/* CONTACT */}
          <div className="relative p-10 mt-8 overflow-hidden text-white border rounded-3xl border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl">
            <div className="absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-[100px]" />

            <h2 className="relative mb-4 text-3xl font-bold">
              Contact Us
            </h2>

            <p className="relative mb-6 text-white/60">
              If you have any questions regarding this Privacy Policy,
              please contact us.
            </p>

            <div className="relative space-y-2 text-cyan-100">
              <p>Email: support@facesonfaces.com</p>
              <p>Instagram: @facesonfaces_</p>
              <p>Phone: 08009991751</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;