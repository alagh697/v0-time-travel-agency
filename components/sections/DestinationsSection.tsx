'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { destinationsData } from '@/data/destinations';
import { navigationData } from '@/data/navigation';
import { Container, Section } from '@/components/shared';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function DestinationsSection() {
  const { locale, t } = useLocale();
  const destinations = t(destinationsData);
  const nav = t(navigationData);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Determine which card is "active" (expanded)
  // Default: first card is active, or hovered card takes priority
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0;

  return (
    <Section id="destinations" size="md" animate={false}>
      <Container>
        {/* SEO Title - Visually Hidden */}
        <h2 className="sr-only">
          {t({ fr: 'Destinations magiques', en: 'Magical Destinations' })}
        </h2>

        {/* Desktop: Horizontal Flex with Dynamic Sizing */}
        <div 
          className="hidden md:flex gap-4 lg:gap-6"
          style={{ height: '480px' }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {destinations.map((destination, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={destination.id}
                className="relative overflow-hidden rounded-3xl cursor-pointer"
                style={{ flex: isActive ? 2 : 1 }}
                animate={{ flex: isActive ? 2 : 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {/* Background Image */}
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className={cn(
                      'font-semibold text-white transition-all duration-300',
                      isActive ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'
                    )}>
                      {destination.title}
                    </h3>
                    
                    {/* Description - Only visible on active card */}
                    <motion.p
                      className="mt-2 text-white/80 text-sm lg:text-base max-w-sm"
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        height: isActive ? 'auto' : 0,
                        marginTop: isActive ? 8 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {destination.description}
                    </motion.p>
                    
                    {/* CTA Button - Only visible on active card */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                        height: isActive ? 'auto' : 0,
                        marginTop: isActive ? 16 : 0
                      }}
                      transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                    >
                      <Button 
                        asChild
                        variant="secondary" 
                        className="rounded-full bg-[#F5F0E8] text-[#3D3929] hover:bg-[#EBE6DC] border-0"
                      >
                        <Link href={`/${locale}/destinations/${destination.id}`}>
                          {nav.cta}
                        </Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative overflow-hidden rounded-2xl"
              style={{ height: '280px' }}
            >
              {/* Background Image */}
              <Image
                src={destination.image}
                alt={destination.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  {destination.title}
                </h3>
                <p className="mt-2 text-white/80 text-sm line-clamp-2">
                  {destination.description}
                </p>
                <Button 
                  asChild
                  variant="secondary" 
                  className="mt-4 rounded-full bg-[#F5F0E8] text-[#3D3929] hover:bg-[#EBE6DC] border-0 w-fit"
                >
                  <Link href={`/${locale}/destinations/${destination.id}`}>
                    {nav.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
