import type { LocalizedContent, Testimonial, TestimonialsContent } from '@/types';

export const testimonialsContentData: LocalizedContent<TestimonialsContent> = {
  fr: {
    headline: 'Ce que nos voyageurs disent',
    description: 'Des milliers de clients satisfaits ont déjà vécu l\'expérience Time Travel Agency.',
    cta: 'Réserver un voyage',
  },
  en: {
    headline: 'What Our Travelers Say',
    description: 'Thousands of satisfied clients have already experienced Time Travel Agency.',
    cta: 'Book a Trip',
  },
};

export const testimonialsData: LocalizedContent<Testimonial[]> = {
  fr: [
    {
      id: '1',
      name: 'John D.',
      role: 'Entrepreneur',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      rating: 5,
      quote: 'Une expérience absolument incroyable. J\'ai pu voir la construction de la Tour Eiffel de mes propres yeux. Le service était impeccable et la sécurité irréprochable.',
    },
    {
      id: '2',
      name: 'John D.',
      role: 'Historien',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
      quote: 'En tant qu\'historien, pouvoir vivre les événements que j\'ai étudiés toute ma vie était un rêve devenu réalité. Hautement recommandé!',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80',
    },
    {
      id: '3',
      name: 'John D.',
      role: 'Aventurier',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      rating: 5,
      quote: 'L\'expédition Jurassique a dépassé toutes mes attentes. Voir des dinosaures vivants est quelque chose que je n\'oublierai jamais.',
    },
    {
      id: '4',
      name: 'John D.',
      role: 'Photographe',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
      quote: 'Les paysages que j\'ai pu capturer durant mon voyage dans le Paris de 1900 sont tout simplement extraordinaires. Une agence de confiance.',
    },
    {
      id: '5',
      name: 'John D.',
      role: 'Professeur',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
      quote: 'J\'emmène maintenant mes étudiants en voyage temporel. Rien ne vaut l\'apprentissage par l\'expérience directe.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    },
  ],
  en: [
    {
      id: '1',
      name: 'John D.',
      role: 'Entrepreneur',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      rating: 5,
      quote: 'An absolutely incredible experience. I was able to witness the construction of the Eiffel Tower with my own eyes. The service was impeccable and safety flawless.',
    },
    {
      id: '2',
      name: 'John D.',
      role: 'Historian',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      rating: 5,
      quote: 'As a historian, being able to live the events I\'ve studied my whole life was a dream come true. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400&q=80',
    },
    {
      id: '3',
      name: 'John D.',
      role: 'Adventurer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
      rating: 5,
      quote: 'The Jurassic Expedition exceeded all my expectations. Seeing living dinosaurs is something I will never forget.',
    },
    {
      id: '4',
      name: 'John D.',
      role: 'Photographer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      rating: 5,
      quote: 'The landscapes I captured during my journey to 1900s Paris are simply extraordinary. A trustworthy agency.',
    },
    {
      id: '5',
      name: 'John D.',
      role: 'Professor',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      rating: 5,
      quote: 'I now take my students on time travel journeys. Nothing beats learning through direct experience.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80',
    },
  ],
};
