'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailsData } from '@/data/destination-details';
import { Footer } from '@/components/layout';
import { Container } from '@/components/shared';
import {
  DestinationHero,
  DestinationTimeline,
  DestinationHighlights,
  DestinationGallery,
  DestinationIncluded,
  BookingSidebar,
  DestinationCTA,
} from '@/components/destination';

interface DestinationPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = use(params);
  const { t } = useLocale();
  
  const destinations = t(destinationDetailsData);
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <DestinationHero destination={destination} />

        {/* Main Content */}
        <Container className="py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Content */}
            <div className="flex-1 lg:max-w-2xl">
              {/* Editorial Description */}
              <section className="mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {destination.longDescription}
                </p>
              </section>

              {/* Timeline */}
              <DestinationTimeline steps={destination.timelineSteps} />

              {/* Highlights */}
              <DestinationHighlights highlights={destination.highlights} />

              {/* Gallery */}
              <DestinationGallery images={destination.gallery} name={destination.name} />

              {/* Included Items */}
              <DestinationIncluded items={destination.includedItems} />
            </div>

            {/* Right Column - Sticky Booking Sidebar */}
            <div className="lg:w-[380px]">
              <div className="lg:hidden mb-8">
                <BookingSidebar destination={destination} />
              </div>
              <div className="hidden lg:block">
                <BookingSidebar destination={destination} />
              </div>
            </div>
          </div>
        </Container>

        {/* Final CTA */}
        <DestinationCTA />
      </main>
      <Footer />
    </>
  );
}
