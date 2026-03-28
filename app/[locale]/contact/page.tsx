'use client';

import { Footer } from '@/components/layout';
import { Container } from '@/components/shared';
import { ContactHero, ContactForm, ContactInfo } from '@/components/contact';

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <ContactHero />

        {/* Main Content */}
        <section className="py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left - Form */}
              <ContactForm />

              {/* Right - Info */}
              <ContactInfo />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
