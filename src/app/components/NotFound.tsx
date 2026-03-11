import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function NotFound() {
  return (
    <div className="bg-[#fffcf2] min-h-[60vh] flex items-center justify-center font-['DM_Sans',sans-serif]">
      <div className="text-center px-6">
        <p className="font-[600] text-[12px] tracking-[1.44px] uppercase text-[#a99bf7] mb-4">
          Page Not Found
        </p>
        <h1 className="font-[600] text-[36px] text-[#2b2675] mb-4">
          This page doesn't exist.
        </h1>
        <p className="font-normal text-[16px] text-[rgba(43,38,117,0.72)] mb-8">
          Let's get you back on track.
        </p>
        <Link
          to="/"
          className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[15px] rounded-full px-8 py-4 no-underline inline-flex items-center gap-2 hover:bg-[#9585e0] transition-colors"
        >
          Go Home <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
