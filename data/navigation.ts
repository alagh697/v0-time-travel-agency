import type { LocalizedContent, NavigationContent } from '@/types';

export const navigationData: LocalizedContent<NavigationContent> = {
  fr: {
    brand: 'Time Travel Agency',
    items: [
      { label: 'Accueil', href: '#' },
      { label: 'Destinations', href: '#destinations' },
      { label: 'Tarifs', href: '#pricing' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Réserver un voyage',
  },
  en: {
    brand: 'Time Travel Agency',
    items: [
      { label: 'Home', href: '#' },
      { label: 'Destinations', href: '#destinations' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: 'Book a Trip',
  },
};
