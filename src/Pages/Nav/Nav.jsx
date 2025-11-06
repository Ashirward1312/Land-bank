import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

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
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    // { label: "How it works", href: "#how" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-white/10 transition-all ${
        scrolled ? "shadow-[0_1px_0_0_rgba(255,255,255,.08)]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-amber-400 text-neutral-900 grid place-items-center font-extrabold">
            LB
          </div>
          <span className="text-white text-xl font-extrabold tracking-tight">
            Land <span className="text-amber-400">Bank</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const isContact = l.label === "Contact";
            if (isContact) {
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setActive(l.label)}
                  className="inline-flex items-center rounded-lg px-4 py-2 font-semibold text-neutral-900 bg-amber-400 hover:bg-amber-300 transition ring-1 ring-amber-300/40 shadow-[0_8px_18px_-10px_rgba(251,191,36,.7)]"
                >
                  {l.label}
                </a>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActive(l.label)}
                className={`group relative pb-1 transition ${
                  active === l.label ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`pointer-events-none absolute left-0 -bottom-0.5 h-[2px] bg-amber-400 transition-all ${
                    active === l.label ? "w-full" : "w-0 group-hover:w-full"
                  }`}
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
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
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
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-9 w-9 grid place-items-center rounded-md text-white hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <nav className="px-3 py-3 space-y-2">
          {links.map((l) => {
            const isContact = l.label === "Contact";
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  setActive(l.label);
                  setOpen(false);
                }}
                className={
                  isContact
                    ? "block text-center rounded-lg px-4 py-2 font-semibold bg-amber-400 text-neutral-900 hover:bg-amber-300 transition"
                    : `block rounded-md px-3 py-2 ${
                        active === l.label ? "text-white bg-white/10" : "text-white/85 hover:bg-white/10"
                      }`
                }
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