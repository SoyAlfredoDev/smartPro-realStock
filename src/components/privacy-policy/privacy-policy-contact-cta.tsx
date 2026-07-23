"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { privacyPolicyContactCta } from "@/constants/privacy-policy";
import { siteConfig } from "@/constants/site";

export function PrivacyPolicyContactCta() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      id={privacyPolicyContactCta.id}
      aria-labelledby={`${privacyPolicyContactCta.id}-title`}
      className="scroll-mt-28"
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-surface to-surface p-6 shadow-soft sm:p-8">
        <div
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl"
          aria-hidden
        />

        <div className="relative space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-terracota">
            {privacyPolicyContactCta.eyebrow}
          </p>
          <h2
            id={`${privacyPolicyContactCta.id}-title`}
            className="text-xl font-bold tracking-tight text-heading sm:text-2xl"
          >
            {privacyPolicyContactCta.title}
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-body sm:text-base">
            {privacyPolicyContactCta.description}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-border-default bg-surface px-4 py-3 text-sm font-medium text-heading shadow-soft transition-all duration-200 hover:border-terracota/40 hover:text-terracota"
            >
              Ir al sitio {siteConfig.name}
              <ArrowRight className="h-4 w-4 shrink-0 text-terracota" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
