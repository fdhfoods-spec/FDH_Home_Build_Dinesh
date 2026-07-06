import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Fresh Direct Home (FDH) | Fresh. Trusted. Delivered.",
    template: "%s | Fresh Direct Home",
  },
  description:
    "Fresh Direct Home connects families with verified local vendors and home chefs for farm-fresh groceries, hygienic packaging, and scheduled delivery.",
  keywords: [
    "fresh groceries delivery",
    "verified local vendors",
    "home chef marketplace",
    "farm to home delivery",
    "scheduled grocery delivery",
    "FDH",
  ],
  openGraph: {
    title: "Fresh Direct Home (FDH)",
    description:
      "A premium food lifestyle marketplace for farm-fresh essentials and authentic home chef meals.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${playfair.variable} min-h-full antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
