"use client";
import React from "react";

export default function About() {
  return (
    <section className="relative bg-neutral-950 text-neutral-100 py-14" id="about">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Heading (center) */}
        <header className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            About <span className="text-amber-300">Land Bank</span>
          </h2>
          <p className="mt-1 text-neutral-400">
            Only land. Only plots. A focused platform to discover verified land in and around Raipur.
          </p>
          <div className="mx-auto mt-3 h-[3px] w-24 bg-amber-300/80 rounded-full" />
        </header>

        {/* Content */}
        <div className="mt-8 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left text */}
          <div>
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs bg-white/5 ring-1 ring-white/10">
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
                <Check className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-neutral-200">Verified owner & basic KYC for trust</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-neutral-200">Smart filters: Location, Area, Budget</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-neutral-200">Category‑focused browsing (Industry, Hospital, Education, Real Estate, Hotel)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-0.5 h-5 w-5 text-amber-300" />
                <span className="text-neutral-200">Clean experience with quick response and site‑visit coordination</span>
              </li>
            </ul>
          </div>

          {/* Right image collage (Pexels) */}
          <div className="relative h-[320px] md:h-[420px]">
            {/* soft golden glow */}
            <div className="absolute -top-8 -left-6 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl" />

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
          <Stat count="1.2k+" label="Active plots" />
          <Stat count="95%" label="Owner verified" />
          <Stat count="24h" label="Avg. response" />
          <Stat count="40+" label="Localities covered" />
        </div>
      </div>
    </section>
  );
}

/* Small components */
function Stat({ count, label }) {
  return (
    <div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4 text-center">
      <div className="text-2xl font-extrabold text-amber-300">{count}</div>
      <div className="text-sm text-neutral-400">{label}</div>
    </div>
  );
}

function Check({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}