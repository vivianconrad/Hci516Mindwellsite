import { useState } from "react";
import { Link, useLocation, Navigate } from "react-router";
import { motion } from "motion/react";
import { CrisisBanner } from "./CrisisBanner";
import {
  ArrowRight,
  Heart,
  Brain,
  Activity,
  Shield,
  Users,
  ChevronDown,
  Download,
  RefreshCw,
  Sparkles,
  BookOpen,
  Phone,
  CheckCircle2,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const categories = [
  { name: "Emotional Patterns", shortName: "Emotional", icon: Heart, color: "#a99bf7" },
  { name: "Physical Indicators", shortName: "Physical", icon: Activity, color: "#e88e3d" },
  { name: "Behavioral Changes", shortName: "Behavioral", icon: Brain, color: "#d1d84e" },
  { name: "Coping Strategies", shortName: "Coping", icon: Shield, color: "#6bc5d2" },
  { name: "Support Systems", shortName: "Support", icon: Users, color: "#e07b9a" },
];

function getInsight(
  categoryIndex: number,
  avg: number
): { level: string; message: string; tips: string[] } {
  const levels = [
    {
      threshold: 1,
      level: "Low concern",
      messages: [
        "Your emotional responses appear well-regulated. Continue maintaining the habits that support your wellbeing.",
        "Your physical health indicators are within a healthy range. Keep prioritizing sleep, nutrition, and movement.",
        "Your daily behaviors and routines appear stable and consistent.",
        "You seem to have effective coping strategies in place. Keep using them.",
        "You appear to have a strong support network. Continue nurturing these relationships.",
      ],
      tips: [
        ["Keep a gratitude journal", "Practice daily mindfulness for 5 minutes", "Celebrate small wins"],
        ["Maintain your sleep schedule", "Continue regular physical activity", "Stay hydrated throughout the day"],
        ["Keep your current routines", "Set small goals each week", "Celebrate consistency"],
        ["Share your strategies with others", "Try a new wellness activity", "Keep a coping toolkit handy"],
        ["Schedule regular check-ins with loved ones", "Express appreciation to your support network", "Be available for others too"],
      ],
    },
    {
      threshold: 2,
      level: "Mild concern",
      messages: [
        "You may be experiencing some emotional fluctuations. Consider journaling or talking to a trusted person.",
        "Some physical symptoms may be related to stress. Try incorporating relaxation techniques.",
        "Minor behavioral shifts may indicate early stress. Consider adjusting your routine.",
        "Your coping strategies could benefit from some strengthening. Explore new techniques.",
        "You may benefit from expanding your support circle or deepening existing connections.",
      ],
      tips: [
        ["Try journaling for 10 minutes daily", "Practice deep breathing exercises", "Talk to someone you trust about how you feel"],
        ["Establish a calming bedtime routine", "Try progressive muscle relaxation", "Take short walks during the day"],
        ["Create a structured daily schedule", "Break tasks into smaller steps", "Limit screen time before bed"],
        ["Explore guided meditation apps", "Try the 5-4-3-2-1 grounding technique", "Build a self-care checklist"],
        ["Reach out to an old friend", "Join a community group or class", "Schedule weekly social time"],
      ],
    },
    {
      threshold: 3,
      level: "Moderate concern",
      messages: [
        "Your emotional patterns suggest you may be going through a challenging period. Speaking with a professional could help.",
        "Persistent physical symptoms may warrant attention. A healthcare provider can help rule out underlying causes.",
        "Noticeable behavioral changes suggest you may benefit from professional support.",
        "Building stronger coping mechanisms would likely improve your daily experience. A therapist can help.",
        "Feeling disconnected from support can be isolating. Consider reaching out to a counselor or support group.",
      ],
      tips: [
        ["Consider scheduling a therapy session", "Practice self-compassion exercises", "Identify your emotional triggers"],
        ["Consult with your healthcare provider", "Try yoga or tai chi for relaxation", "Track your symptoms in a journal"],
        ["Set one achievable goal per day", "Ask for help with overwhelming tasks", "Practice saying 'no' to protect your energy"],
        ["Work with a therapist on new strategies", "Try cognitive behavioral techniques", "Create a crisis plan for difficult moments"],
        ["Look into local support groups", "Consider family or couples counseling", "Use warmlines for non-crisis support"],
      ],
    },
    {
      threshold: 4,
      level: "Significant concern",
      messages: [
        "Your responses indicate significant emotional distress. We strongly encourage you to connect with a mental health professional.",
        "Your physical symptoms are significantly impacting your daily life. Please consider seeking support.",
        "Significant behavioral changes may indicate a need for professional guidance.",
        "You may be relying heavily on unhealthy coping mechanisms. Professional support can help you develop healthier alternatives.",
        "Feeling unsupported can intensify other challenges. Connecting with a provider is an important step.",
      ],
      tips: [
        ["Reach out to a mental health professional today", "Call a helpline if you need immediate support", "Remember: seeking help is a sign of strength"],
        ["Schedule an appointment with your doctor", "Don't ignore persistent symptoms", "Ask about both physical and mental health support"],
        ["Talk to someone you trust about what you're experiencing", "Consider intensive outpatient programs", "Take things one step at a time"],
        ["Speak with a counselor about healthier alternatives", "Remove access to harmful coping mechanisms when possible", "Build an emergency coping plan"],
        ["Contact the 988 Lifeline anytime you need to talk", "Explore online support communities", "Consider group therapy for connection"],
      ],
    },
  ];

  for (const l of levels) {
    if (avg <= l.threshold) {
      return { level: l.level, message: l.messages[categoryIndex], tips: l.tips[categoryIndex] };
    }
  }
  return {
    level: levels[3].level,
    message: levels[3].messages[categoryIndex],
    tips: levels[3].tips[categoryIndex],
  };
}

function CircularGauge({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const percentage = Math.min((value / max) * 100, 100);
  const circumference = 2 * Math.PI * 54;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative size-[140px]">
        <svg className="size-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" fill="none" stroke="#e6eaff" strokeWidth="8" />
          <motion.circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="font-[600] text-[28px] text-[#2b2675]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {value.toFixed(1)}
          </motion.span>
          <span className="font-normal text-[11px] text-[rgba(43,38,117,0.5)]">of {max}</span>
        </div>
      </div>
      <p className="font-[600] text-[13px] text-[#2b2675] mt-3">{label}</p>
    </div>
  );
}

function CategoryCard({
  cat,
  index,
}: {
  cat: {
    name: string;
    shortName: string;
    icon: typeof Heart;
    color: string;
    avg: number;
    level: string;
    message: string;
    tips: string[];
  };
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = cat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.15 * index + 0.5 }}
      className="bg-white rounded-[20px] border border-[#e6eaff] overflow-hidden"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 flex items-center gap-4 bg-transparent border-none cursor-pointer text-left"
      >
        <div
          className="rounded-[14px] size-[48px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${cat.color}20` }}
        >
          <Icon size={22} style={{ color: cat.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-[600] text-[16px] text-[#2b2675]">{cat.name}</h3>
            <div className="flex items-center gap-3 shrink-0">
              <span
                className="font-[600] text-[12px] px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${cat.color}18`,
                  color: cat.color,
                  border: `1px solid ${cat.color}35`,
                }}
              >
                {cat.level}
              </span>
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={18} className="text-[rgba(43,38,117,0.4)]" />
              </motion.div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="bg-[#e6eaff] rounded-full h-[5px] w-full">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: cat.color }}
              initial={{ width: 0 }}
              animate={{ width: `${(cat.avg / 3) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 * index + 0.6 }}
            />
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: expanded ? "auto" : 0,
          opacity: expanded ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-0">
          <div className="border-t border-[#e6eaff] pt-5">
            <p className="font-normal text-[14px] leading-[23px] text-[rgba(43,38,117,0.65)] mb-5">
              {cat.message}
            </p>
            <div className="bg-[#fffcf2] border border-[#e6eaff] rounded-[14px] p-5">
              <p className="font-[600] text-[13px] text-[#2b2675] mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-[#d1d84e]" />
                Suggestions for you
              </p>
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {cat.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="shrink-0 mt-0.5"
                      style={{ color: cat.color }}
                    />
                    <span className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.6)]">
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AssessmentResults() {
  const location = useLocation();
  const answers = (location.state as any)?.answers as (number | null)[] | undefined;

  if (!answers) {
    return <Navigate to="/assessment" replace />;
  }

  const categoryResults = categories.map((cat, catIndex) => {
    const catAnswers = answers.slice(catIndex * 3, catIndex * 3 + 3);
    const validAnswers = catAnswers.filter((a) => a !== null && a !== 4) as number[];
    const avg =
      validAnswers.length > 0
        ? validAnswers.reduce((s, v) => s + v, 0) / validAnswers.length
        : 0;
    const insight = getInsight(catIndex, avg);
    return { ...cat, avg, ...insight };
  });

  const overallAvg =
    categoryResults.reduce((s, c) => s + c.avg, 0) / categoryResults.length;
  const overallLevel =
    overallAvg <= 1 ? "low" : overallAvg <= 2 ? "mild" : overallAvg <= 3 ? "moderate" : "significant";

  const overallColor =
    overallLevel === "low"
      ? "#d1d84e"
      : overallLevel === "mild"
      ? "#a99bf7"
      : overallLevel === "moderate"
      ? "#e88e3d"
      : "#e07b9a";

  const overallLabel =
    overallLevel === "low"
      ? "Low Concern"
      : overallLevel === "mild"
      ? "Mild Concern"
      : overallLevel === "moderate"
      ? "Moderate Concern"
      : "Significant Concern";

  const radarData = categoryResults.map((c) => ({
    subject: c.shortName,
    value: c.avg,
    fullMark: 3,
  }));

  // Determine top concern areas for personalized recommendations
  const sortedByAvg = [...categoryResults].sort((a, b) => b.avg - a.avg);
  const topConcerns = sortedByAvg.filter((c) => c.avg > 1).slice(0, 3);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      <div className="max-w-[880px] mx-auto px-6 py-12 md:py-16">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[rgba(169,155,247,0.1)] border border-[rgba(169,155,247,0.2)] rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            <CheckCircle2 size={16} className="text-[#a99bf7]" />
            <span className="font-[600] text-[12px] tracking-[1px] uppercase text-[#a99bf7]">
              Assessment Complete
            </span>
          </motion.div>
          <h1 className="font-[600] text-[32px] md:text-[40px] leading-[1.2] text-[#2b2675] mb-4">
            Thank you for checking in.
          </h1>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.65)] max-w-[560px] mx-auto">
            Remember, this is not a diagnosis. These results are meant to help you reflect on
            patterns and decide if speaking with someone might be helpful.
          </p>
        </motion.div>

        {/* Overall Score + Radar Chart */}
        <motion.div
          className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0px_8px_32px_0px_rgba(43,38,117,0.08)] border border-[#e6eaff] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Circular Gauge */}
            <div className="flex flex-col items-center">
              <CircularGauge
                value={overallAvg}
                max={3}
                label="Overall Score"
                color={overallColor}
              />
              <div
                className="mt-3 px-4 py-1.5 rounded-full font-[600] text-[13px]"
                style={{
                  backgroundColor: `${overallColor}18`,
                  color: overallColor,
                  border: `1px solid ${overallColor}35`,
                }}
              >
                {overallLabel}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-[#e6eaff] self-stretch" />
            <div className="md:hidden h-px w-full bg-[#e6eaff]" />

            {/* Radar Chart */}
            <div className="flex-1 w-full min-w-0">
              <p className="font-[600] text-[15px] text-[#2b2675] mb-2 text-center md:text-left">
                Category Breakdown
              </p>
              <p className="font-normal text-[13px] text-[rgba(43,38,117,0.5)] mb-4 text-center md:text-left">
                Visual overview of your responses across all five areas
              </p>
              <div className="w-full h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="75%">
                    <PolarGrid stroke="#e6eaff" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 12, fill: "rgba(43,38,117,0.6)" }}
                    />
                    <Radar
                      dataKey="value"
                      stroke="#a99bf7"
                      fill="#a99bf7"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Summary Text */}
          <div className="mt-6 pt-6 border-t border-[#e6eaff]">
            <p className="font-normal text-[15px] leading-[25px] text-[rgba(43,38,117,0.7)]">
              {overallLevel === "low"
                ? "Based on your responses, your overall patterns suggest you are managing well. Continue practicing the habits that support your mental health."
                : overallLevel === "mild"
                ? "Your responses suggest some areas where additional support could be beneficial. Consider exploring our resources or speaking with a trusted person."
                : overallLevel === "moderate"
                ? "Your patterns indicate that connecting with a mental health professional could be beneficial. There's no shame in seeking support — it's a sign of strength."
                : "Your responses suggest you may be experiencing significant challenges. We strongly encourage you to reach out to a mental health professional. You don't have to navigate this alone."}
            </p>
          </div>
        </motion.div>

        {/* Category Cards */}
        <div className="mb-6">
          <motion.p
            className="font-[600] text-[13px] tracking-[1px] uppercase text-[rgba(43,38,117,0.45)] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Detailed Results
          </motion.p>
          <div className="flex flex-col gap-3">
            {categoryResults.map((cat, i) => (
              <CategoryCard key={cat.name} cat={cat} index={i} />
            ))}
          </div>
        </div>

        {/* Personalized Recommendations */}
        {topConcerns.length > 0 && (
          <motion.div
            className="bg-gradient-to-br from-[#2b2675] to-[#3d35a0] rounded-[24px] p-6 md:p-8 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={18} className="text-[#d1d84e]" />
              <h2 className="font-[600] text-[20px] text-[#fffcf2]">
                Personalized for You
              </h2>
            </div>
            <p className="font-normal text-[14px] text-[rgba(255,252,242,0.6)] mb-6">
              Based on your highest-concern areas, here's where to start
            </p>

            <div className="flex flex-col gap-3">
              {topConcerns.map((concern) => {
                const Icon = concern.icon;
                return (
                  <div
                    key={concern.name}
                    className="bg-[rgba(255,252,242,0.06)] border border-[rgba(255,252,242,0.08)] rounded-[16px] p-5 flex items-start gap-4"
                  >
                    <div
                      className="rounded-[12px] size-[40px] flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${concern.color}25` }}
                    >
                      <Icon size={18} style={{ color: concern.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-[600] text-[14px] text-[#fffcf2] mb-1">
                        {concern.name}
                      </p>
                      <p className="font-normal text-[13px] leading-[20px] text-[rgba(255,252,242,0.6)]">
                        {concern.tips[0]}
                      </p>
                    </div>
                    <span
                      className="font-[600] text-[11px] px-2.5 py-1 rounded-full shrink-0 mt-0.5"
                      style={{
                        backgroundColor: `${concern.color}25`,
                        color: concern.color,
                      }}
                    >
                      {concern.level}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Next Steps */}
        <motion.div
          className="bg-white rounded-[24px] p-6 md:p-8 border border-[#e6eaff] shadow-[0px_4px_16px_0px_rgba(43,38,117,0.04)] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h2 className="font-[600] text-[20px] text-[#2b2675] mb-5">
            Recommended Next Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Link
              to="/providers"
              className="group bg-[#fffcf2] border border-[#e6eaff] rounded-[18px] p-5 no-underline flex flex-col items-start hover:border-[#a99bf7] hover:shadow-[0px_4px_16px_0px_rgba(169,155,247,0.15)] transition-all"
            >
              <div className="bg-[rgba(169,155,247,0.12)] rounded-[12px] size-[44px] flex items-center justify-center mb-4">
                <Phone size={20} className="text-[#a99bf7]" />
              </div>
              <p className="font-[600] text-[15px] text-[#2b2675] mb-1">Find a Provider</p>
              <p className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.55)] mb-4">
                Connect with a licensed mental health professional near you.
              </p>
              <span className="mt-auto font-[600] text-[13px] text-[#a99bf7] flex items-center gap-1 group-hover:gap-2 transition-all">
                Browse providers <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/resources"
              className="group bg-[#fffcf2] border border-[#e6eaff] rounded-[18px] p-5 no-underline flex flex-col items-start hover:border-[#a99bf7] hover:shadow-[0px_4px_16px_0px_rgba(169,155,247,0.15)] transition-all"
            >
              <div className="bg-[rgba(209,216,78,0.15)] rounded-[12px] size-[44px] flex items-center justify-center mb-4">
                <BookOpen size={20} className="text-[#8a8e2e]" />
              </div>
              <p className="font-[600] text-[15px] text-[#2b2675] mb-1">Explore Resources</p>
              <p className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.55)] mb-4">
                Browse articles, guides, and coping strategies.
              </p>
              <span className="mt-auto font-[600] text-[13px] text-[#a99bf7] flex items-center gap-1 group-hover:gap-2 transition-all">
                View resources <ArrowRight size={14} />
              </span>
            </Link>

            <Link
              to="/assessment"
              className="group bg-[#fffcf2] border border-[#e6eaff] rounded-[18px] p-5 no-underline flex flex-col items-start hover:border-[#a99bf7] hover:shadow-[0px_4px_16px_0px_rgba(169,155,247,0.15)] transition-all"
            >
              <div className="bg-[rgba(107,197,210,0.15)] rounded-[12px] size-[44px] flex items-center justify-center mb-4">
                <RefreshCw size={20} className="text-[#6bc5d2]" />
              </div>
              <p className="font-[600] text-[15px] text-[#2b2675] mb-1">Retake Assessment</p>
              <p className="font-normal text-[13px] leading-[20px] text-[rgba(43,38,117,0.55)] mb-4">
                Check in again anytime your situation changes.
              </p>
              <span className="mt-auto font-[600] text-[13px] text-[#a99bf7] flex items-center gap-1 group-hover:gap-2 transition-all">
                Start over <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Save / Print */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-[#e6eaff] text-[rgba(43,38,117,0.55)] font-[600] text-[13px] cursor-pointer hover:border-[#a99bf7] hover:text-[#a99bf7] transition-all"
          >
            <Download size={15} />
            Save or print your results
          </button>
        </motion.div>

        <CrisisBanner />
      </div>
    </div>
  );
}
