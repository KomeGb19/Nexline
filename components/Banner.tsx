"use client";

import React from "react";

const Banner = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative bg-primary-2 py-8 md:py-16 px-4 md:px-8 lg:px-20">
      {/* Background decorative element */}
      <div className="absolute z-0 bottom- left-1/2 -translate-x-1/2 w-80 h-64 md:w-250 md:h-150 bg-primary-1/30 rounded-full blur-3xl animate-pulse" />

      {/* Header Text */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-12 max-w-4xl mx-auto z-10 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 text-primary-4">
          Build <span className="font-bold">Once.</span> Scale{" "}
          <span className="font-bold">Forever.</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl max-w-2xl">
          Refine your brand voice based on real data, not just suggestions
        </p>
      </div>

      {/* Image Container - Responsive */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-125 mb-4 md:mb-0">
        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Text Overlay Card - Responsive positioning */}
      <div className="relative md:absolute md:bottom-12 lg:bottom-20 md:left-8 lg:left-30 md:right-auto w-full md:max-w-xl lg:max-w-2xl px-4 md:px-0 -mt-12 md:mt-0">
        <div className="bg-primary-2/50 backdrop-blur-md rounded-2xl p-5 md:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">
            Unlock Potential.
            <br />
            Get Results From Day One.
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">
            <p className="text-sm md:text-base text-primary-3 max-w-sm">
              We understand your business goals, challenges, and growth
              opportunities.
            </p>
            <button className="bg-primary-4 hover:bg-primary-4/80 text-primary-2 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base transition-colors">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
