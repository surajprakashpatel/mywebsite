import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SURAJ PRAKASH PATEL | Systems Architect & GovTech Entrepreneur",
  description: "Personal portfolio and vision manifesto of SURAJ PRAKASH PATEL, building the digital infrastructure for municipal governance, smart automation, and heavy industry.",
  keywords: ["SURAJ PRAKASH PATEL", "Systems Architect", "GovTech", "Industrial Automation", "Kartavya", "Fleet Stack", "Reverse Auction", "TISS Incube"],
  authors: [{ name: "SURAJ PRAKASH PATEL" }],
  openGraph: {
    title: "SURAJ PRAKASH PATEL | Systems Architect & GovTech Entrepreneur",
    description: "Building the intelligence behind tomorrow's infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SURAJ PRAKASH PATEL | Systems Architect & GovTech Entrepreneur",
    description: "Building the intelligence behind tomorrow's infrastructure.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth h-full antialiased"
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-neutral-950 text-neutral-100 min-h-screen overflow-x-hidden selection:bg-neutral-850 selection:text-white">
        {children}
      </body>
    </html>
  );
}

