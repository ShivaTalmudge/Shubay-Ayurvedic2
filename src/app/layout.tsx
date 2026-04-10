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
  title: "Shubhay Clinic - Dr. Sameer Deshmukh | Ayurvedic Clinic & Panchkarma in Pune",
  description: "Visit Dr. Sameer Deshmukh at Shubhay Clinic (Moshi, Pune) for authentic Ayurvedic treatments, Panchkarma, Obesity treatment, PCOD, and chronic healing. Rooted in tradition.",
  keywords: ["Dr. Sameer Deshmukh", "Ayurvedic Clinic in Moshi Pune", "Shubhay Clinic Pune", "Panchkarma Treatment in Pune", "Ayurvedic Doctor for PCOD", "Obesity treatment Pune"],
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

