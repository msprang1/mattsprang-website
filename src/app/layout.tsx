import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Matt Sprang | Coaching for Small Business Owners | Greater Philadelphia",
    template: "%s | Matt Sprang",
  },
  description:
    "I coach small business owners to grow revenue, profit, and company value — without giving the business more of themselves. Founder. Built to $1.2M and sold for seven figures in 2024.",
  metadataBase: new URL("https://mattsprang.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mattsprang.com",
    siteName: "Matt Sprang",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-off-white text-body-text">
        {/* Google Analytics placeholder — replace GA_MEASUREMENT_ID with your GA4 ID */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" /> */}
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
