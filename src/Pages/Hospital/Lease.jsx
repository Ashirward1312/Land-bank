"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  IndianRupee,
  MapPin,
  Ruler,
  Building2,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import img from "../../images/lease.png"; // <-- yahan apni land-on-lease image ka sahi path/naam lagao

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const properties = [
  {
    id: "saddu",
    title: "Saddu",
    tag: "Lease on Lease",
    location: "Saddu",
    area: "1,40,000 sq.ft",
    front: "240 ft front",
    rateLabel: "Rate",
    rate: "₹20 / sq.ft",
  },
  {
    id: "tatibandh",
    title: "TatiBandh",
    tag: "Lease on Lease",
    location: "TatiBandh",
    area: "40,000 sq.ft",
    front: "140 ft front",
    rateLabel: "Rate",
    rate: "₹15 / sq.ft",
  },
  {
    id: "shejbahar",
    title: "Shejbahar",
    tag: "Lease on Lease",
    location: "Shejbahar",
    area: "1,00,000 sq.ft",
    rateLabel: "Rent",
    rate: "₹10 / sq.ft",
  },
  {
    id: "ivy-hotel",
    title: "Near IVY Hotel (G+4)",
    tag: "Lease on Lease",
    location: "Near IVY Hotel",
    area: "30,000 sq.ft total",
    basement: "Basement 7,000 sq.ft",
    floors: "6,000 sq.ft each floor (G+4)",
  },
  {
    id: "tagore-nagar",
    title: "Tagore Nagar (G+3)",
    tag: "Lease on Lease",
    location: "Tagore Nagar",
    area: "2,090 sq.ft carpet per floor",
    floors: "G+3 (2,090 sq.ft each floor)",
  },
  {
    id: "vip-road-1-5-acre",
    title: "VIP Road – 1 to 5 Acre Land",
    tag: "Lease on Lease",
    location: "VIP Road, Raipur",
    area: "1 to 5 acre",
  },
  {
    id: "vidhansabha-1-acre-plus",
    title: "Vidhan Sabha – 1 Acre & Above",
    tag: "Lease on Lease",
    location: "Near Vidhan Sabha, Raipur",
    area: "1 acre & above",
  },
  {
  id: "ring-road-no-4-2-6-acres",
  title: "Ring Road No. 4 – 2 to 6 Acres",
  tag: "Lease on Lease",
  location: "Ring Road No. 4, Raipur",
  area: "2–6 acres",
},

];

export default function LandOnLease() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-slate-100 pt-24 pb-16 md:pt-28.md:pb-20">
      {/* Gold aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
    <button
                    type="button"
                    onClick={() => navigate("/", { state: { scrollTo: "categories" } })}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 text-xs md:text-sm font-medium text-slate-200 hover:bg-black/90 hover:border-white/40 transition"
                >
                    <span className="text-base md:text-lg">←</span>
                    <span>BACK TO CATEGORIES
                    </span>
                </button>


        {/* Header */}
        <motion.header
          variants={stagger}
          initial="hidden"
          animate="show"
          className="space-y-4 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{
              border: `1px solid ${BRAND.soft}`,
              background: `linear-gradient(90deg, rgba(250,204,21,0.07), rgba(253,230,138,0.18))`,
              color: BRAND.soft,
            }}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#facc15]" />
            Lease on Lease Inventory
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]"
          >
            LAND{" "}
            <span
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND.soft}, ${BRAND.base})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ON LEASE
            </span>
          </motion.h1>
        </motion.header>

        {/* Simple center image (smaller) */}
        <div className="mb-8 flex justify-center">
          <img
            src={img}
            alt="Land on lease and lease-on-lease opportunities"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl object-cover"
          />
        </div>

        {/* Property Cards */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {properties.map((p, idx) => (
            <PropertyCard key={p.id} index={idx} {...p} />
          ))}
        </motion.section>
      </div>
    </section>
  );
}

/* CARD COMPONENT */

function PropertyCard({
  index,
  title,
  type,
  tag,
  location,
  area,
  front,
  rateLabel,
  rate,
  basement,
  floors,
}) {
  const displayType = type || "Land / Plot";

  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950/90 via-black to-black p-5 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-[#fde68a]/80 hover:shadow-[0_24px_70px_rgba(0,0,0,0.95)] sm:p-6"
    >
      {/* Top glow line */}
      <div
        className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
        }}
      />

      
      {/* Badges */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <div
          className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{
            border: `1px solid ${BRAND.soft}`,
            background: `linear-gradient(90deg, rgba(250,204,21,0.09), rgba(253,230,138,0.16))`,
            color: BRAND.soft,
          }}
        >
          {tag}
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-300">
          <Building2 className="h-3.5 w-3.5 text-[#facc15]" />
          {displayType}
        </div>
      </div>

      {/* Header */}
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-neutral-50 sm:text-lg">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 sm:text-[13px]">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-1 text-[11px] text-neutral-200">
            <MapPin className="h-3.5 w-3.5 text-[#facc15]" />
            {location}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 grid gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/90 p-3.5 text-xs text-neutral-200 sm:grid-cols-3 sm:text-[13px]">
        {area && (
          <StatItem
            icon={<Ruler className="h-4 w-4 text-[#facc15]" />}
            label="Area"
            value={area}
          />
        )}

        {front && (
          <StatItem
            icon={<MapPin className="h-4 w-4 text-[#facc15]" />}
            label="Front"
            value={front}
          />
        )}

        {rate && (
          <StatItem
            icon={<IndianRupee className="h-4 w-4 text-[#facc15]" />}
            label={rateLabel || "Rate"}
            value={rate}
          />
        )}

        {basement && (
          <StatItem
            icon={<Layers className="h-4 w-4 text-[#facc15]" />}
            label="Basement"
            value={basement}
          />
        )}

        {floors && (
          <StatItem
            icon={<Layers className="h-4 w-4 text-[#facc15]" />}
            label="Floors"
            value={floors}
          />
        )}
      </div>

      {/* CTA – right aligned */}
      <div className="mt-4 flex justify-end">
        <a
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.03] ring-1 border"
          style={{
            background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
            boxShadow: `0 10px 30px ${BRAND.glow}`,
            borderColor: BRAND.soft,
          }}
        >
          Enquire
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

/* SMALL COMPONENT */

function StatItem({ icon, label, value }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
        {icon}
        {label}
      </div>
      <p className="text-sm font-semibold text-neutral-50">{value}</p>
    </div>
  );
}