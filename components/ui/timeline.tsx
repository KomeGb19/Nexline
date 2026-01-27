"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import SlideInLeft from "../animations/SlideInLeft";
import ScrollReveal from "../animations/ScrollReveal";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className=" flex flex-col items-center w-full text-primary-3 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-8 md:mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-5xl mb-3 md:mb-4 text-secondary-2 font-bold max-w-4xl px-4">
            Our Trust Process
          </h2>
          <p className="text-lg md:text-xl text-primary-3 max-w-2xl px-4">
            Transformation in every step, the alignment for growth
          </p>
        </div>
      </ScrollReveal>

      <div
        ref={ref}
        className="relative max-w-3xl mx-auto pb-12 sm:pb-16 md:pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex relative justify-start pt-8 sm:pt-12 md:pt-20 lg:pt-40 gap-4 sm:gap-6 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center bg-secondary-1/40 p-2 rounded-full top-20 sm:top-32 md:top-40 self-start">
              <div className="absolute left-0 p-2 top- rounded-full inset-0 bg-secondary-2 blur-3xl"></div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12  p-2 rounded-full flex items-center justify-center">
                <h1 className="text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-secondary-2">
                  {item.id}
                </h1>
              </div>
            </div>

            <SlideInLeft>
              <div className="relative w-full pr-4 bg-secondary-2/8 rounded-3xl p-4 sm:pr-6 md:pr-8">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3 md:mb-4 text-left font-bold text-secondary-2">
                  {item.title}
                </h3>
                <div className="text-sm sm:text-base md:text-lg">
                  {item.content}
                </div>
              </div>
            </SlideInLeft>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-2.5 sm:left-5 md:left-6 lg:left-7 top-0 overflow-hidden w-[2px] md:w-[4px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] md:w-[3px] bg-gradient-to-t from-secondary-2 via-secondary-2/40 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
