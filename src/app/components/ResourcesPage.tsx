import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, BookOpen, Phone, ExternalLink, Heart, Brain, Shield } from "lucide-react";

const articleCategories = ["All", "Anxiety", "Depression", "Self-Care", "Relationships", "Coping"];

const articles = [
  {
    id: 1,
    category: "Anxiety",
    title: "Understanding the Difference Between Worry and Anxiety",
    excerpt: "Everyone worries from time to time, but clinical anxiety is different. Learn how to recognize when worry has crossed a line.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1607970918524-736d78c4654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxraW5nJTIwbmF0dXJlJTIwcGF0aCUyMHN1bmxpZ2h0JTIwdHJlZXN8ZW58MXx8fHwxNzczMTYzMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    category: "Self-Care",
    title: "Building a Morning Routine That Supports Mental Health",
    excerpt: "Your morning sets the tone for the day. Here are evidence-based practices to start your day with intention.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558086478-d632ccc5a833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGpvdXJuYWxpbmclMjBzZWxmJTIwY2FyZSUyMG1vcm5pbmd8ZW58MXx8fHwxNzczMTYzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    category: "Depression",
    title: "When Sadness Lingers: Recognizing Signs of Depression",
    excerpt: "Sadness is a normal emotion, but persistent low mood can be a sign of something more. Here's what to look for.",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1758274526671-ad18176acb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG5hdHVyZSUyMG1lZGl0YXRpb24lMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NzMxNjMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    category: "Coping",
    title: "5 Grounding Techniques for Moments of Overwhelm",
    excerpt: "When anxiety or stress feels overwhelming, grounding techniques can help bring you back to the present moment.",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1568217716588-97944ab3e893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwd29ya3NwYWNlJTIwcGxhbnQlMjBtaW5pbWFsfGVufDF8fHx8MTc3MzE2MzEyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    category: "Relationships",
    title: "Setting Boundaries Without Guilt",
    excerpt: "Healthy boundaries are essential for wellbeing. Learn how to communicate your limits clearly and compassionately.",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555069855-e580a9adbf43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwZ3JvdXAlMjB0aGVyYXB5JTIwc3VwcG9ydCUyMGNpcmNsZXxlbnwxfHx8fDE3NzMwOTEzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    category: "Anxiety",
    title: "The Connection Between Sleep and Anxiety",
    excerpt: "Poor sleep and anxiety often feed each other in a vicious cycle. Here's how to break free.",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1758273240403-052b3c99f636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwdGhlcmFweSUyMHNlc3Npb24lMjBtZW50YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzczMTYzMTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const crisisResources = [
  { name: "988 Suicide & Crisis Lifeline", description: "Call or text 988, available 24/7", action: "tel:988", actionLabel: "Call 988" },
  { name: "Crisis Text Line", description: "Text HOME to 741741", action: "sms:741741", actionLabel: "Text Now" },
  { name: "NAMI Helpline", description: "1-800-950-NAMI (6264)", action: "tel:18009506264", actionLabel: "Call Now" },
  { name: "SAMHSA National Helpline", description: "1-800-662-4357, free referral service", action: "tel:18006624357", actionLabel: "Call Now" },
];

const toolkits = [
  { icon: Heart, title: "Self-Care Checklist", description: "A printable daily checklist to track your self-care habits." },
  { icon: Brain, title: "Thought Journal Template", description: "Identify and challenge negative thought patterns with this structured template." },
  { icon: Shield, title: "Safety Planning Guide", description: "Create a personalized safety plan with steps to follow during a crisis." },
];

export function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#e6eaff] blur-[80px] rounded-full w-[500px] h-[500px] -top-[100px] right-[10%] opacity-40" />
        </div>
        <div className="max-w-[1400px] mx-auto px-6 text-center relative">
          <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
            Resources
          </p>
          <h1 className="font-[600] text-[36px] leading-[44px] text-[#2b2675] mb-4">
            Tools for your mental health journey
          </h1>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] max-w-[560px] mx-auto">
            Evidence-based articles, practical guides, and crisis resources — all in one place.
          </p>
        </div>
      </section>

      {/* Crisis Resources Banner */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="bg-[#2b2675] rounded-[24px] p-8">
          <div className="flex items-center gap-3 mb-6">
            <Phone size={20} className="text-[#a99bf7]" />
            <h2 className="font-[600] text-[20px] text-[#fffcf2]">Crisis Resources</h2>
          </div>
          <p className="font-normal text-[14px] text-[rgba(255,252,242,0.7)] mb-6">
            If you or someone you know is in crisis, these resources are available 24/7.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {crisisResources.map((res) => (
              <div
                key={res.name}
                className="bg-[rgba(255,252,242,0.08)] border border-[rgba(255,252,242,0.1)] rounded-[16px] p-5"
              >
                <h3 className="font-[600] text-[14px] text-[#fffcf2] mb-1">{res.name}</h3>
                <p className="font-normal text-[12px] text-[rgba(255,252,242,0.6)] mb-3">{res.description}</p>
                <a
                  href={res.action}
                  className="inline-flex items-center gap-1 font-[600] text-[12px] text-[#a99bf7] no-underline hover:text-[#fffcf2] transition-colors"
                >
                  {res.actionLabel} <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-[600] text-[24px] text-[#2b2675]">Articles & Guides</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-[600] text-[13px] border cursor-pointer transition-all ${
                activeCategory === cat
                  ? "bg-[#a99bf7] text-[#fffcf2] border-[#a99bf7]"
                  : "bg-transparent text-[#2b2675] border-[#e6eaff] hover:border-[#a99bf7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-[24px] overflow-hidden border border-[#e6eaff] hover:shadow-[0px_8px_32px_0px_rgba(43,38,117,0.08)] transition-shadow"
            >
              <div className="h-[200px] overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[rgba(169,155,247,0.12)] border border-[rgba(169,155,247,0.25)] rounded-full px-3 py-1 font-normal text-[11px] text-[#a99bf7]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 font-normal text-[12px] text-[rgba(43,38,117,0.5)]">
                    <BookOpen size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="font-[600] text-[17px] leading-[24px] text-[#2b2675] mb-2">
                  {article.title}
                </h3>
                <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.65)] mb-4">
                  {article.excerpt}
                </p>
                <button className="font-[600] text-[13px] text-[#a99bf7] bg-transparent border-none cursor-pointer p-0 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Toolkits */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <h2 className="font-[600] text-[24px] text-[#2b2675] mb-8">Wellness Toolkits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolkits.map((toolkit) => (
            <div
              key={toolkit.title}
              className="bg-white rounded-[24px] p-8 border border-[#e6eaff] hover:shadow-[0px_8px_32px_0px_rgba(43,38,117,0.08)] transition-shadow"
            >
              <div className="bg-[#e6eaff] rounded-[16px] size-[56px] flex items-center justify-center mb-6">
                <toolkit.icon size={24} className="text-[#a99bf7]" />
              </div>
              <h3 className="font-[600] text-[17px] text-[#2b2675] mb-2">{toolkit.title}</h3>
              <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.65)] mb-4">
                {toolkit.description}
              </p>
              <button className="font-[600] text-[13px] text-[#a99bf7] bg-transparent border-none cursor-pointer p-0 inline-flex items-center gap-1.5">
                Download <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1400px] mx-auto px-6 pb-16">
        <div className="bg-[#e6eaff] rounded-[24px] p-12 text-center">
          <h2 className="font-[600] text-[28px] text-[#2b2675] mb-4">Not sure where to start?</h2>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.72)] mb-8 max-w-[480px] mx-auto">
            Our self-assessment can help you identify patterns and point you toward helpful resources.
          </p>
          <Link
            to="/assessment"
            className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-8 py-4 no-underline inline-flex items-center gap-2 shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors"
          >
            Take the Self-Assessment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
