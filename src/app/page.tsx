"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {

  return (
    <main className="min-h-screen pb-24">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl font-semibold tracking-wide"
        >
          RealStock.
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary"
        >
          <a href="#" className="hover:text-primary transition-colors">Catálogo</a>
          <a href="#" className="hover:text-primary transition-colors">Colecciones</a>
          <a href="#" className="hover:text-primary transition-colors">Precios</a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <button className="text-sm font-medium text-secondary hover:text-primary transition-colors hidden sm:block">
            Iniciar sesión
          </button>
          <button className="bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-primary-hover transition-colors shadow-soft">
            Suscribirse
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      <ContentSection />
      
      <Footer />
    </main>
  );
}
