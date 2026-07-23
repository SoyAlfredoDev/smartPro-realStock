import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/sections/Footer";
import PrivacyPolicyView from "@/components/privacy-policy/privacy-policy-view";
import { privacyPolicyMeta } from "@/constants/privacy-policy";
import { siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: privacyPolicyMeta.title,
  description: `Conoce cómo ${siteConfig.name} trata tus datos personales conforme a la Ley chilena N° 21.719 sobre protección de datos personales.`,
  alternates: {
    canonical: `${siteConfig.url}${privacyPolicyMeta.path}`,
  },
  openGraph: {
    title: privacyPolicyMeta.title,
    description: `Conoce cómo ${siteConfig.name} trata tus datos personales conforme a la Ley chilena N° 21.719.`,
    url: `${siteConfig.url}${privacyPolicyMeta.path}`,
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-main">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-heading"
        >
          RealStock.
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-body transition-colors hover:text-heading"
        >
          Volver al inicio
        </Link>
      </nav>
      <PrivacyPolicyView />
      <Footer />
    </main>
  );
}
