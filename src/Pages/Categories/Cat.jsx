"use client";
import React, { useState } from "react";

const CATS = [
  { id: "industry", label: "Industries", icon: IndustryIcon },
  { id: "hospital", label: "Hospital", icon: HospitalIcon },
  { id: "education", label: "Education", icon: EducationIcon },
  { id: "realestate", label: "Real Estate", icon: RealEstateIcon },
  { id: "hotel", label: "Hotel", icon: HotelIcon },
];

const DEFAULT_LOCATIONS = ["Raipur", "Naya Raipur", "VIP Road", "Tatibandh", "Bhilai", "Dhamtari Road"];
const AREA_CHIPS = ["0.5–1 acre", "1–2 acres", "2–5 acres", "5+ acres"];
const BUDGET_CHIPS = ["< ₹50L", "₹50L–₹1Cr", "₹1–₹3Cr", "₹3–₹5Cr", "₹5Cr+"];

// Light golden accents (no gradients)
const GOLD = {
  ring: "ring-amber-300/70",
  chip: "bg-amber-300 text-neutral-900 ring-amber-300/60",
  btn: "bg-amber-300 text-neutral-900 ring-amber-300/60 hover:bg-amber-200",
};

export default function CategoriesSection({ onApply }) {
  const [selected, setSelected] = useState(null); // category id
  const [filters, setFilters] = useState({});     // per-category filters
  const current = selected ? filters[selected] || {} : {};

  const setCur = (up) =>
    setFilters((f) => ({
      ...f,
      [selected]: { ...(f[selected] || {}), ...up },
    }));

  const toggleArray = (arr = [], v) => (arr?.includes(v) ? arr.filter((x) => x !== v) : [...(arr || []), v]);

  const onClear = () =>
    setCur({ locations: [], areaChip: "", minArea: "", maxArea: "", budgetChip: "", minBudget: "", maxBudget: "", customLoc: "" });

  const apply = () => {
    const payload = { category: selected, ...(filters[selected] || {}) };
    if (typeof onApply === "function") onApply(payload);
    // console.log("Applied filters:", payload);
  };

  // Summary tags below filters
  const summary = (() => {
    if (!selected) return [];
    const tags = [];
    if (current.locations?.length) current.locations.forEach((l) => tags.push({ type: "loc", value: l }));
    if (current.areaChip) tags.push({ type: "areaChip", value: current.areaChip });
    if (current.minArea || current.maxArea) tags.push({ type: "area", value: `${current.minArea || "0"}–${current.maxArea || "∞"} acre` });
    if (current.budgetChip) tags.push({ type: "budgetChip", value: current.budgetChip });
    if (current.minBudget || current.maxBudget) tags.push({ type: "budget", value: `₹${current.minBudget || "0"}–₹${current.maxBudget || "∞"}` });
    return tags;
  })();

  const removeTag = (t) => {
    if (!selected) return;
    if (t.type === "loc") setCur({ locations: toggleArray(current.locations, t.value) });
    if (t.type === "areaChip") setCur({ areaChip: "" });
    if (t.type === "area") setCur({ minArea: "", maxArea: "" });
    if (t.type === "budgetChip") setCur({ budgetChip: "" });
    if (t.type === "budget") setCur({ minBudget: "", maxBudget: "" });
  };

  return (
    <section id="categories" className="relative bg-neutral-950 text-neutral-100 py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Centered heading with subtle highlight */}
        <header className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Browse by <span className="text-amber-300">Category</span>
          </h2>
          <p className="text-neutral-400 mt-1">Pick a category and refine by Location, Area and Budget.</p>
          <div className="mx-auto mt-3 h-[3px] w-24 bg-amber-300/80 rounded-full" />
        </header>

        {/* Category cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 justify-center">
          {CATS.map(({ id, label, icon: Icon }) => {
            const isActive = selected === id;
            return (
              <button
                type="button"
                key={id}
                onClick={() => setSelected((s) => (s === id ? null : id))}
                className={`group relative flex items-center gap-3 rounded-xl bg-neutral-900/90 px-4 py-3 ring-1 transition ${
                  isActive ? `${GOLD.ring} shadow-[0_10px_30px_-12px_rgba(251,191,36,.6)]` : "ring-white/10 hover:ring-white/20"
                }`}
              >
                <span className={`grid h-9 w-9 place-items-center rounded-lg ring-1 ${isActive ? GOLD.ring : "ring-white/10"} bg-white/5`}>
                  <Icon className={`${isActive ? "text-amber-300" : "text-neutral-300"} h-5 w-5`} />
                </span>
                <span className={`text-sm font-semibold ${isActive ? "text-white" : "text-neutral-200"}`}>{label}</span>
                <span
                  className={`ml-auto h-6 w-6 grid place-items-center rounded-md text-xs ring-1 ${
                    isActive ? GOLD.ring : "ring-white/10 text-neutral-400"
                  }`}
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter panel */}
        <div className={`transition-all duration-300 overflow-hidden ${selected ? "mt-6 max-h-[1200px]" : "max-h-0"}`} aria-hidden={!selected}>
          {selected && (
            <div className="rounded-2xl bg-neutral-900 ring-1 ring-white/10 p-4 md:p-6 mt-4">
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${GOLD.chip}`}>
                  {CATS.find((c) => c.id === selected)?.label}
                </span>
                {/* <span className="text-sm text-neutral-400">Filters</span> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Locations */}
                <div>
                  <h3 className="text-sm font-semibold text-white">Location</h3>
                  <p className="text-xs text-neutral-400">Choose popular localities or add your own.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {DEFAULT_LOCATIONS.map((loc) => {
                      const active = (current.locations || []).includes(loc);
                      return (
                        <button
                          type="button"
                          key={loc}
                          onClick={() => setCur({ locations: toggleArray(current.locations, loc) })}
                          className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                            active ? GOLD.chip : "bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/10"
                          }`}
                        >
                          {loc}
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add custom location"
                      value={current.customLoc || ""}
                      onChange={(e) => setCur({ customLoc: e.target.value })}
                      className="w-full rounded-lg bg-neutral-900 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const val = (current.customLoc || "").trim();
                        if (!val) return;
                        setCur({ locations: toggleArray(current.locations, val), customLoc: "" });
                      }}
                      className={`rounded-lg px-3 py-2 text-sm ring-1 ${GOLD.btn}`}
                    >
                      Add
                    </button>
                  </div>
                </div>

                {/* Area */}
                <div>
                  <h3 className="text-sm font-semibold text-white">Area</h3>
                  <p className="text-xs text-neutral-400">Pick a quick range or enter custom.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {AREA_CHIPS.map((chip) => (
                      <button
                        type="button"
                        key={chip}
                        onClick={() => setCur({ areaChip: current.areaChip === chip ? "" : chip })}
                        className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                          current.areaChip === chip ? GOLD.chip : "bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/10"
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="Min (acre)"
                      value={current.minArea || ""}
                      onChange={(e) => setCur({ minArea: e.target.value })}
                      className="rounded-lg bg-neutral-900 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
                    />
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="Max (acre)"
                      value={current.maxArea || ""}
                      onChange={(e) => setCur({ maxArea: e.target.value })}
                      className="rounded-lg bg-neutral-900 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <h3 className="text-sm font-semibold text-white">Budget</h3>
                  <p className="text-xs text-neutral-400">Select a bracket or set limits.</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {BUDGET_CHIPS.map((chip) => (
                      <button
                        type="button"
                        key={chip}
                        onClick={() => setCur({ budgetChip: current.budgetChip === chip ? "" : chip })}
                        className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                          current.budgetChip === chip ? GOLD.chip : "bg-white/5 text-neutral-200 ring-white/10 hover:bg-white/10"
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      min="0"
                      placeholder="Min (₹)"
                      value={current.minBudget || ""}
                      onChange={(e) => setCur({ minBudget: e.target.value })}
                      className="rounded-lg bg-neutral-900 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
                    />
                    <input
                      type="number"
                      min="0"
                      placeholder="Max (₹)"
                      value={current.maxBudget || ""}
                      onChange={(e) => setCur({ maxBudget: e.target.value })}
                      className="rounded-lg bg-neutral-900 border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
                    />
                  </div>
                </div>
              </div>

              {/* Selected summary tags */}
              {summary.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2 justify-center md:justify-start">
                  {summary.map((t, i) => (
                    <span
                      key={`${t.type}-${t.value}-${i}`}
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ${GOLD.chip}`}
                    >
                      {t.value}
                      <button
                        type="button"
                        onClick={() => removeTag(t)}
                        className="ml-1 h-5 w-5 grid place-items-center rounded-full bg-black/10 text-neutral-900 hover:bg-black/20"
                        aria-label="Remove"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={onClear}
                  className="rounded-lg px-4 py-2 text-sm text-neutral-100 ring-1 ring-white/10 bg-white/5 hover:bg-white/10"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={apply}
                  className={`rounded-lg px-5 py-2 text-sm font-semibold ring-1 ${GOLD.btn}`}
                >
                  Show results
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- Icons (inline SVGs) ---------- */
function IndustryIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21V9l6 4V9l6 4V9l6 4v8H3Z" />
      <path d="M7 21v-3M11 21v-6M15 21v-4M19 21v-2" />
    </svg>
  );
}
function HospitalIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 7v6M9 10h6" />
    </svg>
  );
}
function EducationIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M13 11v6l-1 1-1-1v-6" />
      <path d="M21 8v5" />
    </svg>
  );
}
function RealEstateIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function HotelIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 21V8a2 2 0 012-2h14a2 2 0 012 2v13" />
      <path d="M7 12h10M7 9h10M7 15h6" />
    </svg>
  );
}