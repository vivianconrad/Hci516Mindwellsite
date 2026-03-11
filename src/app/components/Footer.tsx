import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#2b2675] text-[#fffcf2] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="bg-[#a99bf7] rounded-[5px] size-[10px]" />
              <span className="font-['DM_Sans',sans-serif] font-[600] text-[22px]">MindWell</span>
            </div>
            <p className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[22px] text-[rgba(255,252,242,0.7)] max-w-[260px]">
              Your mental health matters. We're here to help you find the support you need.
            </p>
          </div>

          <div>
            <h4 className="font-['DM_Sans',sans-serif] font-[600] text-[14px] tracking-[1.2px] uppercase text-[#a99bf7] mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Self-Assessment", path: "/assessment" },
                { label: "Find a Provider", path: "/providers" },
                { label: "Resources", path: "/resources" },
                { label: "About", path: "/about" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['DM_Sans',sans-serif] font-[600] text-[14px] tracking-[1.2px] uppercase text-[#a99bf7] mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              <a href="tel:988" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                988 Suicide & Crisis Lifeline
              </a>
              <a href="https://www.crisistextline.org" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                Crisis Text Line
              </a>
              <a href="https://www.nami.org" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                NAMI Helpline
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-['DM_Sans',sans-serif] font-[600] text-[14px] tracking-[1.2px] uppercase text-[#a99bf7] mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-['DM_Sans',sans-serif] font-normal text-[14px] text-[rgba(255,252,242,0.7)] no-underline hover:text-[#fffcf2] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(255,252,242,0.15)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] text-[rgba(255,252,242,0.45)]">
            MindWell is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
          <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] text-[rgba(255,252,242,0.45)]">
            If you are in crisis, please call or text 988.
          </p>
        </div>
      </div>
    </footer>
  );
}
