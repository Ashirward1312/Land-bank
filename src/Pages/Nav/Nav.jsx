import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("HOME");

  const location = useLocation();

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

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "CATEGORIES", href: "/categories" },
    { label: "SERVICES", href: "/services" },
    // { label: "GALLERY", href: "/gallery" },
    { label: "CONTACT", href: "/contact" },
  ];

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active link from URL (IMPORTANT)
  useEffect(() => {
    const current = links.find((l) => l.href === location.pathname);
    if (current) setActive(current.label);
  }, [location.pathname]);

  // Close drawer on Esc / resize
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-white/10 transition-all"
      style={{
        boxShadow: scrolled ? `0 10px 24px -12px ${BRAND.glow}` : "none",
        backdropFilter: scrolled ? "saturate(140%) blur(4px)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
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
          <span className="text-white text-xl font-extrabold">
            LAND{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: GRAD.btn }}
            >
              BAZAR
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => {
            const isActive = active === l.label;
            const isContact = l.label === "CONTACT";

            if (isContact) {
              return (
                <Link
                  key={l.label}
                  to={l.href}
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ring-1 transition hover:brightness-110"
                  style={{
                    background: GRAD.btn,
                    color: "#111827",
                    borderColor: BRAND.ring,
                    boxShadow: `0 10px 26px -12px ${BRAND.glow}`,
                  }}
                >
                  {l.label}
                </Link>
              );
            }

            return (
              <Link
                key={l.label}
                to={l.href}
                className={`group relative pb-1 transition ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ backgroundImage: GRAD.line }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden h-10 w-10 grid place-items-center rounded-md text-white hover:bg-white/10"
        >
          ☰
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-72 bg-neutral-950 border-l border-white/10 md:hidden transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)} className="text-white">✕</button>
        </div>

        <nav className="px-3 py-4 space-y-2">
          {links.map((l) => {
            const isActive = active === l.label;
            return (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
