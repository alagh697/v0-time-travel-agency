'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { bookingData, bookingIntroData } from '@/data/booking';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { staggerContainer, staggerItem, fadeUp, slideFromLeft, slideFromRight } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function BookingSection() {
  const { t } = useLocale();
  const content = t(bookingData);
  const intro = t(bookingIntroData);
  const [selectedDestination, setSelectedDestination] = useState(content.destinations[0].id);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Section variant="card" size="lg" animate={false} className="mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Left Column - Booking Steps */}
          <motion.div variants={slideFromLeft}>
            {/* Step Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {content.steps.map((step) => (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    activeStep === step.number
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:bg-muted'
                  )}
                >
                  {step.number}. {step.label}
                </button>
              ))}
            </div>

            {/* Destination Label */}
            <p className="text-sm text-muted-foreground mb-4">
              {intro.label}
            </p>

            {/* Destination Cards */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-3"
            >
              {content.destinations.map((destination) => (
                <motion.button
                  key={destination.id}
                  variants={staggerItem}
                  onClick={() => setSelectedDestination(destination.id)}
                  className={cn(
                    'relative aspect-[4/3] rounded-xl overflow-hidden group transition-all',
                    selectedDestination === destination.id
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-card'
                      : 'hover:ring-2 hover:ring-border'
                  )}
                >
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium text-left line-clamp-2">
                    {destination.name}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Heading and CTA */}
          <motion.div 
            variants={slideFromRight}
            className="flex flex-col justify-center"
          >
            <Heading as="h2" size="lg" className="mb-8">
              {content.headline}
            </Heading>
            <Button size="lg" className="rounded-full px-10 w-fit">
              {content.cta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
