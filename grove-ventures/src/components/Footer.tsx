import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B3A2D] text-white/70 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-white font-semibold text-lg mb-2">Grove Ventures</div>
          <p className="text-white/60 text-sm leading-relaxed">
            Early-stage capital and operational support for B2B SaaS founders in advanced manufacturing.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <div className="text-white font-medium mb-3">Navigation</div>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Grove" },
              { href: "/founders", label: "For Founders" },
              { href: "/investors", label: "For Investors" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <div className="text-white font-medium mb-3">Legal</div>
          <ul className="space-y-2">
            <li>
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal &amp; Disclosures
              </Link>
            </li>
            <li>
              <Link href="/legal#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-6">
        <p className="text-white/40 text-xs leading-relaxed">
          This website does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any offering is made only by means of a private placement memorandum to accredited investors. Investing in early-stage companies involves significant risk, including loss of principal.
        </p>
        <p className="text-white/40 text-xs mt-2">
          © {new Date().getFullYear()} Grove Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
