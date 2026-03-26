export type Locale = 'fr' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface LocalizedContent<T> {
  fr: T;
  en: T;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  cta: string;
  searchPlaceholders: {
    destination: string;
    date: string;
    time: string;
    travelers: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  era: string;
  featured?: boolean;
}

export interface EditorialContent {
  eyebrow: string;
  headline: string;
  description: string;
  cta: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  headline: string;
  description: string;
  cta: string;
  steps: StepItem[];
}

export interface PricingOption {
  id: string;
  travelers: string;
  price: string;
  description: string;
}

export interface PricingContent {
  headline: string;
  description: string;
  cta: string;
  options: PricingOption[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  image?: string;
}

export interface TestimonialsContent {
  headline: string;
  description: string;
  cta: string;
}

export interface BookingStep {
  number: number;
  label: string;
}

export interface BookingDestination {
  id: string;
  name: string;
  image: string;
}

export interface BookingContent {
  headline: string;
  cta: string;
  steps: BookingStep[];
  destinations: BookingDestination[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent {
  headline: string;
  items: FAQItem[];
}

export interface CTABannerContent {
  headline: string;
  description: string;
  cta: string;
}

export interface NavigationContent {
  brand: string;
  items: NavItem[];
  cta: string;
}

export interface FooterContent {
  copyright: string;
}
