'use client';

import {
  HeroSection,
  EditorialSection,
  DestinationsSection,
  HowItWorksSection,
  PricingSection,
  CTABannerSection,
  TestimonialsSection,
  BookingSection,
  FAQSection,
} from '@/components/sections';
import { Footer } from '@/components/layout';

export default function LocaleHomePage() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <EditorialSection />
        <DestinationsSection />
        <HowItWorksSection />
        <PricingSection />
        <CTABannerSection />
        <TestimonialsSection />
        <BookingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
