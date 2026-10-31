import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { StarBurst } from "@/components/ui/StarBurst";
import { companyConfig } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#030712",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${companyConfig.name} | ${companyConfig.tagline}`,
    template: `%s | ${companyConfig.name}`,
  },
  description: companyConfig.description,
  keywords: [
    "Experiential Marketing Dubai",
    "Drone Light Shows UAE",
    "Ignispectra",
    "AI Photobooth",
    "Nexplay",
    "Robotics Brand Activations",
    "Interactive Kiosks",
    "Synapse",
    "3D Holograms",
    "Lumen Lab",
    "Cruxeo Experience",
  ],
  authors: [{ name: companyConfig.name }],
  creator: companyConfig.name,
  metadataBase: new URL("https://cruxeo.com"),
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://cruxeo.com",
    title: `${companyConfig.name} | Experiential Marketing & Creative Technology`,
    description: companyConfig.description,
    siteName: companyConfig.name,
    images: [
      {
        url: "/assets/brand/og-home.jpg",
        width: 1200,
        height: 630,
        alt: `${companyConfig.name} Experiential Technology`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyConfig.name} | Experiential Technology Dubai`,
    description: companyConfig.description,
    images: ["/assets/brand/og-home.jpg"],
  },
  icons: {
    icon: [
      { url: "/assets/logos/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/assets/logos/favicon.svg",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Cruxeo Experience",
    legalName: companyConfig.legalName,
    url: "https://cruxeo.com",
    logo: "https://cruxeo.com/assets/images/logo-light.png",
    image: "https://cruxeo.com/assets/brand/og-home.jpg",
    description: companyConfig.description,
    telephone: companyConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2048",
      longitude: "55.2708",
    },
    sameAs: [
      companyConfig.socials.instagram,
      companyConfig.socials.facebook,
      companyConfig.socials.youtube,
      companyConfig.socials.linkedin,
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-background text-slate-100 antialiased selection:bg-brand-blue selection:text-white w-full relative">
        <div id="top" />
        {/* Global Cosmic StarBurst Background Across All Pages */}
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
          <StarBurst
            speed={0.4}
            density={0.7}
            starCount={160}
            color="#38bdf8"
            starSize={0.26}
            brightness={1.3}
            opacity={0.85}
            centerX={0.5}
            centerY={0.0}
            flowerIntensity={0.35}
            twinkleSpeed={0.3}
            wobbleAmount={0.8}
            fadeHeight={5.0}
          />
        </div>
        <Navbar />
        <main className="min-h-screen w-full relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
