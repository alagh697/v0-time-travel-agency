'use client';

import { LocaleProvider } from '@/lib/locale-context';

import { Footer } from '@/components/layout';
import { SupportChat } from '@/components/features/support-chat';
import { ContactForm, ContactHero, ContactInfo } from '@/components/contact';
import { FAQSection } from '@/components/sections';

export default function ContactPage() {
  return (
    <LocaleProvider defaultLocale="fr">
      <main className="min-h-screen">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        {/* <FAQSection /> */}
      </main>
      <Footer />
      <SupportChat />
    </LocaleProvider>
  );
}
