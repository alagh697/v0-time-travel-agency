'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { ctaBannerData } from '@/data/ctaBanner';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { TravelQuizModal } from '@/components/features/travel-quiz';
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations';

export function CTABannerSection() {
  const { t } = useLocale();
  const content = t(ctaBannerData);
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <Section size="sm" animate={false}>
        <Container>
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80"
                alt="VR Time Travel Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="relative z-10 px-6 py-16 md:px-12 md:py-24 lg:py-32 text-center"
            >
              <motion.div variants={fadeUp} className="max-w-3xl mx-auto">
                <Heading 
                  as="h2" 
                  size="xl" 
                  className="text-white mb-6"
                >
                  {content.headline}
                </Heading>
                <motion.p 
                  variants={staggerItem}
                  className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed"
                >
                  {content.description}
                </motion.p>
                <motion.div variants={staggerItem}>
                  <Button 
                    size="lg"
                    variant="secondary"
                    onClick={() => setIsQuizOpen(true)}
                    className="rounded-full px-10 bg-card/90 text-foreground hover:bg-card"
                  >
                    {content.cta}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      <TravelQuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
      />
    </>
  );
}
