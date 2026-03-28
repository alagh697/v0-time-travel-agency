'use client';

import { LocaleProvider } from '@/lib/locale-context';
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
import { SupportChat } from '@/components/features/support-chat';

export default function HomePage() {
  return (
    <LocaleProvider defaultLocale="fr">
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
      <SupportChat />
    </LocaleProvider>
  );
}
