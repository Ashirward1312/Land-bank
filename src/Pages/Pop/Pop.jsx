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
      className="fixed inset-0 z-[1000] flex items-center justify-center px-3 sm:px-4 py-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lb-popup-title"
      onClick={markSeenAndClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Panel wrapper */}
      <div
        className="relative w-full max-w-4xl max-h-[min(640px,100vh-2rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="h-full overflow-hidden rounded-2xl p-[1.8px]"
          style={{
            background: `linear-gradient(135deg, ${GOLD.base}E6, ${GOLD.soft}73 40%, ${GOLD.base}E6)`,
            boxShadow: `0 28px 80px -28px ${GOLD.glow}`,
          }}
        >
          <div className="flex h-full flex-col rounded-[calc(1rem-1.8px)] bg-neutral-950 text-neutral-100 ring-1 ring-white/10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 p-4 sm:p-6 border-b border-white/10">
              <div className="pr-10 sm:pr-0">
                <h2
                  id="lb-popup-title"
                  className="text-lg sm:text-2xl font-extrabold tracking-tight"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  CHOOSE YOUR PROPERTY CATEGORY
                </h2>
              </div>

              <button
                onClick={markSeenAndClose}
                className="self-start sm:self-auto h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10"
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

            {/* Body – mobile friendly, scrollable */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {CATEGORIES.map(({ id, label, Icon, desc }) => (
                  <button
                    key={id}
                    onClick={() => goToCategorySection(id)}
                    className="group relative rounded-2xl p-[1.5px] text-left transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 focus-visible:ring-[rgba(212,175,55,.6)]"
                    style={{
                      background: `linear-gradient(135deg, ${GOLD.base}CC, ${GOLD.soft}66 50%, ${GOLD.base}CC)`,
                      boxShadow: `0 10px 28px -14px ${GOLD.glow}`,
                    }}
                  >
                    <div
                      className="rounded-[calc(1rem-1.5px)] h-full bg-neutral-950 ring-1 ring-white/10 p-4 sm:p-5 flex flex-col"
                      style={{ minHeight: 120 }}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl grid place-items-center"
                          style={{
                            background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                            boxShadow: `0 6px 18px -6px ${GOLD.glow}`,
                          }}
                        >
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm sm:text-[15px] font-semibold text-white">
                            {label}
                          </div>
                          <div className="mt-0.5 text-[11px] sm:text-xs text-neutral-400">
                            {desc}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-neutral-300">
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