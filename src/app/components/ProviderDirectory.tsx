import { useState } from "react";
import { Link } from "react-router";
import { Search, Calendar, DollarSign, MapPin, ChevronDown } from "lucide-react";
import imgSarah from "../assets/a639161e7733fad8f10c9eaba409fcecb9853279.png";
import imgMarcus from "../assets/a79dee57b62753bb9058cf422eb778a7514fbbc3.png";
import imgAmara from "../assets/68e925ea570debe02d3fbad1f2da6b269789b18a.png";
import imgJamie from "../assets/67c90a837e44730a31df035a9538c9c84ac81b4f.png";

const providers = [
  {
    id: "sarah-chen",
    name: "Dr. Sarah Chen",
    specialty: "Anxiety & Life Transitions",
    credentials: "PhD, Licensed Psychologist",
    image: imgSarah,
    tags: ["BIPOC-affirming", "LGBTQ+-affirming", "Trauma-informed"],
    availability: "Tue, Mar 12",
    price: "$140–$180 / session",
    location: "Chicago, IL · Telehealth",
    status: "accepting",
    initials: "SC",
  },
  {
    id: "marcus-thompson",
    name: "Marcus Thompson, LCSW",
    specialty: "Depression & LGBTQ+ Issues",
    credentials: "LCSW, CADC",
    image: imgMarcus,
    tags: ["LGBTQ+-affirming", "Men's mental health", "Bilingual (English/Spanish)"],
    availability: "Wed, Mar 13",
    price: "$120–$150 / session",
    location: "Chicago, IL · In-Person + Telehealth",
    status: "limited",
    initials: "MT",
  },
  {
    id: "amara-okafor",
    name: "Dr. Amara Okafor",
    specialty: "Stress Management & Career Transitions",
    credentials: "PsyD",
    image: imgAmara,
    tags: ["BIPOC-affirming", "Women's mental health", "Faith-informed"],
    availability: "Thu, Mar 14",
    price: "$160–$200 / session",
    location: "Chicago, IL · Telehealth",
    status: "accepting",
    initials: "AO",
  },
  {
    id: "jamie-patel",
    name: "Jamie Patel, LCPC",
    specialty: "High-Functioning Stress & Burnout",
    credentials: "LCPC",
    image: imgJamie,
    tags: ["Asian American mental health", "Career counseling", "Mindfulness-based"],
    availability: "Mon, Mar 18",
    price: "$130–$170 / session",
    location: "Chicago, IL · In-Person + Telehealth",
    status: "accepting",
    initials: "JP",
  },
];

const specialties = ["Anxiety & Stress", "Depression", "Life Transitions", "Trauma", "Relationship Issues"];
const insurance = ["Aetna", "Blue Cross Blue Shield", "Cigna", "Self-Pay", "Sliding Scale Fee"];
const identityFit = ["BIPOC-affirming", "LGBTQ+-affirming", "Women's mental health", "Men's mental health", "Bilingual"];

export function ProviderDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFilters, setExpandedFilters] = useState({
    specialty: true,
    insurance: true,
    identity: true,
  });

  const toggleFilter = (key: keyof typeof expandedFilters) => {
    setExpandedFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="hidden lg:block w-[240px] shrink-0">
            <h2 className="font-[600] text-[18px] text-[#2b2675] mb-6">Filter Providers</h2>

            {/* Specialty */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilter("specialty")}
                className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer p-0 mb-3"
              >
                <span className="font-[600] text-[12px] tracking-[1.2px] uppercase text-[#2b2675]">Specialty</span>
                <ChevronDown size={16} className={`text-[#2b2675] transition-transform ${expandedFilters.specialty ? "rotate-180" : ""}`} />
              </button>
              {expandedFilters.specialty && (
                <div className="flex flex-col gap-2">
                  {specialties.map((s) => (
                    <button key={s} className="text-left font-normal text-[14px] text-[rgba(43,38,117,0.7)] bg-transparent border-none cursor-pointer p-1 hover:text-[#2b2675] transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Insurance */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilter("insurance")}
                className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer p-0 mb-3"
              >
                <span className="font-[600] text-[12px] tracking-[1.2px] uppercase text-[#2b2675]">Insurance Accepted</span>
                <ChevronDown size={16} className={`text-[#2b2675] transition-transform ${expandedFilters.insurance ? "rotate-180" : ""}`} />
              </button>
              {expandedFilters.insurance && (
                <div className="flex flex-col gap-2">
                  {insurance.map((s) => (
                    <button key={s} className="text-left font-normal text-[14px] text-[rgba(43,38,117,0.7)] bg-transparent border-none cursor-pointer p-1 hover:text-[#2b2675] transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Identity Fit */}
            <div className="mb-6">
              <button
                onClick={() => toggleFilter("identity")}
                className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer p-0 mb-3"
              >
                <span className="font-[600] text-[12px] tracking-[1.2px] uppercase text-[#2b2675]">Identity Fit</span>
                <ChevronDown size={16} className={`text-[#2b2675] transition-transform ${expandedFilters.identity ? "rotate-180" : ""}`} />
              </button>
              {expandedFilters.identity && (
                <div className="flex flex-col gap-2">
                  {identityFit.map((s) => (
                    <button key={s} className="text-left font-normal text-[14px] text-[rgba(43,38,117,0.7)] bg-transparent border-none cursor-pointer p-1 hover:text-[#2b2675] transition-colors">
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[rgba(43,38,117,0.4)]" />
                <input
                  type="text"
                  placeholder="Search by name, specialty, issue, or zip code..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[48px] rounded-full bg-[#fffcf2] border border-[#e6eaff] pl-11 pr-4 font-normal text-[15px] text-[#2b2675] outline-none focus:border-[#a99bf7] transition-colors"
                />
              </div>
              <button className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[14px] rounded-full px-6 border-none cursor-pointer hover:bg-[#9585e0] transition-colors">
                Search
              </button>
            </div>

            <p className="font-normal text-[14px] text-[rgba(43,38,117,0.65)] mb-6">
              Showing {providers.length} providers near Chicago, IL
            </p>

            {/* Provider Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {providers.map((provider) => (
                <div
                  key={provider.id}
                  className="bg-[#fffcf2] rounded-[24px] border border-[rgba(0,0,0,0)] shadow-[0px_4px_16px_0px_rgba(43,38,117,0.07)] p-6"
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-[72px] rounded-full overflow-hidden shadow-[0px_2px_8px_0px_rgba(43,38,117,0.1)] bg-[#e6eaff] flex items-center justify-center shrink-0">
                      {provider.image ? (
                        <img src={provider.image} alt={provider.name} className="size-full object-cover" />
                      ) : (
                        <span className="font-[600] text-[20px] text-[#2b2675]">{provider.initials}</span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-[600] text-[17px] text-[#2b2675]">{provider.name}</p>
                      <p className="font-normal text-[13px] text-[rgba(43,38,117,0.65)]">{provider.specialty}</p>
                      <p className="font-[500] text-[12px] text-[#a99bf7]">{provider.credentials}</p>
                    </div>
                    <div className={`rounded-full px-3 py-1 text-[11px] font-[600] shrink-0 ${
                      provider.status === "accepting"
                        ? "bg-[rgba(209,216,78,0.15)] border border-[rgba(209,216,78,0.4)] text-[#2b2675]"
                        : "bg-[rgba(232,142,61,0.15)] border border-[rgba(232,142,61,0.4)] text-[#2b2675]"
                    }`}>
                      {provider.status === "accepting" ? "Accepting Patients" : "Limited Availability"}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {provider.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[rgba(169,155,247,0.12)] border border-[rgba(169,155,247,0.25)] rounded-full px-3 py-1 font-normal text-[11px] text-[#a99bf7]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[rgba(43,38,117,0.7)]" />
                      <span className="font-normal text-[13px] text-[rgba(43,38,117,0.7)]">
                        Next available: {provider.availability}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={14} className="text-[rgba(43,38,117,0.7)]" />
                      <span className="font-normal text-[13px] text-[rgba(43,38,117,0.7)]">
                        {provider.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[rgba(43,38,117,0.7)]" />
                      <span className="font-normal text-[13px] text-[rgba(43,38,117,0.7)]">
                        {provider.location}
                      </span>
                    </div>
                  </div>

                  <div className="h-px bg-[#e6eaff] mb-4" />

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link
                      to={`/providers/${provider.id}`}
                      className="flex-1 h-[44px] rounded-full border border-[#2b2675] flex items-center justify-center font-[500] text-[13px] text-[#2b2675] no-underline hover:bg-[#2b2675] hover:text-[#fffcf2] transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link
                      to={`/providers/${provider.id}`}
                      className="flex-1 h-[44px] rounded-full bg-[#a99bf7] shadow-[0px_4px_12px_0px_rgba(169,155,247,0.35)] flex items-center justify-center font-[600] text-[13px] text-[#fffcf2] no-underline hover:bg-[#9585e0] transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
