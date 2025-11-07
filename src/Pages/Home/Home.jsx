import React, { useEffect, useState } from "react";

export default function Home() {
  // ✅ FAST images
  const slides = [
    {
      src: "https://images.pexels.com/photos/21230507/pexels-photo-21230507.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Vast landscape",
    },
    {
      src: "https://images.pexels.com/photos/1081889/pexels-photo-1081889.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Green farmland",
    },
    {
      src: "https://images.pexels.com/photos/34443257/pexels-photo-34443257.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Golden hour fields",
    },
  ];

  // ✅ Auto change every 4 seconds
  const DURATION = 4000;

  const [index, setIndex] = useState(0);

  // ✅ Simple interval-based auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] text-white overflow-hidden" id="home">

      {/* ✅ IMAGES — Smooth Fade Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms]
              ${i === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ✅ MAIN CONTENT */}
      <div className="relative z-10 h-[100vh] max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">

        <h1 className="mt-5 font-extrabold leading-tight tracking-tight">
          <span className="block text-4xl md:text-5xl lg:text-6xl">
            Find Premium Plots
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl text-amber-300">
            in Raipur
          </span>
        </h1>

        <p className="mt-4 max-w-3xl text-lg md:text-xl text-white/90">
          Trusted and verified land/plots for Institutional, Medical, Hospitality, Real Estate and Industrial developments — secure, smooth and reliable deals.        </p>

        {/* ✅ Dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all
                ${i === index ? "bg-amber-300" : "bg-white/70 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
