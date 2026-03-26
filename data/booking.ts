import type { LocalizedContent, BookingContent } from '@/types';

export const bookingData: LocalizedContent<BookingContent> = {
  fr: {
    headline: 'Réservez votre voyage dans le temps avec Time Travel Agency',
    cta: 'Continuer',
    steps: [
      { number: 1, label: 'Destination' },
      { number: 2, label: 'Date' },
      { number: 3, label: 'Heure' },
      { number: 4, label: 'Personnes' },
    ],
    destinations: [
      {
        id: 'jurassic',
        name: 'Expédition Jurassique',
        image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=400&q=80',
      },
      {
        id: 'paris',
        name: 'Paris Belle Époque',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
      },
      {
        id: 'florence',
        name: 'Florence Renaissance',
        image: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=400&q=80',
      },
      {
        id: 'egypt',
        name: 'Égypte Antique',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&q=80',
      },
    ],
  },
  en: {
    headline: 'Book Your Journey Through Time with Time Travel Agency',
    cta: 'Continue',
    steps: [
      { number: 1, label: 'Destination' },
      { number: 2, label: 'Date' },
      { number: 3, label: 'Time' },
      { number: 4, label: 'Travelers' },
    ],
    destinations: [
      {
        id: 'jurassic',
        name: 'Jurassic Expedition',
        image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78250?w=400&q=80',
      },
      {
        id: 'paris',
        name: 'Belle Époque Paris',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80',
      },
      {
        id: 'florence',
        name: 'Renaissance Florence',
        image: 'https://images.unsplash.com/photo-1543429258-c5f5f1bf0cfc?w=400&q=80',
      },
      {
        id: 'egypt',
        name: 'Ancient Egypt',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&q=80',
      },
    ],
  },
};

export const bookingIntroData: LocalizedContent<{ label: string }> = {
  fr: {
    label: 'Choisissez votre destination',
  },
  en: {
    label: 'Choose your destination',
  },
};
