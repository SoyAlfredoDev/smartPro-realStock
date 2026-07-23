"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Briefcase, Video, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

  function handleNewsletterSubmit(event: FormEvent<HTMLFormElement>) {
    if (!acceptPrivacy) {
      event.preventDefault();
      setPrivacyError(true);
      return;
    }

    setPrivacyError(false);
    // UI-only newsletter for now; consent is mandatory before any future submit.
    event.preventDefault();
  }

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
            <form
              className="flex flex-col gap-3 w-full max-w-sm"
              onSubmit={handleNewsletterSubmit}
              noValidate
            >
              <div className="relative flex items-center w-full">
                <input 
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  placeholder="Tu correo electrónico" 
                  className="w-full bg-main border border-border-default rounded-full py-3.5 pl-6 pr-16 text-sm text-heading placeholder:text-muted focus:outline-none focus:border-terracota transition-colors"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand text-white rounded-full w-10 flex items-center justify-center hover:bg-brand-hover transition-colors shadow-sm"
                  aria-label="Suscribirse al newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>

              <label className="flex items-start gap-2.5 text-xs leading-relaxed text-body font-light">
                <input
                  type="checkbox"
                  checked={acceptPrivacy}
                  onChange={(event) => {
                    setAcceptPrivacy(event.target.checked);
                    if (event.target.checked) setPrivacyError(false);
                  }}
                  required
                  aria-invalid={privacyError}
                  className="mt-0.5 size-3.5 shrink-0 accent-brand"
                />
                <span>
                  Autorizo el tratamiento de mis datos personales conforme a la
                  legislación chilena vigente (Ley N° 21.719) y la{" "}
                  <Link
                    href="/politica-privacidad"
                    className="font-medium text-heading underline-offset-2 hover:underline"
                  >
                    política de privacidad
                  </Link>
                  .
                </span>
              </label>

              {privacyError ? (
                <p className="text-xs text-red-700" role="alert">
                  Debes autorizar el tratamiento de tus datos personales para
                  continuar.
                </p>
              ) : null}
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
