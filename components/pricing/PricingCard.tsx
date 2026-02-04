import React from "react";
import { Check, ArrowRight, LucideIcon } from "lucide-react";
import { PricingPackage } from "@/types/pricing";

interface PricingCardProps {
  package: PricingPackage;
}

const PricingCard: React.FC<PricingCardProps> = ({ package: pkg }) => {
  const Icon = pkg.icon;

  return (
    <div
      className={`relative hover:scale-105 transition-all duration-900 group ${
        pkg.featured ? "lg:scale-105 hover:scale-110 lg:-mt-4" : ""
      }`}
    >
      {/* Featured Badge */}
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="px-4 py-1.5 bg-secondary-4 rounded-full text-sm text-secondary-3 font-semibold shadow-lg">
            Most Popular
          </div>
        </div>
      )}

      <div
        className={`relative h-full rounded-3xl p-8 transition-all duration-300 ${
          pkg.featured
            ? "bg-primary-1/10 border-2 border-primary-1/50 shadow-2xl shadow-primary-4/20"
            : "bg-white/5 border border-white/10 hover:border-primary-4/30 hover:bg-white/10"
        }`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary-1/0 via-primary-1/0 to-primary-1/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div
            className={`inline-flex p-3 rounded-xl mb-6 w-fit ${
              pkg.featured
                ? "bg-linear-to-br from-primary-4/20 to-blue-500/20"
                : "bg-primary-4/10"
            }`}
          >
            <Icon className="w-6 h-6 text-primary-4" />
          </div>

          {/* Package Name */}
          <h3 className="text-3xl font-bold mb-3">{pkg.name}</h3>

          {/* Headline */}
          <p className="text-lg text-gray-300 mb-6">{pkg.headline}</p>

          {/* Best For */}
          <div className="mb-8 pb-8 border-b border-white/10">
            <p className="text-sm text-primary-4 font-semibold mb-2">
              BEST FOR
            </p>
            <p className="text-white">{pkg.bestFor}</p>
          </div>

          {/* Includes Section */}
          <div className="mb-8 grow">
            <p className="text-sm text-primary-4 font-semibold mb-4">
              INCLUDES
            </p>
            <ul className="space-y-3">
              {pkg.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-1 shrink-0 ${
                      item.startsWith("Everything in") ? "text-primary-4" : ""
                    }`}
                  >
                    <Check
                      className={`w-5 h-5 ${
                        item.startsWith("Everything in")
                          ? "text-primary-4"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-sm ${
                      item.startsWith("Everything in")
                        ? "text-primary-4 font-semibold"
                        : "text-gray-300"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div
            className={`p-4 rounded-xl mb-8 ${
              pkg.featured
                ? "bg-primary-4/10 border border-primary-4/30"
                : "bg-white/5 border border-white/10"
            }`}
          >
            <p className="text-xs text-primary-4 font-semibold mb-2">OUTCOME</p>
            <p className="text-sm text-gray-300">{pkg.outcome}</p>
          </div>

          {/* CTA Button */}
          <button
            className={`group/btn w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              pkg.featured
                ? "bg-linear-to-r from-primary-2 to-primary-1 hover:shadow-xl hover:shadow-primary-1/50 hover:scale-[1.02]"
                : "bg-white/5 border border-primary-1/20 hover:bg-primary-1/10 hover:border-primary-1/30"
            }`}
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {/* Contact Link */}
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-primary-4 transition-colors inline-flex items-center gap-1"
            >
              Have questions? Contact us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
