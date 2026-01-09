"use client";
import React from "react";
import { useNavigate } from "react-router-dom"; // 👈 Added for programmatic navigation

const BRAND = {
  base: "#facc15",   // Rich Gold
  soft: "#fde68a",   // Soft Light Gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

/* -------------------- PROJECT LANDS DATA -------------------- */

// const PROJECT_LANDS = [
//   {
//     id: "avanti-vihar-1-2lakh",
//     city: "Raipur",
//     title: "Residential Project Land – Near Avanti Vihar",
//     location: "Near Avanti Vihar, Raipur",
//     size: "Approx. 100,000 – 200,000 sq ft (1–2 lakh sq ft)",
//     zoning: "Residential project land",
//     highlights:
//       "Suitable for mid to large-scale residential projects such as apartments, gated community or group housing, subject to approvals.",
//   },
//   {
//     id: "ring-road-4-4acres",
//     city: "Raipur",
//     title: "4 Acre Mixed-Use Land – Near Ring Road No. 4",
//     location: "Near Ring Road No. 4, Raipur",
//     size: "Approx. 4 acres",
//     zoning: "Residential / Commercial (mixed-use potential)",
//     highlights:
//       "Strategic frontage near Ring Road No. 4 – suitable for mixed-use development with residential and commercial components, as per planning.",
//   },
//   {
//     id: "vw-canyon-1-1_5lakh",
//     city: "Raipur",
//     title: "Project Land – Near VW Canyon",
//     location: "Near VW Canyon, Raipur",
//     size: "Approx. 100,000 – 150,000 sq ft (1–1.5 lakh sq ft)",
//     zoning: "Residential / project development",
//     highlights:
//       "Good sized project land suitable for residential or plotted development, depending on the project concept and approvals.",
//   },
//   {
//     id: "raj-bhawan-10000",
//     city: "Raipur",
//     title: "Prime City Plot – Near Raj Bhawan & Ghadi Chowk",
//     location: "Near Raj Bhawan & Ghadi Chowk, Raipur city core",
//     size: "Approx. 10,000 sq ft",
//     zoning: "Residential / Commercial (city core usage)",
//     highlights:
//       "Premium city-centre location ideal for boutique residential, office, clinic or small commercial building, subject to town planning norms.",
//   },
//   {
//     id: "saddu-15-20acres",
//     city: "Raipur",
//     title: "15–20 Acre Township Land – Near Saddu",
//     location: "Near Saddu, Raipur",
//     size: "Approx. 15–20 acres",
//     zoning: "Township / large residential project land",
//     highlights:
//       "Large contiguous land parcel suitable for township, plotted development or group housing, as per approvals and project vision.",
//   },
//   {
//     id: "magneto-arang-12-20acres",
//     city: "Raipur",
//     title: "12–20 Acre Project Land – Near Magneto Mall, Arang Road",
//     location: "Near Magneto Mall, Arang Road, Raipur",
//     size: "Approx. 12–20 acres (flexible configuration)",
//     zoning: "Residential / Commercial / Mixed-use potential",
//     highlights:
//       "High visibility corridor near Magneto Mall and Arang Road – suitable for mixed-use, residential or commercial projects, subject to zoning.",
//   },
//   {
//     id: "shadani-darbar-56000",
//     city: "Raipur",
//     title: "Project Land – Near Shadani Darbar",
//     location: "Near Shadani Darbar, Raipur",
//     size: "Approx. 56,000 sq ft",
//     zoning: "Residential / Institutional / Commercial (as permitted)",
//     highlights:
//       "Well-sized project land near a prominent landmark, suitable for residential, institutional or commercial use as per sanctioned permissions.",
//   },
// ];
const PROJECT_LANDS = [
  /* -------------------- EXISTING (UNCHANGED) -------------------- */

  {
    id: "avanti-vihar-1-2lakh",
    city: "Raipur",
    title: "Residential Project Land – Near Avanti Vihar",
    location: "Near Avanti Vihar, Raipur",
    size: "Approx. 100,000 – 200,000 sq ft (1–2 lakh sq ft)",
    highlights:
      "Suitable for mid to large-scale residential projects such as apartments, gated community or group housing, subject to approvals.",
  },

  {
    id: "ring-road-4-4acres",
    city: "Raipur",
    title: "4 Acre Mixed-Use Land – Near Ring Road No. 4",
    location: "Near Ring Road No. 4, Raipur",
    size: "Approx. 4 acres",
    highlights:
      "Strategic frontage near Ring Road No. 4 – suitable for mixed-use development with residential and commercial components, as per planning.",
  },

  {
    id: "vw-canyon-1-1_5lakh",
    city: "Raipur",
    title: "Project Land – Near VW Canyon",
    location: "Near VW Canyon, Raipur",
    size: "Approx. 100,000 – 150,000 sq ft (1–1.5 lakh sq ft)",
    highlights:
      "Good sized project land suitable for residential or plotted development, depending on the project concept and approvals.",
  },

  {
    id: "raj-bhawan-10000",
    city: "Raipur",
    title: "Prime City Plot – Near Raj Bhawan & Ghadi Chowk",
    location: "Near Raj Bhawan & Ghadi Chowk, Raipur city core",
    size: "Approx. 10,000 sq ft",
    highlights:
      "Premium city-centre location ideal for boutique residential, office, clinic or small commercial building, subject to town planning norms.",
  },

  {
    id: "saddu-15-20acres",
    city: "Raipur",
    title: "15–20 Acre Township Land – Near Saddu",
    location: "Near Saddu, Raipur",
    size: "Approx. 15–20 acres",
    highlights:
      "Large contiguous land parcel suitable for township, plotted development or group housing, as per approvals and project vision.",
  },

  {
    id: "magneto-arang-12-20acres",
    city: "Raipur",
    title: "12–20 Acre Project Land – Near Magneto Mall, Arang Road",
    location: "Near Magneto Mall, Arang Road, Raipur",
    size: "Approx. 12–20 acres (flexible configuration)",
    highlights:
      "High visibility corridor near Magneto Mall and Arang Road – suitable for mixed-use, residential or commercial projects, subject to zoning.",
  },

  {
    id: "shadani-darbar-56000",
    city: "Raipur",
    title: "Project Land – Near Shadani Darbar",
    location: "Near Shadani Darbar, Raipur",
    size: "Approx. 56,000 sq ft",
    highlights:
      "Well-sized project land near a prominent landmark, suitable for residential, institutional or commercial use as per sanctioned permissions.",
  },

  /* -------------------- NEWLY ADDED -------------------- */

  {
    id: "vidhan-sabha-3-6acres",
    city: "Raipur",
    title: "3–6 Acre Project Land – Near Vidhan Sabha",
    location: "Near Vidhan Sabha, Raipur",
    size: "Approx. 3–6 acres",
    highlights:
      "Prime Vidhan Sabha belt location suitable for residential projects, institutional use or premium development, subject to approvals.",
  },

  {
    id: "rasni-arang-10-20acres",
    city: "Raipur",
    title: "10–20 Acre Project Land – Rasni, Arang Road",
    location: "Near Rasni, Arang Road, Raipur",
    size: "Approx. 10–20 acres",
    highlights:
      "Large continuous land parcel near Arang Road suitable for township, plotted or large residential projects as per planning norms.",
  },

  {
    id: "saddu-parsulidih-10-20acres",
    city: "Raipur",
    title: "10–20 Acre Project Land – Near Saddu / Parsulidih",
    location: "Near Saddu – Parsulidih belt, Raipur",
    size: "Approx. 10–20 acres",
    highlights:
      "Emerging development belt suitable for large residential layouts, township or plotted development, subject to approvals.",
  },

  {
    id: "kachna-5-10acres",
    city: "Raipur",
    title: "5–10 Acre Project Land – Kachna",
    location: "Kachna, Raipur",
    size: "Approx. 5–10 acres",
    highlights:
      "Well-located Kachna land suitable for mid-size residential projects or premium plotted development.",
  },

  {
    id: "vip-chowk-currency-tower-2-4acres",
    city: "Raipur",
    title: "2–4 Acre Prime Land – Near Currency Tower, VIP Chowk",
    location: "Near Currency Tower, VIP Chowk, Raipur",
    size: "Approx. 2–4 acres",
    highlights:
      "High-demand VIP Chowk location ideal for commercial, mixed-use or premium real estate development, subject to zoning.",
  },

  {
    id: "ghadi-chowk-10k-20k",
    city: "Raipur",
    title: "10,000–20,000 Sq Ft City Core Land – Near Ghadi Chowk",
    location: "Near Ghadi Chowk, Raipur",
    size: "Approx. 10,000–20,000 sq ft",
    highlights:
      "Compact city-core land parcel suitable for commercial building, office, clinic or boutique development.",
  },

  {
    id: "sarona-10-20acres",
    city: "Raipur",
    title: "10–20 Acre Project Land – Sarona",
    location: "Sarona, Raipur",
    size: "Approx. 10–20 acres",
    highlights:
      "Large land parcel in Sarona suitable for township, plotted or large-scale residential development, subject to approvals.",
  },
];

/* -------------------- CARD COMPONENT -------------------- */

function ProjectLandCard({ item, index }) {
  const { city, title, location, size, zoning, highlights } = item;

  return (
    <article className="group relative flex flex-col rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950 to-black ring-1 ring-white/10 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)] hover:ring-[#fde68a]/80 hover:shadow-[0_30px_90px_-45px_rgba(0,0,0,1)] hover:-translate-y-[2px] transition-all duration-200 overflow-hidden">
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[3px] opacity-80 z-10" // 👈 Added z-index
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      {/* Option badge — now properly layered */}
      <div
        className="absolute right-4 top-4 z-20 rounded-full bg-black/80 px-3 py-1 text-[11px] font-semibold text-slate-200 border backdrop-blur-sm" // 👈 Added z-20 + backdrop
        style={{ borderColor: BRAND.soft }}
      >
        OPTION {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-5 md:p-6 space-y-4 flex-1 flex flex-col">
        {/* Tags — now with higher z-index */}
        <div className="flex flex-wrap gap-2 text-[11px] font-semibold z-10 relative"> {/* 👈 Added z-10 + relative */}
          <span
            className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border backdrop-blur-sm"
            style={{ borderColor: BRAND.soft }}
          >
            PROJECT LAND • {city}
          </span>

          {zoning && (
            <span
              className="rounded-full bg-black/80 px-3 py-1 text-slate-100 border backdrop-blur-sm"
              style={{ borderColor: BRAND.soft }}
            >
              {zoning}
            </span>
          )}
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h2 className="text-lg md:text-xl font-bold text-white leading-snug uppercase">
            {title}
          </h2>
        </div>

        {/* Details box */}
        <div className="mt-1 rounded-2xl border border-white/5 bg-black/50 px-3 py-3 space-y-1.5">
          <p className="text-xs text-slate-400 uppercase tracking-[0.16em]">
            KEY DETAILS
          </p>

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Location:</span>{" "}
            {location}
          </p>

          <p className="text-sm text-slate-300">
            <span className="font-semibold text-slate-100">Land Size:</span>{" "}
            {size}
          </p>

          {zoning && (
            <p className="text-sm text-slate-300">
              <span className="font-semibold text-slate-100">
                Zoning / Use:
              </span>{" "}
              {zoning}
            </p>
          )}

          {highlights && (
            <p className="text-xs text-slate-400 pt-1 border-t border-white/5 mt-2">
              {highlights}
            </p>
          )}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 px-5 md:px-6 py-4 bg-black/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-xs text-slate-400 sm:flex-1">
            Share your project requirement and profile – we will share ownership
            details, town planning status and commercial terms for suitable
            project lands.
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
            ENQUIRE NOW
          </a>
        </div>
      </div>
    </article>
  );
}

/* -------------------- MAIN COMPONENT -------------------- */

export default function ProjectsListings() {
  const navigate = useNavigate(); // 👈 Initialize navigate

  // 👇 Handle Back button click — scroll to #categories on homepage
  const handleBackClick = () => {
    navigate("/", { state: { scrollTo: "categories" } });
  };

  return (
    <section className="relative bg-black text-slate-100 pt-24 pb-14 md:pt-28 md:pb-16">
      {/* GOLDEN AURA */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Back button — FIXED with programmatic navigation */}
        <div className="mb-6">
          <button
            type="button"
            onClick={handleBackClick}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
          >
            <span className="text-base md:text-lg">←</span>
            <span>BACK TO CATEGORIES</span>
          </button>
        </div>

        {/* Heading */}
        <header className="mb-8 space-y-3 text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em]"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            PROJECT LANDS • RESIDENTIAL • COMMERCIAL
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight uppercase">
            KEY PROJECT LAND OPTIONS 
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Curated{" "}
            <span className="font-semibold text-slate-100">
              residential, commercial and mixed-use project lands
            </span>{" "}
            in and around Raipur – suitable for developers, builders and
            investors planning structured projects, subject to due diligence and
            statutory approvals.
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECT_LANDS.map((item, index) => (
            <ProjectLandCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}