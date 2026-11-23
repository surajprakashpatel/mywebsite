import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Suraj Prakash Patel — Entrepreneur, Technologist & Explorer of Ideas",
    template: "%s | Suraj Prakash Patel",
  },
  description:
    "Personal website, founder's story, professional portfolio, and living archive of Suraj Prakash Patel. Building software, exploring ideas, and figuring out the world along the way.",
  keywords: [
    "Suraj Prakash Patel",
    "Suraj Patel",
    "Entrepreneur",
    "Technologist",
    "Curiosity Lab",
    "Kartavya",
    "Cosmobyte Technologies",
    "GovTech",
    "Software Architecture",
    "Raigarh Chhattisgarh",
  ],
  authors: [{ name: "Suraj Prakash Patel" }],
  creator: "Suraj Prakash Patel",
  metadataBase: new URL("https://surajpatel.com"),
  openGraph: {
    title: "Suraj Prakash Patel — Entrepreneur & Technologist",
    description:
      "Building things, exploring ideas, and figuring out the world along the way. Founder of Curiosity Lab & Kartavya.",
    type: "website",
    locale: "en_US",
    siteName: "Suraj Prakash Patel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Prakash Patel — Entrepreneur & Technologist",
    description: "Building things, exploring ideas, and figuring out the world along the way.",
    creator: "@surajpatel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth h-full antialiased">
      <body className="bg-white text-neutral-900 min-h-screen flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
