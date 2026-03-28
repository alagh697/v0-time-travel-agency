'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { testimonialsData, testimonialsContentData } from '@/data/testimonials';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

export function TestimonialsSection() {
  const { t } = useLocale();
  const content = t(testimonialsContentData);
  const testimonials = t(testimonialsData);

  return (
    <Section size="lg" animate={false}>
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
              {content.headline}
            </Heading>
            <p className="text-muted-foreground mt-2 max-w-lg">
              {content.description}
            </p>
          </div>
          <Button variant="outline" className="rounded-full shrink-0">
            {content.cta}
          </Button>
        </motion.div>

        {/* Testimonials Grid - Mixed layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* First row */}
          <motion.div variants={staggerItem}>
            <TestimonialCard testimonial={testimonials[0]} />
          </motion.div>
          {/* <motion.div variants={staggerItem}>
            <TestimonialCard
              testimonial={testimonials[1]}
              variant={testimonials[1].image ? 'image' : 'default'}
            />
          </motion.div> */}
          <motion.div variants={staggerItem}>
            <TestimonialCard testimonial={testimonials[2]} />
          </motion.div>

          {/* Second row */}
          <motion.div variants={staggerItem} className="md:col-span-1">
            <TestimonialCard testimonial={testimonials[3]} />
          </motion.div>
          <motion.div variants={staggerItem}>
            <TestimonialCard testimonial={testimonials[4]} />
          </motion.div>
          {/* <motion.div variants={staggerItem} className="hidden lg:block">
            <TestimonialCard 
              testimonial={testimonials[4]} 
              variant={testimonials[4].image ? 'image' : 'default'}
            />
          </motion.div> */}
        </motion.div>
      </Container>
    </Section>
  );
}
