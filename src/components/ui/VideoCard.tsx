"use client";

import { Play, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface VideoCardProps {
  imageSrc: string;
  title: string;
  location: string;
  duration: string;
}

export function VideoCard({ imageSrc, title, location, duration }: VideoCardProps) {
  return (
    <motion.div 
      className="group flex flex-col cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-soft border border-border-default">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover" 
          />
        </motion.div>
        
        {/* Play button overlay — white-on-dark overlay is intentional here */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/15 transition-colors duration-300">
          <div className="w-14 h-14 bg-surface/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-surface/40 shadow-soft transform group-hover:scale-110 transition-transform duration-300">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-heading/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
          {duration}
        </div>
      </div>

      {/* Details */}
      <h3 className="font-bold text-heading text-base mb-1.5 line-clamp-1">{title}</h3>
      <div className="flex items-center text-muted space-x-1.5">
        <MapPin className="w-3.5 h-3.5 text-terracota shrink-0" />
        <span className="text-sm truncate">{location}</span>
      </div>
    </motion.div>
  );
}
