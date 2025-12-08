// "use client";
// import React, { useEffect, useState } from "react";
// import Hospital from "../../images/hospital.jpeg"; // 👈 tumhara asli image

// /* Theme */
// const GOLD_SOFT = "#E6C766"; // used for price text
// const GOLD = { soft: "#F3D98E", base: "#D4AF37", ring: "rgba(212,175,55,.55)", glow: "rgba(212,175,55,.45)" };

// /* Icons (inline SVGs) */
// function HospitalIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <rect x="4" y="3" width="16" height="18" rx="2" />
//       <path d="M12 7v6M9 10h6" />
//     </svg>
//   );
// }
// function RealEstateIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M3 11l9-7 9 7" />
//       <path d="M5 10v10h14V10" />
//       <path d="M9 20v-6h6v6" />
//     </svg>
//   );
// }
// function IndustryIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M3 21V9l6 4V9l6 4V9l6 4v8H3Z" />
//       <path d="M7 21v-3M11 21v-6M15 21v-4M19 21v-2" />
//     </svg>
//   );
// }
// function EducationIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M3 7l9-4 9 4-9 4-9-4z" />
//       <path d="M13 11v6l-1 1-1-1v-6" />
//       <path d="M21 8v5" />
//     </svg>
//   );
// }
// function HotelIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
//       <path d="M7 12h10M7 9h10M7 15h6" />
//     </svg>
//   );
// }
// function AgricultureIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M12 3c4.4 0 8 3.6 8 8 0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10 0-4.4 3.6-8 8-8z" />
//       <path d="M12 6v10M9 12h6" />
//     </svg>
//   );
// }
// function InvestmentIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M3 21h18" />
//       <path d="M3 16l5-5 4 4 7-7" />
//       <path d="M14 4h7v7" />
//     </svg>
//   );
// }
// function JointVentureIcon({ className = "" }) {
//   return (
//     <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
//       <path d="M9.5 11.5l5-5" />
//       <path d="M7 9a5 5 0 017-7l1.5 1.5" />
//       <path d="M14.5 12.5l-5 5" />
//       <path d="M17 15a5 5 0 01-7 7L8.5 20.5" />
//     </svg>
//   );
// }

// /* Aliases */
// const ID_ALIAS = { agricultural: "agrifarm", farmland: "agrifarm" };

// /* Categories */
// const CATEGORIES = [
//   { id: "agrifarm", label: "Agri / Farm Land", Icon: AgricultureIcon, desc: "Agricultural & farmhouse plots" },
//   { id: "investment", label: "Investment", Icon: InvestmentIcon, desc: "ROI-focused land banking" },
//   { id: "jointventure", label: "Joint Venture", Icon: JointVentureIcon, desc: "JD/JV development" },
//   { id: "hospital", label: "Hospital", Icon: HospitalIcon, desc: "Clinic, medical center, diagnostics" },
//   { id: "realestate", label: "Real Estate", Icon: RealEstateIcon, desc: "Residential / Commercial plots" },
//   { id: "industry", label: "Industries", Icon: IndustryIcon, desc: "Industrial land / sheds" },
//   { id: "education", label: "Education", Icon: EducationIcon, desc: "School / College / Campus" },
//   { id: "hotel", label: "Hotel", Icon: HotelIcon, desc: "Hotel / Resort / Hospitality" },
// ];

// /* Previews */
// const PREVIEW_MAP = {
//   agrifarm: [
//     { id: "ag1", title: "Irrigated Agri Parcel", location: "Arang Belt", areaAcre: 4.2, price: 5600000, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80" },
   
//   ],
//   investment: [
   
//     { id: "inv4", title: "Future Growth Corridor", location: "Old Dhamtari Road", areaAcre: 1.1, price: 16200000, image: "https://images.unsplash.com/photo-1542228262-3d663b306bf8?auto=format&fit=crop&w=1200&q=80" },
//   ],
//   jointventure: [
   
//     { id: "jv4", title: "High Street JV", location: "GE Road", areaAcre: 1.3, price: 0, image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80" },
//   ],

//   // ✅ ORIGINAL HOSPITAL DATA – sirf tumhari Pachpedi Naka wali property
//   hospital: [
//     {
//       id: "h-pachpedi",
//       title: "Prime Hospital / Medical Tower – Pachpedi Naka",
//       location: "Pachpedi Naka, Raipur (Next to Ganeshi Hospital)",
//       // Plot size approx 8800 sq.ft (57x150) ≈ 0.20 acre
//       areaAcre: 0.2,
//       // Price: ₹12 Cr
//       price: 120000000,
//       image: Hospital, // local image import
//     },
//   ],

//   realestate: [
//     { id: "r1", title: "Green Meadows Residential Plot", location: "New Rajendra Nagar", areaAcre: 0.7, price: 9500000, image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1200&q=80" },
    
//   ],
//   industry: [
//     { id: "i1", title: "SteelWorks Industrial Plot", location: "Ring Road No.2", areaAcre: 2.4, price: 33000000, image: "https://images.unsplash.com/photo-1581093588401-16fd8a8c53f0?auto=format&fit=crop&w=1200&q=80" },
//    { id: "i4", title: "Light Industrial Block", location: "Vidhan Sabha Road", areaAcre: 1.2, price: 21000000, image: "https://images.unsplash.com/photo-1581091215367-59ab6b52d9ff?auto=format&fit=crop&w=1200&q=80" },
//   ],
//   education: [
   
//     { id: "e4", title: "Primary School Site", location: "Shankar Nagar", areaAcre: 1.1, price: 14000000, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80" },
//   ],
//   hotel: [
    
//     { id: "ho4", title: "Boutique Resort Land", location: "Ring Road No.1", areaAcre: 2.1, price: 35000000, image: "https://images.unsplash.com/photo-1541976076758-347942db1970?auto=format&fit=crop&w=1200&q=80" },
//   ],
// };

// function formatINR(val) {
//   if (!val) return "JV";
//   return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
// }

// export default function PopupCategoryPicker({ initialOpen = true, targetHash = "#filters", onPick }) {
//   const [open, setOpen] = useState(initialOpen);
//   const [step, setStep] = useState("choose"); // 'choose' | 'preview'
//   const [activeCat, setActiveCat] = useState(null);

//   // Lock body scroll + ESC to close
//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         if (step === "preview") { setStep("choose"); setActiveCat(null); }
//         else { setOpen(false); }
//       }
//     };
//     window.addEventListener("keydown", onKey);
//     return () => {
//       document.body.style.overflow = prev;
//       window.removeEventListener("keydown", onKey);
//     };
//   }, [open, step]);

//   // Helper: smooth scroll with offset (for sticky navbar)
//   const scrollToTarget = (selector, offset = 80) => {
//     const el = document.querySelector(selector);
//     if (!el) return;
//     const top = window.scrollY + el.getBoundingClientRect().top - offset;
//     window.scrollTo({ top, behavior: "smooth" });
//   };

//   const goToFilters = (catId) => {
//     const resolved = ID_ALIAS[catId] || catId;
//     try { localStorage.setItem("lb_preselect_category", resolved); } catch {}
//     if (typeof onPick === "function") onPick(resolved);

//     // Close first, then scroll after unmount to avoid overlay blocking
//     setOpen(false);
//     const hash = targetHash.startsWith("#") ? targetHash : `#${targetHash}`;

//     requestAnimationFrame(() => {
//       requestAnimationFrame(() => {
//         if (window.location.hash !== hash) history.replaceState(null, "", hash);
//         scrollToTarget(hash, 80);
//         window.dispatchEvent(new CustomEvent("lb:categoryPicked", { detail: resolved }));
//       });
//     });
//   };

//   const pickCategory = (id) => {
//     const resolved = ID_ALIAS[id] || id;
//     setActiveCat(resolved);
//     setStep("preview");
//   };

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
//       role="dialog"
//       aria-modal="true"
//       aria-labelledby="lb-popup-title"
//       onClick={() => setOpen(false)}
//     >
//       {/* Backdrop */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* Panel */}
//       <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
//         <div
//           className="rounded-2xl p-[1.8px]"
//           style={{
//             background: `linear-gradient(135deg, ${GOLD.base}E6, ${GOLD.soft}73 40%, ${GOLD.base}E6)`,
//             boxShadow: `0 28px 80px -28px ${GOLD.glow}`,
//           }}
//         >
//           <div className="rounded-[calc(1rem-1.8px)] bg-neutral-950 text-neutral-100 ring-1 ring-white/10">
//             {/* Header */}
//             <div className="flex items-start justify-between gap-4 p-6 border-b border-white/10">
//               <div>
//                 <h2
//                   id="lb-popup-title"
//                   className="text-2xl font-extrabold tracking-tight"
//                   style={{
//                     backgroundImage: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
//                     WebkitBackgroundClip: "text",
//                     backgroundClip: "text",
//                     color: "transparent",
//                   }}
//                 >
//                   {step === "choose" ? "Discover the Property That Fits Your Need" : CATEGORIES.find((c) => c.id === activeCat)?.label || "Preview"}
//                 </h2>
//                 <p className="text-neutral-400 text-sm mt-1">
//                   {step === "choose" ? "Tap a category to preview curated listings." : "Preview listings. Click any card to jump to filters."}
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 {step === "preview" && (
//                   <button
//                     onClick={() => { setStep("choose"); setActiveCat(null); }}
//                     className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm"
//                   >
//                     ← Back
//                   </button>
//                 )}
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10"
//                   aria-label="Close"
//                   title="Close"
//                 >
//                   <svg viewBox="0 0 24 24" width="18" height="18" stroke={GOLD.soft} fill="none" strokeWidth="2">
//                     <path d="M6 6l12 12M18 6l-12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             {/* Body */}
//             <div className="p-6">
//               {step === "choose" ? (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
//                   {CATEGORIES.map(({ id, label, Icon, desc }) => (
//                     <button
//                       key={id}
//                       onClick={() => pickCategory(id)}
//                       className="group relative rounded-2xl p-[1.5px] text-left transition-transform hover:-translate-y-0.5"
//                       style={{
//                         background: `linear-gradient(135deg, ${GOLD.base}CC, ${GOLD.soft}66 50%, ${GOLD.base}CC)`,
//                         boxShadow: `0 10px 28px -14px ${GOLD.glow}`,
//                       }}
//                     >
//                       <div className="rounded-[calc(1rem-1.5px)] h-full bg-neutral-950 ring-1 ring-white/10 p-5 flex flex-col" style={{ minHeight: 140 }}>
//                         <div className="flex items-center gap-4">
//                           <div
//                             className="h-12 w-12 rounded-xl grid place-items-center"
//                             style={{
//                               background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
//                               boxShadow: `0 6px 18px -6px ${GOLD.glow}`,
//                             }}
//                           >
//                             <Icon className="h-6 w-6 text-black" />
//                           </div>
//                           <div className="min-w-0">
//                             <div className="text-[15px] font-semibold text-white">{label}</div>
//                             <div className="text-xs text-neutral-400">{desc}</div>
//                           </div>
//                         </div>

//                         <div className="mt-4 text-xs text-neutral-300">
//                           Preview listings
//                           <span className="ml-1 opacity-70 group-hover:opacity-100 transition">→</span>
//                         </div>
//                       </div>
//                     </button>
//                   ))}
//                 </div>
//               ) : (
//                 <div>
//                   {/* Preview grid */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
//                     {(PREVIEW_MAP[activeCat] || []).map((item) => (
//                       <button
//                         key={item.id}
//                         onClick={() => goToFilters(activeCat)}
//                         className="group relative rounded-2xl overflow-hidden ring-1"
//                         style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", boxShadow: `0 8px 22px -10px ${GOLD.glow}` }}
//                       >
//                         <img
//                           src={typeof item.image === "string" ? item.image : item.image?.src ?? item.image}
//                           alt={item.title}
//                           className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
//                           loading="lazy"
//                           decoding="async"
//                         />
//                         <div className="absolute inset-x-0 bottom-0 p-3" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))" }}>
//                           <div className="text-[13px] font-semibold text-white line-clamp-1">{item.title}</div>
//                           <div className="text-[12px] text-neutral-300 line-clamp-1">{item.location}</div>
//                           <div className="mt-1 flex items-center justify-between text-[12px]">
//                             <span className="text-neutral-200">{item.areaAcre} ac</span>
//                             <span style={{ color: GOLD_SOFT }}>{formatINR(item.price)}</span>
//                           </div>
//                         </div>
//                       </button>
//                     ))}
//                   </div>

//                   {/* CTA row */}
//                   <div className="mt-6 flex items-center justify-end">
//                     <button
//                       onClick={() => goToFilters(activeCat)}
//                       className="rounded-lg px-4 py-2 text-sm font-semibold ring-1 transition active:scale-[.99]"
//                       style={{
//                         color: "#111",
//                         background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
//                         boxShadow: `0 6px 18px -6px ${GOLD.glow}`,
//                         borderColor: GOLD.ring,
//                       }}
//                     >
//                       View all {CATEGORIES.find((c) => c.id === activeCat)?.label} listings
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Bottom glow */}
//             <div className="h-[2px] w-full rounded-b-2xl" style={{ background: `linear-gradient(90deg, transparent, ${GOLD.base}B3, ${GOLD.soft}99, transparent)` }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";

/* Theme */
const GOLD = {
  soft: "#F3D98E",
  base: "#D4AF37",
  ring: "rgba(212,175,55,.55)",
  glow: "rgba(212,175,55,.45)",
};

/* Icons (inline SVGs) */
function HospitalIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v6M9 10h6" />
    </svg>
  );
}
function RealEstateIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function IndustryIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 21V9l6 4V9l6 4V9l6 4v8H3Z" />
      <path d="M7 21v-3M11 21v-6M15 21v-4M19 21v-2" />
    </svg>
  );
}
function EducationIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M13 11v6l-1 1-1-1v-6" />
      <path d="M21 8v5" />
    </svg>
  );
}
function HotelIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
      <path d="M7 12h10M7 9h10M7 15h6" />
    </svg>
  );
}
function AgricultureIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 3c4.4 0 8 3.6 8 8 0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10 0-4.4 3.6-8 8-8z" />
      <path d="M12 6v10M9 12h6" />
    </svg>
  );
}
function InvestmentIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 21h18" />
      <path d="M3 16l5-5 4 4 7-7" />
      <path d="M14 4h7v7" />
    </svg>
  );
}
function JointVentureIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9.5 11.5l5-5" />
      <path d="M7 9a5 5 0 0 1 7-7l1.5 1.5" />
      <path d="M14.5 12.5l-5 5" />
      <path d="M17 15a5 5 0 0 1-7 7L8.5 20.5" />
    </svg>
  );
}

/* Aliases */
const ID_ALIAS = { agricultural: "agrifarm", farmland: "agrifarm" };

/* Categories */
const CATEGORIES = [
  {
    id: "agrifarm",
    label: "Agri / Farm Land",
    Icon: AgricultureIcon,
    desc: "Agricultural & farmhouse plots",
  },
  {
    id: "investment",
    label: "Investment",
    Icon: InvestmentIcon,
    desc: "ROI-focused land banking",
  },
  {
    id: "jointventure",
    label: "Joint Venture",
    Icon: JointVentureIcon,
    desc: "JD / JV development",
  },
  {
    id: "hospital",
    label: "Hospital",
    Icon: HospitalIcon,
    desc: "Clinic, medical center, diagnostics",
  },
  {
    id: "realestate",
    label: "Real Estate",
    Icon: RealEstateIcon,
    desc: "Residential / Commercial plots",
  },
  {
    id: "industry",
    label: "Industries",
    Icon: IndustryIcon,
    desc: "Industrial land / sheds",
  },
  {
    id: "education",
    label: "Education",
    Icon: EducationIcon,
    desc: "School / College / Campus",
  },
  {
    id: "hotel",
    label: "Hotel",
    Icon: HotelIcon,
    desc: "Hotel / Resort / Hospitality",
  },
];

const SEEN_KEY = "lb_category_popup_seen";

export default function PopupCategoryPicker({
  initialOpen = true,
  targetHash = "#categories",
  onPick,
}) {
  // Session-based: per tab ek hi baar
  const [open, setOpen] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const seen = window.sessionStorage.getItem(SEEN_KEY);
      return seen !== "true" && initialOpen;
    } catch {
      return initialOpen;
    }
  });

  const markSeenAndClose = () => {
    try {
      window.sessionStorage.setItem(SEEN_KEY, "true");
    } catch {}
    setOpen(false);
  };

  // Body scroll lock + ESC to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") {
        markSeenAndClose();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Smooth scroll helper
  const scrollToTarget = (selector, offset = 80) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Icon click: set category + close + scroll to category section
  const goToCategorySection = (catId) => {
    const resolved = ID_ALIAS[catId] || catId;

    try {
      // category preselect ke liye localStorage/SessionStorage jaisa tum use kar rahe ho
      window.localStorage.setItem("lb_preselect_category", resolved);
      window.sessionStorage.setItem(SEEN_KEY, "true");
    } catch {}

    if (typeof onPick === "function") onPick(resolved);

    setOpen(false);

    const hash = targetHash.startsWith("#") ? targetHash : `#${targetHash}`;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (window.location.hash !== hash) {
          history.replaceState(null, "", hash);
        }
        scrollToTarget(hash, 80);
        window.dispatchEvent(
          new CustomEvent("lb:categoryPicked", { detail: resolved })
        );
      });
    });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lb-popup-title"
      onClick={markSeenAndClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel */}
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="rounded-2xl p-[1.8px]"
          style={{
            background: `linear-gradient(135deg, ${GOLD.base}E6, ${GOLD.soft}73 40%, ${GOLD.base}E6)`,
            boxShadow: `0 28px 80px -28px ${GOLD.glow}`,
          }}
        >
          <div className="rounded-[calc(1rem-1.8px)] bg-neutral-950 text-neutral-100 ring-1 ring-white/10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 p-6 border-b border-white/10">
              <div>
                <h2
                  id="lb-popup-title"
                  className="text-2xl font-extrabold tracking-tight"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Choose Your Property Category
                </h2>
                <p className="text-neutral-400 text-sm mt-1">
                  Icon par click karo – seedha category section par le jayega.
                </p>
              </div>

              <button
                onClick={markSeenAndClose}
                className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10"
                aria-label="Close"
                title="Close"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  stroke={GOLD.soft}
                  fill="none"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

            {/* Body – only icons grid */}
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                {CATEGORIES.map(({ id, label, Icon, desc }) => (
                  <button
                    key={id}
                    onClick={() => goToCategorySection(id)}
                    className="group relative rounded-2xl p-[1.5px] text-left transition-transform hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD.base}CC, ${GOLD.soft}66 50%, ${GOLD.base}CC)`,
                      boxShadow: `0 10px 28px -14px ${GOLD.glow}`,
                    }}
                  >
                    <div
                      className="rounded-[calc(1rem-1.5px)] h-full bg-neutral-950 ring-1 ring-white/10 p-5 flex flex-col"
                      style={{ minHeight: 140 }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="h-12 w-12 rounded-xl grid place-items-center"
                          style={{
                            background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                            boxShadow: `0 6px 18px -6px ${GOLD.glow}`,
                          }}
                        >
                          <Icon className="h-6 w-6 text-black" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[15px] font-semibold text-white">
                            {label}
                          </div>
                          <div className="text-xs text-neutral-400">
                            {desc}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-xs text-neutral-300">
                        Go to category section
                        <span className="ml-1 opacity-70 group-hover:opacity-100 transition">
                          →
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom glow */}
            <div
              className="h-[2px] w-full rounded-b-2xl"
              style={{
                background: `linear-gradient(90deg, transparent, ${GOLD.base}B3, ${GOLD.soft}99, transparent)`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}