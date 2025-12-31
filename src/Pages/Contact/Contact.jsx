"use client";

import { useState } from "react";

const BRAND = {
  base: "#facc15", // gold
  soft: "#fde68a", // soft light gold
  ring: "rgba(250,204,21,0.65)",
  glow: "rgba(250,204,21,0.45)",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Name is required";
    if (!form.message.trim()) er.message = "Message is required";
    return er;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) return setErrors(er);

    setSending(true);
    setStatus({ type: "", msg: "" });

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "363556af-2a82-49cc-84f0-1f8851f273ab");
      formData.append("subject", "New Contact Form Submission");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("WEB3FORMS RESPONSE:", data);

      if (data.success) {
        setStatus({
          type: "success",
          msg: "Thanks! We’ll get back to you shortly.",
        });
        setForm({ name: "", phone: "", message: "" });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          msg: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        msg: "Error submitting the form. Please try again later.",
      });
    }

    setSending(false);
  };

  return (
    <section
      className="relative w-full bg-black text-slate-100 py-10 sm:py-12 lg:py-14"
      id="contact"
    >
      {/* Gold aura */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(250,204,21,0.25) 0%, rgba(253,230,138,0.18) 35%, rgba(0,0,0,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{
              background: "rgba(15,23,42,0.9)",
              border: `1px solid ${BRAND.ring}`,
              color: BRAND.soft,
            }}
          >
            CONTACT US
          </span>
          <h1 className="heading-font mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            WE’D LOVE TO{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
              }}
            >
              HEAR FROM YOU
            </span>
          </h1>
          <p className="paragraph-font mt-2 text-sm sm:text-base text-slate-300">
            Have a question or want to book a site visit? Send us a message and
            our team will respond soon.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Info card */}
          <div className="lg:col-span-1 rounded-2xl bg-gradient-to-b from-slate-950/90 via-black to-black ring-1 ring-white/10 p-5 sm:p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)]">
            <h2 className="heading-font text-lg font-semibold text-white">
              GET IN TOUCH
            </h2>
            <p className="paragraph-font mt-1 text-sm text-slate-300">
              Reach out via phone, or visit our office during working hours.
            </p>

            <div className="mt-4 space-y-4">
              {/* Phone */}
              <a
                href="tel:+918871090476"
                className="flex items-center gap-3 rounded-xl p-3 hover:bg-slate-900/70 transition"
              >
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-black/80 ring-1 ring-white/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-[#facc15]"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.05 3h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="paragraph-font text-sm text-slate-100">
                  +91 88710-90476
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 rounded-xl p-3">
                <span className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-black/80 ring-1 ring-white/15">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    className="text-[#facc15]"
                  >
                    <path
                      d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="11" r="2" fill="currentColor" />
                  </svg>
                </span>
                <div className="paragraph-font text-sm text-slate-100">
                  Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near
                  Kamal Vihar, Raipur (C.G.)
                  <div className="mt-1">
                    <a
                      className="text-[#fde68a] hover:text-[#facc15] underline underline-offset-2"
                      href="https://maps.google.com/?q=Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Working hours */}
              <div className="rounded-xl bg-slate-900/70 border border-white/10 p-3 text-sm text-slate-200">
                <div className="heading-font font-medium text-white">
                  Working hours
                </div>
                <div className="paragraph-font mt-0.5 text-slate-300">
                  Mon–Sat: 9:30 AM – 6:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-b from-slate-950/90 via-black to-black ring-1 ring-white/10 p-5 sm:p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,1)]">
            {status.msg && (
              <div
                className={`paragraph-font mb-4 rounded-lg px-4 py-3 text-sm ring-1 ${
                  status.type === "success"
                    ? "bg-amber-950/40 text-amber-100 ring-amber-400/50"
                    : "bg-red-950/40 text-red-100 ring-red-500/60"
                }`}
                role="status"
                aria-live="polite"
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="heading-font block text-sm font-medium text-slate-100"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`paragraph-font mt-1 w-full rounded-lg border bg-black/60 px-3 py-2.5 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : "border-white/10 focus:border-[#fde68a] focus:ring-[#fde68a]/30"
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="paragraph-font mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="heading-font block text-sm font-medium text-slate-100"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="paragraph-font mt-1 w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2.5 text-slate-100 placeholder-slate-500 outline-none focus:border-[#fde68a] focus:ring-2 focus:ring-[#fde68a]/30"
                    placeholder="+91 ..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="heading-font block text-sm font-medium text-slate-100"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`paragraph-font mt-1 w-full rounded-lg border bg-black/60 px-3 py-2.5 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-500/60 focus:ring-red-500/40"
                        : "border-white/10 focus:border-[#fde68a] focus:ring-[#fde68a]/30"
                    }`}
                    placeholder="How can we help you?"
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="paragraph-font mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="paragraph-font text-[11px] text-slate-400">
                  By submitting, you agree to our Terms &amp; Privacy Policy.
                </p>
                <button
                  type="submit"
                  disabled={sending}
                  className={`paragraph-font inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold text-neutral-900 shadow-lg ring-1 border transition ${
                    sending
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:brightness-110"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.soft}, ${BRAND.base})`,
                    boxShadow: `0 10px 24px ${BRAND.glow}`,
                    borderColor: BRAND.soft,
                  }}
                >
                  {sending ? (
                    <>
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeOpacity="0.25"
                          strokeWidth="4"
                        />
                        <path
                          d="M22 12a10 10 0 0 1-10 10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path
                          d="M5 12h14M13 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}