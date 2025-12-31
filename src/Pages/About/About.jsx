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

  const BRAND = PALETTE.gold;

  const mainHeadingGradient = {
    backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, #ffffff)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

  const subHeadingGradient = {
    backgroundImage: `linear-gradient(135deg, ${BRAND.base}, #ffffff)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };

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
        style={{
          background: `
            radial-gradient(600px 280px at 15% 10%, ${BRAND.mesh1}, transparent 60%),
            radial-gradient(600px 280px at 85% 85%, ${BRAND.mesh2}, transparent 65%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Heading */}
        <header className="text-center">
          <h2
            className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase"
            style={mainHeadingGradient}
          >
            ABOUT LAND BAZAR
          </h2>
          <p className="mt-1 text-neutral-400">
            Only land. Only plots. A focused platform to discover verified land
            in and around Raipur.
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
              Raipur-first • Owner-listed • Verified
            </span>

            <h3
              className="mt-4 text-2xl md:text-3xl font-bold uppercase"
              style={subHeadingGradient}
            >
              A BETTER WAY TO BUY AND SELL PLOTS
            </h3>

            <p className="mt-3 text-neutral-300">
              Land Bazar is built just for land/plots—no buildings, no
              distractions. We bring verified owners, neat listings, and simple
              filters so you quickly find plots for Industries, Hospitals,
              Education, Real Estate, and Hotels.
            </p>

            <ul className="mt-5 space-y-2">
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">
                  Verified owner & basic KYC for trust
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">
                  Smart filters: Location, Area, Budget
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">
                  Category-focused browsing
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5" color={BRAND.base} />
                <span className="text-neutral-200">
                  Clean experience with quick response & site-visit coordination
                </span>
              </li>
            </ul>
          </div>

          {/* Right side — Circular Image */}
          <div className="relative h-[320px] md:h-[420px] flex items-center justify-center">
            {/* soft background aura */}
            <div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: `
                  radial-gradient(520px 260px at 20% 0%, ${BRAND.mesh1}, transparent 65%),
                  radial-gradient(520px 260px at 90% 100%, ${BRAND.mesh2}, transparent 65%)
                `,
              }}
            />

            <div className="relative w-full max-w-sm mx-auto">
              {/* core circular card */}
              <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto group">
                {/* outer glow ring */}
                <div
                  className="absolute inset-[-18%] rounded-full opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-90"
                  style={{
                    background: `conic-gradient(from 220deg, ${BRAND.base}33, transparent, ${BRAND.soft}33, transparent, ${BRAND.base}33)`,
                  }}
                />

                {/* spinning dashed ring */}
                <div
                  className="pointer-events-none absolute inset-[-10%] rounded-full border border-dashed border-amber-200/70 animate-spin"
                  style={{
                    animationDuration: "18s",
                    boxShadow: `0 0 30px ${BRAND.glow}`,
                  }}
                />

                {/* gradient circular border */}
                <div
                  className="relative h-full w-full rounded-full p-[2px] shadow-[0_22px_60px_rgba(0,0,0,.9)] transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.02]"
                  style={{
                    background: `conic-gradient(from 160deg, ${BRAND.base}, ${BRAND.soft}, #ffffff, ${BRAND.base})`,
                  }}
                >
                  <div className="relative h-full w-full rounded-full overflow-hidden bg-neutral-900">
                    <img
                      src="https://images.pexels.com/photos/8332322/pexels-photo-8332322.jpeg"
                      alt="Curated land"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                    />

                    {/* grid overlay */}
                    <div
                      className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-80"
                      style={{
                        backgroundImage: `
                          linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: "26px 26px",
                      }}
                    />

                    {/* subtle vignette */}
                    <div
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `
                          radial-gradient(circle at 30% 10%, rgba(255,255,255,0.35), transparent 45%),
                          radial-gradient(circle at 80% 90%, rgba(0,0,0,0.65), transparent 55%)
                        `,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat count="1.2k+" label="ACTIVE PLOTS" color={BRAND} />
          <Stat count="95%" label="OWNER VERIFIED" color={BRAND} />
          <Stat count="24h" label="AVG. RESPONSE" color={BRAND} />
          <Stat count="40+" label="LOCALITIES COVERED" color={BRAND} />
        </div>
      </div>
    </section>
  );
}

/* Stats Component */
function Stat({ count, label, color }) {
  return (
    <div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-center">
      <div
        className="text-2xl font-extrabold"
        style={{
          backgroundImage: `linear-gradient(135deg, ${color.soft}, #ffffff)`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: `0 10px 24px ${color.glow}`,
        }}
      >
        {count}
      </div>
      <div className="text-sm text-neutral-400 uppercase">{label}</div>
    </div>
  );
}

/* Check Icon */
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
