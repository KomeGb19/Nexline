import React from "react";
import { Check, Zap, TrendingUp, Rocket } from "lucide-react";
import PricingCard from "@/components/pricing/PricingCard";
import PricingComparison from "@/components/pricing/PricingComparison";
import { PricingPackage } from "@/types/pricing";

const PricingPage: React.FC = () => {
  const packages: PricingPackage[] = [
    {
      id: "foundation",
      name: "Foundation",
      headline: "Start strong with a clear brand identity",
      bestFor: "New businesses & early-stage startups",
      icon: Zap,
      featured: false,
      includes: [
        "Brand Strategy Session",
        "Logo Design (Primary + Variations)",
        "Brand Color Palette",
        "Typography Selection",
        "Basic Brand Guidelines",
        "Website or Social Media Visual Direction",
      ],
      outcome: "A professional, consistent brand foundation ready for growth.",
    },
    {
      id: "growth",
      name: "Growth",
      headline: "Build recognition and market presence",
      bestFor: "Growing brands needing visibility and consistency",
      icon: TrendingUp,
      featured: true,
      includes: [
        "Everything in Foundation, plus:",
        "Product or Service Design Assets",
        "SEO Strategy & Keyword Research",
        "Content & Messaging Framework",
        "Social Media Branding",
        "Landing Page Optimization",
      ],
      outcome: "A recognizable brand that attracts and converts.",
    },
    {
      id: "scale",
      name: "Scale",
      headline: "Design, marketing, and strategy—fully aligned",
      bestFor: "Established businesses ready to dominate their space",
      icon: Rocket,
      featured: false,
      includes: [
        "Everything in Growth, plus:",
        "Advanced Brand Positioning",
        "Full Product Design System",
        "Multi-Channel Marketing Campaigns",
        "Paid Ads Strategy & Setup",
        "Analytics, Reporting & Optimization",
      ],
      outcome: "A brand built for scale, authority, and long-term growth.",
    },
  ];

  return (
    <div className="min-h-screen text-primary-3">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 px-5 md:py-15 md:px-20 w-full">
        <div className="absolute inset-0 bg-linear-to-b from-primary-1/15  via-transparent to-transparent blur-3xl " />

        <div className="flex flex-col items-start relative z-10 md:mb-16 ">
          <div className="py-2 px-4 text-primary-1 text-xl border  border-primary-1 rounded-full">
            Growth & Marketing
          </div>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl mt-2">
            Marketing Packages
          </h1>
          <h3 className="text-xl md:text-2xl mt-2 text-primary-1 max-w-lg">
            Choose the perfect package to elevate your brand and fuel your
            growth
          </h3>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <PricingComparison />
    </div>
  );
};

export default PricingPage;
