import { LucideIcon } from 'lucide-react';

export interface PricingPackage {
  id: string;
  name: string;
  headline: string;
  bestFor: string;
  icon: LucideIcon;
  featured: boolean;
  includes: string[];
  outcome: string;
}

export interface PricingCardProps {
  package: PricingPackage;
}