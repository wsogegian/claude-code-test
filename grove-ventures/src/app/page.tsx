import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B3A2D] text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-4">
            Early-Stage Venture · Industry 4.0
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Capital and Conviction for Industry 4.0 Founders
          </h1>
          <p className="text-white/70 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Grove Ventures backs pre-revenue B2B SaaS founders in advanced manufacturing — with capital, operational support, and an industry network that opens doors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/founders"
              className="bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
            >
              I&apos;m a Founder →
            </Link>
            <Link
              href="/investors"
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded text-lg hover:bg-white/10 transition-colors"
            >
              I&apos;m an Investor →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Grove */}
      <section className="py-24 px-6 bg-[#F8F6F1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D] mb-4">Why Grove?</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Grove is not a traditional VC. We&apos;re a hands-on partner built specifically for the complexity of Industry 4.0.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💡",
                title: "Founder-First Capital",
                desc: "Convertible note structure designed to preserve your equity and keep you in control at the earliest stage.",
              },
              {
                icon: "⚙️",
                title: "Operational Support",
                desc: "Dedicated operational team and a growth activation playbook tailored to B2B SaaS in manufacturing.",
              },
              {
                icon: "🏭",
                title: "Industry Advisory Board",
                desc: "A network of manufacturing executives and operators who open doors to your first enterprise customers.",
              },
              {
                icon: "🎯",
                title: "Sector Expertise",
                desc: "We only invest in Industry 4.0. That focus means we understand your market, your buyers, and your path to growth.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E0D8]"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="text-[#1B3A2D] font-semibold text-lg mb-2">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
                Investment Thesis
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1B3A2D] mb-6">
                The Industry 4.0 Opportunity Is Now
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Global manufacturers are under unprecedented pressure to digitize. Legacy systems are failing, labor costs are rising, and the gap between industrial technology needs and available software solutions is enormous — and growing.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Grove invests at the intersection of that gap: pre-revenue B2B SaaS companies building the software layer for the next generation of manufacturing. We enter early, when the risk is highest — and when our operational support has the most impact.
              </p>
            </div>
            <div className="bg-[#1B3A2D] rounded-xl p-8 text-white">
              <div className="text-5xl font-bold text-[#C9A84C] mb-2">$627B</div>
              <div className="text-white/70 text-sm mb-6">Global Industry 4.0 market by 2030</div>
              <div className="space-y-4">
                {[
                  "Policy tailwinds: CHIPS Act, DOE funding",
                  "Massive digitization gap in manufacturing",
                  "Underserved by traditional VC and PE",
                  "Pre-seed entry = maximum upside potential",
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

      {/* CTA Strip */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-[#6B7280] text-lg mb-8">
            Whether you&apos;re building in Industry 4.0 or looking for private market exposure, Grove wants to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1B3A2D] text-white font-semibold px-8 py-4 rounded text-lg hover:bg-[#2a5642] transition-colors"
          >
            Talk to Grove
          </Link>
        </div>
      </section>
    </>
  );
}
