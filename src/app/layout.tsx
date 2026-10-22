import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const title = "Kairo Pursuit | Software for the trades";
const description =
  "Kairo Pursuit builds tasked, which picks the best fit tech for every job, and websites for local service businesses. Based in San Luis Obispo, CA.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kairopursuit.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://kairopursuit.com",
    siteName: "Kairo Pursuit",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&display=swap"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
