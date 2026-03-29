'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { destinationsData } from '@/data/destinations';
import { Container, Section } from '@/components/shared';
import { cn } from '@/lib/utils';

export function DestinationsSection() {
  const { locale, t } = useLocale();
  const destinations = t(destinationsData);
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
              <Link
                key={destination.id}
                href={`/${locale}/destinations/${destination.id}`}
                className="block relative overflow-hidden rounded-3xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{ flex: isActive ? 2 : 1 }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: isActive ? 1 : 1 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Background Image */}
                  <Image
                    src={destination.image}
                    alt={destination.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </motion.div>
                
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
                    
                    {/* CTA Button - Visual only, not interactive */}
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
                      <span 
                        className="inline-flex items-center justify-center rounded-full bg-[#F5F0E8] text-[#3D3929] hover:bg-[#EBE6DC] border-0 px-4 py-2 text-sm font-medium"
                      >
                        {destination.discoverLabel || t({ fr: 'Découvrir', en: 'Explore' })}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="flex flex-col gap-4 md:hidden">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/${locale}/destinations/${destination.id}`}
              className="block relative overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
                <span 
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#F5F0E8] text-[#3D3929] hover:bg-[#EBE6DC] border-0 w-fit px-4 py-2 text-sm font-medium"
                >
                  {destination.discoverLabel || t({ fr: 'Découvrir', en: 'Explore' })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
