"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroRevealProps {
  children: ReactNode;
  className?: string;
}

const HeroReveal = ({ children, className = "" }: HeroRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HeroReveal;
