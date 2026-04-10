import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Shubhay Clinic - Authentic Ayurved & Panchkarma in Pune",
  description: "Experience authentic Ayurvedic healing at Shubhay Clinic. Specializing in Panchkarma therapy, detox programs, and personalized health care in Moshi, Pune.",
  keywords: ["Ayurvedic Clinic in Pune", "Panchkarma Treatment in Moshi", "Best Ayurveda Doctor in Pune", "Shubhay Clinic"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

