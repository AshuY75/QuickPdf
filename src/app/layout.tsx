import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://quickpdf-4yrd.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "QuickPDF – Free Online PDF Tools",
    template: "%s | QuickPDF",
  },

  description:
    "Free online PDF tools to merge, compress, convert images to PDF, and convert PDF to PNG. No signup required.",

  alternates: {
    canonical: "/",
  },
  other: {
    "google-site-verification": "StEtyUU1L8laimWJiNL0rZzhTUaHHkhMrRHGG92-Q00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
