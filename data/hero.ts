import type { LocalizedContent, HeroContent } from '@/types';

export const heroData: LocalizedContent<HeroContent> = {
  fr: {
    badge: '01/03',
    headline: 'Voyagez dans le temps, vivez l\'histoire.',
    subheadline: 'Explorez les époques les plus fascinantes de l\'humanité avec notre technologie de voyage temporel certifiée et sécurisée.',
    cta: 'Réserver un voyage',
    searchPlaceholders: {
      destination: 'Destination',
      date: 'Date',
      time: 'Heure',
      travelers: 'Voyageurs',
    },
  },
  en: {
    badge: '01/03',
    headline: 'Travel through time, live history.',
    subheadline: 'Explore humanity\'s most fascinating eras with our certified and secure temporal travel technology.',
    cta: 'Book a Trip',
    searchPlaceholders: {
      destination: 'Destination',
      date: 'Date',
      time: 'Time',
      travelers: 'Travelers',
    },
  },
};
