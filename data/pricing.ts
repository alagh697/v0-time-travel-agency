import type { LocalizedContent, PricingContent } from '@/types';

export const pricingData: LocalizedContent<PricingContent> = {
  fr: {
    headline: 'Découvrez nos tarifs',
    description: 'Des forfaits adaptés à tous les voyageurs temporels, avec un accompagnement premium inclus.',
    cta: 'Réserver un voyage',
    options: [
      {
        id: '1-adult',
        travelers: '1 adulte',
        price: '2000,00',
        description: 'Voyage solo',
      },
      {
        id: '2-adults',
        travelers: '2 adultes',
        price: '3500,00',
        description: 'Duo romantique',
      },
      {
        id: '3-adults',
        travelers: '3 adultes',
        price: '5000,00',
        description: 'Petit groupe',
      },
      {
        id: '1-child',
        travelers: '1 enfant',
        price: '1500,00',
        description: 'Tarif junior',
      },
      {
        id: '2-children',
        travelers: '2 enfants',
        price: '2500,00',
        description: 'Pack famille',
      },
      {
        id: '3-children',
        travelers: '3 enfants',
        price: '4000,00',
        description: 'Groupe junior',
      },
    ],
  },
  en: {
    headline: 'Discover Our Rates',
    description: 'Packages tailored for all time travelers, with premium guidance included.',
    cta: 'Book a Trip',
    options: [
      {
        id: '1-adult',
        travelers: '1 adult',
        price: '2000.00',
        description: 'Solo journey',
      },
      {
        id: '2-adults',
        travelers: '2 adults',
        price: '3500.00',
        description: 'Romantic duo',
      },
      {
        id: '3-adults',
        travelers: '3 adults',
        price: '5000.00',
        description: 'Small group',
      },
      {
        id: '1-child',
        travelers: '1 child',
        price: '1500.00',
        description: 'Junior rate',
      },
      {
        id: '2-children',
        travelers: '2 children',
        price: '2500.00',
        description: 'Family pack',
      },
      {
        id: '3-children',
        travelers: '3 children',
        price: '4000.00',
        description: 'Junior group',
      },
    ],
  },
};
