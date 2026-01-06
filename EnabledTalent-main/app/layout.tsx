import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Enabled Talent - Inclusive Employment Platform",
    template: "%s | Enabled Talent"
  },
  description: "Building infrastructure for meaningful employment. Connecting diverse talent with forward-thinking employers through accessible, inclusive hiring solutions.",
  keywords: ["inclusive hiring", "disability employment", "accessible jobs", "DEI hiring", "talent platform"],
  authors: [{ name: "Enabled Talent" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Enabled Talent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        {/* Skip Navigation Link - WCAG 2.4.1 Bypass Blocks */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}

