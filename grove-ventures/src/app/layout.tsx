import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grove Ventures — Capital and Conviction for Industry 4.0 Founders",
  description:
    "Grove Ventures is an early-stage investment firm focused on B2B SaaS companies in advanced manufacturing. We provide capital, operational support, and industry-specific expertise.",
  openGraph: {
    title: "Grove Ventures",
    description: "Capital and Conviction for Industry 4.0 Founders",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
