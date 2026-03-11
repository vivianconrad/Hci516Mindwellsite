import { useState } from "react";
import { useNavigate } from "react-router";
import { CrisisBanner } from "./CrisisBanner";

export function AssessmentConsent() {
  const navigate = useNavigate();
  const [checks, setChecks] = useState([false, false, false]);

  const allChecked = checks.every(Boolean);

  const toggle = (index: number) => {
    setChecks((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const consentItems = [
    "I understand this is not a clinical diagnosis tool.",
    "I consent to my anonymous, de-identified responses being used to improve MindWell's recommendations.",
    "I am 18 years of age or older.",
  ];

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif] flex items-center justify-center py-16 px-6 relative">
      <div className="absolute bg-[#e6eaff] blur-[20px] rounded-full w-[800px] h-[800px] top-[72px] left-1/2 -translate-x-1/2 pointer-events-none opacity-40" />

      <div className="bg-[#fffcf2] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(43,38,117,0.1)] w-full max-w-[640px] p-12 relative">
        <div className="text-center mb-8">
          <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
            Self-Assessment
          </p>
          <h1 className="font-[600] text-[36px] leading-[43.2px] text-[#2b2675] mb-6">
            This is a space to check in with yourself.
          </h1>
          <p className="font-normal text-[16px] leading-[27.2px] text-[rgba(43,38,117,0.72)]">
            This tool is not a diagnostic instrument. It will not produce a clinical score, a disorder
            label, or a treatment recommendation. It is designed to help you identify emotional and
            behavioral patterns that may indicate it is time to talk to someone. Your responses are
            private and will never be shared with third parties without your explicit consent.
          </p>
        </div>

        <div className="h-px bg-[#e6eaff] mb-6" />

        <div className="flex flex-col gap-4 mb-8">
          {consentItems.map((item, index) => (
            <label
              key={index}
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div
                className={`shrink-0 size-[24px] rounded-full border-2 transition-colors flex items-center justify-center mt-0.5 ${
                  checks[index]
                    ? "bg-[#a99bf7] border-[#a99bf7]"
                    : "border-[#a99bf7] bg-transparent"
                }`}
              >
                {checks[index] && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fffcf2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="font-normal text-[14px] leading-[21px] text-[#2b2675]">
                {item}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={() => allChecked && navigate("/assessment/questions")}
          className={`w-full h-[52px] rounded-full font-[600] text-[15px] text-[#fffcf2] transition-all cursor-pointer border-none ${
            allChecked
              ? "bg-[#a99bf7] shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0]"
              : "bg-[rgba(169,155,247,0.45)]"
          }`}
          disabled={!allChecked}
        >
          I Understand — Begin Assessment
        </button>

        <CrisisBanner />
      </div>
    </div>
  );
}
