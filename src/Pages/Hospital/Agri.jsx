"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#facc15",   // Rich Gold
  soft: "#fde68a",   // Soft Light Gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- AGRICULTURE LAND DATA -------------------- */

const AGRICULTURE_LAND = {
  id: "mahasamund-agri-land",
  title: "Premium Agriculture Land – Near Mahasamund",
  location: "Near Mahasamund, Chhattisgarh",
  size: "50+ Acres (available in large contiguous parcels)",
  price: "Starting from ₹18–20 Lakhs per acre",
  highlights:
    "Fertile land suitable for commercial farming, agro-processing units, organic cultivation or future development potential, subject to due diligence.",
};

/* -------------------- CARD COMPONENT -------------------- */

function AgricultureCard({ item }) {
  const { title, location, size, price, highlights } = item;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge */}
      <div
        className="absolute right-4 top-4 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-slate-200 border"
        style={{ borderColor: BRAND.soft }}
      >
        OPTION 01
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            AGRICULTURE LAND 
          </span>
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            50+ ACRES AVAILABLE
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug uppercase">
            {title}
          </h2>
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
            <span className="font-semibold text-slate-100">Land Size:</span> {size}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Price Range:</span> {price}
          </p>
          {highlights && (
            <p className="text-xs text-slate-400 pt-1 border-t border-white/5 mt-2">
              {highlights}
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Interested in large-scale agriculture land near Mahasamund? Share your
            farming plan or investment profile for detailed terms and site visit.
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
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function AgricultureListings() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Gold aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate("/", { state: { scrollTo: "categories" } })}
          className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
        >
          <span className="text-base md:text-lg">←</span>
          <span>BACK TO CATEGORIES</span>
        </button>

        {/* Heading */}
        <header className="mb-8 space-y-3 text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AGRICULTURE LAND
          </p>
          <h1 className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-tight">
            Premium Agriculture Land 
          </h1>
          
        </header>

        {/* Single Card */}
        <div className="max-w-3xl mx-auto">
          <AgricultureCard item={AGRICULTURE_LAND} />
        </div>
      </div>
    </section>
  );
}