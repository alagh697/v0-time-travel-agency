'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { pricingData } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { staggerContainer, staggerItem, fadeUp, scaleFade } from '@/lib/animations';

export function PricingSection() {
  const { t } = useLocale();
  const content = t(pricingData);

  return (
    <Section id="pricing" variant="card" size="lg" animate={false} className="mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Left Column - Content */}
          <motion.div variants={fadeUp}>
            <p className="text-muted-foreground mb-4 max-w-sm">
              {content.description}
            </p>
            <Heading as="h2" size="lg" className="mb-6">
              {content.headline}
            </Heading>
            <Button className="rounded-full px-8">
              {content.cta}
            </Button>
          </motion.div>

          {/* Right Column - Pricing Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {content.options.map((option) => (
              <motion.button
                key={option.id}
                variants={scaleFade}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-start p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-colors text-left"
              >
                <span className="text-sm font-medium text-foreground">
                  {option.travelers}
                </span>
                <span className="text-xs text-muted-foreground mb-2">
                  {option.description}
                </span>
                <span className="text-lg font-semibold text-primary mt-auto">
                  {t({ fr: '€', en: '€' })} {option.price}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
