import type { LocalizedContent, BookingContent } from '@/types';

export interface BookingConfirmationContent {
  title: string;
  subtitle: string;
  destinationLabel: string;
  dateLabel: string;
  timeLabel: string;
  travelersLabel: string;
  travelersUnit: string;
  closeButton: string;
}

export interface BookingFlowContent {
  headline: string;
  cta: string;
  ctaConfirm: string;
  steps: { number: number; label: string }[];
  destinations: { id: string; name: string; image: string }[];
  dateLabel: string;
  datePlaceholder: string;
  timeLabel: string;
  times: string[];
  travelersLabel: string;
  travelerOptions: number[];
  travelerUnit: string;
  travelerUnitPlural: string;
  confirmation: BookingConfirmationContent;
}

export const bookingData: LocalizedContent<BookingFlowContent> = {
  fr: {
    headline: 'Réservez votre voyage dans le temps avec Time Travel Agency',
    cta: 'Continuer',
    ctaConfirm: 'Valider',
    steps: [
      { number: 1, label: 'Destination' },
      { number: 2, label: 'Date' },
      { number: 3, label: 'Heure' },
      { number: 4, label: 'Personnes' },
    ],
    destinations: [
      {
        id: 'cretace',
        name: 'Expédition Crétacé',
        image: '/images/Cretace.jpg',
      },
      {
        id: 'paris',
        name: 'Paris Belle Époque',
        image: '/images/Paris.jpg',
      },
      {
        id: 'florence',
        name: 'Florence Renaissance',
        image: '/images/Florence.jpg',
      },
      {
        id: 'egypt',
        name: 'Égypte Antique',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&q=80',
      },
    ],
    dateLabel: 'Choisissez une date',
    datePlaceholder: 'Sélectionner une date',
    timeLabel: 'Choisissez un horaire',
    times: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    travelersLabel: 'Nombre de voyageurs',
    travelerOptions: [1, 2, 3, 4, 5, 6],
    travelerUnit: 'personne',
    travelerUnitPlural: 'personnes',
    confirmation: {
      title: 'Réservation confirmée',
      subtitle: 'Votre voyage dans le temps est réservé',
      destinationLabel: 'Destination',
      dateLabel: 'Date',
      timeLabel: 'Heure',
      travelersLabel: 'Voyageurs',
      travelersUnit: 'personne(s)',
      closeButton: 'Fermer',
    },
  },
  en: {
    headline: 'Book Your Journey Through Time with Time Travel Agency',
    cta: 'Continue',
    ctaConfirm: 'Confirm',
    steps: [
      { number: 1, label: 'Destination' },
      { number: 2, label: 'Date' },
      { number: 3, label: 'Time' },
      { number: 4, label: 'Travelers' },
    ],
    destinations: [
      {
        id: 'cretace',
        name: 'Expédition Crétacé',
        image: '/images/Cretace.jpg',
      },
      {
        id: 'paris',
        name: 'Paris Belle Époque',
        image: '/images/Paris.jpg',
      },
      {
        id: 'florence',
        name: 'Florence Renaissance',
        image: '/images/Florence.jpg',
      },
      {
        id: 'egypt',
        name: 'Égypte Antique',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&q=80',
      },
    ],
    dateLabel: 'Choose a date',
    datePlaceholder: 'Select a date',
    timeLabel: 'Choose a time',
    times: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'],
    travelersLabel: 'Number of travelers',
    travelerOptions: [1, 2, 3, 4, 5, 6],
    travelerUnit: 'person',
    travelerUnitPlural: 'people',
    confirmation: {
      title: 'Booking Confirmed',
      subtitle: 'Your journey through time is booked',
      destinationLabel: 'Destination',
      dateLabel: 'Date',
      timeLabel: 'Time',
      travelersLabel: 'Travelers',
      travelersUnit: 'person(s)',
      closeButton: 'Close',
    },
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
