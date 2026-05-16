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

export const metadata: Metadata = {
  title: "RealStock | Minimal Sophisticated Latin",
  description: "Plataforma premium de material audiovisual de alta calidad de Latinoamérica.",
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
