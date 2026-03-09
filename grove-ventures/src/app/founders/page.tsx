import Link from "next/link";

export const metadata = {
  title: "For Founders — Grove Ventures",
  description:
    "Grove Ventures backs pre-revenue B2B SaaS founders in Industry 4.0 with $50K–$500K in convertible note financing and hands-on operational support.",
};

export default function Founders() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1B3A2D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            For Founders
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Early-Stage Capital Without Sacrificing Control
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            You&apos;re building something real in a sector most investors don&apos;t understand. Grove does — and we back founders before the market prices in the opportunity.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
            >
              Apply for Funding
            </Link>
          </div>
        </div>
      </section>

      {/* What Grove Provides */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-10">What Grove Provides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "💰",
                title: "Capital",
                items: [
                  "$50K–$500K via convertible note",
                  "Seed-stage terms, founder-aligned",
                  "No ARR or profitability requirements",
                  "Fast, straightforward process",
                ],
              },
              {
                icon: "⚙️",
                title: "Operational Support",
                items: [
                  "Dedicated support team assigned to your company",
                  "Growth activation playbook",
                  "GTM strategy and enterprise sales guidance",
                  "Product development and roadmap support",
                ],
              },
              {
                icon: "🏭",
                title: "Industry Advisory Board",
                items: [
                  "Manufacturing executives with buying authority",
                  "Direct customer introductions",
                  "Industry-specific strategic guidance",
                  "Credibility with enterprise prospects",
                ],
              },
              {
                icon: "🚀",
                title: "Strategic Guidance",
                items: [
                  "Fundraising preparation for future rounds",
                  "Investor network access",
                  "Hiring and team-building support",
                  "Long-term partnership, not just a check",
                ],
              },
            ].map(({ icon, title, items }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="text-[#1B3A2D] font-semibold text-lg mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Profile */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B3A2D] mb-6">Who We Back</h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Grove invests in a specific type of founder and company. If you check these boxes, we want to hear from you — even if you&apos;re not generating revenue yet.
              </p>
              <div className="space-y-4">
                {[
                  { label: "Stage", value: "Pre-revenue or very early revenue" },
                  { label: "Sector", value: "B2B SaaS for manufacturing / Industry 4.0" },
                  { label: "Team", value: "Technical founders with deep domain knowledge" },
                  { label: "Geography", value: "US-based (primary)" },
                  { label: "Not Required", value: "ARR targets, profitability, prior VC backing" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wide w-24 shrink-0 mt-0.5">
                      {label}
                    </div>
                    <div className="text-[#1B3A2D] text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1B3A2D] rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">The Founder We&apos;re Looking For</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                You&apos;re a technical builder. You understand the manufacturing floor. You&apos;ve identified a real problem that legacy systems can&apos;t solve. But you need capital to build, and a partner who can help you navigate enterprise sales.
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                That&apos;s Grove. We&apos;re not looking for polished decks — we&apos;re looking for conviction and domain expertise. If you&apos;re building software for manufacturing, start the conversation.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-6 py-3 rounded hover:bg-[#b8963e] transition-colors text-sm"
                >
                  Talk to Grove →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Structure */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-4">Deal Structure</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl">
            Grove uses a convertible note structure at the seed stage — a straightforward instrument designed to move quickly and minimize friction for founders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Convertible Note",
                desc: "Your investment converts to equity at the next qualified financing round, at a discount to the round price. Simple, founder-friendly, and widely understood.",
              },
              {
                title: "Observation Rights",
                desc: "Grove holds observation rights on board meetings — we stay informed and available, without taking a board seat at the seed stage.",
              },
              {
                title: "Maturity Terms",
                desc: "Standard maturity terms with flexibility built in for pre-revenue companies. We&apos;re here for the long term — not looking for an early exit.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-[#E5E0D8]">
                <h3 className="text-[#1B3A2D] font-semibold mb-3">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-10">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need revenue to apply?",
                a: "No. Grove specifically invests in pre-revenue companies. We evaluate on team quality, market understanding, and technical depth — not on revenue metrics.",
              },
              {
                q: "How long does the investment process take?",
                a: "We move quickly. Initial conversations are informal. If there&apos;s a fit, we can typically complete diligence and terms in 2–4 weeks.",
              },
              {
                q: "Will Grove take a board seat?",
                a: "Not at the seed stage. We hold observation rights — staying engaged and available without adding governance overhead to early-stage companies.",
              },
              {
                q: "What sectors within Industry 4.0 does Grove focus on?",
                a: "We invest broadly across advanced manufacturing software: production intelligence, supply chain, quality management, workforce tools, IoT/OT platforms, and more.",
              },
              {
                q: "Can I apply if I&apos;m pre-incorporation?",
                a: "Yes, though you&apos;ll need to be incorporated before funds can be deployed. We can work with founders at the idea stage on a path to investment.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#E5E0D8] pb-6">
                <h3 className="text-[#1B3A2D] font-semibold mb-2">{q}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1B3A2D] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to apply?</h2>
          <p className="text-white/70 mb-8">
            Tell us about your company. The application is straightforward — we&apos;re looking for a genuine conversation, not a polished pitch deck.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
          >
            Apply for Funding
          </Link>
        </div>
      </section>
    </>
  );
}
