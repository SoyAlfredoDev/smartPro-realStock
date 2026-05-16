"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, Camera, Zap, Globe2 } from "lucide-react";

import { Button } from "../ui/Button";
import { Title } from "../ui/Title";
import { FeatureBadge } from "../ui/FeatureBadge";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 }
    },
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 25 }
    },
  };

  return (
    <section className="px-6 md:px-12 pt-12 pb-24 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center">
        
        {/* Left Column: Content */}
        <motion.div 
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-accent-muted text-muted px-4 py-1.5 rounded-full text-xs font-semibold mb-8 uppercase tracking-widest"
          >
            <span>Contenido Audiovisual Latino</span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Title 
              text="Contenido real para marcas reales." 
              highlight="marcas reales" 
            />
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-body mb-12 max-w-md leading-relaxed font-light"
          >
            Descubre y licencia imágenes y videos premium que capturan la verdadera identidad, cultura y diversidad de Latinoamérica. Sin estereotipos.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <Button variant="primary" icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}>
              Explorar biblioteca
            </Button>
            <Button variant="secondary" icon={<Play className="w-4 h-4" />}>
              Ver planes
            </Button>
          </motion.div>

          {/* Feature Badges Row */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
          >
            <FeatureBadge 
              icon={<Camera className="w-5 h-5" />}
              title="Representación real"
              description="Creadores locales mostrando la vida cotidiana."
            />
            <FeatureBadge 
              icon={<Zap className="w-5 h-5" />}
              title="Listo para usar"
              description="Resolución nativa 4K/8K para uso comercial."
            />
            <FeatureBadge 
              icon={<Globe2 className="w-5 h-5" />}
              title="Hecho en Latinoamérica"
              description="Cultura auténtica y diversidad regional."
            />
          </motion.div>
        </motion.div>

        {/* Right Column: Gallery */}
        <motion.div 
          className="h-[600px] xl:h-[700px] w-full grid grid-cols-3 grid-rows-3 gap-3 md:gap-4"
          variants={galleryVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Large Image (2x2) */}
          <motion.div 
            className="col-span-2 row-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border-default"
            variants={imageItemVariants}
          >
            <Image 
              src="/fashion.png" 
              alt="Latin fashion lifestyle" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </motion.div>

          {/* Top Right (1x1) */}
          <motion.div 
            className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border-default"
            variants={imageItemVariants}
          >
            <Image 
              src="/coffee.png" 
              alt="Cafe interaction" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Middle Right (1x1) */}
          <motion.div 
            className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border-default"
            variants={imageItemVariants}
          >
            <Image 
              src="/artisan.png" 
              alt="Ceramics artisan" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Left (1x1) */}
          <motion.div 
            className="col-span-1 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border-default"
            variants={imageItemVariants}
          >
            <Image 
              src="/architecture.png" 
              alt="Modern architecture" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Right Span (2x1) */}
          <motion.div 
            className="col-span-2 row-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-soft border border-border-default"
            variants={imageItemVariants}
          >
            <Image 
              src="/street_food.png" 
              alt="Authentic street food" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
