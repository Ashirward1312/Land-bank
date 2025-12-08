"use client";
import React from "react";
import { useNavigate } from "react-router-dom";

import R1Img from "../../images/VB9.jpeg";
import R2Img from "../../images/VB10.jpeg";
import R3Img from "../../images/VB11.jpeg";
import R4Img from "../../images/VB12.png";

const GOLD = {
  soft: "#F3D98E",
  base: "#D4AF37",
  ring: "rgba(212,175,55,.60)",
  glow: "rgba(212,175,55,.45)",
};

// ---------- PRICE FORMAT (Approx ₹X Cr) ----------
function formatINR(val) {
  if (!val) return "Price on request";

  const crore = val / 10000000;
  if (crore >= 1) {
    return `Approx ₹${crore.toFixed(1)} Cr`;
  }

  return `Approx ${new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val)}`;
}

/* -------------------- RESIDENTIAL DATA (4 CARDS) -------------------- */
const RESIDENTIAL_PROPERTIES = [
  {
    id: "res1",
    title: "Premium Residential Apartments – Raipur",
    city: "Raipur",
    image: R1Img,
  },
  {
    id: "res2",
    title: "Premium Residential Apartments – Raipur",
    city: "Raipur",
    image: R2Img,
  },
  {
    id: "res3",
    title: "Premium Residential Apartments – Raipur",
    city: "Raipur",
    image: R3Img,
  },
  {
    id: "res4",
    title: "Premium Residential Apartments – Raipur",
    city: "Raipur",
    image: R4Img,
  },
];

/* -------------------- FILTER LOGIC (optional) -------------------- */
function applyResidentialFilters(list, filters = {}) {
  if (!filters || Object.keys(filters).length === 0) return list;

  const { category, locations = [], minBudget, maxBudget } = filters;

  return list.filter((item) => {
    if (category && category !== "residential") return false;

    if (locations.length) {
      const locStr = `${item.city || ""}`.toLowerCase();
      const match = locations.some((l) =>
        locStr.includes(String(l).toLowerCase())
      );
      if (!match) return false;
    }

    // price optional hai, isliye safely skip ho jayega
    if (minBudget && item.price < Number(minBudget)) return false;
    if (maxBudget && item.price > Number(maxBudget)) return false;

    return true;
  });
}

/* -------------------- COMPONENT -------------------- */

export default function ResidentialListings({ filters }) {
  const navigate = useNavigate();
  const properties = applyResidentialFilters(RESIDENTIAL_PROPERTIES, filters);

  if (!properties.length) {
    return (
      <section className="bg-neutral-950 text-neutral-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <p className="text-center text-neutral-400 text-sm">
            No residential listings in Raipur match the selected filters right
            now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-neutral-950 text-neutral-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Subtle background aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.18) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-neutral-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Heading */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
              }}
            >
              Residential Properties in Raipur
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 mt-2">
            Handpicked premium residences – designed for comfort, lifestyle and
            long‑term value in Raipur.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((prop, index) => (
            <article
              key={prop.id}
              className="group relative rounded-3xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-[1.6px] shadow-[0_22px_60px_-30px_rgba(0,0,0,0.9)] hover:shadow-[0_26px_80px_-40px_rgba(0,0,0,1)] transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: `0 24px 70px -40px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)`,
              }}
            >
              {/* Inner card */}
              <div className="h-full rounded-[1.35rem] bg-neutral-900/95 ring-1 ring-white/10 overflow-hidden flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* gradient overlay bottom */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Top-left tag */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-neutral-100 ring-1 ring-white/20">
                      Residential • Raipur
                    </span>
                    <span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold text-neutral-200 ring-1 ring-white/15">
                      Premium Living
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-[17px] md:text-[18px] text-white leading-tight line-clamp-2">
                        {prop.title}
                      </h3>
                      <p className="text-neutral-300 text-xs md:text-[13px] mt-1">
                        Available in Raipur – your dream residential address.
                      </p>
                    </div>

                    {/* Price pill – yahan price nahi diya to "Price on request" dikhega */}
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11px] md:text-[12px] font-bold whitespace-nowrap flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                        color: "#111",
                        boxShadow: `0 4px 14px -4px ${GOLD.glow}`,
                      }}
                    >
                      {formatINR(prop.price)}
                    </span>
                  </div>

                  {/* Small meta line */}
                  <div className="flex items-center gap-2 text-[11px] md:text-xs text-neutral-400">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Gated community • Modern elevation • In Raipur</span>
                  </div>

                  {/* CTA row */}
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-emerald-400 font-semibold">
                        Limited premium inventory available.
                      </span>
                      <span className="text-[11px] text-neutral-400">
                        Share your requirement, we’ll show you the right
                        options.
                      </span>
                    </div>

                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-full
                                 px-4 py-2 text-[11px] md:text-xs font-semibold
                                 shadow-md shadow-black/40 ring-1
                                 transition-all
                                 hover:shadow-black/70 hover:-translate-y-[1px]
                                 focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                        color: "#111",
                        borderColor: GOLD.ring,
                        boxShadow: `0 10px 24px -12px ${GOLD.glow}`,
                      }}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              {/* top-left subtle index badge (optional) */}
              <div className="absolute -top-3 right-5 hidden sm:flex h-7 w-7 items-center justify-center rounded-full bg-black/80 text-[11px] text-neutral-200 ring-1 ring-white/20">
                {index + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}