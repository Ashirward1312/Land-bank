"use client";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");

  // Premium gold palette
  const BRAND = {
    base: "#D4AF37",
    soft: "#F3D98E",
    ring: "rgba(212,175,55,.55)",
    glow: "rgba(212,175,55,.45)",
  };
  const GRAD = {
    btn: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
    line: `linear-gradient(90deg, ${BRAND.base}, ${BRAND.soft})`,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on Esc or when resizing to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/#about" },
    { label: "CATEGORIES", href: "/#categories" },
    { label: "SERVICES", href: "/#services" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-white/10 transition-all`}
      style={{
        boxShadow: scrolled ? `0 10px 24px -12px ${BRAND.glow}` : "none",
        backdropFilter: scrolled ? "saturate(140%) blur(4px)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="/#home" className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-md grid place-items-center font-extrabold ring-1"
            style={{
              background: GRAD.btn,
              color: "#111",
              borderColor: BRAND.ring,
              boxShadow: `0 6px 18px -6px ${BRAND.glow}`,
            }}
          >
            LB
          </div>
          <span className="text-white text-xl font-extrabold tracking-tight">
            LAND{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRAD.btn }}
            >
              BAZAR
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const isContact = l.label === "CONTACT"; // FIX: match uppercase
            if (isContact) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  className="inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ring-1 transition active:scale-[.97] hover:brightness-110"
                  style={{
                    background: GRAD.btn,
                    color: "#111827",
                    borderColor: BRAND.ring,
                    boxShadow: `0 10px 26px -12px ${BRAND.glow}`,
                  }}
                >
                  <span>{l.label}</span>
                  {/* small inner pill with arrow */}
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/5 text-[11px]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              );
            }

            const isActive = active === l.label;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`group relative pb-1 transition ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ backgroundImage: GRAD.line }}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-white hover:bg-white/10"
        >
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-72 bg-neutral-950 border-l border-white/10 md:hidden transform transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: `-10px 0 30px -18px ${BRAND.glow}` }}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-9 w-9 grid place-items-center rounded-md text-white hover:bg-white/10"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <nav className="px-3 py-3 space-y-2">
          {links.map((l) => {
            const isContact = l.label === "CONTACT";
            const isActive = active === l.label;

            if (isContact) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActive(l.label);
                    setOpen(false);
                  }}
                  className="block text-center rounded-full px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 transition active:scale-[.97] hover:brightness-110"
                  style={{
                    background: GRAD.btn,
                    color: "#111827",
                    borderColor: BRAND.ring,
                    boxShadow: `0 10px 24px -12px ${BRAND.glow}`,
                  }}
                >
                  {l.label}
                </a>
              );
            }

            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
                className="block rounded-md px-3 py-2 text-sm transition"
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,.85)",
                  backgroundColor: isActive
                    ? "rgba(255,255,255,.08)"
                    : "transparent",
                }}
              >
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}