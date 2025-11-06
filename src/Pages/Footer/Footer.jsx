"use client";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-950 text-neutral-100 pt-12 pb-6 border-t border-white/10 relative">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-xl font-extrabold tracking-tight mb-4">
            Land <span className="text-amber-300">Bank</span>
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Only land. Only plots. Discover verified parcels for Industries, Hospital,
            Education, Real Estate and Hotel projects across Raipur and nearby locations.
          </p>
        </div>

        <nav>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Quick Links</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li><a href="#home" className="hover:text-amber-300 transition">Home</a></li>
            <li><a href="#plots" className="hover:text-amber-300 transition">Plots</a></li>
            <li><a href="#categories" className="hover:text-amber-300 transition">Categories</a></li>
            <li><a href="#services" className="hover:text-amber-300 transition">Services</a></li>
            <li><a href="#about" className="hover:text-amber-300 transition">About</a></li>
            <li><a href="#contact" className="hover:text-amber-300 transition">Contact</a></li>
          </ul>
        </nav>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Contact Us</h3>
          <ul className="space-y-3 text-neutral-300 text-sm">
            <li>📍 Land Bank HQ,<br />Raipur, Chhattisgarh, India</li>
            <li>
              📞 <a href="tel:+919876543211" className="hover:text-amber-300 transition">
                +91 9876543211
              </a>
            </li>
            <li>
              📧 <a href="mailto:hello@landbank.example" className="hover:text-amber-300 transition">
                hello@landbank.example
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-amber-300">Follow Us</h3>
          <div className="flex space-x-4 text-neutral-200 text-xl">
            <a href="#" className="hover:text-amber-300 transition transform hover:scale-110"><FaFacebookF /></a>
            <a href="#" className="hover:text-amber-300 transition transform hover:scale-110"><FaInstagram /></a>
            <a href="#" className="hover:text-amber-300 transition transform hover:scale-110"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-amber-300 transition transform hover:scale-110"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* ✅ Fully Center Aligned Bottom Bar */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Land Bank. All rights reserved.
        </div>
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 bg-amber-400 text-neutral-900 p-3 rounded-full shadow-lg hover:bg-amber-300 transition z-50"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
