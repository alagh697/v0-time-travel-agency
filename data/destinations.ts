import type { LocalizedContent, Destination } from '@/types';

export const destinationsData: LocalizedContent<Destination[]> = {
  fr: [
    {
      id: 'jurassic',
      title: 'Expédition Jurassique',
      description: 'Observez les dinosaures dans leur habitat naturel, 150 millions d\'années dans le passé.',
      image: '/images/Cretace.jpg',
      era: '-150M années',
      featured: true,
      discoverLabel: 'Découvrir le Jurassique',
    },
    {
      id: 'paris-belle-epoque',
      title: 'Paris Belle Époque',
      description: 'Flânez dans le Paris de 1900, entre expositions universelles et cafés littéraires.',
      image: '/images/Paris.jpg',
      era: '1900',
      discoverLabel: 'Découvrir Paris Belle Époque',
    },
    {
      id: 'renaissance-florence',
      title: 'Florence Renaissance',
      description: 'Rencontrez les grands maîtres de la Renaissance italienne dans leur atelier.',
      image: '/images/Florence.jpg',
      era: '1500',
      discoverLabel: 'Découvrir Florence Renaissance',
    },
  ],
  en: [
    {
      id: 'jurassic',
      title: 'Jurassic Expedition',
      description: 'Observe dinosaurs in their natural habitat, 150 million years in the past.',
      image: '/images/Cretace.jpg',
      era: '-150M years',
      featured: true,
      discoverLabel: 'Explore the Jurassic',
    },
    {
      id: 'paris-belle-epoque',
      title: 'Belle Époque Paris',
      description: 'Stroll through 1900s Paris, between world exhibitions and literary cafés.',
      image: '/images/Paris.jpg',
      era: '1900',
      discoverLabel: 'Explore Belle Époque Paris',
    },
    {
      id: 'renaissance-florence',
      title: 'Renaissance Florence',
      description: 'Meet the great masters of the Italian Renaissance in their workshops.',
      image: '/images/Florence.jpg',
      era: '1500',
      discoverLabel: 'Explore Renaissance Florence',
    },
  ],
};

export const featuredDestinationData: LocalizedContent<{ title: string; description: string }> = {
  fr: {
    title: 'Destination vedette',
    description: 'Découvrez notre expédition la plus populaire de la saison.',
  },
  en: {
    title: 'Featured Destination',
    description: 'Discover our most popular expedition of the season.',
  },
};
