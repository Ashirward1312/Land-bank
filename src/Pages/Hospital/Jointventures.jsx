"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../images/jv.png"; // <-- yahan apni JV image ka sahi path/naam lagao

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

const CTA_COLOR = BRAND.base;
const CTA_HOVER = "#fde047";

/* -------------------- OPPORTUNITIES DATA -------------------- */

const OPPORTUNITIES = [
  {
    id: "vip-road-jv",
    dealType: "JV",
    city: "Raipur",
    title: "3, 5 & 7 Acre JV Land – VIP Road, Raipur",
    location: "VIP Road corridor, Raipur",
    // CHANGED: resort ke liye mention
    size: "3, 5 & 7 acre options – ideal for resort development",
  },
  {
    id: "baloda-bazar-road-jv",
    dealType: "JV",
    city: "Raipur",
    title: "10 – 25 Acre JV Land – Baloda Bazar Road",
    location: "Baloda Bazar Road, Raipur outskirts",
    size: "10 to 25 acre (contiguous land) on JV",
  },
  {
    id: "persulidih-tekari-jv",
    // CHANGED: JV se PARTNERSHIP
    dealType: "PARTNERSHIP",
    city: "Raipur",
    // CHANGED: title me Partnership
    title: "7 – 10 Acre Partnership Land – Persulidih / Tekari Belt",
    location: "Persulidih – Tekari side, Raipur",
    size: "Approx 7 to 10 acre land on partnership",
  },
  {
    id: "saddu-jv",
    // CHANGED: JV se PARTNERSHIP
    dealType: "PARTNERSHIP",
    city: "Raipur",
    // CHANGED: title me Partnership
    title: "Approx 5 Acre Partnership Land – Near Saddu",
    location: "Saddu side, Raipur",
    size: "Approx 5 acre land on partnership",
  },

  {
    id: "mm-fun-city-jv",
    dealType: "JV",
    city: "Raipur",
    title: "8 Acre JV Land – Near MM Fun City",
    location: "Near MM Fun City, Raipur",
    size: "Approx 8 acre land for joint venture",
  },
  {
    id: "ghadi-chowk-sale",
    dealType: "SALE",
    city: "Raipur",
    title:
      "10,000 – 40,000 sq.ft Commercial – Near Ghadi Chowk / Raj Bhawan",
    location: "Near Ghadi Chowk / Raj Bhawan, Raipur",
    size: "Approx 10,000 to 40,000 sq.ft commercial space / land",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function OpportunityCard({ item, index }) {
  const { dealType, city, title, location, size } = item;
  const isJV = dealType === "JV";
  const isPartnership = dealType === "PARTNERSHIP";

  return (
    <article className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
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
        OPTION {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            {city} • LAND / COMMERCIAL
          </span>

          {isJV ? (
            <span
              className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
              style={{
                background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
                borderColor: BRAND.soft,
              }}
            >
              JV OPPORTUNITY
            </span>
          ) : isPartnership ? (
            // NEW: Partnership badge
            <span
              className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
              style={{
                background: `linear-gradient(135deg, ${BRAND.base}, ${BRAND.soft})`,
                borderColor: BRAND.soft,
              }}
            >
              PARTNERSHIP OPPORTUNITY
            </span>
          ) : (
            <span
              className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
              style={{
                background: `linear-gradient(135deg, ${BRAND.base}, ${BRAND.soft})`,
                borderColor: BRAND.soft,
              }}
            >
              OUTRIGHT SALE • PRICE ON REQUEST
            </span>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug">
            {title}
          </h2>
          <p
            className="text-[11px] uppercase tracking-[0.22em]"
            style={{ color: BRAND.base }}
          >
            {isJV
              ? "Joint Venture Land"
              : isPartnership
              ? "Partnership Land"
              : "Prime Commercial for Sale"}
          </p>
        </div>

        {/* Highlight box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            Key Details
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Size:</span> {size}
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your profile, project idea and budget – we&apos;ll connect you
            for detailed discussion on{" "}
            {isJV
              ? "JV terms and structure."
              : isPartnership
              ? "partnership structure and terms."
              : "commercial pricing and terms."}
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
            {isJV
              ? "Discuss JV"
              : isPartnership
              ? "Discuss Partnership"
              : "Enquire for Sale"}
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function JVListings() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Gold aura (base + soft same as other page) */}
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
        <header className="mb-6 space-y-3 text-center flex flex-col items-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {/* Agar chaho to yahan bhi Partnership add kar sakte ho */}
            JOINT VENTURE (JV) • PARTNERSHIP • LAND • COMMERCIAL
          </p>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
            JV (Joint Venture) / Partnership ek{" "}
            <span className="font-semibold text-slate-100">
              agreement and mutual understanding
            </span>{" "}
            hota hai client aur land owner ke beech, jisme milkar project
            develop karte hain aur profits, revenue ya developed area share
            karte hain, as per agreed terms.
          </p>
        </header>

        {/* Simple center image */}
        <div className="mb-8 flex justify-center">
          <img
            src={img}
            alt="Joint venture real estate and land development concept"
            className="w-full max-w-2xl rounded-2xl object-cover"
          />
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {OPPORTUNITIES.map((item, index) => (
            <OpportunityCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}