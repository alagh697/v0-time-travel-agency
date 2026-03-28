'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { contactPageContent } from '@/data/contact';
import { Container } from '@/components/shared';
import { Header } from '../navigation';

export function ContactHero() {
  const { t } = useLocale();
  const content = t(contactPageContent);

  return (
    <section className="bg-primary py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Header */}
          <Header />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            {content.heroSubtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
