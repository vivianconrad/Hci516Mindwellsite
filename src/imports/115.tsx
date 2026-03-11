function Container3() {
  return <div className="bg-[#a99bf7] h-[6px] rounded-[9999px] shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute bg-[#e6eaff] content-stretch flex flex-col h-[6px] items-start left-0 overflow-clip pr-[597.344px] rounded-[9999px] top-0 w-[640px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[20.797px] left-0 top-[18px] w-[640px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20.8px] left-0 text-[13px] text-[rgba(43,38,117,0.55)] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Question 1 of 15
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[145.563px] left-0 top-[70.8px] w-[560px]" data-name="Heading 2">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[36.4px] left-0 text-[#2b2675] text-[28px] top-[-1px] w-[539px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Over the past two weeks, how often have you found it difficult to feel positive emotions — even in situations that would normally make you happy?
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2b2675] text-[15px] text-left top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Not at all
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2b2675] text-[15px] text-left top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Several days
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2b2675] text-[15px] text-left top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          More than half the days
        </p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[116.047px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2b2675] text-[15px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Nearly every day
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#fffcf2] h-[68px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e6eaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[22px] pr-[501.953px] py-[2px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[140.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-0 text-[#2b2675] text-[15px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Prefer not to answer
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#fffcf2] h-[68px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#e6eaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[22px] pr-[477.906px] py-[2px] relative size-full">
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[388px] items-start left-0 top-[248.36px] w-[640px]" data-name="Container">
      <button className="bg-[#fffcf2] content-stretch cursor-pointer flex h-[68px] items-center justify-between pl-[22px] pr-[556.531px] py-[2px] relative rounded-[16px] shrink-0 w-[640px]" data-name="Assessment Buttons">
        <div aria-hidden="true" className="absolute border-2 border-[#e6eaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Text />
      </button>
      <button className="bg-[#fffcf2] content-stretch cursor-pointer flex h-[68px] items-center justify-between pl-[22px] pr-[556.531px] py-[2px] relative rounded-[16px] shrink-0 w-[640px]" data-name="Assessment Buttons">
        <div aria-hidden="true" className="absolute border-2 border-[#e6eaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Text1 />
      </button>
      <button className="bg-[#fffcf2] content-stretch cursor-pointer flex h-[68px] items-center justify-between pl-[22px] pr-[556.531px] py-[2px] relative rounded-[16px] shrink-0 w-[640px]" data-name="Assessment Buttons">
        <div aria-hidden="true" className="absolute border-2 border-[#e6eaff] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <Text2 />
      </button>
      <Container6 />
      <Container7 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(169,155,247,0.45)] h-[48px] relative rounded-[9999px] shrink-0 w-[122.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[28px] relative size-full">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#fffcf2] text-[15px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Continue
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start justify-end left-0 top-[676.36px] w-[640px]" data-name="Container">
      <Button />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[44px] left-[302.11px] top-0 w-[154.578px]" data-name="Link">
      <p className="-translate-x-1/2 absolute decoration-solid font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[77.5px] text-[#a99bf7] text-[12px] text-center top-[13px] underline whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`988 Suicide & Crisis Lifeline`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[44px] left-0 top-[764.36px] w-[640px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[172.8px] text-[12px] text-[rgba(43,38,117,0.5)] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`If you are in crisis or in danger, please contact `}</p>
      <Link />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[526.69px] text-[12px] text-[rgba(43,38,117,0.5)] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{` by calling or texting 988.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[808.359px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
      <Heading />
      <Container5 />
      <Container8 />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[944px] min-h-px min-w-px relative" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[260.5px] pr-[275.5px] pt-[80px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function SelfAssessmentFlow() {
  return (
    <div className="absolute bg-[#fffcf2] content-stretch flex h-[944px] items-start left-0 pl-[320px] top-0 w-[1496px]" data-name="SelfAssessmentFlow">
      <Container />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[28.797px] left-[28px] top-[32px] w-[264px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[28.8px] left-0 text-[#fffcf2] text-[18px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        MindWell
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[16.891px] left-[22px] top-0 w-[119.141px]" data-name="Container">
      <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[16.9px] left-0 text-[#fffcf2] text-[13px] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Emotional Patterns
      </p>
    </div>
  );
}

function Container14() {
  return <div className="absolute bg-[rgba(209,216,78,0.3)] left-0 rounded-[5px] shadow-[0px_0px_0px_0px_rgba(209,216,78,0.3)] size-[10px] top-0" data-name="Container" />;
}

function Container15() {
  return <div className="absolute bg-[rgba(255,252,242,0.2)] h-[24px] left-[4px] top-[14px] w-[2px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute left-0 size-[10px] top-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[16.891px] left-[22px] top-0 w-[112.516px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.9px] left-0 text-[13px] text-[rgba(255,252,242,0.7)] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Physical Indicators
      </p>
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[rgba(255,252,242,0.25)] left-0 rounded-[5px] size-[10px] top-0" data-name="Container" />;
}

function Container20() {
  return <div className="absolute bg-[rgba(255,252,242,0.2)] h-[24px] left-[4px] top-[14px] w-[2px]" data-name="Container" />;
}

function Container18() {
  return (
    <div className="absolute left-0 size-[10px] top-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[16.891px] left-[22px] top-0 w-[117.984px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.9px] left-0 text-[13px] text-[rgba(255,252,242,0.7)] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Behavioral Changes
      </p>
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[rgba(255,252,242,0.25)] left-0 rounded-[5px] size-[10px] top-0" data-name="Container" />;
}

function Container25() {
  return <div className="absolute bg-[rgba(255,252,242,0.2)] h-[24px] left-[4px] top-[14px] w-[2px]" data-name="Container" />;
}

function Container23() {
  return (
    <div className="absolute left-0 size-[10px] top-0" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[16.891px] left-[22px] top-0 w-[107.641px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.9px] left-0 text-[13px] text-[rgba(255,252,242,0.7)] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Coping Strategies
      </p>
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[rgba(255,252,242,0.25)] left-0 rounded-[5px] size-[10px] top-0" data-name="Container" />;
}

function Container30() {
  return <div className="absolute bg-[rgba(255,252,242,0.2)] h-[24px] left-[4px] top-[14px] w-[2px]" data-name="Container" />;
}

function Container28() {
  return (
    <div className="absolute left-0 size-[10px] top-0" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container32() {
  return <div className="bg-[rgba(255,252,242,0.25)] rounded-[5px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="h-[16.891px] relative shrink-0 w-[103.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.9px] left-0 text-[13px] text-[rgba(255,252,242,0.7)] top-[-1px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          Support Systems
        </p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.891px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[180.453px] items-start left-[28px] top-[100.8px] w-[264px]" data-name="Container">
      <Container11 />
      <Container16 />
      <Container21 />
      <Container26 />
      <Container31 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[33px] left-[28px] top-[883px] w-[264px]" data-name="Container">
      <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[11px] text-[rgba(255,252,242,0.45)] top-0 w-[248px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        Your responses are encrypted and stored locally during your session.
      </p>
    </div>
  );
}

function SelfAssessmentFlow1() {
  return (
    <div className="absolute bg-[#2b2675] h-[944px] left-0 top-0 w-[320px]" data-name="SelfAssessmentFlow">
      <Container9 />
      <Container10 />
      <Container34 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1/15">
      <SelfAssessmentFlow />
      <SelfAssessmentFlow1 />
    </div>
  );
}