"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../images/resort.png"; // <-- yahan apni resort/wedding lawn image ka sahi path/naam lagao

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- RESORT / WEDDING LAWN DATA -------------------- */

const RESORT_OPTIONS = [
  {
    id: "kanha-resort-10-13",
    title: "RESORT / WEDDING LAWN – KANHA NATIONAL PARK (MP)",
    location: "Near Kanha National Park, Madhya Pradesh",
    size: "Approx 10 to 13 acres",
    approvals: "With all approvals in place (resort / hospitality use).",
    note: "Suitable for resort, wedding lawn, destination wedding venue and nature-based hospitality project.",
  },
  {
    id: "vip-road-resort-3-5-7",
    title: "3, 5 & 7 ACRE RESORT LAND – NEAR VIP ROAD (LEASE / JV)",
    location: "Near VIP Road, Raipur",
    size: "Approx 3, 5 & 7 acre resort land options",
    approvals: "",
    note: "Lease and Joint Venture options available for resort project.",
  },
  {
  id: "darbha-20-40-acres-plotting",
  title: "20 TO 40 ACRES PLOTTING LAND – NEAR DARBHA",
  location: "Near Darbha, Raipur",
  size: "Approx 20 to 40 acres land options",
  approvals: "",
  note: "Best suited for plotting, township development or long-term land investment.",
},
{
  id: "maira-resort-15-20-acres",
  title: "15 TO 20 ACRES RESORT LAND – NEAR MAIRA RESORT",
  location: "Near Maira Resort, Raipur",
  size: "Approx 15 to 20 acres land options",
  approvals: "",
  note: "Prime location near Maira Resort – ideal for resort development, eco-tourism or long-term investment.",
},
];

/* -------------------- CARD COMPONENT -------------------- */

function ResortCard({ item, index }) {
  const { title, location, size, approvals, note } = item;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
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
        OPTION {String((index ?? 0) + 1).padStart(2, "0")}
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            With All Approvals
          </span>
          <span
            className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
            style={{
              background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
              borderColor: BRAND.soft,
            }}
          >
            Resort &amp; Wedding Lawn Use
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
            DESTINATION RESORT / WEDDING LAWN LAND
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
          {approvals && (
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">Approvals:</span>{" "}
              {approvals}
            </p>
          )}
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
            Share your resort / wedding lawn concept and budget – we&apos;ll
            share exact location, site layout and commercial terms for this
            opportunity.
          </span>

          <a
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2 text-xs md:text-sm font-semibold text-neutral-900 shadow-lg ring-1 border transition.duration-200"
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
            ENQUIRE RESORT / WEDDING LAWN
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function ResortListings() {
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
            RESORT • WEDDING LAWN
          </p>
        </header>

        {/* Simple center image (smaller) */}
        <div className="mb-8 flex justify-center">
          <img
            src={img}
            alt="Luxury resort and wedding lawn near Kanha National Park"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl object-cover"
          />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-1">
          {RESORT_OPTIONS.map((item, index) => (
            <ResortCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}