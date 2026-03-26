'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { destinationsData } from '@/data/destinations';
import { navigationData } from '@/data/navigation';
import { Container, Section, Heading } from '@/components/shared';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { Button } from '@/components/ui/button';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

export function DestinationsSection() {
  const { t } = useLocale();
  const destinations = t(destinationsData);
  const nav = t(navigationData);
  
  const featuredDestination = destinations.find((d) => d.featured) || destinations[0];
  const otherDestinations = destinations.filter((d) => d.id !== featuredDestination.id);

  return (
    <Section id="destinations" size="md" animate={false}>
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <Heading as="h2" size="lg">
              {t({ fr: 'Destinations magiques', en: 'Magical Destinations' })}
            </Heading>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {t({
                fr: 'Explorez des époques fascinantes et vivez des expériences inoubliables.',
                en: 'Explore fascinating eras and live unforgettable experiences.',
              })}
            </p>
          </div>
          <Button variant="outline" className="rounded-full shrink-0">
            {nav.cta}
          </Button>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Large Featured Card */}
          <motion.div variants={staggerItem} className="lg:row-span-2">
            <DestinationCard
              destination={featuredDestination}
              size="lg"
              ctaLabel={nav.cta}
              className="h-full"
            />
          </motion.div>

          {/* Small Cards */}
          {otherDestinations.slice(0, 2).map((destination) => (
            <motion.div key={destination.id} variants={staggerItem}>
              <DestinationCard
                destination={destination}
                size="sm"
                ctaLabel={nav.cta}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
