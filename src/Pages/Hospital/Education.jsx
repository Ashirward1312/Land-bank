"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../images/education.png"; // <-- yahan apni image file ka sahi path/naam lagao

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- EDUCATION / INSTITUTIONAL DATA -------------------- */

const EDUCATION_OPTIONS = [
  {
    id: "vidhan-sabha-edu",
    type: "EDUCATION / INSTITUTIONAL LAND",
    city: "Raipur",
    title: "EDUCATION / INSTITUTIONAL LAND – NEAR VIDHAN SABHA",
    location: "Near Vidhan Sabha, Raipur",
    size: "Size as per requirement (multiple options possible)",
    note: "Suitable for school, college, coaching campus or institutional building in a prime corridor.",
  },
  {
    id: "hirapur-edu",
    type: "EDUCATION / INSTITUTIONAL LAND",
    city: "Raipur",
    title: "EDUCATION & CAMPUS LAND – HIRAPUR SIDE",
    location: "Hirapur belt, Raipur",
    size: "Land parcel options available for institutional use",
    note: "Good for school, skill development centre, coaching or hostel use with future growth potential.",
  },
  {
    id: "nandanvan-rungta-edu",
    type: "EDUCATION / INSTITUTIONAL LAND",
    city: "Raipur",
    title: "EDUCATION LAND – NANDANVAN / NEAR RUNGTA COLLEGE",
    location: "Nandanvan area, near Rungta College, Raipur",
    size: "Size as per requirement (education / institutional)",
    note: "Ideal for allied education institutes, hostels, coaching or campus expansion near existing colleges.",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function EducationCard({ item, index }) {
  const { type, city, title, location, size, note } = item;

  return (
    <article className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-90"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge */}
      <div
        className="absolute right-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-slate-200 border"
        style={{ borderColor: BRAND.soft }}
      >
        OPTION {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            {type} • {city}
          </span>
          <span
            className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
            style={{
              background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
              borderColor: BRAND.soft,
            }}
          >
            PRICE ON REQUEST
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h2>
          <p
            className="text-[11px] uppercase tracking-[0.22em]"
            style={{ color: BRAND.base }}
          >
            EDUCATION &amp; INSTITUTIONAL OPPORTUNITY
          </p>
        </div>

        {/* Details box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            KEY DETAILS
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Land Size:</span>{" "}
            {size}
          </p>
          {note && (
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-slate-100">Note:</span> {note}
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your institution type, required land size and budget – we&apos;ll
            share exact options, layouts and terms for these{" "}
            <span className="font-semibold text-slate-100">
              Education / Institutional
            </span>{" "}
            locations.
          </span>

          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-neutral-900 shadow-lg ring-1 border transition duration-200"
            style={{
              background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              boxShadow: `0 10px 24px ${BRAND.glow}`,
              borderColor: BRAND.soft,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "brightness(1.0)";
            }}
          >
            ENQUIRE EDUCATION LAND
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function EducationListings() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Gold aura (same as other pages) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <div className="mb-6 flex items-center justify-between">
       <button
                    type="button"
                    onClick={() => navigate("/", { state: { scrollTo: "categories" } })}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
                >
                    <span className="text-base md:text-lg">←</span>
                    <span>BACK TO CATEGORIES
                    </span>
                </button>

        </div>

        {/* Heading */}
        <header className="mb-6 space-y-3 text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            EDUCATION • INSTITUTIONAL • RAIPUR
          </p>
        </header>

        {/* Simple center image */}
        <div className="mb-8 flex justify-center">
          <img
            src={img}
            alt="Education and institutional land opportunities"
            className="w-full max-w-2xl rounded-2xl object-cover"
          />
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION_OPTIONS.map((item, index) => (
            <EducationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}