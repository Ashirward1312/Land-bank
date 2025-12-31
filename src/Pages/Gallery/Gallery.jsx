"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  ArrowRight,
  ArrowLeft,
  Play,
  Sparkles,
} from "lucide-react";

import reel1 from "../../images/e1.png";
import reel2 from "../../images/e2.png";

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft light gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

const REELS = [
  {
    id: "reel1",
    url: "https://www.instagram.com/reel/DRt1i8jCKZN/",
    image: reel1,
    tag: "PRADEEP MAHESHWARI",
  },
  {
    id: "reel2",
    url: "https://www.instagram.com/reel/DR6RkTzCEku/",
    image: reel2,
    tag: "PRADEEP MAHESHWARI",
  },
];

export default function InstaReelsSection() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full bg-black pt-20 sm:pt-24 pb-10 sm:pb-14 overflow-hidden"
    >
      {/* Gold aura */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(250,204,21,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Top Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 rounded-full
                       border border-white/15 bg-black/70
                       px-3.5 py-1.5
                       text-[10px] sm:text-[11px]
                       font-medium uppercase tracking-[0.2em]
                       text-slate-200 backdrop-blur-sm
                       transition-all
                       hover:bg-black/90 hover:border-white/40
                       active:scale-95"
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full
                         bg-white/10 text-slate-200 shadow-sm
                         transition-colors
                         group-hover:bg-white group-hover:text-black"
            >
              <ArrowLeft className="h-3 w-3" />
            </span>
            <span>Back</span>
          </button>
        </div>

        {/* Main card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-950/95 via-black to-slate-950/95 ring-1 ring-white/10 shadow-[0_22px_70px_rgba(0,0,0,0.95)] px-4 py-5 sm:px-6 sm:py-7">
          {/* Small top chip */}
          <div className="mb-5 flex items-center justify-between gap-3">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "rgba(15,23,42,0.9)",
                border: `1px solid ${BRAND.ring}`,
                color: BRAND.soft,
              }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#facc15]" />
              Instagram Reels
            </span>

            <span className="hidden sm:inline-flex text-[10px] text-slate-400 uppercase tracking-[0.18em]">
              Learn • Real Estate • Mindset
            </span>
          </div>

         

          {/* Reels Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {REELS.map((reel, i) => (
              <a
                key={reel.id}
                href={reel.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl border bg-neutral-950/70 transition-all duration-300
                    ${i === 0 ? "sm:translate-y-0" : "sm:translate-y-1"}
                    hover:-translate-y-[3px] hover:border-[#fde68a]/80 hover:shadow-[0_20px_55px_rgba(0,0,0,0.85)]`}
                  style={{ borderColor: "rgba(148,163,184,0.6)" }}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[9/12] overflow-hidden">
                    <img
                      src={reel.image}
                      alt="Instagram Reel"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/10" />

                    {/* Tag */}
                    <span
                      className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-[7px] sm:text-[8px] font-bold uppercase text-black"
                      style={{ backgroundColor: BRAND.base }}
                    >
                      {reel.tag}
                    </span>

                    {/* Bottom label + Play */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-200">
                        Watch on Instagram
                      </span>
                      <div
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full flex items-center justify-center shadow-xl
                                    opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
                          boxShadow: `0 10px 26px ${BRAND.glow}`,
                        }}
                      >
                        <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-black ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="mt-5 text-center text-[12px] sm:text[13px] text-slate-400">
            <Sparkles
              className="inline-block h-4 w-4 mr-1.5"
              style={{ color: BRAND.base }}
            />
            Discover more – full podcasts on YouTube and daily updates on{" "}
            <span className="text-slate-100 font-medium">Instagram</span>.
          </p>

          {/* Bottom: Instagram CTA */}
          <div className="mt-6 flex justify-center sm:justify-end">
            <a
              href="https://www.instagram.com/maheshventures"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5
                         text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em]
                         shadow-lg ring-1 border transition"
              style={{
                background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
                boxShadow: `0 10px 24px ${BRAND.glow}`,
                borderColor: BRAND.soft,
                color: "#111827",
              }}
            >
              <Instagram className="h-3.5 w-3.5" />
              <span>Follow us on Instagram</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}