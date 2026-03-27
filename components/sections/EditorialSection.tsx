'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { editorialData } from '@/data/editorial';
import { Button } from '@/components/ui/button';
import { staggerContainer, slideFromLeft, slideFromRight } from '@/lib/animations';

// Avatar cluster component for social proof
function AvatarCluster() {
  const avatarColors = [
    'bg-[#8B7355]', // warm brown
    'bg-[#6B8E6B]', // sage green
    'bg-[#A0926C]', // sand/tan
    'bg-[#7C8B7C]', // muted olive
  ];

  return (
    <div className="flex -space-x-3">
      {avatarColors.map((color, i) => (
        <div
          key={i}
          className={`w-10 h-10 rounded-full ${color} border-2 border-background ring-1 ring-border/30`}
          style={{ zIndex: avatarColors.length - i }}
        />
      ))}
    </div>
  );
}

export function EditorialSection() {
  const { t } = useLocale();
  const content = t(editorialData);

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start"
        >
          {/* Left Column - Supporting content (narrower) */}
          <motion.div 
            variants={slideFromLeft} 
            className="lg:col-span-4 lg:pt-4"
          >
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs">
              {content.eyebrow}
            </p>
            {/* Avatar cluster for social proof */}
            <div className="mt-5">
              <AvatarCluster />
            </div>
          </motion.div>

          {/* Right Column - Main Content (wider) */}
          <motion.div 
            variants={slideFromRight}
            className="lg:col-span-8"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-foreground max-w-2xl">
              {content.headline}
            </h2>
            <p className="mt-6 md:mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
              {content.description}
            </p>
            <Button 
              className="mt-8 md:mt-10 rounded-full px-8 py-3 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              {content.cta}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
