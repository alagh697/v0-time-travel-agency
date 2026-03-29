'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { howItWorksData } from '@/data/howItWorks';
import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

export function HowItWorksSection() {
  const { t } = useLocale();
  const content = t(howItWorksData);

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12">
      {/* Rounded card container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={fadeIn}
        className="relative bg-[#f5f3ef] rounded-3xl overflow-hidden max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[560px]">
          {/* Left Content Area */}
          <div className="lg:col-span-7 p-8 md:p-10 lg:p-12 xl:p-14 flex flex-col">
            {/* Headline - Large editorial style */}
            <motion.h2
              variants={staggerItem}
              className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.15] tracking-tight text-foreground max-w-xl mb-6"
            >
              {content.headline}
            </motion.h2>

            {/* CTA Button */}
            <motion.div variants={staggerItem} className="mb-10 lg:mb-12">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 py-2.5 text-sm font-medium"
                onClick={() => {
                  document.getElementById('booking-section')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                {content.cta}
              </Button>
            </motion.div>

            {/* Steps - Horizontal layout on desktop */}
            <motion.div
              variants={staggerContainer}
              className="mt-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              {content.steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={staggerItem}
                  className="space-y-2"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">{step.number}. {step.title}</span>
                    {' '}
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0">
            <div className="absolute inset-0 lg:inset-y-0 lg:right-0 lg:left-0">
              <Image
                src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80"
                alt="Person experiencing VR time travel"
                fill
                priority
                loading="eager"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Subtle gradient overlay for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
