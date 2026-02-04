import React from "react";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  foundation: boolean;
  growth: boolean;
  scale: boolean;
}

interface FeatureCategory {
  category: string;
  features: Feature[];
}

const PricingComparison: React.FC = () => {
  const featureCategories: FeatureCategory[] = [
    {
      category: "Brand Identity",
      features: [
        {
          name: "Brand Strategy Session",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Logo Design (Primary + Variations)",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Brand Color Palette",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Typography Selection",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Basic Brand Guidelines",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Advanced Brand Positioning",
          foundation: false,
          growth: false,
          scale: true,
        },
        {
          name: "Full Product Design System",
          foundation: false,
          growth: false,
          scale: true,
        },
      ],
    },
    {
      category: "Digital Presence",
      features: [
        {
          name: "Website or Social Media Visual Direction",
          foundation: true,
          growth: true,
          scale: true,
        },
        {
          name: "Product or Service Design Assets",
          foundation: false,
          growth: true,
          scale: true,
        },
        {
          name: "Social Media Branding",
          foundation: false,
          growth: true,
          scale: true,
        },
        {
          name: "Landing Page Optimization",
          foundation: false,
          growth: true,
          scale: true,
        },
      ],
    },
    {
      category: "Marketing & Growth",
      features: [
        {
          name: "SEO Strategy & Keyword Research",
          foundation: false,
          growth: true,
          scale: true,
        },
        {
          name: "Content & Messaging Framework",
          foundation: false,
          growth: true,
          scale: true,
        },
        {
          name: "Multi-Channel Marketing Campaigns",
          foundation: false,
          growth: false,
          scale: true,
        },
        {
          name: "Paid Ads Strategy & Setup",
          foundation: false,
          growth: false,
          scale: true,
        },
        {
          name: "Analytics, Reporting & Optimization",
          foundation: false,
          growth: false,
          scale: true,
        },
      ],
    },
  ];

  const renderCheckmark = (included: boolean) => {
    return included ? (
      <Check className="w-5 h-5 text-primary-4 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-gray-600 mx-auto" />
    );
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Detailed Comparison
          </h2>
          <p className="text-xl text-gray-400">
            See exactly what's included in each package
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-linear-to-r from-primary-1/10 to-blue-500/10 border-b border-white/10">
              <div className="p-6">
                <span className="text-sm text-primary-4 font-semibold">
                  FEATURES
                </span>
              </div>
              <div className="p-6 text-center border-l border-white/10">
                <div className="text-lg font-bold mb-1">Foundation</div>
                <div className="text-sm text-gray-400">Essential Start</div>
              </div>
              <div className="p-6 text-center border-l border-white/10 bg-primary-1/5">
                <div className="text-lg font-bold mb-1">Growth</div>
                <div className="text-sm text-primary-4">Most Popular</div>
              </div>
              <div className="p-6 text-center border-l border-white/10">
                <div className="text-lg font-bold mb-1">Scale</div>
                <div className="text-sm text-gray-400">Complete Solution</div>
              </div>
            </div>

            {/* Table Body */}
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
                  <div className="p-4 col-span-4">
                    <span className="text-sm font-semibold text-primary-4">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Features */}
                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`grid grid-cols-4 border-b border-white/10 hover:bg-white/5 transition-colors ${
                      featureIndex === category.features.length - 1 &&
                      categoryIndex === featureCategories.length - 1
                        ? "border-b-0"
                        : ""
                    }`}
                  >
                    <div className="p-4">
                      <span className="text-sm text-gray-300">
                        {feature.name}
                      </span>
                    </div>
                    <div className="p-4 border-l border-white/10 flex items-center justify-center">
                      {renderCheckmark(feature.foundation)}
                    </div>
                    <div className="p-4 border-l border-white/10 flex items-center justify-center bg-primary-1/5">
                      {renderCheckmark(feature.growth)}
                    </div>
                    <div className="p-4 border-l border-white/10 flex items-center justify-center">
                      {renderCheckmark(feature.scale)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {["Foundation", "Growth", "Scale"].map((packageName, pkgIndex) => (
            <div
              key={pkgIndex}
              className={`rounded-2xl border overflow-hidden ${
                packageName === "Growth"
                  ? "border-primary-1/30 bg-linear-to-br from-primary-1/10 to-blue-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="p-6 border-b border-white/10">
                <h3 className="text-xl font-bold">{packageName}</h3>
                {packageName === "Growth" && (
                  <span className="text-sm text-primary-4">Most Popular</span>
                )}
              </div>

              <div className="p-6 space-y-6">
                {featureCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <h4 className="text-sm font-semibold text-primary-4 mb-3">
                      {category.category}
                    </h4>
                    <ul className="space-y-2">
                      {category.features.map((feature, featIndex) => {
                        const isIncluded =
                          packageName === "Foundation"
                            ? feature.foundation
                            : packageName === "Growth"
                              ? feature.growth
                              : feature.scale;

                        return (
                          <li
                            key={featIndex}
                            className="flex items-start gap-3"
                          >
                            {renderCheckmark(isIncluded)}
                            <span
                              className={`text-sm ${
                                isIncluded ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {feature.name}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
