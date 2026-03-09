export const metadata = {
  title: "Legal & Disclosures — Grove Ventures",
  description: "Legal disclaimers, Regulation D notices, and privacy policy for Grove Ventures.",
};

export default function Legal() {
  return (
    <>
      <section className="bg-[#1B3A2D] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl font-bold mb-4">Legal &amp; Disclosures</h1>
          <p className="text-white/70">Last updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#F8F6F1]">
        <div className="max-w-3xl mx-auto space-y-12 text-[#6B7280] text-sm leading-relaxed">

          {/* Investment Disclaimer */}
          <div>
            <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Investment Disclaimer</h2>
            <p className="mb-3">
              This website and its contents are for informational purposes only and do not constitute an offer to sell or a solicitation of an offer to purchase any securities. Any offering of securities by Grove Ventures will be made only pursuant to a private placement memorandum (PPM) and only to accredited investors as defined under Rule 501 of Regulation D promulgated under the Securities Act of 1933, as amended.
            </p>
            <p className="mb-3">
              Investing in early-stage venture funds involves substantial risk, including the risk of total loss of capital. Past performance is not indicative of future results. The return scenarios and projections presented on this website are illustrative only and are not guarantees of actual future performance.
            </p>
            <p>
              Prospective investors should carefully review all offering documents, including the PPM and limited partnership agreement, before making any investment decision. Grove Ventures strongly recommends that prospective investors consult with their own legal, tax, and financial advisors before investing.
            </p>
          </div>

          {/* Regulation D Notice */}
          <div>
            <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Regulation D Notice</h2>
            <p className="mb-3">
              Grove Ventures intends to offer interests in its fund pursuant to exemptions from registration under the Securities Act of 1933 and applicable state securities laws, including Rule 506(b) or Rule 506(c) of Regulation D. The fund interests have not been registered under the Securities Act or any state securities laws and may not be resold or transferred without registration or an applicable exemption.
            </p>
            <p>
              This website does not constitute general solicitation or general advertising in connection with any securities offering unless and until Grove Ventures has filed the appropriate Form D with the U.S. Securities and Exchange Commission.
            </p>
          </div>

          {/* Forward-Looking Statements */}
          <div>
            <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Forward-Looking Statements</h2>
            <p>
              This website may contain forward-looking statements, including statements regarding projected returns, market opportunities, and investment strategy. These statements involve known and unknown risks and uncertainties that could cause actual results to differ materially from those projected. Grove Ventures undertakes no obligation to update any forward-looking statements contained on this website.
            </p>
          </div>

          {/* Privacy Policy */}
          <div id="privacy">
            <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">Privacy Policy</h2>
            <p className="mb-3">
              <strong className="text-[#2C2C2C]">Information We Collect:</strong> When you submit an inquiry through our contact form, we collect your name, email address, company, role, and the contents of your message. We may also collect anonymized analytics data through Google Analytics 4 regarding how visitors use this website.
            </p>
            <p className="mb-3">
              <strong className="text-[#2C2C2C]">How We Use It:</strong> Information collected through our contact form is used solely to respond to your inquiry and to evaluate potential business relationships. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
            <p className="mb-3">
              <strong className="text-[#2C2C2C]">Data Retention:</strong> We retain contact form submissions for a period of up to 2 years. You may request deletion of your information at any time by contacting us directly.
            </p>
            <p className="mb-3">
              <strong className="text-[#2C2C2C]">Cookies:</strong> This website uses cookies for analytics purposes. You may disable cookies in your browser settings; however, some functionality may be affected. By continuing to use this site, you consent to our use of analytics cookies.
            </p>
            <p>
              <strong className="text-[#2C2C2C]">Contact:</strong> For privacy-related inquiries, please contact us at{" "}
              <a href="mailto:hello@groveventures.com" className="text-[#1B3A2D] underline">
                hello@groveventures.com
              </a>
              .
            </p>
          </div>

          {/* No Legal Advice */}
          <div>
            <h2 className="text-xl font-bold text-[#1B3A2D] mb-4">No Legal or Financial Advice</h2>
            <p>
              Nothing on this website constitutes legal, tax, financial, or investment advice. All information is provided for general informational purposes only. You should consult qualified professionals regarding your specific circumstances before making any investment, legal, or financial decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
