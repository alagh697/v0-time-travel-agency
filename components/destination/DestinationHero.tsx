'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, UserCircle, Activity } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import { Container } from '@/components/shared';
import type { DestinationDetail } from '@/types';

interface DestinationHeroProps {
  destination: DestinationDetail;
}

export function DestinationHero({ destination }: DestinationHeroProps) {
  const { locale, t } = useLocale();
  const content = t(destinationDetailContent);

  const badges = [
    { icon: Clock, label: content.durationLabel, value: destination.duration },
    { icon: Users, label: content.groupSizeLabel, value: destination.groupSize },
    { icon: UserCircle, label: content.minAgeLabel, value: `${destination.minAge}+` },
    { icon: Activity, label: content.intensityLabel, value: destination.intensity },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <Container className="relative z-10 pb-12 md:pb-16">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}#destinations`}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {content.backButton}
          </Link>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4">
            {destination.era}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3">
            {destination.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light">
            {destination.subtitle}
          </p>
        </motion.div>

        {/* Info Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full"
            >
              <badge.icon className="w-4 h-4 text-white/80" />
              <span className="text-white text-sm">
                <span className="text-white/70">{badge.label}:</span> {badge.value}
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
