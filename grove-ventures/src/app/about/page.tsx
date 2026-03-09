import Link from "next/link";

export const metadata = {
  title: "About Grove Ventures — Our Story, Mission, and Team",
  description:
    "Learn about Grove Ventures, our investment philosophy, and our approach to backing early-stage B2B SaaS founders in Industry 4.0.",
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1B3A2D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            About Grove
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Built for the Builders Modernizing Manufacturing
          </h1>
          <p className="text-white/70 text-xl leading-relaxed max-w-2xl">
            Grove Ventures exists because the most important software companies of the next decade are being built in a sector that traditional venture capital doesn&apos;t understand.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1B3A2D] mb-6">Our Mission</h2>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Grove Ventures was founded on a simple premise: the best early-stage investment opportunities in software are hiding in plain sight inside the manufacturing sector — and most investors are missing them entirely.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-4">
                Traditional venture capital moves fast, chases consumer software, and rarely has the patience or expertise to support a technical founder navigating the long, complex sales cycles of enterprise manufacturing. We are different by design.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                We blend the early-stage capital access of a venture firm with the operational intensity of private equity — providing not only funding, but a growth activation playbook, an industry-specific advisory board, and dedicated operational support at every stage.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  label: "Fund Focus",
                  value: "B2B SaaS · Industry 4.0 · Advanced Manufacturing",
                },
                { label: "Stage", value: "Pre-revenue, seed-stage companies" },
                { label: "Fund Structure", value: "Regulation D Limited Partnership" },
                { label: "Fund Size", value: "$25M target" },
                { label: "Check Size", value: "$50K – $500K via convertible note" },
              ].map(({ label, value }) => (
                <div key={label} className="border-l-2 border-[#C9A84C] pl-4">
                  <div className="text-xs font-semibold text-[#C9A84C] uppercase tracking-wide mb-1">
                    {label}
                  </div>
                  <div className="text-[#1B3A2D] font-medium">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-8">Investment Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Enter Early",
                desc: "We invest at the pre-revenue stage — before the market has priced in the opportunity. Early entry means more equity, more impact, and more runway to shape the outcome.",
              },
              {
                title: "Stay Hands-On",
                desc: "We don't write checks and wait. Our operational team works alongside portfolio companies on GTM strategy, product development, and enterprise sales — for as long as it takes.",
              },
              {
                title: "Leverage the Network",
                desc: "Our advisory board is composed of manufacturing executives and operators with direct access to enterprise buyers. That network is a strategic asset for every company we back.",
              },
            ].map(({ title, desc }) => (
              <div key={title}>
                <h3 className="text-[#1B3A2D] font-semibold text-lg mb-3">{title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-[#F8F6F1]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-10">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Managing Partner */}
            <div className="bg-white rounded-xl p-8 border border-[#E5E0D8]">
              <div className="w-16 h-16 rounded-full bg-[#1B3A2D] flex items-center justify-center text-white text-2xl font-bold mb-4">
                WS
              </div>
              <h3 className="text-[#1B3A2D] font-bold text-xl mb-1">Will Sogegian</h3>
              <div className="text-[#C9A84C] text-sm font-medium mb-4">Founder &amp; Managing Partner</div>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Bio coming soon. Will brings a background in B2B SaaS, operations, and early-stage investing with a focus on the advanced manufacturing sector.
              </p>
            </div>

            {/* GP placeholder */}
            <div className="bg-white rounded-xl p-8 border border-[#E5E0D8] border-dashed">
              <div className="w-16 h-16 rounded-full bg-[#E5E0D8] flex items-center justify-center text-[#6B7280] text-2xl font-bold mb-4">
                GP
              </div>
              <h3 className="text-[#1B3A2D] font-bold text-xl mb-1">General Partner</h3>
              <div className="text-[#C9A84C] text-sm font-medium mb-4">Hiring Now</div>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                Grove is actively recruiting a General Partner with deep operator experience in manufacturing technology. Interested? Reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B3A2D] mb-4">Advisory Board</h2>
          <p className="text-[#6B7280] text-lg mb-8 max-w-xl mx-auto">
            Grove&apos;s advisory board brings direct operational experience in advanced manufacturing, enterprise sales, and industrial technology. Board members are being announced post-launch.
          </p>
          <div className="inline-block bg-[#F8F6F1] border border-[#E5E0D8] rounded-xl px-8 py-6 text-[#6B7280] text-sm">
            Advisory board announcements coming soon.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1B3A2D] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Interested in working with Grove?</h2>
          <p className="text-white/70 mb-8">
            Whether you&apos;re a founder, a prospective LP, or an industry expert interested in joining the advisory board — we want to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#C9A84C] text-[#1B3A2D] font-semibold px-8 py-4 rounded text-lg hover:bg-[#b8963e] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
