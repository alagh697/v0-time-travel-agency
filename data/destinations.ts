import type { LocalizedContent, Destination } from '@/types';

export const destinationsData: LocalizedContent<Destination[]> = {
  fr: [
    {
      id: 'jurassic',
      title: 'Expédition Jurassique',
      description: 'Observez les dinosaures dans leur habitat naturel, 150 millions d\'années dans le passé.',
      image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=800&q=80',
      era: '-150M années',
      featured: true,
    },
    {
      id: 'paris-belle-epoque',
      title: 'Paris Belle Époque',
      description: 'Flânez dans le Paris de 1900, entre expositions universelles et cafés littéraires.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      era: '1900',
    },
    {
      id: 'renaissance-florence',
      title: 'Florence Renaissance',
      description: 'Rencontrez les grands maîtres de la Renaissance italienne dans leur atelier.',
      image: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=800&q=80',
      era: '1500',
    },
  ],
  en: [
    {
      id: 'jurassic',
      title: 'Jurassic Expedition',
      description: 'Observe dinosaurs in their natural habitat, 150 million years in the past.',
      image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=800&q=80',
      era: '-150M years',
      featured: true,
    },
    {
      id: 'paris-belle-epoque',
      title: 'Belle Époque Paris',
      description: 'Stroll through 1900s Paris, between world exhibitions and literary cafés.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      era: '1900',
    },
    {
      id: 'renaissance-florence',
      title: 'Renaissance Florence',
      description: 'Meet the great masters of the Italian Renaissance in their workshops.',
      image: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=800&q=80',
      era: '1500',
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
