"use client";

import React from "react";
import Image from "next/image";
import MagicBento from "./MagicBento";

const FocusPoint = () => {
  return (
    <section
      id="about-us"
      className="min-h-screen w-full flex relative bg-primary-2 text-white"
    >
      <div className="absolute z-0 md:bottom-[800] md:-left-5 w-80 h-64 md:w-60 md:h-60 bg-secondary-2/20 rounded-full blur-3xl animate-pulse" />
      <div className="flex flex-col items-start py-10 px-5 md:py-15 md:px-20 w-full relative z-10 ">
        <div className="py-2 px-4 text-secondary-2 text-xl border  border-secondary-2 rounded-full">
          Build Your Growth Engine
        </div>
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mt-2">
          Optimizing businesses and your entire digital growth stack.
        </h1>
        <h3 className="text-xl md:text-2xl mt-2 text-secondary-2 max-w-sm">
          For both Seasoned Players and Newbies in the digital space.
        </h3>
        <div className="mt-8">
          <MagicBento />
        </div>
      </div>
    </section>
  );
};

export default FocusPoint;
