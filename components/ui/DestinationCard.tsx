'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Destination } from '@/types';
import { Button } from '@/components/ui/button';

interface DestinationCardProps {
  destination: Destination;
  size?: 'sm' | 'lg';
  ctaLabel: string;
  className?: string;
}

export function DestinationCard({
  destination,
  size = 'sm',
  ctaLabel,
  className,
}: DestinationCardProps) {
  const isLarge = size === 'lg';

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-card',
        isLarge ? 'aspect-[4/5] md:aspect-[3/4]' : 'aspect-[4/3]',
        className
      )}
    >
      <Image
        src={destination.image}
        alt={destination.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
        {/* Top Content */}
        <div>
          <h3 className={cn(
            'font-semibold text-white',
            isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
          )}>
            {destination.title}
          </h3>
          {isLarge && (
            <p className="mt-2 text-white/80 text-sm md:text-base line-clamp-2 max-w-xs">
              {destination.description}
            </p>
          )}
        </div>

        {/* Bottom Content */}
        <div className="flex items-end justify-between">
          {isLarge && (
            <Button 
              variant="secondary" 
              className="rounded-full bg-card/90 text-foreground hover:bg-card"
            >
              {ctaLabel}
            </Button>
          )}
          <span className={cn(
            'text-white/70 text-sm',
            !isLarge && 'ml-auto'
          )}>
            {destination.era}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
