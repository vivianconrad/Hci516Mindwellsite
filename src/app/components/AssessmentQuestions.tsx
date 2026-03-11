import { useState } from "react";
import { useNavigate } from "react-router";
import { CrisisBanner } from "./CrisisBanner";

const categories = [
  "Emotional Patterns",
  "Physical Indicators",
  "Behavioral Changes",
  "Coping Strategies",
  "Support Systems",
];

const questions = [
  { category: 0, text: "Over the past two weeks, how often have you found it difficult to feel positive emotions — even in situations that would normally make you happy?" },
  { category: 0, text: "How often have you experienced sudden, intense feelings of sadness or emptiness without a clear trigger?" },
  { category: 0, text: "How frequently have you felt overwhelmed by worry or anxiety about everyday situations?" },
  { category: 1, text: "How often have you had trouble falling asleep, staying asleep, or sleeping too much?" },
  { category: 1, text: "Have you noticed changes in your appetite or eating habits over the past two weeks?" },
  { category: 1, text: "How often have you experienced unexplained physical symptoms like headaches, muscle tension, or stomach issues?" },
  { category: 2, text: "How often have you withdrawn from social activities or avoided spending time with people you care about?" },
  { category: 2, text: "Have you noticed a decrease in your motivation to complete tasks at work, school, or home?" },
  { category: 2, text: "How often have you found yourself engaging in behaviors you later regret, such as substance use or impulsive decisions?" },
  { category: 3, text: "When you feel stressed, how often do you have healthy ways to cope (e.g., exercise, talking to someone, journaling)?" },
  { category: 3, text: "How often do you feel like you have no way to manage your stress or emotions?" },
  { category: 3, text: "Do you find yourself relying on unhealthy coping mechanisms more than you'd like?" },
  { category: 4, text: "How often do you feel like you have people in your life you can turn to for emotional support?" },
  { category: 4, text: "When you're going through a difficult time, how comfortable do you feel asking for help?" },
  { category: 4, text: "Do you feel connected to a community — whether friends, family, coworkers, or another group?" },
];

const answerOptions = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
  "Prefer not to answer",
];

export function AssessmentQuestions() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(15).fill(null));
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const activeCategory = question.category;

  const handleContinue = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      navigate("/assessment/results", { state: { answers: newAnswers } });
    }
  };

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif] flex">
      {/* Sidebar */}
      <div className="hidden lg:flex flex-col bg-[#2b2675] w-[320px] shrink-0 p-7 relative">
        <p className="font-[600] text-[18px] text-[#fffcf2] mb-16">MindWell</p>

        <div className="flex flex-col gap-6">
          {categories.map((cat, i) => {
            const isActive = i === activeCategory;
            const isCompleted = i < activeCategory;
            return (
              <div key={cat} className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className={`rounded-[5px] size-[10px] ${
                      isActive
                        ? "bg-[rgba(209,216,78,0.3)] shadow-[0px_0px_0px_0px_rgba(209,216,78,0.3)]"
                        : isCompleted
                        ? "bg-[rgba(209,216,78,0.5)]"
                        : "bg-[rgba(255,252,242,0.25)]"
                    }`}
                  />
                  {i < categories.length - 1 && (
                    <div className="absolute bg-[rgba(255,252,242,0.2)] h-[24px] left-[4px] top-[14px] w-[2px]" />
                  )}
                </div>
                <p
                  className={`text-[13px] ${
                    isActive
                      ? "font-[600] text-[#fffcf2]"
                      : "font-normal text-[rgba(255,252,242,0.7)]"
                  }`}
                >
                  {cat}
                </p>
              </div>
            );
          })}
        </div>

        <p className="absolute bottom-7 left-7 right-7 font-normal text-[11px] leading-[16.5px] text-[rgba(255,252,242,0.45)]">
          Your responses are encrypted and stored locally during your session.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-6 lg:px-16 py-20">
        <div className="w-full max-w-[640px]">
          {/* Progress Bar */}
          <div className="bg-[#e6eaff] rounded-full h-[6px] w-full overflow-hidden mb-4">
            <div
              className="bg-[#a99bf7] h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="font-normal text-[13px] text-[rgba(43,38,117,0.55)] mb-12">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          {/* Question */}
          <h2 className="font-[600] text-[28px] leading-[36.4px] text-[#2b2675] mb-12 max-w-[540px]">
            {question.text}
          </h2>

          {/* Answer Options */}
          <div className="flex flex-col gap-3 mb-12">
            {answerOptions.map((option, i) => (
              <button
                key={option}
                onClick={() => setSelectedAnswer(i)}
                className={`w-full h-[68px] rounded-[16px] text-left px-6 font-normal text-[15px] text-[#2b2675] bg-[#fffcf2] border-2 transition-all cursor-pointer ${
                  selectedAnswer === i
                    ? "border-[#a99bf7] bg-[rgba(169,155,247,0.08)]"
                    : "border-[#e6eaff] hover:border-[#a99bf7]/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Continue Button */}
          <div className="flex justify-end mb-8">
            <button
              onClick={handleContinue}
              disabled={selectedAnswer === null}
              className={`h-[48px] rounded-full px-7 font-[600] text-[15px] text-[#fffcf2] border-none cursor-pointer transition-all ${
                selectedAnswer !== null
                  ? "bg-[#a99bf7] hover:bg-[#9585e0]"
                  : "bg-[rgba(169,155,247,0.45)]"
              }`}
            >
              {currentQuestion === questions.length - 1 ? "View Results" : "Continue"}
            </button>
          </div>

          <CrisisBanner />
        </div>
      </div>
    </div>
  );
}
