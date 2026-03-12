import { Link } from "react-router";
import { CheckCircle, ArrowRight, Shield, Lock, XCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Recurring Assess",
    title: "Understand how you feel.",
    description:
      "Use our self-assessment tool to surface how you've been doing — even when looking fine on the outside.",
  },
  {
    number: "02",
    label: "AI-Powered Collaboration",
    title: "See your results clearly.",
    description:
      "Receive a structured, private summary of your emotional patterns — with plain-language guidance, not diagnostic labels.",
  },
  {
    number: "03",
    label: "AI Research & Search",
    title: "Find your provider match.",
    description:
      "Browse a verified directory of providers filtered by identity, specialty, language, and insurance — no outdated listings, no dead ends.",
  },
  {
    number: "04",
    label: "AI Scheduling",
    title: "Book without the friction.",
    description:
      "Schedule asynchronously, view transparent cost information upfront, and confirm in under 3 minutes.",
  },
];

const testimonials = [
  {
    quote:
      "I kept putting it off for months. Having the assessment tell me what I already felt — but validated — was what finally pushed me to search for someone.",
    name: "Jamie S.",
    role: "MindWell User",
  },
  {
    quote:
      "The filter for LGBTQ+-affirming providers was the reason I actually found someone I trusted. That never existed anywhere else I looked.",
    name: "Marcus T.",
    role: "LGBTQ+ community member",
  },
  {
    quote:
      "I booked at midnight because I finally had the energy to do it. The fact that it wasn't business-hours-only is the whole reason I got in.",
    name: "Priya N.",
    role: "MindWell User",
  },
];

export function HomePage() {
  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-[600] text-[48px] leading-[56px] text-[#2b2675] mb-6">
                Getting help starts with one honest moment.
              </h1>
              <p className="font-normal text-[16px] leading-[27.2px] text-[rgba(43,38,117,0.72)] mb-8 max-w-[480px]">
                MindWell connects you with vetted mental health providers and
                helps you understand how you're feeling — no referral, no
                jargon, no runaround.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/assessment"
                  className="border-2 border-[#2b2675] text-[#2b2675] font-[600] text-[15px] rounded-full px-7 py-3 no-underline hover:bg-[#2b2675] hover:text-[#fffcf2] transition-colors"
                >
                  Take the Self-Assessment
                </Link>
                <Link
                  to="/providers"
                  className="border-2 border-[#2b2675] text-[#2b2675] font-[600] text-[15px] rounded-full px-7 py-3 no-underline hover:bg-[#2b2675] hover:text-[#fffcf2] transition-colors"
                >
                  Find a Provider
                </Link>
              </div>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Shield, label: "HIPAA-Compliant" },
                  { icon: Lock, label: "Privacy-First" },
                  { icon: XCircle, label: "No Referral Needed" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-[rgba(43,38,117,0.65)] text-[13px] font-normal"
                  >
                    <Icon size={14} className="text-[#a99bf7]" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
            {/* Lavender placeholder rectangle */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-[#e6eaff] rounded-[24px] w-full h-[340px]" />
            </div>
          </div>
        </div>
      </section>

      {/* How MindWell Works */}
      <section className="py-20 bg-[#f5f5ff]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-[600] text-[11px] tracking-[1.44px] uppercase text-[#a99bf7] mb-3">
              HOW MINDWELL WORKS
            </p>
            <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675]">
              From awareness to appointment,
              <br />
              we're with you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-[20px] p-7 border border-[#e6eaff]"
              >
                <p className="font-[600] text-[11px] tracking-[1.2px] uppercase text-[#a99bf7] mb-1">
                  {step.number} · {step.label}
                </p>
                <h3 className="font-[600] text-[17px] text-[#2b2675] mb-3 leading-[24px]">
                  {step.title}
                </h3>
                <p className="font-normal text-[13px] leading-[21px] text-[rgba(43,38,117,0.65)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/assessment"
              className="bg-[#d1d84e] text-[#2b2675] font-[600] text-[14px] rounded-full px-7 py-3 no-underline hover:brightness-95 transition-all"
            >
              No referral required to begin
            </Link>
          </div>
        </div>
      </section>

      {/* Self-Assessment Promo */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-[600] text-[11px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                SELF-ASSESSMENT TOOL
              </p>
              <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-6">
                Know where you stand before you take the next step.
              </h2>
              <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-8">
                Our self-assessment is built around the emotional patterns most
                commonly experienced by young adults navigating a transition
                period — school, career changes, relationship shifts, or
                sustained high-functioning stress.
                <br />
                <br />
                It does not produce a diagnosis; it identifies a behavioral
                snapshot that you can use to reduce the emotional activation
                energy required to take that first step.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Takes under 8 minutes to complete",
                  "Completely private — your data never leaves the platform without your consent",
                  "Generates a plain-language summary with no clinical jargon",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="text-[#a99bf7] shrink-0 mt-0.5"
                    />
                    <span className="font-normal text-[14px] leading-[22px] text-[#2b2675]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/assessment"
                className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-7 py-3 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors inline-block"
              >
                Start My Assessment
              </Link>
            </div>

            {/* Mood scale card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-[24px] shadow-[0px_8px_32px_0px_rgba(43,38,117,0.1)] border border-[#e6eaff] p-8 w-full max-w-[380px]">
                <p className="font-[600] text-[15px] text-[#2b2675] mb-6 text-center">
                  How have you been feeling this week?
                </p>
                <div className="flex justify-between mb-4">
                  {["😔", "😟", "😐", "🙂", "😊"].map((emoji, i) => (
                    <button
                      key={i}
                      className={`text-[28px] rounded-full w-[52px] h-[52px] flex items-center justify-center transition-all ${
                        i === 2
                          ? "bg-[#a99bf7] shadow-[0px_4px_12px_rgba(169,155,247,0.4)]"
                          : "hover:bg-[#f0eeff]"
                      }`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <div className="bg-[#e6eaff] rounded-full h-[6px] w-full mt-2">
                  <div className="bg-[#a99bf7] h-full rounded-full w-[50%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Directory Promo */}
      <section className="py-20 bg-[#f5f5ff]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mock provider directory card */}
            <div className="bg-white rounded-[20px] border border-[#e6eaff] p-6 shadow-[0px_4px_24px_0px_rgba(43,38,117,0.08)]">
              <div className="bg-[#f5f5ff] border border-[#e6eaff] rounded-full px-4 py-2 flex items-center gap-2 mb-5">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="rgba(43,38,117,0.4)" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <span className="text-[13px] text-[rgba(43,38,117,0.45)]">Search by specialty, name, or zip code...</span>
              </div>
              <div className="mb-4">
                <p className="font-[600] text-[10px] tracking-[1px] uppercase text-[rgba(43,38,117,0.45)] mb-2">SPECIALTY</p>
                <div className="flex flex-wrap gap-2">
                  {["Anxiety & Stress", "Depression", "Life Transitions"].map((s) => (
                    <span key={s} className="text-[12px] text-[#a99bf7] cursor-pointer hover:text-[#2b2675]">{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                {[
                  { initials: "DSC", name: "Dr. Sarah Chen", spec: "Anxiety & Life Transitions", badge: "Accepting Patients", badgeColor: "bg-[#e8f5e9] text-[#2e7d32]" },
                  { initials: "MTL", name: "Marcus Thompson, LCSW", spec: "Depression & LGBTQ+ Issues", badge: "Limited Availability", badgeColor: "bg-[#fff8e1] text-[#f57f17]" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-3 bg-[#fffcf2] rounded-[14px] p-3 border border-[#e6eaff]">
                    <div className="bg-[#e6eaff] rounded-full size-[40px] flex items-center justify-center shrink-0">
                      <span className="font-[600] text-[10px] text-[#2b2675]">{p.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-[600] text-[13px] text-[#2b2675] truncate">{p.name}</p>
                      <p className="font-normal text-[11px] text-[rgba(43,38,117,0.55)] truncate">{p.spec}</p>
                    </div>
                    <span className={`text-[10px] font-[600] px-2 py-1 rounded-full shrink-0 ${p.badgeColor}`}>{p.badge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-[600] text-[11px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                FIND YOUR PROVIDER & SCHEDULE
              </p>
              <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-6">
                Find a provider built for you. Book in minutes.
              </h2>
              <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-6">
                Our provider directory is filtered by the factors that actually
                matter when finding the right fit — identity, specialty,
                language, insurance, and availability.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Filter by specialty, insurance, and identity fit",
                  "See transparent pricing and availability upfront",
                  "Book appointments asynchronously — no phone calls required",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={16}
                      className="text-[#a99bf7] shrink-0 mt-0.5"
                    />
                    <span className="font-normal text-[14px] leading-[22px] text-[#2b2675]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/providers"
                className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-7 py-3 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors inline-block"
              >
                Browse Providers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Workshop Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-[600] text-[11px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                EDUCATIONAL WORKSHOPS & WEBINARS
              </p>
              <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-6">
                Learn to recognize the signs of overwhelm.
              </h2>
              {/* Event card */}
              <div className="bg-white rounded-[20px] border border-[#e6eaff] p-7 shadow-[0px_4px_24px_0px_rgba(43,38,117,0.06)]">
                <p className="font-[600] text-[12px] text-[rgba(43,38,117,0.55)] mb-1 uppercase tracking-[1px]">
                  AUG 30th | 2 pm – 3 pm
                </p>
                <h3 className="font-[600] text-[18px] text-[#2b2675] mb-3">
                  Learn to recognize the signs of overwhelm.
                </h3>
                <p className="font-normal text-[13px] leading-[21px] text-[rgba(43,38,117,0.65)] mb-5">
                  This workshop aims to educate young adults on recognizing early
                  signs of mental health distress, reducing the stigma surrounding
                  seeking professional help, as well as giving them resources for
                  finding help.
                </p>
                <p className="font-normal text-[13px] leading-[21px] text-[rgba(43,38,117,0.65)] mb-5">
                  The workshop aims to help students and young professionals:
                </p>
                <div className="flex flex-col gap-2.5 mb-6">
                  {[
                    "Learn to recognize the signs of burnout, stress, anxiety, and overwhelm",
                    "Learn how to spot when their coping strategies have outlived their usefulness",
                    "Learn about the resources of their peers and available resources",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="text-[#a99bf7] shrink-0 mt-0.5" />
                      <span className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.65)]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[14px] rounded-full px-6 py-2.5 border-none cursor-pointer hover:bg-[#9585e0] transition-colors">
                  Register Today
                </button>
              </div>
            </div>

            {/* Illustration placeholder */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="bg-[#e6eaff] rounded-[24px] w-full h-[400px] flex items-center justify-center">
                <span className="text-[80px]">🤯</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#2b2675]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-[600] text-[36px] leading-[44px] text-[#fffcf2] mb-4">
              Built for the moment you finally decide to get help.
            </h2>
            <p className="font-normal text-[16px] leading-[27px] text-[rgba(255,252,242,0.65)] max-w-[560px] mx-auto">
              Designed around the real barriers people face when seeking mental
              health support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[rgba(255,252,242,0.06)] rounded-[24px] p-8 border border-[rgba(255,252,242,0.08)]"
              >
                <p className="font-normal text-[14px] leading-[24px] text-[rgba(255,252,242,0.82)] mb-8 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-[600] text-[14px] text-[#fffcf2]">{t.name}</p>
                  <p className="font-normal text-[12px] text-[rgba(255,252,242,0.45)]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "HIPAA Compliant",
              "APA Practice Guidelines Aligned",
              "No Data Sold Ever",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-[rgba(255,252,242,0.55)] text-[13px] font-normal"
              >
                <CheckCircle size={14} className="text-[rgba(255,252,242,0.4)]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
