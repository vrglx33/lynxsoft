import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LynxSoft — Software Engineering & AI Automation Solutions",
  description:
    "LynxSoft delivers world-class custom software development and AI process automation that helps businesses scale faster, operate smarter, and outpace the competition.",
  keywords: [
    "software engineering",
    "AI automation",
    "custom software development",
    "machine learning",
    "business automation",
    "LynxSoft",
  ],
  authors: [{ name: "Alejandro Vega", url: "https://lynxsoft.com.co" }],
  openGraph: {
    title: "LynxSoft — Software Engineering & AI Automation",
    description:
      "Custom software and AI automation solutions that transform how businesses operate.",
    url: "https://lynxsoft.com.co",
    siteName: "LynxSoft",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "LynxSoft — Software Engineering & AI Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LynxSoft — Software Engineering & AI Automation",
    description:
      "Custom software and AI automation solutions that transform how businesses operate.",
    images: ["/hero-bg.png"],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://lynxsoft.com.co"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
