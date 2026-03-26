'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { howItWorksData } from '@/data/howItWorks';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from '@/lib/animations';

export function HowItWorksSection() {
  const { t } = useLocale();
  const content = t(howItWorksData);

  return (
    <Section variant="card" size="lg" animate={false} className="mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div variants={slideFromLeft}>
            <Heading as="h2" size="lg" className="mb-4">
              {content.headline}
            </Heading>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {content.description}
            </p>
            <Button className="rounded-full px-8 mb-10">
              {content.cta}
            </Button>

            {/* Steps */}
            <motion.div
              variants={staggerContainer}
              className="space-y-6"
            >
              {content.steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={slideFromRight}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80"
              alt="Time travel experience"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
