import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Brain, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzMxNjMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const journalingImage = "https://images.unsplash.com/photo-1558086478-d632ccc5a833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGpvdXJuYWxpbmclMjBzZWxmJTIwY2FyZSUyMG1vcm5pbmd8ZW58MXx8fHwxNzczMTYzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const groupImage = "https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjB0aGVyYXB5JTIwc3VwcG9ydCUyMGNpcmNsZXxlbnwxfHx8fDE3NzMwOTEzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const services = [
  {
    icon: Brain,
    title: "Self-Assessment Tool",
    description: "Identify emotional and behavioral patterns with our private, non-diagnostic check-in tool.",
    link: "/assessment",
    linkText: "Take Assessment",
  },
  {
    icon: Users,
    title: "Find a Provider",
    description: "Search our curated directory of licensed mental health professionals who match your needs.",
    link: "/providers",
    linkText: "Browse Providers",
  },
  {
    icon: Heart,
    title: "Resources & Guides",
    description: "Access evidence-based articles, coping strategies, and wellness tools at your own pace.",
    link: "/resources",
    linkText: "Explore Resources",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours. We never share your personal information without explicit consent.",
    link: "/about",
    linkText: "Learn More",
  },
];

const testimonials = [
  {
    quote: "MindWell helped me realize I wasn't alone. The self-assessment gave me the clarity I needed to finally reach out for help.",
    name: "Alex R.",
    role: "MindWell User",
  },
  {
    quote: "Finding a therapist who truly understands my background was so easy with the provider directory. I'm grateful.",
    name: "Priya S.",
    role: "MindWell User",
  },
  {
    quote: "The resources section became my go-to during tough weeks. It's like having a supportive friend available 24/7.",
    name: "Jordan M.",
    role: "MindWell User",
  },
];

export function HomePage() {
  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e6eaff] blur-[80px] rounded-full w-[600px] h-[600px] -top-[200px] -right-[100px] opacity-60" />
          <div className="absolute bg-[#a99bf7] blur-[100px] rounded-full w-[400px] h-[400px] bottom-0 left-[10%] opacity-20" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                Your mental health matters
              </p>
              <h1 className="font-[600] text-[48px] leading-[56px] text-[#2b2675] mb-6">
                A safe space to understand yourself better.
              </h1>
              <p className="font-normal text-[18px] leading-[30px] text-[rgba(43,38,117,0.72)] mb-10 max-w-[500px]">
                MindWell offers free self-assessment tools, a curated provider directory, and 
                evidence-based resources to support your mental health journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/assessment"
                  className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-8 py-4 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors inline-flex items-center gap-2"
                >
                  Start Your Check-In
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/providers"
                  className="border-2 border-[#2b2675] text-[#2b2675] font-[600] text-[15px] rounded-full px-8 py-4 no-underline hover:bg-[#2b2675] hover:text-[#fffcf2] transition-colors"
                >
                  Find a Provider
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[24px] overflow-hidden shadow-[0px_16px_48px_0px_rgba(43,38,117,0.12)]">
                <ImageWithFallback
                  src={heroImage}
                  alt="Peaceful nature scene representing mental wellness"
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-[16px] p-5 shadow-[0px_8px_24px_0px_rgba(43,38,117,0.1)]">
                <div className="flex items-center gap-3">
                  <div className="bg-[rgba(209,216,78,0.15)] border border-[rgba(209,216,78,0.4)] rounded-full p-2">
                    <CheckCircle size={20} className="text-[#2b2675]" />
                  </div>
                  <div>
                    <p className="font-[600] text-[14px] text-[#2b2675]">100% Private</p>
                    <p className="font-normal text-[12px] text-[rgba(43,38,117,0.55)]">Your data never leaves your device</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
              How We Help
            </p>
            <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-4">
              Tools built around your wellbeing
            </h2>
            <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] max-w-[560px] mx-auto">
              Everything you need to check in with yourself, find support, and build healthier habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#fffcf2] rounded-[24px] p-8 border border-[#e6eaff] hover:shadow-[0px_8px_32px_0px_rgba(43,38,117,0.08)] transition-shadow"
              >
                <div className="bg-[#e6eaff] rounded-[16px] size-[56px] flex items-center justify-center mb-6">
                  <service.icon size={24} className="text-[#a99bf7]" />
                </div>
                <h3 className="font-[600] text-[18px] text-[#2b2675] mb-3">{service.title}</h3>
                <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.65)] mb-6">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="font-[600] text-[13px] text-[#a99bf7] no-underline inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
                >
                  {service.linkText} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[24px] overflow-hidden">
                <ImageWithFallback
                  src={journalingImage}
                  alt="Self-care and journaling"
                  className="w-full h-[280px] object-cover"
                />
              </div>
              <div className="rounded-[24px] overflow-hidden mt-8">
                <ImageWithFallback
                  src={groupImage}
                  alt="Community support"
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                Why MindWell
              </p>
              <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-6">
                Mental health care should be accessible to everyone.
              </h2>
              <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-8">
                We believe that understanding your mental health shouldn't require a diagnosis, 
                a referral, or a long waiting list. MindWell provides immediate, private tools 
                to help you check in with yourself and connect with the right support.
              </p>
              <div className="flex flex-col gap-4 mb-8">
                {[
                  "Free, evidence-informed self-assessment",
                  "Curated directory of diverse providers",
                  "No account required to get started",
                  "All data stays private and encrypted",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="bg-[rgba(209,216,78,0.2)] rounded-full p-1">
                      <CheckCircle size={16} className="text-[#2b2675]" />
                    </div>
                    <p className="font-normal text-[15px] text-[#2b2675]">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="font-[600] text-[15px] text-[#a99bf7] no-underline inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn more about our mission <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#2b2675]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
              Community
            </p>
            <h2 className="font-[600] text-[36px] leading-[44px] text-[#fffcf2]">
              Stories from our community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[rgba(255,252,242,0.08)] rounded-[24px] p-8 border border-[rgba(255,252,242,0.1)]"
              >
                <p className="font-normal text-[15px] leading-[26px] text-[rgba(255,252,242,0.85)] mb-8 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-[600] text-[14px] text-[#fffcf2]">{t.name}</p>
                  <p className="font-normal text-[12px] text-[rgba(255,252,242,0.5)]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e6eaff] blur-[80px] rounded-full w-[500px] h-[500px] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-50" />
        </div>
        <div className="max-w-[640px] mx-auto px-6 text-center relative">
          <h2 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-4">
            Ready to check in with yourself?
          </h2>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-10">
            Our self-assessment takes about 5 minutes and is completely private. 
            No account needed.
          </p>
          <Link
            to="/assessment"
            className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-10 py-4 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors inline-flex items-center gap-2"
          >
            Begin Self-Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
