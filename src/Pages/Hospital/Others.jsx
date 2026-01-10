"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- DATA -------------------- */

const UNDER_CONSTRUCTION_PROJECTS = [
  {
    id: "ivy-hospital-on-rent-underconstruction",
    title: "UNDER CONSTRUCTION – NEAR IVY HOSPITAL",
    location: "Near IVY Hospital, Raipur",
    status: "Under Construction",
    tag: "ON RENT",
    highlight: true,
  },
  {
    id: "ring-road-1-underconstruction",
    title: "UNDER CONSTRUCTION – NEAR RING ROAD NO.1",
    location: "Near Ring Road No.1, Raipur",
    status: "Under Construction",
  },
];

/* -------------------- CARD (RESPONSIVE FIXED) -------------------- */

function UnderConstructionCard({ item, index }) {
  const { title, location, status, tag, highlight } = item;

  return (
    <article
      className="group relative flex flex-col overflow-hidden
      rounded-2xl sm:rounded-3xl
      bg-gradient-to-b from-slate-900/90 via-slate-950 to-black
      ring-1 ring-white/10
      shadow-[0_20px_60px_-35px_rgba(0,0,0,1)]
      transition-all duration-200
      sm:hover:ring-[#fde68a]/80 sm:hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)]
      sm:hover:-translate-y-[2px]"
    >
      {/* Top gold line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge */}
      <div
        className="absolute right-3 top-3 sm:right-4 sm:top-4 z-10
        rounded-full bg-black/80
        px-2.5 py-1 sm:px-3
        text-[10px] sm:text-[11px] font-semibold text-slate-200
        border"
        style={{ borderColor: BRAND.soft }}
      >
        OPTION {String(index + 1).padStart(2, "0")}
      </div>

      {/* Content */}
      <div
        className="
        p-4 sm:p-5 md:p-6
        pt-12 sm:pt-5
        pr-20 sm:pr-5 md:pr-6
        space-y-4
        flex-1 flex flex-col min-w-0"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-[10px] sm:text-[11px] font-semibold">
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
            style={{ borderColor: BRAND.soft }}
          >
            UNDER CONSTRUCTION • RAIPUR
          </span>

          {tag && (
            <span
              className={`rounded-full px-3 py-1 border uppercase tracking-wider ${
                highlight ? "animate-pulse" : ""
              }`}
              style={{
                background: highlight
                  ? `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`
                  : "rgba(0,0,0,0.7)",
                color: highlight ? "#000" : "#fff",
                borderColor: BRAND.base,
                boxShadow: highlight ? `0 0 18px ${BRAND.glow}` : "none",
              }}
            >
              {tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase leading-snug break-words hyphens-auto">
          {title}
        </h2>

        {/* Details */}
        <div className="rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5 min-w-0">
          <p className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-[0.16em]">
            Key Details
          </p>

          <p className="text-xs sm:text-sm text-slate-300 break-words">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 break-words">
            <span className="font-semibold text-slate-100">Status:</span>{" "}
            {status}
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/5 px-4 sm:px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 flex-1 leading-relaxed">
            For under construction options near IVY Hospital and Ring Road No.1,
            share your requirement and budget.
          </span>

          <a
            href="/#contact"
            className="inline-flex w-full sm:w-auto items-center justify-center
            rounded-full px-5 py-2
            text-xs md:text-sm font-semibold text-neutral-900
            ring-1 border transition"
            style={{
              background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
              borderColor: BRAND.soft,
              boxShadow: `0 10px 24px ${BRAND.glow}`,
            }}
          >
            ENQUIRE
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN -------------------- */

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-slate-100 pt-16 md:pt-24 pb-14">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
        {/* Back */}
        <button
          onClick={() => navigate("/", { state: { scrollTo: "categories" } })}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-[11px] sm:text-xs font-medium text-slate-200 hover:border-white/40"
        >
          ← BACK TO CATEGORIES
        </button>

        {/* Heading */}
        <header className="mb-8 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            OTHERS
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {UNDER_CONSTRUCTION_PROJECTS.map((item, index) => (
            <UnderConstructionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}