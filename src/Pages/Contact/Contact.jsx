"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Contact:", form);
    setSent(true);
    setForm({ name: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" className="bg-neutral-950 text-neutral-100 py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ✅ LEFT SIDE — CONTACT DETAILS */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Let’s <span className="text-amber-300">Connect</span>
          </h2>

          <p className="text-neutral-400 mt-2 mb-6 text-base md:text-lg">
            Reach out to us for plot enquiries, site visits, pricing and project details.  
            We usually respond within 24 hours.
          </p>

          <div className="space-y-6 mt-4">
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-amber-300 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-neutral-400">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-amber-300 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-neutral-400">contact@landbank.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-amber-300 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Office Location</h4>
                <p className="text-neutral-400">Raipur, Chhattisgarh, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-amber-300 text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Office Hours</h4>
                <p className="text-neutral-400">Mon – Sat: 10:00 AM – 6:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ RIGHT SIDE — CONTACT FORM */}
        <form
          onSubmit={onSubmit}
          className="rounded-2xl bg-neutral-900 ring-1 ring-white/10 p-6 md:p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-amber-300">Send a Message</h3>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-xs text-neutral-400">Full name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="text-xs text-neutral-400">Phone</label>
              <input
                required
                pattern="[0-9+\s()-]{10,}"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 9xxxxxxxxx"
                className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
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
                className="mt-1 w-full rounded-lg bg-neutral-900 border border-white/10 text-neutral-100 placeholder:text-neutral-500 focus:border-amber-300 focus:ring-amber-300"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold 
              bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 text-neutral-900 
              shadow-[0_0_18px_rgba(255,215,0,0.45)] hover:opacity-90 transition"
            >
              Send Message
            </button>

            {sent && <span className="text-emerald-300 text-sm">✅ Message sent!</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
