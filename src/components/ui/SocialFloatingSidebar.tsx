"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Share2, X } from "lucide-react";

/* ── Inline SVG Social Icons (lucide-react has no brand icons) ── */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

/* ── Social link data ── */

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
  { icon: LinkedInIcon, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: YouTubeIcon, href: "https://youtube.com", label: "YouTube" },
  { icon: TikTokIcon, href: "https://tiktok.com", label: "TikTok" },
];

/* ── Component ── */

export function SocialFloatingSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.08,
        delayChildren: 0.6,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 200, damping: 15 },
    },
  };

  const SocialIcons = () => (
    <>
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          variants={iconVariants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="text-body hover:text-terracota transition-colors duration-200 p-2"
        >
          <Icon className="w-[18px] h-[18px]" />
        </motion.a>
      ))}
    </>
  );

  return (
    <>
      {/* ── Desktop / Large Tablet: Fixed sidebar ── */}
      <motion.aside
        className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-1 bg-surface border border-border-default rounded-full px-2.5 py-4 shadow-soft"
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        aria-label="Redes sociales"
      >
        <SocialIcons />
      </motion.aside>

      {/* ── Mobile: Toggle button + expandable pill ── */}
      <div className="lg:hidden fixed right-4 bottom-6 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring" as const, stiffness: 300, damping: 25 }}
              className="flex flex-col items-center gap-1 bg-surface border border-border-default rounded-full px-2.5 py-4 shadow-hover"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring" as const, stiffness: 200, damping: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-body hover:text-terracota transition-colors duration-200 p-2"
                >
                  <Icon className="w-[18px] h-[18px]" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle FAB */}
        <motion.button
          onClick={() => setMobileOpen((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center shadow-soft hover:bg-brand-hover transition-colors cursor-pointer"
          aria-label={mobileOpen ? "Cerrar redes sociales" : "Ver redes sociales"}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Share2 className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
