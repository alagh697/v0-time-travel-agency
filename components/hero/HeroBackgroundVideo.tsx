'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { HeroDestination } from '@/data/hero-destinations';

interface HeroBackgroundVideoProps {
  destination: HeroDestination;
}

export function HeroBackgroundVideo({ destination }: HeroBackgroundVideoProps) {
  const [videoError, setVideoError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reset video state when destination changes
  useEffect(() => {
    setVideoError(false);
    setIsVideoLoaded(false);
    
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [destination.id]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={destination.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Fallback Image - Always rendered as base layer */}
          <Image
            src={destination.fallbackImageSrc}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />

          {/* Video Layer - Only if no error */}
          {!videoError && (
            <video
              ref={videoRef}
              key={`video-${destination.id}`}
              autoPlay
              loop
              muted
              playsInline
              onError={handleVideoError}
              onCanPlay={handleVideoCanPlay}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isVideoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={destination.heroVideoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
    </div>
  );
}
