import type { LocalizedContent, QuizData } from '@/types';

export const quizData: LocalizedContent<QuizData> = {
  fr: {
    intro: {
      title: 'Trouvez votre destination temporelle idéale',
      description: 'Répondez à quelques questions et laissez-nous vous guider vers l\'aventure parfaite à travers le temps.',
      startButton: 'Commencer le quiz',
    },
    questions: [
      {
        id: 'era',
        question: 'Quelle époque vous attire le plus ?',
        description: 'Choisissez l\'ambiance temporelle qui vous inspire.',
        options: [
          {
            id: 'prehistoric',
            label: 'Préhistoire & Dinosaures',
            icon: '🦕',
            destinationScores: { 'jurassic': 10, 'alexandria': 1, 'belle-epoque': 0, 'florence': 0, 'moon-2089': 2 },
          },
          {
            id: 'ancient',
            label: 'Antiquité',
            icon: '🏛️',
            destinationScores: { 'jurassic': 0, 'alexandria': 10, 'belle-epoque': 2, 'florence': 3, 'moon-2089': 0 },
          },
          {
            id: 'renaissance',
            label: 'Renaissance',
            icon: '🎨',
            destinationScores: { 'jurassic': 0, 'alexandria': 3, 'belle-epoque': 4, 'florence': 10, 'moon-2089': 0 },
          },
          {
            id: 'modern',
            label: 'Belle Époque',
            icon: '🎭',
            destinationScores: { 'jurassic': 0, 'alexandria': 2, 'belle-epoque': 10, 'florence': 3, 'moon-2089': 1 },
          },
          {
            id: 'future',
            label: 'Futur',
            icon: '🚀',
            destinationScores: { 'jurassic': 1, 'alexandria': 0, 'belle-epoque': 0, 'florence': 0, 'moon-2089': 10 },
          },
        ],
      },
      {
        id: 'experience',
        question: 'Quelle expérience recherchez-vous ?',
        description: 'Dites-nous ce qui vous fait rêver.',
        options: [
          {
            id: 'adventure',
            label: 'Aventure & Découverte',
            icon: '🧭',
            destinationScores: { 'jurassic': 10, 'alexandria': 6, 'belle-epoque': 3, 'florence': 4, 'moon-2089': 8 },
          },
          {
            id: 'culture',
            label: 'Culture & Arts',
            icon: '🖼️',
            destinationScores: { 'jurassic': 1, 'alexandria': 7, 'belle-epoque': 9, 'florence': 10, 'moon-2089': 3 },
          },
          {
            id: 'knowledge',
            label: 'Savoir & Sciences',
            icon: '📚',
            destinationScores: { 'jurassic': 5, 'alexandria': 10, 'belle-epoque': 4, 'florence': 7, 'moon-2089': 9 },
          },
          {
            id: 'gastronomy',
            label: 'Gastronomie & Art de Vivre',
            icon: '🍷',
            destinationScores: { 'jurassic': 0, 'alexandria': 4, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 2 },
          },
        ],
      },
      {
        id: 'risk',
        question: 'Quel est votre rapport au risque ?',
        description: 'Chaque époque comporte ses défis.',
        options: [
          {
            id: 'extreme',
            label: 'J\'adore l\'adrénaline',
            icon: '⚡',
            destinationScores: { 'jurassic': 10, 'alexandria': 4, 'belle-epoque': 1, 'florence': 2, 'moon-2089': 8 },
          },
          {
            id: 'moderate',
            label: 'Un peu de frisson',
            icon: '🌊',
            destinationScores: { 'jurassic': 5, 'alexandria': 7, 'belle-epoque': 4, 'florence': 5, 'moon-2089': 6 },
          },
          {
            id: 'safe',
            label: 'Sécurité avant tout',
            icon: '🛡️',
            destinationScores: { 'jurassic': 0, 'alexandria': 3, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 4 },
          },
        ],
      },
      {
        id: 'group',
        question: 'Avec qui voyagez-vous ?',
        description: 'La composition du groupe influence l\'expérience.',
        options: [
          {
            id: 'solo',
            label: 'En solo',
            icon: '🚶',
            destinationScores: { 'jurassic': 4, 'alexandria': 8, 'belle-epoque': 6, 'florence': 9, 'moon-2089': 7 },
          },
          {
            id: 'couple',
            label: 'En couple',
            icon: '💑',
            destinationScores: { 'jurassic': 3, 'alexandria': 5, 'belle-epoque': 10, 'florence': 10, 'moon-2089': 5 },
          },
          {
            id: 'family',
            label: 'En famille',
            icon: '👨‍👩‍👧‍👦',
            destinationScores: { 'jurassic': 8, 'alexandria': 6, 'belle-epoque': 7, 'florence': 6, 'moon-2089': 9 },
          },
          {
            id: 'friends',
            label: 'Entre amis',
            icon: '👥',
            destinationScores: { 'jurassic': 9, 'alexandria': 7, 'belle-epoque': 8, 'florence': 7, 'moon-2089': 8 },
          },
        ],
      },
      {
        id: 'style',
        question: 'Quel style de voyage préférez-vous ?',
        description: 'Votre rythme idéal.',
        options: [
          {
            id: 'immersive',
            label: 'Immersion totale',
            icon: '🎭',
            destinationScores: { 'jurassic': 8, 'alexandria': 9, 'belle-epoque': 8, 'florence': 10, 'moon-2089': 6 },
          },
          {
            id: 'observing',
            label: 'Observation discrète',
            icon: '👁️',
            destinationScores: { 'jurassic': 10, 'alexandria': 7, 'belle-epoque': 6, 'florence': 5, 'moon-2089': 8 },
          },
          {
            id: 'interactive',
            label: 'Interactions avec les locaux',
            icon: '🤝',
            destinationScores: { 'jurassic': 2, 'alexandria': 10, 'belle-epoque': 10, 'florence': 9, 'moon-2089': 7 },
          },
        ],
      },
      {
        id: 'comfort',
        question: 'Quel niveau de confort souhaitez-vous ?',
        description: 'Les conditions varient selon les époques.',
        options: [
          {
            id: 'luxury',
            label: 'Luxe & Raffinement',
            icon: '👑',
            destinationScores: { 'jurassic': 1, 'alexandria': 5, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 9 },
          },
          {
            id: 'comfortable',
            label: 'Confort standard',
            icon: '🏠',
            destinationScores: { 'jurassic': 3, 'alexandria': 7, 'belle-epoque': 8, 'florence': 9, 'moon-2089': 7 },
          },
          {
            id: 'rustic',
            label: 'Authentique & Rustique',
            icon: '🏕️',
            destinationScores: { 'jurassic': 10, 'alexandria': 8, 'belle-epoque': 3, 'florence': 5, 'moon-2089': 4 },
          },
        ],
      },
      {
        id: 'immersion',
        question: 'Quelle immersion historique préférez-vous ?',
        description: 'Le degré de contact avec l\'histoire.',
        options: [
          {
            id: 'witness',
            label: 'Témoin d\'événements majeurs',
            icon: '📜',
            destinationScores: { 'jurassic': 5, 'alexandria': 9, 'belle-epoque': 8, 'florence': 10, 'moon-2089': 7 },
          },
          {
            id: 'meet',
            label: 'Rencontrer des personnages célèbres',
            icon: '🎩',
            destinationScores: { 'jurassic': 0, 'alexandria': 10, 'belle-epoque': 9, 'florence': 10, 'moon-2089': 6 },
          },
          {
            id: 'explore',
            label: 'Explorer des lieux disparus',
            icon: '🗺️',
            destinationScores: { 'jurassic': 10, 'alexandria': 8, 'belle-epoque': 6, 'florence': 7, 'moon-2089': 9 },
          },
        ],
      },
    ],
    loading: {
      title: 'Analyse en cours...',
      description: 'Notre IA temporelle calcule votre destination idéale.',
    },
    result: {
      title: 'Votre destination idéale',
      exploreButton: 'Découvrir cette destination',
      retakeButton: 'Refaire le quiz',
    },
    navigation: {
      previous: 'Précédent',
      next: 'Suivant',
      close: 'Fermer',
    },
  },
  en: {
    intro: {
      title: 'Find Your Ideal Time Destination',
      description: 'Answer a few questions and let us guide you to the perfect adventure through time.',
      startButton: 'Start the Quiz',
    },
    questions: [
      {
        id: 'era',
        question: 'Which era attracts you the most?',
        description: 'Choose the temporal atmosphere that inspires you.',
        options: [
          {
            id: 'prehistoric',
            label: 'Prehistoric & Dinosaurs',
            icon: '🦕',
            destinationScores: { 'jurassic': 10, 'alexandria': 1, 'belle-epoque': 0, 'florence': 0, 'moon-2089': 2 },
          },
          {
            id: 'ancient',
            label: 'Ancient Times',
            icon: '🏛️',
            destinationScores: { 'jurassic': 0, 'alexandria': 10, 'belle-epoque': 2, 'florence': 3, 'moon-2089': 0 },
          },
          {
            id: 'renaissance',
            label: 'Renaissance',
            icon: '🎨',
            destinationScores: { 'jurassic': 0, 'alexandria': 3, 'belle-epoque': 4, 'florence': 10, 'moon-2089': 0 },
          },
          {
            id: 'modern',
            label: 'Belle Époque',
            icon: '🎭',
            destinationScores: { 'jurassic': 0, 'alexandria': 2, 'belle-epoque': 10, 'florence': 3, 'moon-2089': 1 },
          },
          {
            id: 'future',
            label: 'Future',
            icon: '🚀',
            destinationScores: { 'jurassic': 1, 'alexandria': 0, 'belle-epoque': 0, 'florence': 0, 'moon-2089': 10 },
          },
        ],
      },
      {
        id: 'experience',
        question: 'What experience are you looking for?',
        description: 'Tell us what makes you dream.',
        options: [
          {
            id: 'adventure',
            label: 'Adventure & Discovery',
            icon: '🧭',
            destinationScores: { 'jurassic': 10, 'alexandria': 6, 'belle-epoque': 3, 'florence': 4, 'moon-2089': 8 },
          },
          {
            id: 'culture',
            label: 'Culture & Arts',
            icon: '🖼️',
            destinationScores: { 'jurassic': 1, 'alexandria': 7, 'belle-epoque': 9, 'florence': 10, 'moon-2089': 3 },
          },
          {
            id: 'knowledge',
            label: 'Knowledge & Sciences',
            icon: '📚',
            destinationScores: { 'jurassic': 5, 'alexandria': 10, 'belle-epoque': 4, 'florence': 7, 'moon-2089': 9 },
          },
          {
            id: 'gastronomy',
            label: 'Gastronomy & Lifestyle',
            icon: '🍷',
            destinationScores: { 'jurassic': 0, 'alexandria': 4, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 2 },
          },
        ],
      },
      {
        id: 'risk',
        question: 'What is your relationship with risk?',
        description: 'Every era has its challenges.',
        options: [
          {
            id: 'extreme',
            label: 'I love adrenaline',
            icon: '⚡',
            destinationScores: { 'jurassic': 10, 'alexandria': 4, 'belle-epoque': 1, 'florence': 2, 'moon-2089': 8 },
          },
          {
            id: 'moderate',
            label: 'Some thrill',
            icon: '🌊',
            destinationScores: { 'jurassic': 5, 'alexandria': 7, 'belle-epoque': 4, 'florence': 5, 'moon-2089': 6 },
          },
          {
            id: 'safe',
            label: 'Safety first',
            icon: '🛡️',
            destinationScores: { 'jurassic': 0, 'alexandria': 3, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 4 },
          },
        ],
      },
      {
        id: 'group',
        question: 'Who are you traveling with?',
        description: 'Group composition influences the experience.',
        options: [
          {
            id: 'solo',
            label: 'Solo',
            icon: '🚶',
            destinationScores: { 'jurassic': 4, 'alexandria': 8, 'belle-epoque': 6, 'florence': 9, 'moon-2089': 7 },
          },
          {
            id: 'couple',
            label: 'As a couple',
            icon: '💑',
            destinationScores: { 'jurassic': 3, 'alexandria': 5, 'belle-epoque': 10, 'florence': 10, 'moon-2089': 5 },
          },
          {
            id: 'family',
            label: 'With family',
            icon: '👨‍👩‍👧‍👦',
            destinationScores: { 'jurassic': 8, 'alexandria': 6, 'belle-epoque': 7, 'florence': 6, 'moon-2089': 9 },
          },
          {
            id: 'friends',
            label: 'With friends',
            icon: '👥',
            destinationScores: { 'jurassic': 9, 'alexandria': 7, 'belle-epoque': 8, 'florence': 7, 'moon-2089': 8 },
          },
        ],
      },
      {
        id: 'style',
        question: 'What travel style do you prefer?',
        description: 'Your ideal pace.',
        options: [
          {
            id: 'immersive',
            label: 'Total immersion',
            icon: '🎭',
            destinationScores: { 'jurassic': 8, 'alexandria': 9, 'belle-epoque': 8, 'florence': 10, 'moon-2089': 6 },
          },
          {
            id: 'observing',
            label: 'Discreet observation',
            icon: '👁️',
            destinationScores: { 'jurassic': 10, 'alexandria': 7, 'belle-epoque': 6, 'florence': 5, 'moon-2089': 8 },
          },
          {
            id: 'interactive',
            label: 'Interact with locals',
            icon: '🤝',
            destinationScores: { 'jurassic': 2, 'alexandria': 10, 'belle-epoque': 10, 'florence': 9, 'moon-2089': 7 },
          },
        ],
      },
      {
        id: 'comfort',
        question: 'What level of comfort do you want?',
        description: 'Conditions vary by era.',
        options: [
          {
            id: 'luxury',
            label: 'Luxury & Refinement',
            icon: '👑',
            destinationScores: { 'jurassic': 1, 'alexandria': 5, 'belle-epoque': 10, 'florence': 8, 'moon-2089': 9 },
          },
          {
            id: 'comfortable',
            label: 'Standard comfort',
            icon: '🏠',
            destinationScores: { 'jurassic': 3, 'alexandria': 7, 'belle-epoque': 8, 'florence': 9, 'moon-2089': 7 },
          },
          {
            id: 'rustic',
            label: 'Authentic & Rustic',
            icon: '🏕️',
            destinationScores: { 'jurassic': 10, 'alexandria': 8, 'belle-epoque': 3, 'florence': 5, 'moon-2089': 4 },
          },
        ],
      },
      {
        id: 'immersion',
        question: 'What historical immersion do you prefer?',
        description: 'The degree of contact with history.',
        options: [
          {
            id: 'witness',
            label: 'Witness major events',
            icon: '📜',
            destinationScores: { 'jurassic': 5, 'alexandria': 9, 'belle-epoque': 8, 'florence': 10, 'moon-2089': 7 },
          },
          {
            id: 'meet',
            label: 'Meet famous figures',
            icon: '🎩',
            destinationScores: { 'jurassic': 0, 'alexandria': 10, 'belle-epoque': 9, 'florence': 10, 'moon-2089': 6 },
          },
          {
            id: 'explore',
            label: 'Explore lost places',
            icon: '🗺️',
            destinationScores: { 'jurassic': 10, 'alexandria': 8, 'belle-epoque': 6, 'florence': 7, 'moon-2089': 9 },
          },
        ],
      },
    ],
    loading: {
      title: 'Analyzing...',
      description: 'Our temporal AI is calculating your ideal destination.',
    },
    result: {
      title: 'Your Ideal Destination',
      exploreButton: 'Explore this destination',
      retakeButton: 'Retake the quiz',
    },
    navigation: {
      previous: 'Previous',
      next: 'Next',
      close: 'Close',
    },
  },
};
