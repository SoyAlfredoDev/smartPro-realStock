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
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Thumbnail Container */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-soft border border-border-subtle">
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
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 fill-white ml-1" />
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm border border-white/10">
          {duration}
        </div>
      </div>

      {/* Details */}
      <h3 className="font-bold text-primary text-lg mb-1.5 line-clamp-1">{title}</h3>
      <div className="flex items-center text-muted space-x-1.5">
        <MapPin className="w-4 h-4 text-accent shrink-0" />
        <span className="text-sm truncate">{location}</span>
      </div>
    </motion.div>
  );
}
