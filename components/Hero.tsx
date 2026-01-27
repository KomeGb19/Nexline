"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import HeroReveal from "./animations/HeroReveal";
import { motion } from "framer-motion";

const pillItems = [
  {
    id: 1,
    text: "Predictable traffic",
    color: "bg-secondary-4",
    textColor: "secondary-3",
    rotate: "rotate-5",
  },
  {
    id: 2,
    text: "Measurable growth",
    color: "bg-primary-1",
    textColor: "primary-2",
    rotate: "rotate-2",
  },
  {
    id: 3,
    text: "One Intelligent Platform",
    color: "bg-secondary-1",
    textColor: "secondary-2",
    rotate: "-rotate-2",
  },
];

const pillVariants = {
  hidden: (index: number) => ({
    y: -100,
    opacity: 0,
    rotate: index === 0 ? 5 : index === 1 ? 2 : -2,
  }),
  visible: (index: number) => ({
    y: 0,
    opacity: 1,
    rotate: index === 0 ? 5 : index === 1 ? 2 : -2,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
      delay: 0.2 + index * 0.15,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative h-svh w-full flex items-center justify-center bg-primary-4">
      <Image
        src="/herobg.svg"
        alt="Nexline Services"
        fill
        loading="eager"
        className="object-cover"
      />
      <Image
        src="/marketing.svg"
        alt="Nexline Services"
        width={1000}
        height={1000}
        loading="eager"
        className="absolute -bottom-35 w-100 h-100"
      />
      <HeroReveal>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-2 mb-2">
            {pillItems.map((item, index) => (
              <motion.div
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={pillVariants}
                className={`${item.color} ${item.rotate} text-${item.textColor} md:py-2 px-4 rounded-full`}
              >
                <p className="text-sm font-medium">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-2">
            Power in Visibility.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-2 mb-6">
            Precision in numbers.
          </h1>
          <p className="text-lg md:text-2xl font-medium text-primary-2 mb-8 max-w-2xl">
            We help service businesses get more qualified leads with SEO and
            performance marketing.
          </p>
          <Button className="bg-primary-2 hover:bg-transparent hover:text-primary-2 hover:border hover:border-primary-2 text-primary-3 px-6 py-5 rounded-full text-lg font-medium transition">
            Get a Free Quote
          </Button>
        </div>
      </HeroReveal>
    </section>
  );
}
