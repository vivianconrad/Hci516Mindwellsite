function Container() {
  return <div className="absolute bg-[#e6eaff] blur-[20px] left-[348px] rounded-[400px] size-[800px] top-[72px]" data-name="Container" />;
}

function Container2() {
  return (
    <div className="absolute h-[19.188px] left-[48px] top-[56px] w-[544px]" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[19.2px] left-[271.64px] text-[#a99bf7] text-[12px] text-center top-[-1px] tracking-[1.44px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Self-Assessment
      </p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[86.375px] left-[48px] top-[87.19px] w-[544px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[43.2px] left-[272px] text-[#2b2675] text-[36px] text-center top-0 w-[496px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        This is a space to check in with yourself.
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[163.125px] left-[80px] top-[193.56px] w-[480px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[27.2px] left-[240.14px] text-[16px] text-[rgba(43,38,117,0.72)] text-center top-0 w-[474px]" style={{ fontVariationSettings: "'opsz' 9" }}>
        This tool is not a diagnostic instrument. It will not produce a clinical score, a disorder label, or a treatment recommendation. It is designed to help you identify emotional and behavioral patterns that may indicate it is time to talk to someone. Your responses are private and will never be shared with third parties without your explicit consent.
      </p>
    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[#e6eaff] h-px left-[48px] top-[388.69px] w-[544px]" data-name="Container" />;
}

function Container6() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#a99bf7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[304.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2b2675] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          I understand this is not a clinical diagnosis tool.
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Text />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#a99bf7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[42px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2b2675] text-[14px] top-0 w-[492px]" style={{ fontVariationSettings: "'opsz' 9" }}>{`I consent to my anonymous, de-identified responses being used to improve MindWell's recommendations.`}</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Text1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[24px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#a99bf7] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[182.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[21px] left-0 text-[#2b2675] text-[14px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
          I am 18 years of age or older.
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Text2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[122px] items-start left-[48px] top-[413.69px] w-[544px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[rgba(169,155,247,0.45)] h-[52px] left-[48px] rounded-[9999px] top-[567.69px] w-[544px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[24px] left-[272.06px] text-[#fffcf2] text-[15px] text-center top-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        I Understand — Begin Assessment
      </p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute h-[44px] left-[267.88px] top-0 w-[154.578px]" data-name="Link">
      <p className="-translate-x-1/2 absolute decoration-solid font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[77.5px] text-[#a99bf7] text-[12px] text-center top-[13px] underline whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`988 Suicide & Crisis Lifeline`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[62px] left-[48px] top-[639.69px] w-[544px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[138.56px] text-[12px] text-[rgba(43,38,117,0.5)] text-center top-[13px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>{`If you are in crisis or in danger, please contact `}</p>
      <Link />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[18px] left-[397.34px] text-[12px] text-[rgba(43,38,117,0.5)] text-center top-[13px] w-[275px]" style={{ fontVariationSettings: "'opsz' 9" }}>{` by calling or texting 988.`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#fffcf2] h-[757.688px] left-[428px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(43,38,117,0.1)] top-[129.16px] w-[640px]" data-name="Container">
      <Container2 />
      <Heading />
      <Paragraph />
      <Container3 />
      <Container4 />
      <Button />
      <Paragraph1 />
    </div>
  );
}

function SelfAssessmentEntry() {
  return (
    <div className="absolute bg-[#fffcf2] h-[944px] left-0 overflow-clip top-0 w-[1496px]" data-name="SelfAssessmentEntry">
      <Container />
      <Container1 />
    </div>
  );
}

function Navigation1() {
  return <div className="bg-[#a99bf7] rounded-[5px] shrink-0 size-[10px]" data-name="Navigation" />;
}

function Navigation2() {
  return (
    <div className="h-[35.188px] relative shrink-0 w-[97.578px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[35.2px] left-0 text-[#2b2675] text-[22px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          MindWell
        </p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[35.188px] relative shrink-0 w-[117.578px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center justify-center relative size-full">
        <Navigation1 />
        <Navigation2 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-0 pb-[6px] top-0 w-[40.984px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#2b2675] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Home
      </p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-[80.98px] pb-[6px] top-0 w-[118.266px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#a99bf7] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#2b2675] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Self-Assessment
      </p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-[239.25px] pb-[6px] top-0 w-[103.156px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#2b2675] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Find a Provider
      </p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-[382.41px] pb-[6px] top-0 w-[71.891px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#2b2675] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Resources
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[30px] items-center justify-center left-[494.3px] pb-[6px] top-0 w-[42.734px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-b-2 border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#2b2675] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        About
      </p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[30px] relative shrink-0 w-[537.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[44px] relative shrink-0 w-[79.172px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] relative size-full">
        <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22.4px] relative shrink-0 text-[#2b2675] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          Log In
        </p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#a99bf7] flex-[1_0_0] h-[44px] min-h-px min-w-px relative rounded-[9999px] shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)]" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[20px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[22.4px] relative shrink-0 text-[#fffcf2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[44px] relative shrink-0 w-[214.328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Button1 />
        <Link7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[71px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Link1 />
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[#fffcf2] content-stretch flex flex-col h-[72px] items-start left-0 pb-px px-[28px] top-0 w-[1496px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[#e6eaff] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(43,38,117,0.06)]" />
      <Container11 />
    </div>
  );
}

export default function SelfAssessmentToolInformedConsent() {
  return (
    <div className="bg-white relative size-full" data-name="Self assessment tool, informed consent">
      <SelfAssessmentEntry />
      <Navigation />
    </div>
  );
}