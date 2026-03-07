import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProductItem {
  id: string;
  title: string;
  status: 'Under Development' | 'Private Beta' | 'Live';
  description: string;
  logoUrl?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  link: string;
  devlink?: string;
}

export interface ClientLogo {
  name: string;
  logo: string;
  url: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface ValuePropItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface RiskItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}