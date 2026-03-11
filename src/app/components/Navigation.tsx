import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Self-Assessment", path: "/assessment" },
  { label: "Find a Provider", path: "/providers" },
  { label: "Resources", path: "/resources" },
  { label: "About", path: "/about" },
];

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-[#fffcf2] border-b border-[#e6eaff] shadow-[0px_2px_12px_0px_rgba(43,38,117,0.06)]">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="bg-[#a99bf7] rounded-[5px] size-[10px]" />
          <span className="font-['DM_Sans',sans-serif] font-[600] text-[22px] leading-[35.2px] text-[#2b2675]">
            MindWell
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 pb-1.5 font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[24px] text-[#2b2675] no-underline border-b-2 transition-colors ${
                  isActive ? "border-[#a99bf7]" : "border-transparent hover:border-[#a99bf7]/30"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="font-['DM_Sans',sans-serif] font-[600] text-[14px] text-[#2b2675] bg-transparent border-none cursor-pointer px-5 py-2.5">
            Log In
          </button>
          <Link
            to="/assessment"
            className="bg-[#a99bf7] text-[#fffcf2] font-['DM_Sans',sans-serif] font-[600] text-[14px] rounded-full px-5 py-2.5 no-underline shadow-[0px_4px_14px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
