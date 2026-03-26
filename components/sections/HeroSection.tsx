'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Users } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { heroData } from '@/data/hero';
import { statsData } from '@/data/stats';
import { destinationsData, featuredDestinationData } from '@/data/destinations';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/shared';
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
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
          alt="Mysterious forest"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <Container className="relative z-10 pt-32 md:pt-40 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16 min-h-[60vh]">
          {/* Featured Destination Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1 w-full lg:w-auto"
          >
            <motion.div 
              variants={staggerItem}
              className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 max-w-xs"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <Image
                  src={featuredDestination.image}
                  alt={featuredDestination.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-1">{featuredContent.title}</p>
              <h3 className="font-semibold text-foreground">{featuredDestination.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {featuredDestination.description}
              </p>
              {/* Pagination dots */}
              <div className="flex gap-1.5 mt-3">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 0 ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-1 lg:order-2 flex-1 text-center lg:text-left max-w-3xl"
          >
            <motion.span 
              variants={staggerItem}
              className="inline-block px-3 py-1 mb-4 text-xs font-medium text-primary-foreground/80 bg-white/10 rounded-full backdrop-blur-sm"
            >
              {hero.badge}
            </motion.span>
            <motion.h1 
              variants={heroFade}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground tracking-tight text-balance leading-tight"
            >
              {hero.headline}
            </motion.h1>
            <motion.p 
              variants={staggerItem}
              className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {hero.subheadline}
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 mt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Search Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-3 md:p-4 shadow-lg">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
              {/* Destination */}
              <div className="flex items-center gap-3 flex-1 px-4 py-3 bg-background rounded-xl">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {hero.searchPlaceholders.destination}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {featuredDestination.title}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3 flex-1 px-4 py-3 bg-background rounded-xl">
                <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {hero.searchPlaceholders.date}
                  </p>
                  <p className="text-sm font-medium text-foreground">15 Mars 2025</p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 flex-1 px-4 py-3 bg-background rounded-xl">
                <Clock className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {hero.searchPlaceholders.time}
                  </p>
                  <p className="text-sm font-medium text-foreground">10:00</p>
                </div>
              </div>

              {/* Travelers */}
              <div className="flex items-center gap-3 flex-1 px-4 py-3 bg-background rounded-xl">
                <Users className="w-5 h-5 text-muted-foreground shrink-0" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {hero.searchPlaceholders.travelers}
                  </p>
                  <p className="text-sm font-medium text-foreground">2</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className="rounded-xl px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {hero.cta}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
