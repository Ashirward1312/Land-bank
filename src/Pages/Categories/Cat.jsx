"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Factory as FactoryIcon,
  Hospital as HospitalIcon,
  GraduationCap as GraduationCapIcon,
  Building as BuildingIcon,
  Gem as GemIcon,
  ShoppingBag as ShoppingBagIcon,
  Trees as TreesIcon,
  Hotel as HotelIcon,
  Boxes as BoxesIcon,
  FerrisWheel as FerrisWheelIcon,
  LineChart as LineChartIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MapPin as MapPinIcon, // Land on Lease
  Home as HomeIcon, // Premium Farm House
} from "lucide-react";

const CATS = [
  { id: "bestbuy", label: "Best Buy", icon: FactoryIcon },

  { id: "jointventures", label: "Joint Ventures", icon: FactoryIcon },

  { id: "hospital", label: "Hospital", icon: HospitalIcon },
  { id: "education", label: "Education", icon: GraduationCapIcon },

  { id: "residential", label: "Residential Real Estate", icon: BuildingIcon },
  { id: "commercial", label: "Commercial Real Estate", icon: BuildingIcon },

  { id: "luxuryplots", label: "Premium Luxury Plots", icon: GemIcon },

  { id: "farmhouse", label: "Premium Farm House", icon: HomeIcon },

  { id: "malls", label: "Malls", icon: ShoppingBagIcon },

  {
    id: "resortswedding",
    label: "Resorts / Wedding Lawns",
    icon: TreesIcon,
  },

  { id: "warehouse", label: "Ware House", icon: BoxesIcon },

  { id: "lease", label: "Land on Lease", icon: MapPinIcon },

  { id: "invest-land", label: "Land / Plot Investment", icon: LineChartIcon },

  { id: "landplot", label: "Land/Plot", icon: LineChartIcon },

  { id: "others", label: "Others", icon: MoreHorizontalIcon },
];

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft light gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.50)",
};

export default function CategoriesSection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleCategoryClick = (id) => {
    if (id === "bestbuy") return navigate("/bestbuy");
    if (id === "jointventures") return navigate("/jointventures");
    if (id === "hospital") return navigate("/hospital");
    if (id === "education") return navigate("/education");
    if (id === "residential") return navigate("/residential");
    if (id === "commercial") return navigate("/commercial");
    if (id === "landplot" || id === "luxuryplots") return navigate("/land");
    if (id === "malls") return navigate("/malls");
    if (id === "resortswedding") return navigate("/resorts-wedding");
    if (id === "farmhouse") return navigate("/farmhouse");
    if (id === "warehouse") return navigate("/warehouse");
    if (id === "invest-realestate") return navigate("/commercial");
    if (id === "invest-land") return navigate("/land-investment");
    if (id === "lease") return navigate("/lease");
    if (id === "others") return navigate("/others");

    setSelected((s) => (s === id ? null : id));
  };

  return (
    <section
      id="categories"
      className="relative bg-black text-slate-100 py-12 sm:py-16"
    >
      {/* Gold aura (same as other sections) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight uppercase">
            Browse by{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              Category
            </span>
          </h2>

          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
            }}
          />
        </header>

        {/* Category grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 justify-center">
          {CATS.map(({ id, label, icon: Icon }) => {
            const isActive = selected === id;
            return (
              <button
                type="button"
                key={id}
                onClick={() => handleCategoryClick(id)}
                className="group relative flex items-center gap-3 rounded-xl bg-slate-900/90 px-4 py-3 ring-1 ring-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.85)] transition hover:bg-slate-900 hover:ring-[#fde68a]/80 cursor-pointer"
                style={
                  isActive
                    ? {
                        boxShadow: `0 0 0 1px ${BRAND.ring}, 0 12px 28px ${BRAND.glow}`,
                      }
                    : undefined
                }
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-lg ring-1 bg-white/5 ring-slate-700/70 transition"
                  style={
                    isActive
                      ? {
                          boxShadow: `0 0 0 1px ${BRAND.ring}`,
                          background:
                            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.16), transparent 60%)",
                        }
                      : undefined
                  }
                >
                  <Icon
                    className="h-5 w-5 transition-colors duration-200"
                    style={{
                      // soft gold when normal, brighter gold + glow when active
                      color: isActive ? BRAND.base : BRAND.soft,
                      filter: isActive
                        ? `drop-shadow(0 0 6px ${BRAND.glow})`
                        : "none",
                    }}
                  />
                </span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: isActive ? "#ffffff" : "#e5e7eb" }}
                >
                  {label}
                </span>
                <span
                  className="ml-auto h-6 w-6 grid place-items-center rounded-md text-xs ring-1 bg-slate-950/90 transition"
                  style={{
                    borderColor: "rgba(148,163,184,0.6)",
                    boxShadow: isActive ? `0 0 0 1px ${BRAND.ring}` : undefined,
                    color: isActive ? "#ffffff" : BRAND.base,
                  }}
                >
                  {isActive ? "−" : "+"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}