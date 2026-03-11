export function CrisisBanner() {
  return (
    <div className="text-center py-3">
      <p className="font-['DM_Sans',sans-serif] font-normal text-[12px] text-[rgba(43,38,117,0.5)] leading-[18px]">
        If you are in crisis or in danger, please contact{" "}
        <a
          href="tel:988"
          className="text-[#a99bf7] underline"
        >
          988 Suicide & Crisis Lifeline
        </a>{" "}
        by calling or texting 988.
      </p>
    </div>
  );
}
