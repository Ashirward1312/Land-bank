"use client";
import React, { useEffect, useState } from "react";

/* Theme */
const GOLD_SOFT = "#E6C766";

/* Icons (inline SVGs) */
function HospitalIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v6M9 10h6" />
    </svg>
  );
}
function RealEstateIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function IndustryIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 21V9l6 4V9l6 4V9l6 4v8H3Z" />
      <path d="M7 21v-3M11 21v-6M15 21v-4M19 21v-2" />
    </svg>
  );
}
function EducationIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M13 11v6l-1 1-1-1v-6" />
      <path d="M21 8v5" />
    </svg>
  );
}
function HotelIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
      <path d="M7 12h10M7 9h10M7 15h6" />
    </svg>
  );
}

/* Categories shown on first step */
const CATEGORIES = [
  { id: "hospital", label: "Hospital", Icon: HospitalIcon, desc: "Clinic, medical center, diagnostics" },
  { id: "realestate", label: "Real Estate", Icon: RealEstateIcon, desc: "Residential / Commercial plots" },
  { id: "industry", label: "Industries", Icon: IndustryIcon, desc: "Industrial land / sheds" },
  { id: "education", label: "Education", Icon: EducationIcon, desc: "School / College / Campus" },
  { id: "hotel", label: "Hotel", Icon: HotelIcon, desc: "Hotel / Resort / Hospitality" },
];

/* Sample preview listings per category (images + details) */
const PREVIEW_MAP = {
  hospital: [
    {
      id: "h1",
      title: "CityCare Hospital Plot (100-bed)",
      location: "Naya Raipur (Atal Nagar)",
      areaAcre: 1.2,
      price: 24000000,
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "h2",
      title: "Sunrise Medical Center Parcel",
      location: "VIP Road",
      areaAcre: 0.9,
      price: 18000000,
      image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "h3",
      title: "Clinic + Diagnostics Site",
      location: "Purani Basti",
      areaAcre: 0.55,
      price: 6000000,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "h4",
      title: "Multi-speciality Hospital Land",
      location: "Ring Road No.2",
      areaAcre: 1.6,
      price: 28000000,
      image: "https://images.unsplash.com/photo-1587351024711-8401b6e4b09e?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  realestate: [
    {
      id: "r1",
      title: "Green Meadows Residential Plot",
      location: "New Rajendra Nagar",
      areaAcre: 0.7,
      price: 9500000,
      image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r2",
      title: "Skyline Residency Apartments Land",
      location: "Shankar Nagar",
      areaAcre: 1.6,
      price: 13500000,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r3",
      title: "Premium Corner Plot",
      location: "Ring Road No.1",
      areaAcre: 0.6,
      price: 8000000,
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "r4",
      title: "Cityview Commercial Parcel",
      location: "Telibandha",
      areaAcre: 0.9,
      price: 14500000,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  industry: [
    {
      id: "i1",
      title: "SteelWorks Industrial Plot",
      location: "Ring Road No.2",
      areaAcre: 2.4,
      price: 33000000,
      image: "https://images.unsplash.com/photo-1581093588401-16fd8a8c53f0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "i2",
      title: "TechPark Fabrication Site",
      location: "Tatibandh",
      areaAcre: 1.9,
      price: 28000000,
      image: "https://images.unsplash.com/photo-1567961457331-76da4d786a46?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "i3",
      title: "Warehouse & Logistics Land",
      location: "Naya Raipur",
      areaAcre: 3.5,
      price: 41000000,
      image: "https://images.unsplash.com/photo-1544989164-31dc3c645987?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "i4",
      title: "Light Industrial Block",
      location: "Vidhan Sabha Road",
      areaAcre: 1.2,
      price: 21000000,
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b52d9ff?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  education: [
    {
      id: "e1",
      title: "School Campus Plot",
      location: "Vidhan Sabha Road",
      areaAcre: 3.2,
      price: 38000000,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "e2",
      title: "University Annex Land",
      location: "Naya Raipur (Atal Nagar)",
      areaAcre: 5.6,
      price: 42000000,
      image: "https://images.unsplash.com/photo-1596495578065-8a35f54b0b6b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "e3",
      title: "Junior College Parcel",
      location: "New Rajendra Nagar",
      areaAcre: 1.8,
      price: 22000000,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "e4",
      title: "Primary School Site",
      location: "Shankar Nagar",
      areaAcre: 1.1,
      price: 14000000,
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    },
  ],
  hotel: [
    {
      id: "ho1",
      title: "Golden Leaf Hotel Site",
      location: "Telibandha",
      areaAcre: 2.8,
      price: 39000000,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ho2",
      title: "Lakeview Resort Plot",
      location: "Saddu",
      areaAcre: 6.2,
      price: 47000000,
      image: "https://images.unsplash.com/photo-1519821172141-b5d8f221462a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ho3",
      title: "Business Hotel Parcel",
      location: "VIP Road",
      areaAcre: 1.9,
      price: 32000000,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "ho4",
      title: "Boutique Resort Land",
      location: "Ring Road No.1",
      areaAcre: 2.1,
      price: 35000000,
      image: "https://images.unsplash.com/photo-1541976076758-347942db1970?auto=format&fit=crop&w=1200&q=80",
    },
  ],
};

function formatINR(val) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(val);
}

export default function PopupCategoryPicker({
  initialOpen = true,
  targetHash = "#filters", // filters section id
  onPick, // optional callback(selectedId)
}) {
  const [open, setOpen] = useState(initialOpen);
  const [step, setStep] = useState("choose"); // 'choose' | 'preview'
  const [activeCat, setActiveCat] = useState(null);

  // Lock body scroll + ESC to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (step === "preview") {
          setStep("choose");
          setActiveCat(null);
        } else {
          setOpen(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step]);

  const goToFilters = (catId) => {
    try {
      localStorage.setItem("lb_preselect_category", catId);
    } catch {}
    if (typeof onPick === "function") onPick(catId);

    const hash = targetHash.startsWith("#") ? targetHash : `#${targetHash}`;
    setTimeout(() => {
      if (window.location.hash !== hash) {
        window.location.hash = hash;
      }
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.dispatchEvent(new CustomEvent("lb:categoryPicked", { detail: catId }));
    }, 50);

    setOpen(false);
  };

  const pickCategory = (id) => {
    setActiveCat(id);
    setStep("preview");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lb-popup-title"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel */}
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <div
          className="rounded-2xl p-[1.8px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.9), rgba(230,199,102,0.45) 40%, rgba(212,175,55,0.9))",
            boxShadow: "0 28px 80px -28px rgba(212,175,55,0.55)",
          }}
        >
          <div className="rounded-[calc(1rem-1.8px)] bg-neutral-950 text-neutral-100 ring-1 ring-white/10">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 p-5 sm:p-6 border-b border-white/10">
              <div>
                <h2 id="lb-popup-title" className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  {step === "choose" ? "What are you looking for?" : CATEGORIES.find(c => c.id === activeCat)?.label}
                </h2>
                <p className="text-neutral-400 text-sm mt-1">
                  {step === "choose"
                    ? "Pick a category to preview plots and jump to filters."
                    : "Preview plots in this category. Click any to go to filters."}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {step === "preview" && (
                  <button
                    onClick={() => { setStep("choose"); setActiveCat(null); }}
                    className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm"
                  >
                    ← Back
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10"
                  aria-label="Close"
                  title="Close"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke={GOLD_SOFT} fill="none" strokeWidth="2">
                    <path d="M6 6l12 12M18 6l-12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6">
              {step === "choose" ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {CATEGORIES.map(({ id, label, Icon, desc }) => (
                    <button
                      key={id}
                      onClick={() => pickCategory(id)}
                      className="group relative rounded-2xl p-[1.5px] text-left transition-transform hover:-translate-y-0.5"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(212,175,55,0.8), rgba(230,199,102,0.4) 50%, rgba(212,175,55,0.8))",
                      }}
                    >
                      <div className="rounded-[calc(1rem-1.5px)] h-full bg-neutral-950 ring-1 ring-white/10 p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className="h-12 w-12 rounded-xl grid place-items-center"
                            style={{
                              background: "linear-gradient(135deg, #F3D98E, #D4AF37 70%)",
                              boxShadow: "0 6px 18px -6px rgba(212,175,55,0.45)",
                            }}
                          >
                            <Icon className="h-6 w-6 text-black" />
                          </div>
                          <div>
                            <div className="text-base font-semibold text-white">{label}</div>
                            <div className="text-xs text-neutral-400">{desc}</div>
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-neutral-300">
                          Preview listings
                          <span className="ml-1 opacity-70 group-hover:opacity-100 transition">→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  {/* Preview grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(PREVIEW_MAP[activeCat] || []).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => goToFilters(activeCat)}
                        className="group relative rounded-2xl overflow-hidden ring-1"
                        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-40 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                          loading="lazy"
                          decoding="async"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 p-3"
                          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0))" }}
                        >
                          <div className="text-[13px] font-semibold text-white line-clamp-1">{item.title}</div>
                          <div className="text-[12px] text-neutral-300 line-clamp-1">{item.location}</div>
                          <div className="mt-1 flex items-center justify-between text-[12px]">
                            <span className="text-neutral-200">{item.areaAcre} ac</span>
                            <span style={{ color: GOLD_SOFT }}>{formatINR(item.price)}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="mt-5 flex items-center justify-end">
                    <button
                      onClick={() => goToFilters(activeCat)}
                      className="rounded-lg px-4 py-2 text-sm font-semibold ring-1"
                      style={{
                        color: "#111",
                        background: "linear-gradient(135deg, #F3D98E, #D4AF37 70%)",
                        boxShadow: "0 6px 18px -6px rgba(212,175,55,0.45)",
                      }}
                    >
                      View all {CATEGORIES.find(c => c.id === activeCat)?.label} listings
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom glow */}
            <div
              className="h-[2px] w-full rounded-b-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), rgba(230,199,102,0.6), transparent)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}