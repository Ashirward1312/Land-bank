"use client";
import React, { useState } from "react";

export default function Services() {
  // Gold tokens (premium)
  const GOLD = {
    soft: "#F3D98E", // light gold highlight
    base: "#D4AF37", // metallic gold
    light: "#FFE29A", // lighter gold (hover accent)
    ring: "rgba(212,175,55,.55)",
    glow: "rgba(212,175,55,.45)",
  };

  const LIGHT_GOLD = {
    soft: "#FFE29A",
    base: "#F7D27D",
    light: "#FFF0BD",
    ring: "rgba(255,226,154,.6)",
    glow: "rgba(255,226,154,.45)",
  };

  const BRAND = GOLD;

  const SERVICES = [
    {
      id: "listing",
      title: "OWNER LISTING",
      icon: ListingIcon,
      summary:
        "List your plot with complete details and get direct buyer leads.",
      points: [
        "High‑visibility listing with photos & location",
        "Lead delivery via call/WhatsApp/email",
        "Duplicate and spam lead control",
      ],
    },
    {
      id: "verification",
      title: "VERIFICATION & KYC",
      icon: ShieldIcon,
      summary: "We verify ownership and documents for buyer confidence.",
      points: [
        "Owner KYC + ownership check",
        "Basic encumbrance review",
        "Verified badge on listing",
      ],
    },
    {
      id: "sitevisit",
      title: "SITE VISIT COORDINATION",
      icon: MapPinIcon,
      summary: "Managed site visits with qualified buyers only.",
      points: [
        "Pre‑screened, scheduled visits",
        "Live navigation pin + check‑in",
        "Visit notes & feedback",
      ],
    },
    {
      id: "legal",
      title: "LEGAL & DUE DILIGENCE",
      icon: ScaleIcon,
      summary: "From search reports to sale deed—handled by experts.",
      points: [
        "Title search & document review",
        "Layout/RERA/compliance check",
        "Agreement to Sale & Sale Deed draft",
      ],
    },
    {
      id: "marketing",
      title: "PREMIUM MARKETING",
      icon: MegaphoneIcon,
      summary: "Stand out with spotlight placements and pro creatives.",
      points: [
        "Homepage/category spotlight",
        "Drone photoshoot (add‑on)",
        "Targeted buyer campaigns",
      ],
    },
    {
      id: "closing",
      title: "NEGOTIATION SUPPORT",
      icon: HandshakeIcon,
      summary: "Guided support from offer to registry and handover.",
      points: [
        "Offer structuring & counter‑offer guidance",
        "Smooth coordination between buyer & seller",
        "Support till token, registration & final handover",
      ],
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <main className="bg-neutral-950 text-neutral-100" id="services">
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 py-12">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight uppercase">
            OUR{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              SERVICES
            </span>
          </h1>
          <p className="text-neutral-400 mt-1">
            Everything you need to list, verify, promote and close plot deals.
          </p>
          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
              boxShadow: `0 8px 22px -8px ${BRAND.glow}`,
            }}
          />
        </header>

        <div className="grid items-start sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            const isOpen = open === s.id;

            return (
              <article
                key={s.id}
                className={`self-start rounded-2xl bg-neutral-900/90 ring-1 ring-white/10 p-5 transition ${
                  isOpen
                    ? `shadow-[0_12px_30px_-12px_rgba(212,175,55,.55)]`
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                      boxShadow: `0 6px 18px -6px ${BRAND.glow}`,
                      border: `1px solid ${BRAND.ring}`,
                    }}
                  >
                    <Icon className="h-5 w-5 text-black" />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold uppercase">
                      {s.title}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      {s.summary}
                    </p>
                  </div>
                </div>

                <div
                  id={`${s.id}-details`}
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-4 max-h-[240px]" : "max-h-0"
                  }`}
                >
                  <ul className="list-disc list-inside text-sm text-neutral-200 space-y-2 pl-1">
                    {s.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <button
                    onClick={() => setOpen(isOpen ? null : s.id)}
                    className="text-sm"
                    style={{ color: BRAND.soft }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = BRAND.light)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = BRAND.soft)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`${s.id}-details`}
                  >
                    {isOpen ? "HIDE DETAILS" : "VIEW DETAILS"}
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-900 ring-1 transition active:scale-[.99] uppercase"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                      boxShadow: `0 10px 24px ${BRAND.glow}`,
                      borderColor: BRAND.ring,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.filter = "brightness(1.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.filter = "brightness(1.0)")
                    }
                  >
                    ENQUIRE NOW
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

/* ---------- Icons (inline SVGs) ---------- */
function ListingIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h6" />
    </svg>
  );
}
function ShieldIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 3l7 3v6a10 10 0 01-7 9 10 10 0 01-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function MapPinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
function ScaleIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 3v18M3 7h18" />
      <path d="M6 7l-3 6h6l-3-6zM18 7l-3 6h6l-3-6z" />
    </svg>
  );
}
function MegaphoneIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M3 11v2l11 5V6L3 11z" />
      <path d="M14 10h7M14 14h5" />
      <path d="M6 16l2 4" />
    </svg>
  );
}
function HandshakeIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      stroke="currentColor"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M3 9l4-4h4l2 2h3l5 5" />
      <path d="M9 11l3 3 3-3" />
      <path d="M8 14l-2 2" />
      <path d="M16 14l2 2" />
    </svg>
  );
}