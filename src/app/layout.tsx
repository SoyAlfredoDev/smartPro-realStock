import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

/* ════════════════════════════════════════════════════════════
   SEO — Global Metadata (Next.js Metadata API)
   ════════════════════════════════════════════════════════════
   OG Image Strategy:
   - `src/app/opengraph-image.png`  → auto-discovered by Next.js
   - `src/app/twitter-image.png`    → auto-discovered by Next.js
   Next.js injects the correct <meta> tags (incl. dimensions)
   at build time without any manual <meta> in JSX.
   ════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  metadataBase: new URL("https://realstock.vercel.app"),

  title: {
    default: "RealStock — Contenido Audiovisual Latinoamericano Auténtico y Premium",
    template: "%s | RealStock",
  },

  description:
    "Tu fuente número uno de imágenes, videos y reels auténticos de Latinoamérica. Contenido real de alta calidad para marcas reales.",

  keywords: [
    "RealStock",
    "stock latino",
    "contenido audiovisual",
    "imágenes premium",
    "videos auténticos",
    "reels",
    "Chile",
    "Latinoamérica",
    "stock photography",
    "video stock",
  ],

  authors: [{ name: "RealStock" }],
  creator: "RealStock",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "RealStock — Contenido Audiovisual Latinoamericano Auténtico y Premium",
    description:
      "Tu fuente número uno de imágenes, videos y reels auténticos de Latinoamérica. Contenido real de alta calidad para marcas reales.",
    url: "https://realstock.vercel.app",
    siteName: "RealStock",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "RealStock — Contenido Real para Marcas Reales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RealStock — Contenido Audiovisual Latinoamericano Auténtico y Premium",
    description:
      "Tu fuente número uno de imágenes, videos y reels auténticos de Latinoamérica.",
    images: ["/twitter-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-main text-heading font-sans antialiased selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  );
}
