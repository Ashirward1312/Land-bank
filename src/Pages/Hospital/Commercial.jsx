"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../images/commercial.png"; // <-- yahan apni commercial building ki image ka sahi path/naam lagao

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- COMMERCIAL DATA (NO IMAGES) -------------------- */

const COMMERCIAL_OPTIONS = [
  // {
  //   id: "vidhan-sabha",
  //   area: "Institutional Belt",
  //   title: "Commercial Spaces – Near Vidhan Sabha",
  //   location: "Vidhan Sabha Road, Raipur",
  //   size: "Approx 400 to 15,000 sq.ft (shops & offices)",
  //   note: "Institutional corridor – good for clinics, offices and showrooms.",
  // },
  // {
  //   id: "shankar-nagar",
  //   area: "Premium Residential Belt",
  //   title: "Commercial Spaces – Near Shankar Nagar",
  //   location: "Near Shankar Nagar, Raipur",
  //   size: "10,000 sq.ft & Above (shops & offices)",
  //   note: "Strong residential catchment – ideal for everyday retail and services.",
  // },
  // {
  //   id: "kamal-vihar-400-15000",
  //   area: "Kamal Vihar Planning Area",
  //   title: "Commercial Spaces – Near Kamal Vihar",
  //   location: "Near Kamal Vihar, Raipur",
  //   size: "Approx 400 to 15,000 sq.ft commercial spaces",
  //   note: "Suitable for showrooms, mid-size offices and commercial blocks in a developing zone.",
  // },

  // NEW ONES
  {
    id: "persulidih-7000",
    area: "Persulidih",
    title: "7000 sq.ft Commercial Land – Persulidih",
    location: "Persulidih, Raipur",
    size: "Approx 7,000 sq.ft land",
    note: "",
  },
  {
    id: "pandri-3500",
    area: "Pandri",
    title: "3500 sq.ft Commercial Space – Pandri",
    location: "Pandri, Raipur",
    size: "Approx 3,500 sq.ft",
    note: "",
  },
  {
    id: "devpuri-express-1acre",
    area: "Devpuri / Express Highway",
    title:
      "1 Acre Commercial Land – Near Express Highway, Devpuri Dhamtari Road",
    location: "Near Express Highway, Devpuri Dhamtari Road, Raipur",
    size: "Approx 1 acre land",
    note: "",
  },
  {
    id: "60000",
    area: "Near Bhatagaon",
    title: "20,000 – 25,000 sq.ft Hospital Project – Near Bhatagaon",
    location: "Near Bhatagaon, Raipur",
    size: "Approx 20,000 to 25,000 sq.ft construction potential, ideal for hospital use",
    note: "",
  },

  // Magneto / VIP / Tatibandh / Pachpedi – rent or sale
  // {
  //   id: "magneto-mall",
  //   area: "Magneto Belt",
  //   title: "Commercial Spaces – Near Magneto Mall",
  //   location: "Near Magneto Mall, Raipur",
  //   size: "Various commercial sizes • Rent / Sale available",
  //   note: "High footfall zone with strong brand visibility potential.",
  // },
  // {
  //   id: "vip-chowk",
  //   area: "VIP Corridor",
  //   title: "Commercial Spaces – VIP Chowk",
  //   location: "VIP Chowk area, Raipur",
  //   size: "Various commercial sizes • Rent / Sale available",
  //   note: "Airport-side connectivity – ideal for corporate and high-end retail.",
  // },
  // {
  //   id: "tatibandh",
  //   area: "Transport / Commercial Hub",
  //   title: "Commercial Spaces – Tatibandh",
  //   location: "Tatibandh, Raipur",
  //   size: "Various commercial sizes • Rent / Sale available",
  //   note: "Good for logistics offices, showrooms and commercial godowns.",
  // },
  // {
  //   id: "pachpedi-naka",
  //   area: "Hospital / Mixed Use Belt",
  //   title: "Commercial Spaces – Pachpedi Naka",
  //   location: "Pachpedi Naka, Raipur",
  //   size: "Various commercial sizes • Rent / Sale available",
  //   note: "Surrounded by hospitals and dense residential pockets – suitable for medical & support retail.",
  // },

  // Towers / complexes
  // {
  //   id: "at-tiara",
  //   area: "Premium Commercial Tower",
  //   title: "AT TIARA – Offices & Retail",
  //   location: "AT Tiara, Raipur",
  //   size: "Office & retail units – sizes as per requirement",
  //   note: "Premium commercial tower – also available on rent and for sale. Price on request.",
  // },
  // {
  //   id: "humming-sanjeeva-promenade",
  //   area: "Premium Commercial Promenade",
  //   title: "HUMMING SANJEEVA PROMENADE – Commercial Spaces",
  //   location: "Humming Sanjeeva Promenade, Raipur",
  //   size: "Commercial units – multiple sizes • Rent / Sale",
  //   note: "Modern promenade – suitable for showrooms, restaurants and branded outlets.",
  // },
  // {
  //   id: "vb-tower",
  //   area: "Premium Tower",
  //   title: "VB TOWER – Offices & Showrooms",
  //   location: "VB Tower, Raipur",
  //   size: "Office / showroom spaces – sizes as per layout",
  //   note: "High-visibility tower – also available for investment, rent and sale. Price on request.",
  // },
  // {
  //   id: "anand-arcade",
  //   area: "Established Commercial Complex",
  //   title: "ANAND ARCADE – Commercial Spaces",
  //   location: "Anand Arcade, Raipur",
  //   size: "Shops & offices – sizes as per requirement",
  //   note: "Established commercial complex – spaces available on rent as well as for sale.",
  // },
];

/* -------------------- MAIN COMPONENT -------------------- */

export default function CommercialListings({ filters }) {
  const navigate = useNavigate();

  const properties =
    !filters || !filters.category || filters.category === "commercial"
      ? COMMERCIAL_OPTIONS
      : [];

  if (!properties.length) {
    return (
      <section className="relative bg-black text-slate-100 pt-24 pb-10 md:pt-28 md:pb-12">
        {/* Gold aura */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-center text-slate-400 text-sm">
            No commercial listings in Raipur match the selected filters right
            now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-black text-slate-100 pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Gold aura */}
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
        <header className="mb-6 text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            COMMERCIAL LAND FOR - OFFICES • SHOPS • TOWERS
          </p>
        </header>

        {/* Simple center image (smaller) */}
        <div className="mb-8 flex justify-center">
          <img
            src={img}
            alt="Commercial offices and shops in Raipur"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl object-cover"
          />
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {properties.map((prop) => (
            <article
              key={prop.id}
              className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden"
            >
              {/* Top gradient line */}
              <div
                className="absolute inset-x-0 top-0 h-[3px] opacity-90"
                style={{
                  background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
                }}
              />

              <div className="p-5 md:px-6 space-y-4 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold">
                  <span
                    className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border"
                    style={{ borderColor: BRAND.soft }}
                  >
                    Commercial • Raipur
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-slate-100 border border-white/15">
                    {prop.area}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
                      borderColor: BRAND.soft,
                    }}
                  >
                    Rent &amp; Sale Available
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-black text-[11px] font-semibold shadow-sm border"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.base}, ${BRAND.soft})`,
                      borderColor: BRAND.soft,
                    }}
                  >
                    Price on Request
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    {prop.title}
                  </h2>
              
                </div>

                {/* Simple details */}
                <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
                    KEY DETAILS
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">
                      Location:
                    </span>{" "}
                    {prop.location}
                  </p>
                  <p className="text-sm text-slate-300">
                    <span className="font-semibold text-slate-100">Size:</span>{" "}
                    {prop.size}
                  </p>
                  {prop.note && (
                    <p className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-100">
                        Note:
                      </span>{" "}
                      {prop.note}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-xs text-slate-400 sm:flex-1">
                    Share your size, budget and preferred micro‑market – we&apos;ll
                    share exact units, floor options and detailed{" "}
                    <span className="font-semibold text-slate-100">
                      rent / sale • Price on Request
                    </span>{" "}
                    proposals for these commercial spaces.
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
                    ENQUIRE COMMERCIAL
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}