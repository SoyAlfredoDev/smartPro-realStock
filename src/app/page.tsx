"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Footer } from "@/components/sections/Footer";
import { SocialFloatingSidebar } from "@/components/ui/SocialFloatingSidebar";

export default function Home() {

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl font-semibold tracking-wide text-heading"
        >
          RealStock.
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center space-x-8 text-sm font-medium text-body"
        >
          <a href="#" className="hover:text-heading transition-colors">Catálogo</a>
          <a href="#" className="hover:text-heading transition-colors">Colecciones</a>
          <a href="#" className="hover:text-heading transition-colors">Precios</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <button className="text-sm font-medium text-body hover:text-heading transition-colors hidden sm:block">
            Iniciar sesión
          </button>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-brand text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-brand-hover transition-colors shadow-soft"
          >
            Suscribirse
          </motion.button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      <ContentSection />
      
      <Footer />

      <SocialFloatingSidebar />
    </main>
  );
}
