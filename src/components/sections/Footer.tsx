"use client";

import { motion } from "framer-motion";
import { Camera, Briefcase, Video, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border-default pt-24 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="font-serif text-3xl font-semibold tracking-wide text-heading mb-6">
              RealStock.
            </span>
            <p className="text-body text-sm leading-relaxed mb-8 max-w-xs font-light">
              Contenido auténtico y real que conecta con la identidad latinoamericana.
            </p>
            <div className="flex items-center space-x-5">
              {[Camera, Briefcase, Video].map((Icon, idx) => (
                <motion.a 
                  key={idx}
                  href="#"
                  className="text-body hover:text-terracota transition-colors"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-bold text-heading text-sm mb-2">Explorar</h4>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Biblioteca</a>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Categorías</a>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Membresías</a>
          </div>

          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-bold text-heading text-sm mb-2">Compañía</h4>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Para Empresas</a>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Sobre Nosotros</a>
            <a href="#" className="text-body text-sm hover:text-heading transition-colors font-light">Soporte</a>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-bold text-heading text-sm mb-4">Suscríbete al newsletter</h4>
            <p className="text-body text-sm font-light mb-6">
              Recibe las últimas colecciones y recursos visuales premium en tu bandeja de entrada.
            </p>
            <form className="flex items-center w-full relative max-w-sm">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full bg-main border border-border-default rounded-full py-3.5 pl-6 pr-16 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-terracota transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand text-white rounded-full w-10 flex items-center justify-center hover:bg-brand-hover transition-colors shadow-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-default flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-light">
            © {currentYear} RealStock. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-muted text-xs hover:text-heading transition-colors">Términos de Servicio</a>
            <a href="/politica-privacidad" className="text-muted text-xs hover:text-heading transition-colors">Políticas de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
