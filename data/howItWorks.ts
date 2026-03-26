import type { LocalizedContent, HowItWorksContent } from '@/types';

export const howItWorksData: LocalizedContent<HowItWorksContent> = {
  fr: {
    headline: 'Comment fonctionne le voyage temporel',
    description: 'Un processus simple et sécurisé pour vivre des expériences extraordinaires.',
    cta: 'Réserver un voyage',
    steps: [
      {
        number: 1,
        title: 'Choisissez votre époque',
        description: 'Parcourez notre catalogue de destinations temporelles et sélectionnez l\'époque qui vous fascine le plus.',
      },
      {
        number: 2,
        title: 'Préparez votre voyage',
        description: 'Nos experts vous briefent sur les coutumes, la langue et les protocoles de sécurité de votre destination.',
      },
      {
        number: 3,
        title: 'Vivez l\'aventure',
        description: 'Embarquez dans notre capsule temporelle et vivez une expérience historique inoubliable.',
      },
    ],
  },
  en: {
    headline: 'How Time Travel Works',
    description: 'A simple and secure process for extraordinary experiences.',
    cta: 'Book a Trip',
    steps: [
      {
        number: 1,
        title: 'Choose Your Era',
        description: 'Browse our catalog of temporal destinations and select the era that fascinates you most.',
      },
      {
        number: 2,
        title: 'Prepare Your Journey',
        description: 'Our experts brief you on the customs, language, and safety protocols of your destination.',
      },
      {
        number: 3,
        title: 'Live the Adventure',
        description: 'Board our time capsule and experience an unforgettable historical journey.',
      },
    ],
  },
};
