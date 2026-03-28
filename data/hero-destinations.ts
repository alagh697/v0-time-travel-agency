import type { LocalizedContent } from '@/types';

export interface HeroDestination {
  id: string;
  slug: string;
  name: string;
  shortLabel: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  heroVideoSrc: string;
  fallbackImageSrc: string;
  stats: {
    era: string;
    duration: string;
  };
  bookingDefaults: {
    time: string;
    travelers: number;
  };
}

export interface HeroDestinationsContent {
  destinations: HeroDestination[];
  controls: {
    previous: string;
    next: string;
  };
}

export const heroDestinationsData: LocalizedContent<HeroDestinationsContent> = {
  fr: {
    destinations: [
      {
        id: 'cretace',
        slug: 'cretace',
        name: 'Expédition Crétacé',
        shortLabel: 'Crétacé',
        subtitle: 'Il y a 66 millions d\'années',
        description: 'Observez les derniers dinosaures dans leur habitat naturel, juste avant l\'extinction massive.',
        imageSrc: '/images/destinations/cretace.jpg',
        heroVideoSrc: '/videos/cretace.mp4',
        fallbackImageSrc: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=1920&q=80',
        stats: {
          era: '-66M années',
          duration: '4 heures',
        },
        bookingDefaults: {
          time: '09:00',
          travelers: 2,
        },
      },
      {
        id: 'paris',
        slug: 'paris',
        name: 'Paris Belle Époque',
        shortLabel: 'Paris',
        subtitle: 'L\'âge d\'or parisien',
        description: 'Flânez dans le Paris de 1900, entre expositions universelles et cafés littéraires.',
        imageSrc: '/images/destinations/paris.jpg',
        heroVideoSrc: '/videos/paris.mp4',
        fallbackImageSrc: '/images/Paris.jpg',
        stats: {
          era: '1900',
          duration: '6 heures',
        },
        bookingDefaults: {
          time: '10:00',
          travelers: 2,
        },
      },
      {
        id: 'florence',
        slug: 'florence',
        name: 'Florence Renaissance',
        shortLabel: 'Florence',
        subtitle: 'Le berceau de l\'art',
        description: 'Rencontrez les grands maîtres de la Renaissance italienne dans leur atelier.',
        imageSrc: '/images/destinations/florence.jpg',
        heroVideoSrc: '/videos/florence.mp4',
        fallbackImageSrc: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=1920&q=80',
        stats: {
          era: '1500',
          duration: '5 heures',
        },
        bookingDefaults: {
          time: '11:00',
          travelers: 2,
        },
      },
    ],
    controls: {
      previous: 'Destination précédente',
      next: 'Destination suivante',
    },
  },
  en: {
    destinations: [
      {
        id: 'cretace',
        slug: 'cretace',
        name: 'Cretaceous Expedition',
        shortLabel: 'Cretaceous',
        subtitle: '66 million years ago',
        description: 'Observe the last dinosaurs in their natural habitat, just before the mass extinction.',
        imageSrc: '/images/destinations/cretace.jpg',
        heroVideoSrc: '/videos/cretace.mp4',
        fallbackImageSrc: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=1920&q=80',
        stats: {
          era: '-66M years',
          duration: '4 hours',
        },
        bookingDefaults: {
          time: '09:00',
          travelers: 2,
        },
      },
      {
        id: 'paris',
        slug: 'paris',
        name: 'Belle Époque Paris',
        shortLabel: 'Paris',
        subtitle: 'The Parisian golden age',
        description: 'Stroll through 1900s Paris, between world exhibitions and literary cafés.',
        imageSrc: '/images/destinations/paris.jpg',
        heroVideoSrc: '/videos/paris.mp4',
        fallbackImageSrc: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&q=80',
        stats: {
          era: '1900',
          duration: '6 hours',
        },
        bookingDefaults: {
          time: '10:00',
          travelers: 2,
        },
      },
      {
        id: 'florence',
        slug: 'florence',
        name: 'Renaissance Florence',
        shortLabel: 'Florence',
        subtitle: 'The cradle of art',
        description: 'Meet the great masters of the Italian Renaissance in their workshops.',
        imageSrc: '/images/destinations/florence.jpg',
        heroVideoSrc: '/videos/florence.mp4',
        fallbackImageSrc: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=1920&q=80',
        stats: {
          era: '1500',
          duration: '5 hours',
        },
        bookingDefaults: {
          time: '11:00',
          travelers: 2,
        },
      },
    ],
    controls: {
      previous: 'Previous destination',
      next: 'Next destination',
    },
  },
};
