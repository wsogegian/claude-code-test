"use client";

import { useState } from "react";

export default function Contact() {
  const [type, setType] = useState("founder");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production: send to API route or form service
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#1B3A2D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            We read every inquiry. Tell us who you are and what you&apos;re working on — we&apos;ll be in touch within 2 business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-xl p-12 text-center border border-[#E5E0D8]">
              <div className="text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-[#1B3A2D] mb-3">Message Received</h2>
              <p className="text-[#6B7280]">
                Thank you for reaching out. A member of the Grove team will be in touch within 2 business days.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 md:p-12 border border-[#E5E0D8]">
              {/* Inquiry type selector */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-[#1B3A2D] mb-3">
                  I am a...
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "founder", label: "Founder" },
                    { value: "investor", label: "Investor / LP" },
                    { value: "advisor", label: "Potential Advisor" },
                    { value: "general", label: "Other" },
                  ].map(({ value, label }) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setType(value)}
                      className={`py-3 px-4 rounded border text-sm font-medium transition-colors ${
                        type === value
                          ? "bg-[#1B3A2D] text-white border-[#1B3A2D]"
                          : "bg-white text-[#6B7280] border-[#E5E0D8] hover:border-[#1B3A2D]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                      Role / Title
                    </label>
                    <input
                      type="text"
                      placeholder="CEO, CTO, etc."
                      className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white"
                    />
                  </div>
                </div>

                {type === "founder" && (
                  <div>
                    <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                      Tell us about your company
                    </label>
                    <input
                      type="text"
                      placeholder="What are you building? What problem does it solve?"
                      className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-[#1B3A2D] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder={
                      type === "founder"
                        ? "Tell us about your stage, what you're building, and why you're reaching out to Grove."
                        : type === "investor"
                        ? "Tell us about your background and your interest in the Grove fund."
                        : "How can Grove help you, or how can you help Grove?"
                    }
                    className="w-full border border-[#E5E0D8] rounded-lg px-4 py-3 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#1B3A2D] bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B3A2D] text-white font-semibold py-4 rounded-lg hover:bg-[#2a5642] transition-colors"
                >
                  Send Message
                </button>

                <p className="text-xs text-[#6B7280] text-center">
                  Your information is kept confidential and never shared with third parties without your consent.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Secondary contact options */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-3">✉️</div>
              <div className="font-semibold text-[#1B3A2D] mb-1">Email</div>
              <a
                href="mailto:hello@groveventures.com"
                className="text-sm text-[#6B7280] hover:text-[#1B3A2D] transition-colors"
              >
                hello@groveventures.com
              </a>
            </div>
            <div>
              <div className="text-2xl mb-3">💼</div>
              <div className="font-semibold text-[#1B3A2D] mb-1">LinkedIn</div>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#6B7280] hover:text-[#1B3A2D] transition-colors"
              >
                Grove Ventures ↗
              </a>
            </div>
            <div>
              <div className="text-2xl mb-3">⏱️</div>
              <div className="font-semibold text-[#1B3A2D] mb-1">Response Time</div>
              <div className="text-sm text-[#6B7280]">Within 2 business days</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
