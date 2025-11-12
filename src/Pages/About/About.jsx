"use client";
import React from "react";

export default function About() {
  // Premium Gold palettes
  const PALETTE = {
    gold: {
      soft: "#F3D98E",
      base: "#D4AF37",
      light: "#FFE29A",
      ring: "rgba(212,175,55,.50)",
      glow: "rgba(212,175,55,.45)",
      grid: "rgba(212,175,55,.035)",
      mesh1: "rgba(212,175,55,.10)",
      mesh2: "rgba(230,199,102,.08)",
    },
    lightGold: {
      soft: "#FFE29A",
      base: "#F7D27D",
      light: "#FFF0BD",
      ring: "rgba(255,226,154,.55)",
      glow: "rgba(255,226,154,.45)",
      grid: "rgba(255,226,154,.035)",
      mesh1: "rgba(255,226,154,.10)",
      mesh2: "rgba(247,210,125,.08)",
    },
  };

  // Pick your palette
  const BRAND = PALETTE.gold; // change to PALETTE.lightGold for lighter gold

  return (
    <section
      className="relative text-neutral-100 py-14"
      id="about"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(to right, ${BRAND.grid} 1px, transparent 1px),
          linear-gradient(to bottom, ${BRAND.grid} 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    >
      {/* soft gold radial glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(600px 280px at 15% 10%, ${BRAND.mesh1}, transparent 60%),
            radial-gradient(600px 280px at 85% 85%, ${BRAND.mesh2}, transparent 65%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Heading (center) */}
        <header className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            About{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              Land Bank
            </span>
          </h2>
          <p className="mt-1 text-neutral-400">
            Only land. Only plots. A focused platform to discover verified land in and around Raipur.
          </p>
          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
              boxShadow: `0 8px 22px -8px ${BRAND.glow}`,
            }}
          />
        </header>

        {/* Content */}
        <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left text */}
          <div>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs ring-1"
              style={{
                backgroundColor: `${BRAND.soft}14`,
                borderColor: `${BRAND.ring}`,
              }}
            >
              Raipur‑first • Owner‑listed • Verified
            </span>

            <h3 className="mt-4 text-2xl md:text-3xl font-bold">
              A better way to buy and sell plots
            </h3>
            <p className="mt-3 text-neutral-300">
              Land Bank is built just for land/plots—no buildings, no distractions. We bring verified owners,
              neat listings, and simple filters so you quickly find plots for Industries, Hospitals, Education,
              Real Estate, and Hotels.
            </p>

            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">Verified owner & basic KYC for trust</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">Smart filters: Location, Area, Budget</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">Category‑focused browsing (Industry, Hospital, Education, Real Estate, Hotel)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">Clean experience with quick response and site‑visit coordination</span>
              </li>
            </ul>
          </div>

          {/* Right image collage (Pexels) */}
          <div className="relative h-[320px] md:h-[420px]">
            {/* soft golden glow */}
            <div
              className="absolute -top-8 -left-6 h-40 w-40 rounded-full blur-3xl"
              style={{ background: `${BRAND.base}33` }}
            />
            <div
              className="absolute bottom-0 right-0 h-40 w-40 rounded-full blur-3xl"
              style={{ background: `${BRAND.soft}33` }}
            />

            <div className="absolute left-0 top-0 w-[68%] md:w-[58%] h-[58%] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900">
              <img
                src="https://images.pexels.com/photos/21230507/pexels-photo-21230507.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Open land"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="absolute right-0 top-8 w-[58%] md:w-[52%] h-[50%] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900">
              <img
                src="https://images.pexels.com/photos/1081889/pexels-photo-1081889.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Green farmland"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            <div className="absolute left-8 bottom-0 w-[62%] md:w-[56%] h-[52%] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900">
              <img
                src="https://images.pexels.com/photos/34443257/pexels-photo-34443257.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Golden fields"
                className="h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat count="1.2k+" label="Active plots" color={BRAND} />
          <Stat count="95%" label="Owner verified" color={BRAND} />
          <Stat count="24h" label="Avg. response" color={BRAND} />
          <Stat count="40+" label="Localities covered" color={BRAND} />
        </div>
      </div>
    </section>
  );
}

/* Small components */
function Stat({ count, label, color }) {
  return (
    <div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-center">
      <div
        className="text-2xl font-extrabold"
        style={{
          backgroundImage: `linear-gradient(135deg, ${color.soft}, ${color.base} 70%)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: `0 10px 24px ${color.glow}`,
        }}
      >
        {count}
      </div>
      <div className="text-sm text-neutral-400">{label}</div>
    </div>
  );
}

function Check({ className = "", color = "#D4AF37" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      style={{ filter: "drop-shadow(0 6px 14px rgba(212,175,55,.35))" }}
    >
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}