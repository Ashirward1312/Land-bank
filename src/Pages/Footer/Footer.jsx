"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Premium gold palette (same as other sections)
  const BRAND = {
    base: "#D4AF37",
    soft: "#F3D98E",
    ring: "rgba(212,175,55,.55)",
    glow: "rgba(212,175,55,.45)",
  };

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // simple hover helpers for links/icons
  const hoverGold = (e) => (e.currentTarget.style.color = BRAND.soft);
  const unhoverGold = (e) => (e.currentTarget.style.color = "");

  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-950 text-neutral-100 pt-12 pb-6 border-t border-white/10">
      {/* subtle gold mesh glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(600px 280px at 10% 15%, rgba(212,175,55,.10), transparent 60%),
            radial-gradient(600px 280px at 90% 85%, rgba(230,199,102,.08), transparent 65%)
          `,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Land{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
              }}
            >
              Bank
            </span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Only land. Only plots. Discover verified parcels for Industries, Hospital,
            Education, Real Estate and Hotel projects across Raipur and nearby locations.
          </p>
          <div
            className="mt-3 h-[3px] w-20 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${BRAND.base}, ${BRAND.soft}, transparent)`,
            }}
          />
        </div>

        <nav>
          <h3
            className="text-lg font-semibold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
            }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#categories", label: "Categories" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition"
                  style={{ color: "#d1d5db" }}
                  onMouseEnter={hoverGold}
                  onMouseLeave={unhoverGold}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3
            className="text-lg font-semibold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
            }}
          >
            Contact Us
          </h3>
          <ul className="space-y-3 text-neutral-300 text-sm">
            <li>
              📍 Mahesh Ventures, LK Logistic Park, Kursi, 
                 3rd Floor, Near Kamal Vihar, Raipur (C.G.)
            </li>
            <li>
              📞{" "}
              <a
                href="tel:+918871090476"
                className="transition"
                style={{ color: "#d1d5db" }}
                onMouseEnter={hoverGold}
                onMouseLeave={unhoverGold}
              >
                +91 88710-90476
              </a>
            </li>
            <li>
              {/* <a
                href="mailto:hello@pradeepmaheshwari.com"
                className="transition"
                style={{ color: "#d1d5db" }}
                onMouseEnter={hoverGold}
                onMouseLeave={unhoverGold}
              >
                hello@pradeepmaheshwari.com
              </a> */}
            </li>
          </ul>
        </div>

        <div>
          <h3
            className="text-lg font-semibold mb-4 bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
            }}
          >
            Follow Us
          </h3>
          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/people/Headquarter-HQ-In-Association-with-Kursi/61582888842094/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="transition hover:-translate-y-0.5"
            >
              <span
                className="h-9 w-9 rounded-lg grid place-items-center ring-1"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                  color: "#111",
                  borderColor: BRAND.ring,
                  boxShadow: `0 8px 18px -10px ${BRAND.glow}`,
                }}
              >
                <FaFacebookF className="text-black" />
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/headquarterkursi/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition hover:-translate-y-0.5"
            >
              <span
                className="h-9 w-9 rounded-lg grid place-items-center ring-1"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                  color: "#111",
                  borderColor: BRAND.ring,
                  boxShadow: `0 8px 18px -10px ${BRAND.glow}`,
                }}
              >
                <FaInstagram className="text-black" />
              </span>
            </a>

            {/* LinkedIn – commented out (no link provided) */}
            {/*
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-0.5"
            >
              <span
                className="h-9 w-9 rounded-lg grid place-items-center ring-1"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                  color: "#111",
                  borderColor: BRAND.ring,
                  boxShadow: `0 8px 18px -10px ${BRAND.glow}`,
                }}
              >
                <FaLinkedinIn className="text-black" />
              </span>
            </a>
            */}

            {/* Twitter / X */}
            <a
              href="https://x.com/maheshwari95189"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="transition hover:-translate-y-0.5"
            >
              <span
                className="h-9 w-9 rounded-lg grid place-items-center ring-1"
                style={{
                  background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
                  color: "#111",
                  borderColor: BRAND.ring,
                  boxShadow: `0 8px 18px -10px ${BRAND.glow}`,
                }}
              >
                <FaTwitter className="text-black" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-400">
          © {year} Land Bank. All rights reserved, Designed and Developed by{" "}
          <span className="text-neutral-100 font-semibold">
           SP ADVERTISING
          </span>
          .
        </div>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full ring-1 transition z-50 active:scale-[.98]"
          style={{
            background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base} 70%)`,
            color: "#111",
            borderColor: BRAND.ring,
            boxShadow: `0 10px 24px ${BRAND.glow}`,
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;