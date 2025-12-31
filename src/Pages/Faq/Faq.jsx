"use client";
import React, { useState } from "react";

export default function FaqSection() {
  // Premium gold palette (consistent with the rest of your site)
  const BRAND = {
    base: "#D4AF37",
    soft: "#F3D98E",
    ring: "rgba(212,175,55,.55)",
    glow: "rgba(212,175,55,.45)",
  };

  const faqs = [
    {
      q: "What can I list on Land Bazar?",
      a: "Only land/plots. We do not list constructed properties like apartments, villas, or shops.",
    },
    {
      q: "How do I list my plot?",
      a: "Click “List Plot”, add location, area, category (Industries / Hospital / Education / Real Estate / Hotel), price and photos. Our team reviews and publishes quickly.",
    },
    {
      q: "Is owner verification required?",
      a: "It’s highly recommended. Basic KYC + ownership proof gives a Verified badge, which improves trust and conversions.",
    },
    {
      q: "Which categories are supported?",
      a: "Industries, Hospital, Education, Real Estate and Hotel. You can filter listings by these categories easily.",
    },
    {
      q: "How do site visits work?",
      a: "We pre‑screen buyers, schedule visits, share a live pin, and collect feedback. You get qualified visits only.",
    },
    {
      q: "Which documents should I keep ready?",
      a: "Latest Sale Deed/Title Deed, Encumbrance Certificate (EC/Index‑II), RoR/7‑12/Jamabandi/Khatauni (as per state), owner ID & address proof, and survey/measurement map.",
    },
    {
      q: "What are the charges?",
      a: "Basic listing is free/low‑cost in promos. Premium services like verification, marketing, drone shoot, and legal assistance are charged separately.",
    },
    {
      q: "Which locations do you cover?",
      a: "Primarily Raipur and nearby areas. Pan‑India onboarding is being rolled out—tell us your location and we’ll guide you.",
    },
    {
      q: "How can I contact support?",
      a: "Call us or email from the Contact section. We usually respond within 24 hours.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="text-neutral-100 py-12"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(to right, rgba(212,175,55,.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(212,175,55,.035) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)` }}
            >
              Questions
            </span>
          </h2>
          <p className="text-neutral-400 mt-1">
            Short, clear answers about listing, verification, visits and fees.
          </p>
          <div
            className="mx-auto mt-3 h-[3px] w-24 rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)` }}
          />
        </header>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="rounded-xl bg-neutral-900 ring-1 ring-white/10"
                style={{ boxShadow: isOpen ? `0 12px 28px -12px ${BRAND.glow}` : "none" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white">{item.q}</span>
                  <span
                    className="ml-3 h-6 w-6 grid place-items-center rounded-md ring-1"
                    style={
                      isOpen
                        ? {
                            background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                            color: "#111",
                            borderColor: BRAND.ring,
                            boxShadow: `0 6px 18px -6px ${BRAND.glow}`,
                          }
                        : { borderColor: "rgba(255,255,255,.12)", color: "#e5e7eb" }
                    }
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Smooth height animation using CSS grid rows */}
                <div className={`grid transition-all ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p
                      className="px-4 pb-4 text-sm leading-relaxed"
                      style={{ color: BRAND.soft }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}