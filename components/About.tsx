"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const cardItems = [
  {
    title: "Reach new audience",
    description: "High-converting, fast, and scalable solutions",
    image: "/about1.jpg",
    bottomColor: "#85BEF7",
  },
  {
    title: "Scale your operations",
    description: "AI-powered tools for business growth",
    image: "/about2.jpg",
    bottomColor: "#AEF2BE",
  },
  {
    title: "Convert more leads",
    description: "Data-driven strategies that work",
    image: "/about3.jpg",
    bottomColor: "#DABC94",
  },
  /* {
    title: "Build digital infrastructure",
    description: "End-to-end technology solutions",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    bottomColor: "#FFB703",
  }, */
];

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef(null);

  // Auto-swipe every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % cardItems.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isDragging]);

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    setIsDragging(true);
    setStartY(
      e.type === "mousedown"
        ? (e as React.MouseEvent<HTMLDivElement>).clientY
        : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientY,
    );
  };

  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) return;
    const y =
      e.type === "mousemove"
        ? (e as React.MouseEvent<HTMLDivElement>).clientY
        : (e as React.TouchEvent<HTMLDivElement>).touches[0].clientY;
    setCurrentY(y);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;

    const diff = currentY - startY;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Dragged down - go to previous
        setActiveIndex(
          (prev) => (prev - 1 + cardItems.length) % cardItems.length,
        );
      } else {
        // Dragged up - go to next
        setActiveIndex((prev) => (prev + 1) % cardItems.length);
      }
    }

    setIsDragging(false);
    setStartY(0);
    setCurrentY(0);
  };

  return (
    <section
      id="about-us"
      className="min-h-screen w-full flex relative bg-primary-2 text-white"
    >
      {/* <Image
        src="/yellowblur.svg"
        alt="Background"
        width={1000}
        height={1000}
        className="absolute z-0 -top-60 right-30 md:-top-40 md:-left-40 w-175 h-175"
      /> */}
      <div className="absolute z-0 -left-50 md:bottom-93 md:-left-20 w-89 h-64 md:w-80 md:h-80 bg-secondary-4/10 rounded-full blur-3xl animate-collapsible-up" />
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-5 md:py-15 md:px-20 w-full relative z-10">
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-start text-left justify-center">
          <h3 className="text-lg md:text-2xl text-secondary-4 font-medium">
            Your growth partner for businesses.
          </h3>
          <h1 className="text-3xl md:text-5xl max-w-2xl font-bold mt-4">
            Nexline builds and manages the entire growth ecosystem.
          </h1>
          <p className="text-base md:text-lg max-w-xl mt-6 text-gray-300">
            Nexline is a technology and growth partner for businesses that want
            more than just a website.
          </p>
          <p className="text-base md:text-lg max-w-xl mt-4 text-gray-300">
            We build end‑to‑end digital infrastructure that helps companies
            attract customers, convert leads, and scale operations, all powered
            by AI and data.
          </p>

          <Button className="mt-8 py-3 px-8 md:px-12 md:py-6 text-base md:text-lg rounded-full bg-secondary-4 hover:bg-secondary-4/80 text-primary-2 font-bold">
            Get Started
          </Button>
        </div>

        {/* Right Column - Vertical Card Stack */}
        <div className="relative h-125 md:h-150 flex items-center justify-center">
          <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {cardItems.map((item, index) => {
              const position =
                (index - activeIndex + cardItems.length) % cardItems.length;

              // Calculate transform based on position (vertical)
              let translateY = 0;
              let scale = 1;
              let zIndex = 10;
              let opacity = 1;

              if (position === 0) {
                // Active/front card - centered
                translateY = -25;
                scale = 1;
                zIndex = 20;
              } else if (position === 1) {
                // Bottom back card
                translateY = -5;
                scale = 1;
                zIndex = 10;
              } else if (position === cardItems.length - 1) {
                // Top back card
                translateY = 5;
                scale = 1;
                zIndex = 10;
              } else {
                // Hidden cards
                opacity = 0;
                zIndex = 0;
                translateY = 10;
              }

              return (
                <Card
                  key={index}
                  className="absolute overflow- transition-all duration-500 ease-out border-0 h rounded-2xl md:mt-20"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "50%",
                    transform: `translateY(${translateY}%) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                >
                  <CardContent className="p-0 h-full rounded-2xl">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center rounded-2xl"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {/* Gradient Overlay */}
                      <div className="inset-0  bg-purple-700"></div>
                    </div>

                    {/* Text Content */}
                    <div className="relative h-full flex flex-col justify-end p-6 z-10">
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.title}
                      </h2>
                      <p className="text-sm md:text-base text-gray-200">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Color Bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-4 rounded-b-2xl"
                      style={{ backgroundColor: item.bottomColor }}
                    ></div>

                    {/* Subtle overlay for depth on back cards */}
                    {position !== 0 && (
                      <div className="absolute inset-0 bg-primary-2/30 z-20"></div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Indicator dots */}
          <div className="absolute bottom-15 md:bottom-10 transform flex gap-2 z-30">
            {cardItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-[#0F76BC] w-6" : "bg-gray-400 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
