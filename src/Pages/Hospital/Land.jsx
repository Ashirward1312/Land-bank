"use client";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 👉 Apne 4 land images ke actual path
import L1Img from "../../images/Land 1.jpeg";
import L2Img from "../../images/Land 2.jpeg";
import L3Img from "../../images/Land 3.jpeg";
import L4Img from "../../images/Land 4.jpeg";

const GOLD = {
  soft: "#F3D98E",
  base: "#D4AF37",
  ring: "rgba(212,175,55,.60)",
  glow: "rgba(212,175,55,.45)",
};

/* -------------------- LAND DATA (1 PROPERTY WITH 4 SLIDER IMAGES) -------------------- */
const LAND_PROPERTIES = [
  {
    id: "prime-land-raipur",
    title: "Premium Land Parcel – Near Raipur",
    city: "Raipur",
    priceLabel: "Price on request",
    status: "Clear-title land parcel, ideal for farmhouse / plotting / investment.",
    locationText: "Near Raipur – connected to key growth corridor.",
    images: [L1Img, L2Img, L3Img, L4Img],
  },
];

/* -------------------- HERO SLIDER -------------------- */

function HeroSlider({ images = [] }) {
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
      {/* Main image (fade slider) */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/10">
        <div className="relative w-full aspect-[16/9]">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Land view ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              decoding="async"
            />
          ))}

          {/* Top-left tag */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-neutral-100 ring-1 ring-white/20">
              Land • Near Raipur
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-2.5 py-1 text-[10px] font-semibold text-black ring-1 ring-emerald-300/80">
              Open Green Parcel
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
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? "w-5 bg-white" : "w-2 bg-white/50"
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
              className={`relative flex-shrink-0 overflow-hidden rounded-xl border ${
                index === current
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

export default function LandListings() {
  const navigate = useNavigate();
  const properties = LAND_PROPERTIES;

  if (!properties.length) {
    return (
      <section className="bg-neutral-950 text-neutral-100 pt-24 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <p className="text-center text-neutral-400 text-sm">
            No land listings near Raipur are available right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-neutral-950 text-neutral-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* Background aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(52,211,153,0.20) 0%, rgba(0,0,0,0) 70%)",
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

        {properties.map((prop) => (
          <article
            key={prop.id}
            className="rounded-3xl bg-gradient-to-br from-emerald-500/15 via-emerald-300/5 to-emerald-500/10 p-[1.7px] shadow-[0_24px_80px_-40px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            <div className="rounded-[1.4rem] bg-neutral-900/95 ring-1 ring-white/10 overflow-hidden">
              {/* Top glow line */}
              <div
                className="h-[3px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${GOLD.base}, ${GOLD.soft}, transparent)`,
                }}
              />

              <div className="p-5 md:p-7 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Left: Slider */}
                <div className="lg:w-[60%]">
                  <HeroSlider images={prop.images} />
                </div>

                {/* Right: Details */}
                <div className="lg:w-[40%] flex flex-col gap-5">
                  {/* Title + tags + price on request */}
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold text-neutral-100 ring-1 ring-white/10">
                        Land • Near Raipur
                      </span>
                      <span className="inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-[11px] font-semibold text-black ring-1 ring-emerald-300/80">
                        Ideal for Investment
                      </span>
                    </div>

                    <h1 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                      {prop.title}
                    </h1>

                    {/* Price pill: Price on request */}
                    <span
                      className="inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-bold whitespace-nowrap"
                      style={{
                        background: `linear-gradient(135deg, ${GOLD.soft}, ${GOLD.base} 70%)`,
                        color: "#111",
                        boxShadow: `0 4px 18px -4px ${GOLD.glow}`,
                      }}
                    >
                      {prop.priceLabel || "Price on request"}
                    </span>

                    {/* Near Raipur line */}
                    <p className="text-neutral-300 text-sm mt-2">
                      {prop.locationText ||
                        "Near Raipur – open, clear-title land parcel in a developing growth belt."}
                    </p>

                    {/* Meta bullets to fill space */}
                    <ul className="mt-1 space-y-1.5 text-sm text-neutral-200">
                      <li className="flex gap-2">
                        <span className="mt-[4px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>Near Raipur growth corridor with good road access.</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-[4px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                        <span>
                          Suitable for farmhouse, plotting or long-term land banking.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Status + CTA */}
                  <div className="mt-2 flex flex-col gap-3">
                    {prop.status && (
                      <p className="text-[14px] text-emerald-400 font-semibold">
                        {prop.status}
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

                      <span className="text-xs text-neutral-400">
                        Share your budget & use case, we’ll plan the best land option
                        for you near Raipur.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}