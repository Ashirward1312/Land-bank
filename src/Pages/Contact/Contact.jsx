"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  // Premium Gold palettes (matches rest of site)
  const PALETTE = {
    gold: {
      base: "#D4AF37",
      soft: "#F3D98E",
      ring: "rgba(212,175,55,.55)",
      glow: "rgba(212,175,55,.45)",
    },
    light: {
      base: "#F7D27D",
      soft: "#FFE29A",
      ring: "rgba(255,226,154,.55)",
      glow: "rgba(255,226,154,.45)",
    },
  };
  const BRAND = PALETTE.gold; // switch to PALETTE.light for a softer tone

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact:", form);
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 2500);
  };

  // Common input focus styling (gold focus ring)
  const focusGold = (e) =>
    (e.currentTarget.style.boxShadow = `0 0 0 1px ${BRAND.base}`);
  const blurGold = (e) => (e.currentTarget.style.boxShadow = "none");

  return (
    <section
      id="contact"
      className="text-neutral-100 py-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(to right, rgba(212,175,55,.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(212,175,55,.035) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    >
      {/* subtle gold glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(600px 280px at 12% 12%, rgba(212,175,55,.10), transparent 60%),
            radial-gradient(600px 280px at 88% 88%, rgba(230,199,102,.08), transparent 65%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT — CONTACT DETAILS */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let’s{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              Connect
            </span>
          </h2>

          <p className="text-neutral-400 mt-2 mb-6 text-base md:text-lg">
            Reach out to us for plot enquiries, site visits, pricing and project
            details. We usually respond within 24 hours.
          </p>

          <div
            className="mx-0 mt-1 h-[3px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
              boxShadow: `0 8px 22px -8px ${BRAND.glow}`,
            }}
          />

          <div className="space-y-6 mt-6">
            <InfoRow
              Icon={FaPhoneAlt}
              title="Phone"
              text="+91 88710-90476"
              brand={BRAND}
            />
            {/* <InfoRow
              Icon={FaEnvelope}
              title="Email"
              text="hello@pradeepmaheshwari.com"
              brand={BRAND}
            /> */}
            <InfoRow
              Icon={FaMapMarkerAlt}
              title="Office Location"
              text="Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)"
              brand={BRAND}
            />
            <InfoRow
              Icon={FaClock}
              title="Office Hours"
              text="Mon – Sat: 9:30 AM – 6:30 PM"
              brand={BRAND}
            />
          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-neutral-900 ring-1 ring-white/10 p-6 md:p-8 shadow-xl"
          style={{ boxShadow: `0 24px 60px -24px ${BRAND.glow}` }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Send a Message
          </h3>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs text-neutral-400">Full name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-1 w-full rounded-lg bg-neutral-900 border text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
                onFocus={focusGold}
                onBlur={blurGold}
                style={{
                  borderColor: "rgba(255,255,255,.10)",
                  caretColor: BRAND.base,
                }}
              />
            </div>

            <div>
              <label className="text-xs text-neutral-400">Phone</label>
              <input
                required
                pattern="[0-9+\s()-]{10,}"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="mt-1 w-full rounded-lg bg-neutral-900 border text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
                onFocus={focusGold}
                onBlur={blurGold}
                style={{
                  borderColor: "rgba(255,255,255,.10)",
                  caretColor: BRAND.base,
                }}
              />
            </div>

            <div>
              <label className="text-xs text-neutral-400">Message</label>
              <textarea
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us briefly about your requirement…"
                className="mt-1 w-full rounded-lg bg-neutral-900 border text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
                onFocus={focusGold}
                onBlur={blurGold}
                style={{
                  borderColor: "rgba(255,255,255,.10)",
                  caretColor: BRAND.base,
                }}
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold ring-1 transition active:scale-[.99]"
              style={{
                background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                color: "#111",
                borderColor: BRAND.ring,
                boxShadow: `0 10px 24px ${BRAND.glow}`,
              }}
            >
              Send Message
            </button>

            {sent && (
              <span className="text-sm" style={{ color: BRAND.soft }}>
                ✅ Message sent!
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

/* Small info row with gold icon halo */
function InfoRow({ Icon, title, text, brand }) {
  return (
    <div className="flex items-start gap-4">
      <span
        className="h-11 w-11 rounded-xl grid place-items-center ring-1"
        style={{
          background: `linear-gradient(135deg, ${brand.soft}, ${brand.base} 70%)`,
          color: "#111",
          borderColor: brand.ring,
          boxShadow: `0 6px 18px -6px ${brand.glow}`,
        }}
      >
        <Icon className="text-black text-lg" />
      </span>
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-neutral-400">{text}</p>
      </div>
    </div>
  );
}