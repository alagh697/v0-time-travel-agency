'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { faqData } from '@/data/faq';
import { Container, Section, Heading } from '@/components/shared';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

export function FAQSection() {
  const { t } = useLocale();
  const content = t(faqData);

  return (
    <Section size="lg" animate={false}>
      <Container>
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="mb-10"
        >
          <Heading as="h2" size="lg">
            {content.headline}
          </Heading>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.items.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="bg-card rounded-2xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-3">
                {item.question}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
