import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mercer Studio — Private Residence Design",
  description:
    "We compose spaces where light, material, and silence find their place. Bespoke interior design for private residences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} ${cormorant.variable} antialiased`}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-foreground focus:text-background focus:text-sm"
        >
          Skip to content
        </a>
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", fontFamily: "serif", fontSize: "1.2rem" }}>
            Please enable JavaScript to view this site.
          </div>
        </noscript>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
