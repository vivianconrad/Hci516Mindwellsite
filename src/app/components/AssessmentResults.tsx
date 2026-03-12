import { Link, useLocation, Navigate } from "react-router";
import { Brain, Activity, TrendingUp, Download } from "lucide-react";
import { CrisisBanner } from "./CrisisBanner";

const categories = [
  "Emotional Patterns",
  "Physical Indicators",
  "Behavioral Changes",
  "Coping Strategies",
  "Support Systems",
];

function getInsight(
  categoryIndex: number,
  avg: number
): { message: string } {
  const messages: Record<number, string[]> = {
    0: [
      "Your emotional responses appear well-regulated. Continue maintaining the habits that support your wellbeing.",
      "You may be experiencing some emotional fluctuations. Consider journaling or talking to a trusted person.",
      "Your responses suggest you may be experiencing emotional fatigue more often than you expect. Feeling emotionally flat in situations that usually feel positive is a signal worth exploring.",
      "Your responses indicate significant emotional distress. We strongly encourage you to connect with a mental health professional.",
    ],
    1: [
      "Your physical health indicators are within a healthy range. Keep prioritizing sleep, nutrition, and movement.",
      "Some physical symptoms may be related to stress. Try incorporating relaxation techniques.",
      "Persistent physical symptoms may warrant attention. A healthcare provider can help rule out underlying causes.",
      "Your physical symptoms are significantly impacting your daily life. Please consider seeking support.",
    ],
    2: [
      "Your daily behaviors and routines appear stable and consistent.",
      "Minor behavioral shifts may indicate early stress. Consider adjusting your routine.",
      "You noted changes in your concentration and social engagement. These shifts often happen gradually and can be addressed with structured support and guidance.",
      "Significant behavioral changes may indicate a need for professional guidance.",
    ],
    3: [
      "You seem to have effective coping strategies in place. Keep using them.",
      "Your coping strategies could benefit from some strengthening. Explore new techniques.",
      "You have some healthy coping mechanisms in place, which is a strong foundation. Working with a provider can help you build on these and develop additional strategies.",
      "You may be relying heavily on unhealthy coping mechanisms. Professional support can help you develop healthier alternatives.",
    ],
    4: [
      "You appear to have a strong support network. Continue nurturing these relationships.",
      "You may benefit from expanding your support circle or deepening existing connections.",
      "Feeling disconnected from support can be isolating. Consider reaching out to a counselor or support group.",
      "Feeling unsupported can intensify other challenges. Connecting with a provider is an important step.",
    ],
  };

  const level = avg <= 1 ? 0 : avg <= 2 ? 1 : avg <= 3 ? 2 : 3;
  return { message: messages[categoryIndex]?.[level] ?? messages[0][0] };
}

const insightCards = [
  {
    categoryIndex: 0,
    title: "Emotional Patterns",
    icon: Brain,
    bg: "bg-[#e8e6ff]",
    iconBg: "bg-[#d4d0ff]",
    iconColor: "text-[#6b5dd3]",
  },
  {
    categoryIndex: 2,
    title: "Behavioral Changes",
    icon: Activity,
    bg: "bg-[#e6f0ff]",
    iconBg: "bg-[#cfe0ff]",
    iconColor: "text-[#3a6bc9]",
  },
  {
    categoryIndex: 3,
    title: "Coping Strategies",
    icon: TrendingUp,
    bg: "bg-[#f5f7d9]",
    iconBg: "bg-[#eaedbb]",
    iconColor: "text-[#7a8020]",
  },
];

export function AssessmentResults() {
  const location = useLocation();
  const answers = (location.state as any)?.answers as (number | null)[] | undefined;

  if (!answers) {
    return <Navigate to="/assessment" replace />;
  }

  const categoryAvgs = categories.map((_, catIndex) => {
    const catAnswers = answers.slice(catIndex * 3, catIndex * 3 + 3);
    const validAnswers = catAnswers.filter((a) => a !== null && a !== 4) as number[];
    return validAnswers.length > 0
      ? validAnswers.reduce((s, v) => s + v, 0) / validAnswers.length
      : 0;
  });

  const handleSave = () => {
    window.print();
  };

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      <div className="max-w-[960px] mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-[600] text-[40px] leading-[1.2] text-[#2b2675] mb-5">
            Here's what we noticed.
          </h1>
          <p className="font-normal text-[16px] leading-[27px] text-[rgba(43,38,117,0.65)] max-w-[600px] mx-auto">
            This is a reflection of the patterns you shared, not a verdict. Many
            people recognize themselves in these results and find it helpful to
            talk with a professional. That's exactly what this tool is for.
          </p>
        </div>

        {/* 3 Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {insightCards.map(({ categoryIndex, title, icon: Icon, bg, iconBg, iconColor }) => {
            const avg = categoryAvgs[categoryIndex];
            const { message } = getInsight(categoryIndex, avg);
            return (
              <div key={title} className={`${bg} rounded-[20px] p-7`}>
                <div className={`${iconBg} rounded-full size-[52px] flex items-center justify-center mb-5`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <h3 className={`font-[600] text-[16px] mb-3 ${iconColor}`}>
                  {title}
                </h3>
                <p className="font-normal text-[14px] leading-[23px] text-[rgba(43,38,117,0.7)]">
                  {message}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navy CTA Box */}
        <div className="bg-[#2b2675] rounded-[24px] p-8 flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
          <div className="flex-1">
            <h2 className="font-[600] text-[22px] leading-[1.3] text-[#fffcf2] mb-3">
              Based on your patterns, talking to someone could help.
            </h2>
            <p className="font-normal text-[14px] leading-[23px] text-[rgba(255,252,242,0.65)]">
              MindWell will now help you find a provider who fits your needs —
              filtered to your location, insurance, and identity preferences —
              and lets you schedule without a phone call.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/providers"
              className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[14px] rounded-full px-8 py-3 no-underline text-center hover:bg-[#9585e0] transition-colors"
            >
              Find My Provider Match
            </Link>
            <button
              onClick={handleSave}
              className="flex items-center justify-center gap-2 border border-[rgba(255,252,242,0.3)] text-[rgba(255,252,242,0.85)] font-[600] text-[14px] rounded-full px-8 py-3 bg-transparent cursor-pointer hover:border-[rgba(255,252,242,0.6)] transition-colors"
            >
              <Download size={15} />
              Save My Results (PDF)
            </button>
          </div>
        </div>

        <CrisisBanner />
      </div>
    </div>
  );
}
