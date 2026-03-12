import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, ChevronRight, Calendar, DollarSign, MapPin, Star, Clock, Users } from "lucide-react";
import imgSarah from "@/assets/a639161e7733fad8f10c9eaba409fcecb9853279.png";
import imgMarcus from "@/assets/a79dee57b62753bb9058cf422eb778a7514fbbc3.png";
import imgAmara from "@/assets/68e925ea570debe02d3fbad1f2da6b269789b18a.png";
import imgJamie from "@/assets/67c90a837e44730a31df035a9538c9c84ac81b4f.png";

const providersData: Record<string, any> = {
  "sarah-chen": {
    name: "Dr. Sarah Chen",
    specialty: "Anxiety & Life Transitions",
    credentials: "PhD, Licensed Psychologist",
    address: "4646 S Drexel Blvd, Chicago, IL",
    image: imgSarah,
    tags: ["BIPOC-affirming", "LGBTQ+-affirming", "Trauma-informed"],
    availability: "Tue, Mar 12",
    price: "$140–$180 / session",
    location: "Chicago, IL · Telehealth",
    status: "accepting",
    bio: "Dr. Chen specializes in helping individuals navigate anxiety, life transitions, and identity-related stress. With over 12 years of experience, she uses a combination of cognitive-behavioral therapy (CBT), mindfulness-based approaches, and culturally responsive care. She is particularly passionate about supporting first-generation professionals and BIPOC individuals.",
    highlights: [
      "92% of patients gave this doctor 5 stars",
      "Excellent wait time",
      "99% of patients waited less than 30 minutes",
      "New patient appointments",
    ],
    reviews: [
      { name: "A.R.", rating: 5, text: "Dr. Chen made me feel heard from the very first session. Her approach is warm yet structured.", date: "Feb 2026" },
      { name: "M.K.", rating: 5, text: "I've seen several therapists before, but Dr. Chen is the first one who truly understands my cultural background.", date: "Jan 2026" },
      { name: "J.L.", rating: 4, text: "Very professional and knowledgeable. The telehealth setup works great.", date: "Dec 2025" },
    ],
    insuranceAccepted: ["Aetna", "Blue Cross Blue Shield", "Cigna", "Self-Pay"],
    timeSlots: ["8:00 am", "8:20 am", "10:00 am", "11:20 am", "12:50 pm"],
  },
  "marcus-thompson": {
    name: "Marcus Thompson, LCSW",
    specialty: "Depression & LGBTQ+ Issues",
    credentials: "LCSW, CADC",
    address: "1200 N Lake Shore Dr, Chicago, IL",
    image: imgMarcus,
    tags: ["LGBTQ+-affirming", "Men's mental health", "Bilingual (English/Spanish)"],
    availability: "Wed, Mar 13",
    price: "$120–$150 / session",
    location: "Chicago, IL · In-Person + Telehealth",
    status: "limited",
    bio: "Marcus Thompson is a Licensed Clinical Social Worker who specializes in depression, LGBTQ+ issues, and substance use recovery. He brings a compassionate, non-judgmental approach to therapy and is bilingual in English and Spanish.",
    highlights: ["88% of patients gave 5 stars", "Excellent wait time", "Bilingual services available", "New patient appointments"],
    reviews: [
      { name: "D.S.", rating: 5, text: "Marcus creates such a safe space. I finally feel comfortable talking about what I'm going through.", date: "Mar 2026" },
      { name: "R.P.", rating: 5, text: "Being able to do sessions in Spanish has been life-changing for me.", date: "Feb 2026" },
    ],
    insuranceAccepted: ["Aetna", "Cigna", "Self-Pay", "Sliding Scale"],
    timeSlots: ["9:00 am", "10:30 am", "1:00 pm", "3:00 pm"],
  },
  "amara-okafor": {
    name: "Dr. Amara Okafor",
    specialty: "Stress Management & Career Transitions",
    credentials: "PsyD",
    address: "233 S Wacker Dr, Chicago, IL",
    image: imgAmara,
    tags: ["BIPOC-affirming", "Women's mental health", "Faith-informed"],
    availability: "Thu, Mar 14",
    price: "$160–$200 / session",
    location: "Chicago, IL · Telehealth",
    status: "accepting",
    bio: "Dr. Okafor helps professionals manage stress, navigate career transitions, and find balance. She integrates faith-informed practices when clients find it meaningful.",
    highlights: ["95% of patients gave 5 stars", "Specializes in professional burnout", "New patient appointments"],
    reviews: [
      { name: "T.W.", rating: 5, text: "Dr. Okafor helped me through one of the toughest career transitions of my life.", date: "Feb 2026" },
    ],
    insuranceAccepted: ["Blue Cross Blue Shield", "Self-Pay"],
    timeSlots: ["8:00 am", "9:30 am", "11:00 am", "2:00 pm"],
  },
  "jamie-patel": {
    name: "Jamie Patel, LCPC",
    specialty: "High-Functioning Stress & Burnout",
    credentials: "LCPC",
    address: "55 E Washington St, Chicago, IL",
    image: imgJamie,
    tags: ["Asian American mental health", "Career counseling", "Mindfulness-based"],
    availability: "Mon, Mar 18",
    price: "$130–$170 / session",
    location: "Chicago, IL · In-Person + Telehealth",
    status: "accepting",
    bio: "Jamie Patel focuses on high-functioning stress, burnout, and career-related anxiety. They use mindfulness-based cognitive therapy and acceptance and commitment therapy (ACT).",
    highlights: ["90% of patients gave 5 stars", "Mindfulness-based approach", "New patient appointments"],
    reviews: [
      { name: "L.M.", rating: 5, text: "Jamie's mindfulness approach changed how I handle work stress. Highly recommend.", date: "Jan 2026" },
    ],
    insuranceAccepted: ["Aetna", "Cigna", "Self-Pay"],
    timeSlots: ["10:00 am", "11:30 am", "1:00 pm", "3:30 pm"],
  },
};

const daysInMonth = [
  [26, 27, 28, 29, 30, 31, 1],
  [2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21, 22],
  [23, 24, 25, 26, 27, 28, 29],
  [30, 31, 1, 2, 3, 4, 5],
];

export function ProviderProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("summary");
  const [selectedDate, setSelectedDate] = useState(12);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [patientType, setPatientType] = useState<"new" | "returning" | null>(null);
  const [phone, setPhone] = useState("");

  const provider = providersData[id || "sarah-chen"] || providersData["sarah-chen"];
  const tabs = ["Summary", "Location", "Reviews", "Insurance"];

  if (bookingStep === 3 || bookingStep === 4) {
    return (
      <div className="bg-[#dce3ff] min-h-screen font-['DM_Sans',sans-serif] relative">
        {/* X button */}
        <button
          onClick={() => setBookingStep(0)}
          className="absolute top-6 left-6 font-[600] text-[20px] text-[#2b2675] bg-transparent border-none cursor-pointer z-10"
        >
          ✕
        </button>

        {/* Main confirmation content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center pb-32">
          {/* Illustration placeholder */}
          <div className="text-[100px] mb-2 leading-none select-none">🙆‍♀️</div>

          <h2 className="font-[600] text-[36px] leading-[1.2] text-[#2b2675] mb-3 max-w-[480px]">
            Congrats on making your first appointment with {provider.name}
          </h2>
          <p className="font-[600] text-[16px] text-[#2b2675] mb-1">
            {["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(2026, 2, selectedDate).getDay()]}, March {selectedDate}, at {selectedTime || "10:30 am"}
          </p>
          <p className="font-normal text-[15px] text-[rgba(43,38,117,0.65)] mb-8">
            Confirmation was sent to your email
          </p>

          <div className="flex flex-col items-center gap-2 w-full max-w-[300px]">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(xxx) xxx-xxxx"
              className="w-full border border-[rgba(43,38,117,0.2)] rounded-[10px] px-4 py-3 text-[14px] text-[#2b2675] font-normal bg-white text-center outline-none focus:border-[#a99bf7]"
            />
            <p className="font-normal text-[12px] text-[#a99bf7] underline cursor-pointer">
              for SMS appointment reminders
            </p>
            <button className="bg-[#d1d84e] text-[#2b2675] font-[600] text-[14px] rounded-full px-10 py-3 border-none cursor-pointer hover:brightness-95 mt-1">
              Sign up
            </button>
          </div>
        </div>

        {/* Feedback widget — fixed bottom-right */}
        {bookingStep === 3 && (
          <div className="fixed bottom-8 right-8 bg-[#a99bf7] rounded-[20px] p-6 w-[320px] shadow-[0px_8px_32px_rgba(43,38,117,0.2)]">
            <div className="flex justify-end mb-1">
              <button
                onClick={() => setBookingStep(0)}
                className="text-[rgba(43,38,117,0.7)] text-[13px] font-normal bg-transparent border-none cursor-pointer underline"
              >
                Skip
              </button>
            </div>
            <p className="font-[600] text-[15px] text-[#2b2675] text-center mb-4">
              How do you feel after Scheduling your first appointment?
            </p>
            <div className="flex justify-around">
              {[
                { emoji: "😊", label: "Excited" },
                { emoji: "🙂", label: "Satisfied" },
                { emoji: "😐", label: "Confused" },
                { emoji: "😒", label: "Disappointed" },
              ].map(({ emoji, label }) => (
                <button
                  key={label}
                  onClick={() => label === "Confused" && setBookingStep(4)}
                  className="flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none"
                >
                  <span className="text-[32px]">{emoji}</span>
                  <span className="font-normal text-[11px] text-[#2b2675]">{label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Check-in modal (step 4) — triggered by "Confused" */}
        {bookingStep === 4 && (
          <>
            <div className="fixed inset-0 bg-[rgba(43,38,117,0.5)] z-40" />
            <div className="fixed bottom-8 right-8 z-50 bg-[#b8aaff] rounded-[24px] p-7 w-[340px] shadow-[0px_8px_32px_rgba(43,38,117,0.3)]">
              <button
                onClick={() => setBookingStep(3)}
                className="font-[600] text-[18px] text-[#2b2675] bg-transparent border-none cursor-pointer mb-3"
              >
                ✕
              </button>
              <div className="text-center mb-4">
                <div className="text-[72px] leading-none mb-2">🧘‍♀️</div>
                <p className="font-[600] text-[18px] text-[#2b2675] leading-[1.3] mb-3">
                  Its okay to feel overwhelm or even confused after taking the first step
                </p>
                <p className="font-normal text-[14px] text-[rgba(43,38,117,0.75)] mb-6">
                  Visit our next steps page so you can feel confident about your decision
                </p>
                <button
                  onClick={() => setBookingStep(0)}
                  className="bg-[#2b2675] text-[#fffcf2] font-[600] text-[14px] rounded-full px-8 py-3 border-none cursor-pointer hover:bg-[#1e1a52] transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-[#fffcf2] min-h-screen font-['DM_Sans',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        {/* Back */}
        <Link
          to="/providers"
          className="inline-flex items-center gap-1 font-normal text-[15px] text-[#2b2675] no-underline mb-8 hover:text-[#a99bf7] transition-colors"
        >
          <ChevronLeft size={18} /> Back
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
          {/* Left Column */}
          <div>
            {/* Profile Header */}
            <div className="flex items-start gap-6 mb-8">
              <div className="size-[120px] rounded-full overflow-hidden shadow-[0px_4px_16px_0px_rgba(43,38,117,0.1)] shrink-0">
                <img src={provider.image} alt={provider.name} className="size-full object-cover" />
              </div>
              <div>
                <h1 className="font-[600] text-[24px] text-[#2b2675] mb-1">{provider.name}</h1>
                <p className="font-normal text-[16px] text-[rgba(43,38,117,0.65)] mb-1">{provider.specialty}</p>
                <p className="font-[500] text-[16px] text-[#a99bf7] mb-1">{provider.credentials}</p>
                <p className="font-normal text-[14px] text-[rgba(43,38,117,0.65)] mb-3">{provider.address}</p>
                <div className={`inline-block rounded-full px-3 py-1 text-[11px] font-[600] ${
                  provider.status === "accepting"
                    ? "bg-[rgba(209,216,78,0.15)] border border-[rgba(209,216,78,0.4)] text-[#2b2675]"
                    : "bg-[rgba(232,142,61,0.15)] border border-[rgba(232,142,61,0.4)] text-[#2b2675]"
                }`}>
                  {provider.status === "accepting" ? "Accepting Patients" : "Limited Availability"}
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="font-normal text-[15px] leading-[25px] text-[rgba(43,38,117,0.72)] mb-8">
              {provider.bio}
            </p>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-[#e6eaff] mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`pb-3 font-normal text-[16px] bg-transparent border-none cursor-pointer border-b-2 transition-colors ${
                    activeTab === tab.toLowerCase()
                      ? "border-[#a99bf7] text-[#2b2675]"
                      : "border-transparent text-[rgba(43,38,117,0.55)] hover:text-[#2b2675]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "summary" && (
              <div>
                <h3 className="font-[600] text-[16px] text-[#2b2675] mb-4">Highly recommended</h3>
                <div className="flex flex-col gap-2 mb-6">
                  {provider.highlights.map((h: string) => (
                    <div key={h} className="flex items-center gap-2">
                      <Star size={14} className="text-[#a99bf7]" />
                      <span className="font-normal text-[14px] text-[rgba(43,38,117,0.7)]">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "location" && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-[#a99bf7]" />
                  <span className="font-normal text-[15px] text-[#2b2675]">{provider.address}</span>
                </div>
                <p className="font-normal text-[14px] text-[rgba(43,38,117,0.65)]">{provider.location}</p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="flex flex-col gap-6">
                {provider.reviews.map((review: any, i: number) => (
                  <div key={i} className="bg-white rounded-[16px] p-5 border border-[#e6eaff]">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, j) => (
                          <Star key={j} size={14} fill="#a99bf7" className="text-[#a99bf7]" />
                        ))}
                      </div>
                      <span className="font-normal text-[12px] text-[rgba(43,38,117,0.5)]">{review.date}</span>
                    </div>
                    <p className="font-normal text-[14px] leading-[22px] text-[rgba(43,38,117,0.72)] mb-2">
                      "{review.text}"
                    </p>
                    <p className="font-[600] text-[12px] text-[rgba(43,38,117,0.5)]">— {review.name}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "insurance" && (
              <div>
                <h3 className="font-[600] text-[16px] text-[#2b2675] mb-4">Accepted Insurance</h3>
                <div className="flex flex-wrap gap-3">
                  {provider.insuranceAccepted.map((ins: string) => (
                    <span key={ins} className="bg-[rgba(169,155,247,0.12)] border border-[rgba(169,155,247,0.25)] rounded-full px-4 py-2 font-normal text-[13px] text-[#a99bf7]">
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Provider details at bottom */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[rgba(43,38,117,0.7)]" />
                <span className="font-normal text-[14px] text-[rgba(43,38,117,0.7)]">Next available: {provider.availability}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign size={14} className="text-[rgba(43,38,117,0.7)]" />
                <span className="font-normal text-[14px] text-[rgba(43,38,117,0.7)]">{provider.price}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[rgba(43,38,117,0.7)]" />
                <span className="font-normal text-[14px] text-[rgba(43,38,117,0.7)]">{provider.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {provider.tags.map((tag: string) => (
                <span key={tag} className="bg-[rgba(169,155,247,0.12)] border border-[rgba(169,155,247,0.25)] rounded-full px-3 py-1 font-normal text-[11px] text-[#a99bf7]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column — Calendar & Booking */}
          <div>
            {false ? null : (
              <>
                {/* Calendar */}
                <div className="bg-white rounded-[24px] p-6 border border-[#e6eaff] shadow-[0px_4px_16px_0px_rgba(43,38,117,0.07)] mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <button className="bg-transparent border-none cursor-pointer p-1 text-[#2b2675]">
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-[600] text-[15px] text-[#2b2675]">March 2026</span>
                    <button className="bg-transparent border-none cursor-pointer p-1 text-[#2b2675]">
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <div key={d} className="text-center font-[600] text-[11px] text-[rgba(43,38,117,0.5)] py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Calendar grid */}
                  {daysInMonth.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-1">
                      {week.map((day, di) => {
                        const isCurrentMonth = (wi === 0 && day > 20) || (wi === 5 && day < 10) ? false : true;
                        const isSelected = day === selectedDate && isCurrentMonth;
                        return (
                          <button
                            key={`${wi}-${di}`}
                            onClick={() => isCurrentMonth && setSelectedDate(day)}
                            className={`h-[40px] rounded-full font-normal text-[14px] border-none cursor-pointer transition-all ${
                              isSelected
                                ? "bg-[#a99bf7] text-[#fffcf2]"
                                : isCurrentMonth
                                ? "bg-transparent text-[#2b2675] hover:bg-[#e6eaff]"
                                : "bg-transparent text-[rgba(43,38,117,0.3)]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-[24px] p-6 border border-[#e6eaff] shadow-[0px_4px_16px_0px_rgba(43,38,117,0.07)] mb-6">
                  <h3 className="font-[600] text-[15px] text-[#2b2675] mb-1">Available appointments</h3>
                  <p className="font-normal text-[13px] text-[rgba(43,38,117,0.55)] mb-4">
                    Click a time to book for free.
                  </p>
                  <p className="font-[600] text-[13px] text-[rgba(43,38,117,0.65)] mb-3">
                    Thu, Mar {selectedDate}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {provider.timeSlots.map((time: string) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time === selectedTime ? null : time)}
                        className={`font-[600] text-[12px] rounded-full px-4 py-2 cursor-pointer border transition-colors ${
                          selectedTime === time
                            ? "bg-[#a99bf7] border-[#a99bf7] text-[#fffcf2]"
                            : "bg-transparent border-[#a99bf7] text-[#a99bf7] hover:bg-[#a99bf7] hover:text-[#fffcf2]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={() => setBookingStep(1)}
                  className="w-full h-[48px] rounded-full bg-[#a99bf7] text-[#fffcf2] font-[600] text-[14px] border-none cursor-pointer shadow-[0px_4px_12px_0px_rgba(169,155,247,0.35)] hover:bg-[#9585e0] transition-colors"
                >
                  Book Appointment
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── Booking Modal: Step 1 — New or Returning ── */}
      {bookingStep === 1 && (
        <div className="fixed inset-0 bg-[rgba(43,38,117,0.4)] z-50 flex items-center justify-center p-4">
          <div className="bg-[#eeeaff] rounded-[24px] w-full max-w-[540px] p-10 relative text-center">
            <button
              onClick={() => setBookingStep(0)}
              className="absolute top-5 left-6 font-[600] text-[18px] text-[#2b2675] bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
            <div className="text-[80px] mb-4">🏃‍♀️</div>
            <h2 className="font-[600] text-[20px] text-[#2b2675] mb-2">Almost there!</h2>
            <p className="font-[600] text-[22px] text-[#2b2675] mb-8">
              Are you a new or returning patient?
            </p>
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={() => { setPatientType("new"); setBookingStep(2); }}
                className="bg-[#a99bf7] text-[#fffcf2] font-[600] text-[16px] rounded-full px-10 py-3 border-none cursor-pointer hover:bg-[#9585e0] transition-colors"
              >
                New
              </button>
              <span className="font-normal text-[15px] text-[rgba(43,38,117,0.55)]">or</span>
              <button
                onClick={() => { setPatientType("returning"); setBookingStep(2); }}
                className="bg-[#2b2675] text-[#fffcf2] font-[600] text-[16px] rounded-full px-10 py-3 border-none cursor-pointer hover:bg-[#1e1a52] transition-colors"
              >
                Returning
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Booking Modal: Step 2 — Date & Time ── */}
      {bookingStep === 2 && (
        <div className="fixed inset-0 bg-[rgba(43,38,117,0.4)] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[24px] w-full max-w-[580px] p-8 relative">
            <button
              onClick={() => setBookingStep(1)}
              className="absolute top-5 left-6 font-[600] text-[18px] text-[#2b2675] bg-transparent border-none cursor-pointer"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <h2 className="font-[600] text-[22px] text-[#2b2675] mb-1">Welcome!</h2>
              <p className="font-[600] text-[18px] text-[#2b2675]">
                Let's get you started with a phone screening with{" "}
                {provider.name.replace(/^Dr\. /, "Dr. ").split(" ")[0] === "Dr." ? provider.name : `Dr. ${provider.name.split(" ").slice(-1)[0]}`}
              </p>
            </div>

            {/* Date strip */}
            <p className="font-[600] text-[13px] text-[#a99bf7] text-center mb-3">Next Available Dates</p>
            <div className="bg-[#f0eeff] rounded-[16px] flex justify-around px-4 py-3 mb-6">
              {[9, 10, 11, 12, 13, 14, 15].map((d) => (
                <button
                  key={d}
                  onClick={() => setSelectedDate(d)}
                  className={`size-[36px] rounded-full font-normal text-[14px] border-none cursor-pointer transition-all ${
                    selectedDate === d
                      ? "bg-[#a99bf7] text-[#fffcf2] shadow-[0px_0px_0px_4px_rgba(169,155,247,0.3)]"
                      : "bg-transparent text-[#2b2675] hover:bg-[#e6eaff]"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Morning slots */}
            <div className="mb-4">
              <p className="font-[600] text-[14px] text-[#a99bf7] mb-3">Morning:</p>
              <div className="flex flex-wrap gap-2">
                {["9:00 AM", "10:00 AM", "10:30 AM"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t === selectedTime ? null : t)}
                    className={`font-normal text-[13px] rounded-full px-5 py-2 border cursor-pointer transition-colors ${
                      selectedTime === t
                        ? "bg-[#a99bf7] border-[#a99bf7] text-[#fffcf2]"
                        : "bg-[#f0eeff] border-transparent text-[#2b2675] hover:border-[#a99bf7]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Afternoon slots */}
            <div className="mb-8">
              <p className="font-[600] text-[14px] text-[#a99bf7] mb-3">Afternoon</p>
              <div className="flex flex-wrap gap-2">
                {["12:30 PM", "1:00 PM", "2:30 PM", "3:30 PM"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t === selectedTime ? null : t)}
                    className={`font-normal text-[13px] rounded-full px-5 py-2 border cursor-pointer transition-colors ${
                      selectedTime === t
                        ? "bg-[#a99bf7] border-[#a99bf7] text-[#fffcf2]"
                        : "bg-[#f0eeff] border-transparent text-[#2b2675] hover:border-[#a99bf7]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => selectedTime && setBookingStep(3)}
              disabled={!selectedTime}
              className={`w-full h-[48px] rounded-full font-[600] text-[14px] border-none cursor-pointer transition-all ${
                selectedTime
                  ? "bg-[#a99bf7] text-[#fffcf2] hover:bg-[#9585e0]"
                  : "bg-[rgba(169,155,247,0.4)] text-[#fffcf2]"
              }`}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
