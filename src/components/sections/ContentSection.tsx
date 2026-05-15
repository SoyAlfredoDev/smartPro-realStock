"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Grid2x2 } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { InfoBox } from "../ui/InfoBox";
import { VideoCard } from "../ui/VideoCard";
import { Button } from "../ui/Button";

const MOCK_VIDEOS = [
  {
    id: 1,
    title: "Mercado tradicional",
    location: "CDMX, México",
    duration: "00:19",
    imageSrc: "/street_food.png",
  },
  {
    id: 2,
    title: "Amigos en café",
    location: "Bogotá, Colombia",
    duration: "00:24",
    imageSrc: "/coffee.png",
  },
  {
    id: 3,
    title: "Artesana trabajando arcilla",
    location: "Cusco, Perú",
    duration: "00:15",
    imageSrc: "/artisan.png",
  },
  {
    id: 4,
    title: "Tarde en la playa",
    location: "Santa Marta, Colombia",
    duration: "00:32",
    imageSrc: "/beach.png",
  },
];

export function ContentSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 20 }
    },
  };

  return (
    <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto w-full relative">
      {/* Top Block: Header & Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
        <div className="lg:col-span-8">
          <SectionHeader 
            label="Nuestra solución"
            title="Contenido real que representa lo que vivimos."
            highlight="lo que vivimos"
            description="Olvídate de las fotos de stock genéricas. Licenciamos clips y fotos que capturan la belleza cotidiana y la diversidad real de Latinoamérica, curados con una estética cinematográfica premium."
          />
        </div>
        <div className="lg:col-span-4 h-full">
          <InfoBox 
            icon={<Sparkles className="w-6 h-6" />}
            title="Representación real"
            description="Nos aseguramos de que cada recurso visual comunique autenticidad y conecte directamente con la identidad local."
          />
        </div>
      </div>

      {/* Center Block: Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {MOCK_VIDEOS.map((video) => (
          <motion.div key={video.id} variants={itemVariants}>
            <VideoCard {...video} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Block: Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}>
          Explorar más videos
        </Button>
        <Button variant="secondary" icon={<Grid2x2 className="w-4 h-4" />}>
          Ver todas las categorías
        </Button>
      </div>
    </section>
  );
}
