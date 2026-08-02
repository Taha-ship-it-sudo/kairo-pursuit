import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/content/site";
import "./globals.css";

const display = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Consulting & AI Automation`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Kairo Pursuit helps small businesses win more work and waste less time — consulting, AI tooling, and full systems management. Based in San Luis Obispo, CA; serving California, Texas, and Colorado.",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Consulting & AI Automation`,
    description:
      "Consulting and AI automation for small businesses across California, Texas, and Colorado.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Consulting & AI Automation`,
    description:
      "Consulting and AI automation for small businesses across California, Texas, and Colorado.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
