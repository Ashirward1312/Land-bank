"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 👉 Yahan apne 4 hospital images ka actual path lagao
import H1Img from "../../images/H1.jpeg";
import H2Img from "../../images/H2.jpeg";
import H3Img from "../../images/H3.jpeg";
import H4Img from "../../images/H4.jpeg";
const GOLD = {
  soft: "#F3D98E",
  base: "#D4AF37",
  ring: "rgba(212,175,55,.60)",
  glow: "rgba(212,175,55,.45)",
};

// ----------- PRICE FORMAT (Approx ₹12 Cr) -----------
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

/* -------------------- HOSPITAL DATA -------------------- */
const HOSPITAL_LIST = [
  {
    id: "pachpedi-naka-tower",
    title: "Prime Hospital / Medical Tower – Pachpedi Naka",
    city: "Raipur",
    location: "Pachpedi Naka, Raipur (Next to Ganeshi Hospital)",
    price: 120000000, // ₹12 Cr
    images: [H1Img, H2Img, H3Img, H4Img], // 4 slider images

    plotSizeSqft: 8800,
    areaAcre: 0.2,
    plotDimensions: "57 ft x 150 ft",
    liftArea: "8 ft x 8 ft",
    frontParking: "57 ft x 20 ft",
    backGarden: "57 ft x 16 ft",

    approvals:
      "Ground floor parking, first floor commercial map passed, upper floors residential map passed.",
    structure:
      "Very heavy RCC structure. Tower complete up to 4th floor, provision to add 4 more floors in future.",
    usage:
      "Ideal for hospital / medical tower with commercial space at lower level and residential floors above.",
    status: "Ready structure – 4 floors complete; prime main road location.",
  },
];

/* -------------------- FILTER LOGIC -------------------- */
function applyHospitalFilters(list, filters = {}) {
  if (!filters || Object.keys(filters).length === 0) return list;

  const {
    category,
    locations = [],
    minArea,
    maxArea,
    minBudget,
    maxBudget,
  } = filters;

  return list.filter((item) => {
    if (category && category !== "hospital") return false;

    if (locations.length) {
      const locStr = `${item.location || ""} ${item.city || ""}`.toLowerCase();
      const match = locations.some((l) =>
        locStr.includes(String(l).toLowerCase())
      );
      if (!match) return false;
    }

    const area = item.areaAcre || 0;
    if (minArea && area < Number(minArea)) return false;
    if (maxArea && area > Number(maxArea)) return false;

    if (minBudget && item.price < Number(minBudget)) return false;
    if (maxBudget && item.price > Number(maxBudget)) return false;

    return true;
  });
}

/* -------------------- SLIDER (same size jaisa land) -------------------- */

function HospitalSlider({ images = [] }) {
  const [current, setCurrent] = useState(0);
  if (!images.length) return null;

  const total = images.length;
  const goNext = () => setCurrent((c) => (c + 1) % total);
  const goPrev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(goNext, 6000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return (
    <div className="space-y-3">
      {/* Main image (16:9 slider – land jaisa) */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/10">
        <div className="relative w-full aspect-[16/9]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hospital view ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                }`}
              loading="lazy"
              decoding="async"
            />
          ))}

          {/* Top-left tag */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-neutral-100 ring-1 ring-white/20">
              Hospital • Raipur
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-semibold text-black ring-1 ring-emerald-300/80">
              Medical Tower
            </span>
          </div>

          {/* Arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-neutral-100 hover:bg-black/85 transition"
              >
                <span className="text-lg">‹</span>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-black/65 text-neutral-100 hover:bg-black/85 transition"
              >
                <span className="text-lg">›</span>
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all ${i === current ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Thumbnails */}
      {total > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`relative flex-shrink-0 overflow-hidden rounded-xl border ${index === current
                  ? "border-white ring-2 ring-white/80"
                  : "border-white/15"
                }`}
            >
              <div className="h-16 w-24 md:h-18 md:w-28 lg:h-20 lg:w-32">
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
/* -------------------- COMPONENT -------------------- */
export default function HospitalListings({ filters }) {
  const navigate = useNavigate();
  const hospitals = applyHospitalFilters(HOSPITAL_LIST, filters);

  if (!hospitals.length) {
    return (
      <section className="bg-neutral-950 text-neutral-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <p className="text-center text-neutral-400 text-sm">
            No hospital listings match the selected filters right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-neutral-950 text-neutral-100 pt-24 pb-14 md:pt-28 md:pb-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.2) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Back button (same style as land) */}
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

        {hospitals.map((h) => {
          const imagesArray =
            Array.isArray(h.images) && h.images.length > 0
              ? h.images
              : h.image
                ? [h.image]
                : [];

          return (
            <article
              key={h.id}
              className="rounded-3xl bg-neutral-900/95 ring-1 ring-white/10 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              {/* Top glow line */}
              <div
                className="h-[3px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${GOLD.base}, ${GOLD.soft}, transparent)`,
                }}
              />

              <div className="p-5 md:p-7 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Left: Slider (same size jaisa land) */}
                <div className="lg:w-[60%]">
                  <HospitalSlider images={imagesArray} />
                </div>

                {/* Right: Details */}
                <div className="lg:w-[40%] flex flex-col gap-5">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-neutral-100 ring-1 ring-white/10">
                        Hospital • Raipur
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-semibold text-black ring-1 ring-emerald-300/80">
                        Medical Tower
                      </span>
                    </div>

                    <h1 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                      {h.title}
                    </h1>

                    <span
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-bold whitespace-nowrap"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                        color: "#111",
                        boxShadow: `0 4px 18px -4px ${GOLD.glow}`,
                      }}
                    >
                      {formatINR(h.price)}
                    </span>

                    <p className="text-neutral-300 text-sm mt-2">
                      {h.location} {h.city ? `• ${h.city}` : ""}
                    </p>

                    {/* Quick facts */}
                    <ul className="mt-1 space-y-1.5 text-sm text-neutral-200">
                      <li>
                        <strong className="text-neutral-100">Plot size:</strong>{" "}
                        {h.plotSizeSqft} sq.ft
                      </li>
                      <li>
                        <strong className="text-neutral-100">Area:</strong>{" "}
                        {h.areaAcre} acre ({h.plotDimensions})
                      </li>
                      <li>
                        <strong className="text-neutral-100">Lift:</strong>{" "}
                        {h.liftArea}
                      </li>
                      <li>
                        <strong className="text-neutral-100">Parking:</strong>{" "}
                        {h.frontParking}
                      </li>
                    </ul>

                    {h.structure && (
                      <p className="text-[14px] text-neutral-300">
                        <strong className="text-neutral-100">Structure:</strong>{" "}
                        {h.structure}
                      </p>
                    )}

                    {h.usage && (
                      <p className="text-[14px] text-neutral-300">
                        <strong className="text-neutral-100">Ideal use:</strong>{" "}
                        {h.usage}
                      </p>
                    )}
                  </div>

                  {/* Status + CTA */}
                  <div className="mt-2 flex flex-col gap-3">
                    {h.status && (
                      <p className="text-[14px] text-emerald-400 font-semibold">
                        {h.status}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href="/#contact"
                        className="inline-flex items-center justify-center rounded-full
                                   px-6 py-2.5 text-sm font-semibold
                                   shadow-md shadow-black/40 ring-1
                                   transition-all
                                   hover:shadow-black/70 hover:-translate-y-[1px]
                                   focus-visible:outline-none
                                   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        style={{
                          background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                          color: "#111",
                          borderColor: GOLD.ring,
                          boxShadow: `0 12px 28px -14px ${GOLD.glow}`,
                        }}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}