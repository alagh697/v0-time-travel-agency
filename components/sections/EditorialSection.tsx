'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { editorialData } from '@/data/editorial';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { staggerContainer, staggerItem, slideFromLeft, slideFromRight } from '@/lib/animations';

export function EditorialSection() {
  const { t } = useLocale();
  const content = t(editorialData);

  return (
    <Section size="lg" animate={false}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start"
        >
          {/* Left Column - Eyebrow */}
          <motion.div variants={slideFromLeft} className="lg:max-w-sm">
            <p className="text-muted-foreground leading-relaxed">
              {content.eyebrow}
            </p>
            {/* Pagination dots */}
            <div className="flex gap-1.5 mt-4">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0 ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column - Main Content */}
          <motion.div variants={slideFromRight}>
            <Heading as="h2" size="lg" className="mb-6">
              {content.headline}
            </Heading>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              {content.description}
            </p>
            <Button className="rounded-full px-8">
              {content.cta}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
