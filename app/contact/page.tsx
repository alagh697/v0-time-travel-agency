'use client';

import { LocaleProvider } from '@/lib/locale-context';

import { Footer } from '@/components/layout';
import { SupportChat } from '@/components/features/support-chat';
import { ContactForm, ContactHero, ContactInfo } from '@/components/contact';

export default function ContactPage() {
  return (
    <LocaleProvider defaultLocale="fr">
      <main className="min-h-screen bg-background text-foreground">
        <ContactHero />

        <section className="px-4 pb-16 pt-10 md:px-6 md:pb-20 md:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.6fr)_360px] lg:gap-10 xl:grid-cols-[minmax(0,1.7fr)_380px]">
            <div className="min-w-0">
              <ContactForm />
            </div>

            <aside className="min-w-0">
              <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                <ContactInfo />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <SupportChat />
    </LocaleProvider>
  );
}