"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SlideInLeftRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SlideInLeft = ({
  children,
  className = "",
  delay = 0,
}: SlideInLeftRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60, rotate: -1 }}
      animate={
        isInView
          ? { opacity: 1, x: 0, rotate: 0 }
          : { opacity: 0, x: -60, rotate: 1.5 }
      }
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.33, 1, 0.68, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInLeft;
