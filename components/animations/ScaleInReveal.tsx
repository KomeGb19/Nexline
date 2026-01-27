"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScaleInRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const ScaleInReveal = ({
  children,
  className = "",
  delay = 0,
}: ScaleInRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleInReveal;
