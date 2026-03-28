'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { heroData } from '@/data/hero';
import { statsData } from '@/data/stats';
import { heroDestinationsData } from '@/data/hero-destinations';
import { Header } from '@/components/navigation';
import { HeroBackgroundVideo, HeroDestinationCard, HeroBookingForm } from '@/components/hero';
import { heroFade, staggerContainer, staggerItem } from '@/lib/animations';

const AUTO_ROTATE_INTERVAL = 5000; // 5 seconds

export function HeroSection() {
  const { t } = useLocale();
  const hero = t(heroData);
  const stats = t(statsData);
  const heroDestinations = t(heroDestinationsData);
  
  // Default to Cretace (index 0) as the active destination
  const [activeDestinationIndex, setActiveDestinationIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeDestination = heroDestinations.destinations[activeDestinationIndex];
  const totalDestinations = heroDestinations.destinations.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation logic
  const startAutoRotate = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      if (!isPaused) {
        setActiveDestinationIndex((prev) => (prev + 1) % totalDestinations);
      }
    }, AUTO_ROTATE_INTERVAL);
  }, [isPaused, totalDestinations]);

  // Start auto-rotation on mount
  useEffect(() => {
    startAutoRotate();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startAutoRotate]);

  // Handle manual destination change - resets the timer
  const handleDestinationChange = useCallback((index: number) => {
    setActiveDestinationIndex(index);
    // Reset timer when user manually changes destination
    startAutoRotate();
  }, [startAutoRotate]);

  // Pause/resume handlers for user interaction
  const handleInteractionStart = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsPaused(false);
    startAutoRotate();
  }, [startAutoRotate]);

  return (
    <section className="relative min-h-screen">
      {/* Hero Container with rounded corners and margin */}
      <div className="mx-3 md:mx-4 lg:mx-6 mt-3 md:mt-4 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)]">
        {/* Background Video with fallback */}
        <HeroBackgroundVideo destination={activeDestination} />

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-10 xl:px-16 pt-24 md:pt-28 pb-6 md:pb-10 flex flex-col min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)]">
          
          {/* Main content area */}
          <div className="flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12">
            
            {/* Left Column - Featured Card */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:w-[280px] xl:w-[300px] flex-shrink-0 order-2 lg:order-1"
            >
              <HeroDestinationCard
                destinations={heroDestinations.destinations}
                activeIndex={activeDestinationIndex}
                onDestinationChange={handleDestinationChange}
                content={heroDestinations}
                onInteractionStart={handleInteractionStart}
                onInteractionEnd={handleInteractionEnd}
              />
            </motion.div>

            {/* Center/Right Column - Main Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex-1 order-1 lg:order-2 flex flex-col"
            >
              {/* Hero headline */}
              <motion.h1 
                variants={heroFade}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-white tracking-tight leading-[1.1] max-w-3xl"
              >
                {hero.headline.split(',').map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <br className="hidden sm:block" />}
                  </span>
                ))}
              </motion.h1>

              {/* Stats row - positioned below headline */}
              <motion.div 
                variants={staggerItem}
                className="flex items-center gap-6 md:gap-8 mt-8 md:mt-10"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <p className="text-xl md:text-2xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-white/60 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Spacer to push booking bar down */}
              <div className="flex-1 min-h-[60px] md:min-h-[100px]" />
            </motion.div>
          </div>

          {/* Booking Bar - Premium glassmorphism with interactive dropdowns */}
          <HeroBookingForm
            destinations={heroDestinations.destinations}
            activeIndex={activeDestinationIndex}
            onDestinationChange={handleDestinationChange}
            content={hero}
            onInteractionStart={handleInteractionStart}
            onInteractionEnd={handleInteractionEnd}
          />
        </div>
      </div>
    </section>
  );
}
