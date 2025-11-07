
import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaUsers,
  FaHandsHelping,
  FaBolt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import founderImg from "../../images/c.jpeg";

/* ================== Accessibility Hooks ================== */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setPrefers(e.matches);
    setPrefers(mq.matches);
    mq.addEventListener
      ? mq.addEventListener("change", onChange)
      : mq.addListener(onChange);
    return () =>
      mq.removeEventListener
        ? mq.removeEventListener("change", onChange)
        : mq.removeListener(onChange);
  }, []);
  return prefers;
}

function useReveal(prefersReducedMotion) {
  const ref = useRef(null);
  const [inView, setInView] = useState(prefersReducedMotion);
  useEffect(() => {
    if (prefersReducedMotion) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [prefersReducedMotion]);
  return [ref, inView];
}

/* ================== Founder Content ================== */
const FOUNDER_PHOTO = founderImg;
const FOUNDER = {
  quote: "Strategy first. People always. Real estate done right.",
  name: "Pradeep Maheshwari",
  role: "Founder • Executive Vice President, CAIT Chhattisgarh",
};

const features = [
  { icon: <FaUsers size={26} aria-hidden="true" />, title: "Trusted Team", desc: "KYC‑verified owners and agents. Ethical, professional, responsive." },
  { icon: <FaHandsHelping size={26} aria-hidden="true" />, title: "Customer First", desc: "Guidance from discovery to possession with dedicated support." },
  { icon: <FaCheckCircle size={26} aria-hidden="true" />, title: "Transparent Process", desc: "Clear pricing, no hidden fees, real updates at every step." },
  { icon: <FaBolt size={26} aria-hidden="true" />, title: "Fast Closures", desc: "Streamlined paperwork, coordinated site visits and timely approvals." },
  { icon: <FaMapMarkerAlt size={26} aria-hidden="true" />, title: "Local Expertise", desc: "Strong network across Chhattisgarh & pan‑India with neighborhood insights." },
];

/* ================== Theme Tokens ================== */
const GOLD = "#D4AF37";
const GOLD_SOFT = "#E6C766";

/* ================== Main Component ================== */
const HowWeAre = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [heroRef, heroInView] = useReveal(prefersReducedMotion);
  const [gridRef, gridInView] = useReveal(prefersReducedMotion);

  // Face focus (tweak to perfectly align face)
  const FACE_X = 50; // 0 = left, 50 = center
  const FACE_Y = 35; // 0 = top, 50 = center (try 30–40)

  return (
    <section
      className="relative py-16 sm:py-20 text-[15px] sm:text-[16px] leading-relaxed"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: `
          linear-gradient(to right, rgba(212,175,55,0.035) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(212,175,55,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "22px 22px",
      }}
    >
      {/* Soft gold radial glows */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(600px 280px at 18% 10%, rgba(212,175,55,0.10), transparent 60%),
            radial-gradient(600px 280px at 85% 85%, rgba(230,199,102,0.08), transparent 65%)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================== HERO Card (gold border) ================== */}
        <div
          ref={heroRef}
          className={`relative mx-auto max-w-4xl rounded-3xl p-[1.5px] transition-all duration-700 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.75), rgba(230,199,102,0.35) 40%, rgba(212,175,55,0.75))",
          }}
        >
          <div className="rounded-[calc(1.5rem-1.5px)] bg-neutral-900 text-white ring-1 ring-white/10 p-6 sm:p-10 relative overflow-hidden">
            {/* Inner golden aura */}
            <div
              className="pointer-events-none absolute inset-0 -z-10"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(600px 300px at 25% 15%, rgba(212,175,55,0.12), transparent 60%), radial-gradient(700px 320px at 85% 80%, rgba(230,199,102,0.10), transparent 60%)",
              }}
            />

            {/* WHO WE ARE Tag */}
            <div className="mb-4 flex justify-center">
              <span
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wide heading-font ring-1"
                style={{
                  color: "white",
                  backgroundColor: "rgba(212,175,55,0.09)",
                  borderColor: "rgba(212,175,55,0.28)",
                }}
              >
                WHO WE ARE
              </span>
            </div>

            {/* Founder Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
              {/* Left: Founder Image with double gold ring + badge */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Outer gradient ring */}
                  <div
                    className="p-[3px] rounded-full"
                    style={{
                      background:
                        "conic-gradient(from 180deg at 50% 50%, rgba(212,175,55,0.85), rgba(230,199,102,0.6), rgba(212,175,55,0.85))",
                    }}
                  >
                    <div className="rounded-full bg-neutral-900 p-[3px]">
                      <img
                        src={FOUNDER_PHOTO}
                        alt={`${FOUNDER.name || "Founder"} portrait`}
                        className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-full object-cover shadow-xl"
                        loading="lazy"
                        decoding="async"
                        style={{ objectPosition: `${FACE_X}% ${FACE_Y}%` }}
                      />
                    </div>
                  </div>

                  {/* Years badge */}
                
                </div>
              </div>

              {/* Right: Founder Info + CTA */}
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <h2
                  className="heading-font text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
                  style={{
                    color: GOLD,
                  }}
                >
                  {FOUNDER.quote}
                </h2>

                <p className="paragraph-font text-neutral-200 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-lg mx-auto lg:mx-0">
                  <span style={{ color: GOLD_SOFT }}>Over Two decades</span> in real estate strategy, sales, and marketing. From large‑scale builder planning to pan‑India broker networks, Pradeep has led innovative models that accelerate closures and create long‑term value.
                </p>

                {(FOUNDER.name || FOUNDER.role) && (
                  <div className="pt-1">
                    {FOUNDER.name && (
                      <div
                        className="heading-font text-sm sm:text-base font-semibold"
                        style={{ color: GOLD }}
                      >
                        {FOUNDER.name}
                      </div>
                    )}
                    {FOUNDER.role && (
                      <div className="paragraph-font text-xs sm:text-sm text-neutral-300">
                        {FOUNDER.role}
                      </div>
                    )}
                  </div>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-3 justify-center lg:justify-start">
                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-black shadow-md ring-1 ring-black/20 transition ${
                      prefersReducedMotion ? "" : "hover:-translate-y-0.5"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, #F3D98E, #D4AF37 70%)",
                    }}
                  >
                    Talk to Us
                  </a>
              
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================== Section Header ================== */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="heading-font text-2xl sm:text-3xl font-bold text-white mb-2 inline-block">
            Who We Are
            <span className="block w-14 h-1 rounded mt-2 mx-auto" style={{ backgroundColor: GOLD }} />
          </h3>
          <p className="paragraph-font text-neutral-300 max-w-2xl mx-auto text-sm sm:text-base lg:text-[17px] leading-relaxed">
            <span className="font-semibold" style={{ color: GOLD_SOFT }}>
              With over Two decades
            </span>{" "}
            of hands‑on real estate leadership, we help buyers, sellers, and trusted agents close with confidence. KYC‑verified owners and brokers, transparent pricing, live market data, and end‑to‑end support — from first call to documentation — keep every step simple, fast, and reliable.
          </p>
        </div>

        {/* ================== Features Grid (gold accents) ================== */}
        <div
          ref={gridRef}
          className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 transition-all duration-700 ${
            gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          {features.map((f, i) => {
            const Icon = React.cloneElement(f.icon, {
              size: 24,
              className: "text-black",
              "aria-hidden": "true",
            });

            return (
              <div
                key={i}
                className={`group relative flex flex-col items-center text-center rounded-2xl p-6 ring-1 transition ${
                  prefersReducedMotion ? "" : "hover:-translate-y-0.5"
                }`}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                {/* Gold top divider */}
                <span
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), rgba(230,199,102,0.6), transparent)",
                  }}
                />

                {/* Icon with gold halo */}
                <div className="h-14 w-14 rounded-full p-[2px] mb-3"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(212,175,55,0.85), rgba(230,199,102,0.65))",
                  }}
                >
                  <div className="h-full w-full rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#F3D98E" }}
                  >
                    {Icon}
                  </div>
                </div>

                <h4
                  className="heading-font mt-1 text-[17px] sm:text-[18px] font-semibold"
                  style={{ color: GOLD_SOFT }}
                >
                  {f.title}
                </h4>
                <p className="paragraph-font mt-2 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeAre;