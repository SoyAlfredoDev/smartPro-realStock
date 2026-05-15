"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({ variant = "primary", children, icon, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full font-medium transition-all shadow-soft";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover hover:shadow-hover",
    secondary: "bg-secondary text-secondary-text border border-secondary-border hover:bg-accent-muted hover:shadow-hover"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
}
