'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { HeroDestination, HeroDestinationsContent } from '@/data/hero-destinations';

interface HeroDestinationCardProps {
  destinations: HeroDestination[];
  activeIndex: number;
  onDestinationChange: (index: number) => void;
  content: HeroDestinationsContent;
}

export function HeroDestinationCard({
  destinations,
  activeIndex,
  onDestinationChange,
  content,
}: HeroDestinationCardProps) {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const destination = destinations[activeIndex];
  const totalDestinations = destinations.length;

  const handlePrevious = () => {
    const newIndex = activeIndex === 0 ? totalDestinations - 1 : activeIndex - 1;
    onDestinationChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === totalDestinations - 1 ? 0 : activeIndex + 1;
    onDestinationChange(newIndex);
  };

  const handleImageError = (id: string) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#2a2a24]/75 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-2xl w-full max-w-[280px] lg:max-w-[300px]"
    >
      {/* Slide indicator and controls */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-white/50 font-medium tracking-wider">
          {String(activeIndex + 1).padStart(2, '0')}/{String(totalDestinations).padStart(2, '0')}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePrevious}
            aria-label={content.controls.previous}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
          </button>
          <button
            onClick={handleNext}
            aria-label={content.controls.next}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-3.5 h-3.5 text-white/70" />
          </button>
        </div>
      </div>

      {/* Card image with animation */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={destination.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={imageError[destination.id] ? destination.fallbackImageSrc : destination.imageSrc}
              alt={destination.name}
              fill
              className="object-cover"
              onError={() => handleImageError(destination.id)}
            />
            {/* Era badge */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
              <span className="text-[10px] font-medium text-white/90">{destination.stats.era}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Card content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.id}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-semibold text-white text-sm leading-tight">
            {destination.name}
          </h3>
          <p className="text-xs text-white/60 line-clamp-2 mt-1 leading-relaxed">
            {destination.description}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Progress dots */}
      <div className="flex gap-1.5 mt-3">
        {destinations.map((_, i) => (
          <button
            key={i}
            onClick={() => onDestinationChange(i)}
            aria-label={`Go to destination ${i + 1}`}
            className={`h-1 rounded-full transition-all ${
              i === activeIndex ? 'w-4 bg-white/80' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
