import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Heart, Shield, Users, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every feature we build starts with empathy. We design for people navigating their most vulnerable moments.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your data is yours. We use end-to-end encryption, never sell data, and give you full control over your information.",
  },
  {
    icon: Users,
    title: "Inclusive Care",
    description: "Mental health support should reflect the diversity of those seeking it. We prioritize cultural competence and identity-affirming practices.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We're open about what our tools can and cannot do. No false promises — just honest, evidence-informed support.",
  },
];

const team = [
  { name: "Dr. Maya Santos", role: "Founder & Clinical Director", bio: "Licensed psychologist with 15+ years in community mental health." },
  { name: "David Kim", role: "Head of Product", bio: "Former Google Health designer focused on accessible healthcare technology." },
  { name: "Dr. Amira Hassan", role: "Research Lead", bio: "Clinical researcher specializing in culturally responsive assessment tools." },
  { name: "Jordan Williams", role: "Community Manager", bio: "Mental health advocate and peer support specialist." },
];

const stats = [
  { number: "50,000+", label: "Self-assessments completed" },
  { number: "200+", label: "Vetted providers" },
  { number: "98%", label: "Privacy satisfaction" },
  { number: "4.8/5", label: "User rating" },
];

export function AboutPage() {
  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e6eaff] blur-[80px] rounded-full w-[600px] h-[600px] -top-[200px] left-[20%] opacity-40" />
        </div>
        <div className="max-w-[800px] mx-auto px-6 text-center relative">
          <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
            About MindWell
          </p>
          <h1 className="font-[600] text-[42px] leading-[50px] text-[#2b2675] mb-6">
            Making mental health support accessible, private, and human.
          </h1>
          <p className="font-normal text-[18px] leading-[30px] text-[rgba(43,38,117,0.72)]">
            MindWell was founded on the belief that everyone deserves the tools to understand 
            their mental health — without barriers, judgment, or compromise on privacy.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
                Our Mission
              </p>
              <h2 className="font-[600] text-[32px] leading-[40px] text-[#2b2675] mb-6">
                We exist to bridge the gap between "I think I need help" and actually getting it.
              </h2>
              <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-6">
                Too many people struggle in silence — not because they don't want help, but because 
                they don't know where to start. The mental health system can feel intimidating, 
                expensive, and inaccessible.
              </p>
              <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)]">
                MindWell provides a gentle first step: a private space to check in with yourself, 
                understand what you're experiencing, and find the right support — all without needing 
                an account, a referral, or insurance.
              </p>
            </div>
            <div className="rounded-[24px] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607970918524-736d78c4654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwbmF0dXJlJTIwcGF0aCUyMHN1bmxpZ2h0JTIwdHJlZXN8ZW58MXx8fHwxNzczMTYzMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="A peaceful path through trees"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#2b2675]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-[600] text-[36px] text-[#a99bf7] mb-1">{stat.number}</p>
                <p className="font-normal text-[14px] text-[rgba(255,252,242,0.7)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
              Our Values
            </p>
            <h2 className="font-[600] text-[32px] leading-[40px] text-[#2b2675]">
              What guides everything we do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-[24px] p-8 border border-[#e6eaff]"
              >
                <div className="bg-[#e6eaff] rounded-[16px] size-[56px] flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-[#a99bf7]" />
                </div>
                <h3 className="font-[600] text-[20px] text-[#2b2675] mb-3">{value.title}</h3>
                <p className="font-normal text-[15px] leading-[25px] text-[rgba(43,38,117,0.65)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
              Our Team
            </p>
            <h2 className="font-[600] text-[32px] leading-[40px] text-[#2b2675]">
              People who care deeply
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-[#fffcf2] rounded-[24px] p-8 border border-[#e6eaff] text-center"
              >
                <div className="bg-[#e6eaff] rounded-full size-[80px] flex items-center justify-center mx-auto mb-4">
                  <span className="font-[600] text-[24px] text-[#a99bf7]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-[600] text-[17px] text-[#2b2675] mb-1">{member.name}</h3>
                <p className="font-[500] text-[13px] text-[#a99bf7] mb-3">{member.role}</p>
                <p className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.65)]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-[#e6eaff] rounded-[24px] p-8">
            <h3 className="font-[600] text-[18px] text-[#2b2675] mb-4">Important Information</h3>
            <div className="flex flex-col gap-4">
              <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.72)]">
                <strong>MindWell is not a healthcare provider.</strong> Our self-assessment tool is not a diagnostic 
                instrument and should not replace professional medical advice, diagnosis, or treatment.
              </p>
              <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.72)]">
                <strong>Provider listings are informational only.</strong> While we vet providers for credentials 
                and cultural competency, MindWell does not endorse or guarantee any provider's services.
              </p>
              <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.72)]">
                <strong>If you are in crisis,</strong> please contact the 988 Suicide & Crisis Lifeline by 
                calling or texting 988, or text HOME to 741741 for the Crisis Text Line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-[640px] mx-auto px-6 text-center">
          <h2 className="font-[600] text-[28px] text-[#2b2675] mb-4">
            Ready to take the first step?
          </h2>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-8">
            Start with our free, private self-assessment. No account needed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/assessment"
              className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-8 py-4 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors inline-flex items-center gap-2"
            >
              Start Self-Assessment <ArrowRight size={18} />
            </Link>
            <Link
              to="/providers"
              className="border-2 border-[#2b2675] text-[#2b2675] font-[600] text-[15px] rounded-full px-8 py-4 no-underline hover:bg-[#2b2675] hover:text-[#fffcf2] transition-colors"
            >
              Find a Provider
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
