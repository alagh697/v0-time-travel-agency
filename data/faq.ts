import type { LocalizedContent, FAQContent } from '@/types';

export const faqData: LocalizedContent<FAQContent> = {
  fr: {
    headline: 'Questions fréquentes ? Nous avons les réponses',
    items: [
      {
        id: '1',
        question: 'Le voyage temporel est-il sûr ?',
        answer: 'Absolument. Notre technologie a été testée et certifiée par les autorités internationales de régulation temporelle. Chaque voyage est supervisé par nos experts et nous maintenons un taux de sécurité de 99,99%.',
      },
      {
        id: '2',
        question: 'Quelle est votre politique sur les paradoxes ?',
        answer: 'Nous suivons strictement le Protocole de Non-Interférence. Nos voyageurs sont formés pour observer sans altérer le cours de l\'histoire. Toute interaction est minutieusement planifiée pour éviter les paradoxes temporels.',
      },
      {
        id: '3',
        question: 'Puis-je interagir avec les gens du passé ?',
        answer: 'Les interactions limitées sont autorisées selon les destinations. Nos guides vous informeront des règles spécifiques à chaque époque. Certaines destinations permettent des échanges commerciaux ou des conversations brèves.',
      },
      {
        id: '4',
        question: 'Que se passe-t-il si je dois reprogrammer ?',
        answer: 'Nous offrons une flexibilité totale. Les reprogrammations sont gratuites jusqu\'à 48 heures avant le départ. Au-delà, des frais de 15% s\'appliquent. Les annulations sont remboursées à 80% jusqu\'à 24 heures avant.',
      },
      {
        id: '5',
        question: 'Y a-t-il des restrictions d\'âge ?',
        answer: 'L\'âge minimum est de 12 ans pour la plupart des destinations. Certaines expéditions, comme le Jurassique, requièrent un âge minimum de 16 ans. Les enfants doivent être accompagnés d\'un adulte responsable.',
      },
      {
        id: '6',
        question: 'Proposez-vous une assurance voyage ?',
        answer: 'Oui, notre assurance temporelle couvre les incidents médicaux, les perturbations de timeline mineures et les retards de retour. Elle est incluse dans nos forfaits premium et disponible en option pour les autres.',
      },
    ],
  },
  en: {
    headline: 'Frequently Asked Questions? We Have Answers',
    items: [
      {
        id: '1',
        question: 'Is time travel safe?',
        answer: 'Absolutely. Our technology has been tested and certified by international temporal regulation authorities. Each journey is supervised by our experts, and we maintain a 99.99% safety rate.',
      },
      {
        id: '2',
        question: 'What is your paradox policy?',
        answer: 'We strictly follow the Non-Interference Protocol. Our travelers are trained to observe without altering the course of history. Any interaction is meticulously planned to avoid temporal paradoxes.',
      },
      {
        id: '3',
        question: 'Can I interact with people from the past?',
        answer: 'Limited interactions are allowed depending on destinations. Our guides will inform you of specific rules for each era. Some destinations allow commercial exchanges or brief conversations.',
      },
      {
        id: '4',
        question: 'What if I need to reschedule?',
        answer: 'We offer complete flexibility. Rescheduling is free up to 48 hours before departure. Beyond that, a 15% fee applies. Cancellations are refunded at 80% up to 24 hours before.',
      },
      {
        id: '5',
        question: 'Are there age restrictions?',
        answer: 'The minimum age is 12 for most destinations. Some expeditions, like Jurassic, require a minimum age of 16. Children must be accompanied by a responsible adult.',
      },
      {
        id: '6',
        question: 'Do you offer travel insurance?',
        answer: 'Yes, our temporal insurance covers medical incidents, minor timeline disruptions, and return delays. It is included in our premium packages and available as an option for others.',
      },
    ],
  },
};
