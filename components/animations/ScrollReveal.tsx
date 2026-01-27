"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number; // how much must be shown before activating
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  amount = 0.1,
}: Props) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    margin: "0px 0px -15% 0px",
    amount, // how much of element must enter to trigger reveal
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{
        duration: 0.75,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
