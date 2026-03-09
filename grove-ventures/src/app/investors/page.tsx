import Link from "next/link";

export const metadata = {
  title: "For Investors — Grove Ventures",
  description:
    "Grove Ventures is raising a $25M Regulation D fund targeting early-stage B2B SaaS in Industry 4.0. Learn about the fund structure, investment thesis, and LP opportunities.",
};

export default function Investors() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1B3A2D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            For Investors
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Private Market Exposure to the Industry 4.0 Revolution
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            Grove Ventures is raising a $25M fund to back pre-revenue B2B SaaS founders in advanced manufacturing — an underserved niche with significant alpha potential.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
            >
              Request LP Deck
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <div className="bg-[#2C2C2C] text-white/60 text-xs px-6 py-3 text-center">
        This page does not constitute an offer to sell or a solicitation to buy securities. Any offering is made solely via private placement memorandum to accredited investors under Regulation D.
      </div>

      {/* Fund Overview */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-10">Fund Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Fund Size", value: "$25M" },
              { label: "Structure", value: "Limited Partnership" },
              { label: "Regulation", value: "Reg D Compliant" },
              { label: "Min. LP Commitment", value: "$50,000" },
              { label: "Investment Period", value: "3 Years" },
              { label: "Fund Life", value: "10 Years" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white rounded-xl p-6 border border-[#E5E0D8] text-center">
                <div className="text-2xl font-bold text-[#1B3A2D] mb-1">{value}</div>
                <div className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-8">Why Industry 4.0, Why Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-5 text-[#6B7280] leading-relaxed">
              <p>
                Manufacturing is the largest sector of the global economy — and one of the least digitized. Legacy systems, siloed data, and outdated workflows cost manufacturers billions annually in inefficiency and lost output.
              </p>
              <p>
                The software solutions required to close this gap are being built now. Policy tailwinds from the CHIPS Act, IRA manufacturing provisions, and DOE funding are accelerating investment in domestic production — and creating demand for a new generation of industrial software.
              </p>
              <p>
                Yet most venture capital ignores this space. Long sales cycles, complex integrations, and technical buyers are barriers for generalist investors. Grove&apos;s sector focus and operational model are specifically designed to overcome these barriers — and generate alpha in the process.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { stat: "$627B", label: "Global Industry 4.0 market by 2030" },
                { stat: "30%+", label: "CAGR in industrial software spend" },
                { stat: "Pre-seed", label: "Entry point — maximum upside potential" },
                { stat: "Hands-on", label: "Operational model = accelerated portfolio value" },
              ].map(({ stat, label }) => (
                <div key={label} className="flex items-center gap-4 p-4 bg-[#F8F6F1] rounded-lg border border-[#E5E0D8]">
                  <div className="text-2xl font-bold text-[#C9A84C] w-24 shrink-0">{stat}</div>
                  <div className="text-sm text-[#6B7280]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Return Scenarios */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-4">Return Scenarios</h2>
          <p className="text-[#6B7280] mb-8 max-w-xl">
            The following scenarios are illustrative projections based on portfolio modeling. Actual returns may differ materially. Past performance of comparable funds does not guarantee future results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                scenario: "Conservative",
                irr: "~10–12%",
                moic: "1.8–2.2x",
                description: "Lower-than-expected exit multiples, extended timelines, limited breakout companies.",
                color: "border-[#E5E0D8]",
              },
              {
                scenario: "Base Case",
                irr: "~14–16%",
                moic: "2.5–3.0x",
                description: "Portfolio performs in line with pre-seed B2B SaaS benchmarks with 1–2 strong performers.",
                color: "border-[#C9A84C]",
                highlight: true,
              },
              {
                scenario: "High Case",
                irr: "~20–24%",
                moic: "4.0–5.0x",
                description: "2–3 breakout portfolio companies with strong strategic acquisition or IPO outcomes.",
                color: "border-[#1B3A2D]",
              },
            ].map(({ scenario, irr, moic, description, color, highlight }) => (
              <div
                key={scenario}
                className={`bg-white rounded-xl p-6 border-2 ${color} ${highlight ? "shadow-md" : ""}`}
              >
                {highlight && (
                  <div className="text-xs font-semibold text-[#C9A84C] uppercase tracking-widest mb-2">
                    Base Case
                  </div>
                )}
                <h3 className="text-[#1B3A2D] font-bold text-xl mb-1">{scenario}</h3>
                <div className="text-3xl font-bold text-[#1B3A2D] mb-1">{irr}</div>
                <div className="text-sm text-[#6B7280] mb-4">Net IRR · {moic} MOIC</div>
                <p className="text-[#6B7280] text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6B7280] mt-6">
            * All return projections are net of fees and carried interest. Investing in early-stage venture funds involves substantial risk of loss.
          </p>
        </div>
      </section>

      {/* Fund Economics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-8">Fund Economics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  label: "Management Fee",
                  value: "2% annually",
                  desc: "Applied on committed capital over the 10-year fund life.",
                },
                {
                  label: "Carried Interest",
                  value: "20%",
                  desc: "Applied to net profits after return of principal and preferred return to LPs.",
                },
                {
                  label: "Preferred Return",
                  value: "Included",
                  desc: "LPs receive return of principal plus preferred return before carry is calculated.",
                },
              ].map(({ label, value, desc }) => (
                <div key={label} className="border-l-2 border-[#C9A84C] pl-5">
                  <div className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wide mb-1">
                    {label}
                  </div>
                  <div className="text-2xl font-bold text-[#1B3A2D] mb-1">{value}</div>
                  <div className="text-sm text-[#6B7280]">{desc}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#1B3A2D] rounded-xl p-8 text-white">
              <h3 className="font-bold text-xl mb-4">Why Grove Generates Alpha</h3>
              <div className="space-y-3">
                {[
                  "Pre-seed entry = lower valuation, more equity",
                  "Underserved niche = less competition for deals",
                  "Operational support = faster path to milestones",
                  "Industry network = faster enterprise sales cycles",
                  "Sector expertise = better due diligence, fewer surprises",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="text-[#C9A84C] mt-0.5">✓</span>
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1B3A2D] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Interested in learning more?</h2>
          <p className="text-white/70 mb-8">
            Request the full LP deck or schedule a call with the Grove team to discuss the fund in detail.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
          >
            Request LP Deck
          </Link>
          <p className="text-white/40 text-xs mt-6">
            Available to accredited investors only. This is not an offer to sell securities.
          </p>
        </div>
      </section>
    </>
  );
}
