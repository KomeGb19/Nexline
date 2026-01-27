"use client";

import React, { useState } from "react";
import { BadgeCheck, Check } from "lucide-react";
import ScaleInReveal from "./animations/ScaleInReveal";
import ScrollReveal from "./animations/ScrollReveal";

const tabItems = [
  {
    label: "digital",
    displayLabel: "Digital Infrastructure",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    url: "/digital",
    header: "We build the foundation your business grows on.",
    subtext:
      "Nexline designs and develops scalable digital infrastructure — from high-performance websites to internal systems — ensuring your business is fast, secure, and ready to scale.",
    points: [
      { id: "1", text: "Marketing websites & landing pages" },
      { id: "2", text: "Template-based or fully custom builds" },
      { id: "3", text: "Conversion-optimized site architecture" },
    ],
  },
  {
    label: "growth",
    displayLabel: "Growth & Visibility",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    url: "/growth",
    header: "We help the right customers find and choose you.",
    subtext:
      "Nexline increases visibility and demand through AI-powered SEO, paid campaigns, and content strategies aligned with real customer intent.",
    points: [
      { id: "1", text: "AI-powered SEO & search optimization" },
      { id: "2", text: "Keyword & search intent analysis" },
      { id: "3", text: "Paid ads & lead generation campaigns" },
    ],
  },
  {
    label: "optimization",
    displayLabel: "Optimization & Revenue",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    url: "/optimization",
    header: "We turn performance data into measurable growth.",
    subtext:
      "Nexline continuously analyzes, optimizes, and automates your systems to improve conversions, reduce waste, and increase revenue.",
    points: [
      { id: "1", text: "Advanced analytics & performance dashboards" },
      { id: "2", text: "Conversion rate & funnel optimization" },
      { id: "3", text: "Revenue tracking & growth automation" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("digital");
  const activeContent = tabItems.find((item) => item.label === activeTab);

  return (
    <section
      id="services"
      className="min-h-screen w-full flex flex-col relative bg-primary-1/8 py-12 md:py-20 px-4 md:px-8 lg:px-20"
    >
      {/* Header Text */}
      {/* <div className="absolute left-40 w-250 h-auto top-40 rounded-full inset-0 bg-secondary-2/8 blur-xl group-hover:bg-secondary-2/30 transition-all duration-500 animate-"></div> */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-5xl mb-6 text-secondary-2 font-bold">
          The Nexline Experience
        </h1>
        <p className="text-lg md:text-xl text-primary-3 max-w-2xl">
          We design and develop the technology that powers your entire digital
          presence — fast, secure, and built to scale.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12 md:mb-16 z-10">
        <div className="flex bg-primary-1/10 backdrop-blur-sm rounded-full p-2 gap-2 max-sm:overflow-x-scroll">
          {tabItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`px-6 md:px-8 py-3 rounded-full flex items-center font-medium transition-all duration-300 whitespace-nowrap text-sm md:text-base ${
                activeTab === item.label
                  ? "bg-secondary-2 text-primary-2 shadow-lg"
                  : "text-primary-3 hover:bg-secondary-2/10"
              }`}
            >
              {item.displayLabel}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-7xl mx-auto w-full">
        {/* Image Card */}
        <ScaleInReveal>
          <div className="relative group">
            <div className="relative rounded-3xl border-4 border-secondary-2">
              <img
                src={activeContent?.image}
                alt={activeContent?.displayLabel}
                className="w-full h-64 md:h-80 lg:h-106 object-cover rounded-2xl"
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button className="bg-secondary-2 text-primary-2 font-medium px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </ScaleInReveal>

        {/* Content Card */}

        <div className="flex flex-col gap-6">
          {/* Header Card */}
          <ScrollReveal>
            <div className="bg-primary-4 rounded-3xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-2">
                {activeContent?.header}
              </h2>
              <p className="text-primary-2 text-base font-medium leading-relaxed">
                {activeContent?.subtext}
              </p>
            </div>
          </ScrollReveal>

          {/* Points Card */}
          <ScrollReveal>
            <div className="bg-secondary-2 rounded-3xl p-8">
              <div className="space-y-4">
                {activeContent?.points.map((point) => (
                  <div key={point.id} className="flex items-start gap-4 group">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-secondary-1 flex items-center justify-center mt-0.5 transition-colors">
                      <BadgeCheck
                        className="w-4 h-4 text-secondary-2"
                        strokeWidth={3}
                      />
                    </div>
                    <p className="text-primary-2 text-base md:text-lg font-medium">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
