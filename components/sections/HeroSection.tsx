'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Users } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { heroData } from '@/data/hero';
import { statsData } from '@/data/stats';
import { destinationsData, featuredDestinationData } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/navigation';
import { heroFade, staggerContainer, staggerItem, fadeUp } from '@/lib/animations';

export function HeroSection() {
  const { t } = useLocale();
  const hero = t(heroData);
  const stats = t(statsData);
  const destinations = t(destinationsData);
  const featuredContent = t(featuredDestinationData);
  const featuredDestination = destinations.find((d) => d.featured) || destinations[0];

  return (
    <section className="relative min-h-screen">
      {/* Hero Container with rounded corners and margin */}
      <div className="mx-3 md:mx-4 lg:mx-6 mt-3 md:mt-4 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative min-h-[calc(100vh-1.5rem)] md:min-h-[calc(100vh-2rem)]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
            alt="Mysterious forest"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for depth and text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

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
              {/* Featured Destination Card - Glassmorphism dark style */}
              <motion.div 
                variants={staggerItem}
                className="bg-[#2a2a24]/70 backdrop-blur-xl rounded-2xl p-3 border border-white/10 shadow-2xl max-w-[280px]"
              >
                {/* Slide indicator */}
                <div className="text-xs text-white/50 mb-2 font-medium tracking-wider">
                  {hero.badge}
                </div>
                
                {/* Card image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                  <Image
                    src={featuredDestination.image}
                    alt={featuredDestination.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Card content */}
                <h3 className="font-semibold text-white text-sm leading-tight">
                  {featuredDestination.title}
                </h3>
                <p className="text-xs text-white/60 line-clamp-2 mt-1 leading-relaxed">
                  {featuredDestination.description}
                </p>
                
                {/* Progress dots */}
                <div className="flex gap-1.5 mt-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all ${
                        i === 0 ? 'w-4 bg-white/80' : 'w-1 bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
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

          {/* Booking Bar - Fixed to bottom, premium glassmorphism */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="w-full lg:max-w-4xl xl:max-w-5xl lg:ml-auto"
          >
            <div className="bg-[#3d3d32]/70 backdrop-blur-xl rounded-full p-2 md:p-2.5 shadow-2xl border border-white/10">
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
                {/* Destination */}
                <div className="flex items-center gap-3 flex-1 px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10">
                  <Search className="w-4 h-4 text-white/50 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                      {hero.searchPlaceholders.destination}
                    </p>
                    <p className="text-sm font-medium text-white truncate">
                      {featuredDestination.title}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-3 flex-1 px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10">
                  <Calendar className="w-4 h-4 text-white/50 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                      {hero.searchPlaceholders.date}
                    </p>
                    <p className="text-sm font-medium text-white">15 Mars 2025</p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3 flex-1 px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10">
                  <Clock className="w-4 h-4 text-white/50 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                      {hero.searchPlaceholders.time}
                    </p>
                    <p className="text-sm font-medium text-white">10:00</p>
                  </div>
                </div>

                {/* Travelers */}
                <div className="flex items-center gap-3 flex-1 px-4 md:px-5 py-3 md:py-2.5">
                  <Users className="w-4 h-4 text-white/50 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                      {hero.searchPlaceholders.travelers}
                    </p>
                    <p className="text-sm font-medium text-white">2 personnes</p>
                  </div>
                </div>

                {/* CTA Button - Light cream color */}
                <div className="px-2 md:px-1 py-2 md:py-0">
                  <Button 
                    size="lg" 
                    className="w-full md:w-auto rounded-full px-6 md:px-8 py-3 bg-[#d4cfc4] text-[#3d3d32] hover:bg-[#c9c3b6] font-medium text-sm border-0 shadow-lg"
                  >
                    {hero.cta}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
