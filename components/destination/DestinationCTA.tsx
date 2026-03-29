'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import { Container } from '@/components/shared';
import { Button } from '@/components/ui/button';

export function DestinationCTA() {
  const router = useRouter();
  const { t } = useLocale();
  const content = t(destinationDetailContent);

  const handleClick = () => {
    router.push('/#booking-section');
  };

  return (
    <section className="py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {content.ctaTitle}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            {content.ctaDescription}
          </p>
          <Button
            variant="secondary"
            onClick={handleClick}
            className="rounded-full px-8 py-6 text-base bg-[#F5F0E8] text-[#3D3929] hover:bg-[#EBE6DC]"
          >
            {content.ctaButton}
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}