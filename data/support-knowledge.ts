import type { LocalizedContent, SupportChatContent, SupportKnowledgeBase } from '@/types';

export const supportChatContent: LocalizedContent<SupportChatContent> = {
  fr: {
    buttonLabel: 'Assistant temporel',
    headerTitle: 'Assistant temporel',
    headerSubtitle: 'Votre concierge de voyage dans le temps',
    placeholder: 'Posez votre question...',
    sendButton: 'Envoyer',
    loadingText: 'Réflexion en cours...',
    errorText: 'Une erreur est survenue. Veuillez réessayer.',
    resetButton: 'Nouvelle conversation',
    closeButton: 'Fermer',
    quickActions: [
      {
        id: 'recommend',
        label: 'Quelle destination me conseillez-vous ?',
        prompt: 'Quelle destination me conseillez-vous pour un premier voyage dans le temps ?',
      },
      {
        id: 'family',
        label: 'Voyages adaptés aux familles ?',
        prompt: 'Quels voyages sont adaptés à une famille avec enfants ?',
      },
      {
        id: 'safety',
        label: 'Comment fonctionne la sécurité ?',
        prompt: 'Comment fonctionne la sécurité temporelle lors des voyages ?',
      },
      {
        id: 'reschedule',
        label: 'Modifier ma réservation',
        prompt: 'Puis-je modifier ou annuler ma réservation ?',
      },
    ],
  },
  en: {
    buttonLabel: 'Time Concierge',
    headerTitle: 'Time Concierge',
    headerSubtitle: 'Your personal time travel assistant',
    placeholder: 'Ask your question...',
    sendButton: 'Send',
    loadingText: 'Thinking...',
    errorText: 'An error occurred. Please try again.',
    resetButton: 'New conversation',
    closeButton: 'Close',
    quickActions: [
      {
        id: 'recommend',
        label: 'What destination do you recommend?',
        prompt: 'What destination do you recommend for a first time travel experience?',
      },
      {
        id: 'family',
        label: 'Which trips are best for families?',
        prompt: 'Which trips are best suited for families with children?',
      },
      {
        id: 'safety',
        label: 'How does time-travel safety work?',
        prompt: 'How does time-travel safety work during trips?',
      },
      {
        id: 'reschedule',
        label: 'Reschedule my trip',
        prompt: 'Can I reschedule or cancel my booking?',
      },
    ],
  },
};

export const supportKnowledgeBase: LocalizedContent<SupportKnowledgeBase> = {
  fr: {
    categories: [
      'destinations',
      'sécurité',
      'réservation',
      'préparation',
      'famille',
      'politique',
      'assurance',
    ],
    entries: [
      // Destinations
      {
        id: 'dest-overview',
        category: 'destinations',
        keywords: ['destination', 'voyage', 'où', 'aller', 'époque', 'période', 'conseiller', 'recommander'],
        question: 'Quelles destinations proposez-vous ?',
        answer: 'Nous proposons plusieurs destinations fascinantes à travers le temps : l\'Expédition Jurassique pour observer les dinosaures, Paris Belle Époque pour vivre le glamour de 1890, Florence Renaissance pour côtoyer les grands maîtres, Alexandrie Antique pour explorer la grande bibliothèque, et la Colonie Lunaire 2089 pour découvrir le futur. Chaque voyage est soigneusement conçu pour offrir une immersion authentique et sécurisée. Pour trouver la destination idéale selon vos préférences, je vous recommande notre quiz de recommandation.',
      },
      {
        id: 'dest-first-time',
        category: 'destinations',
        keywords: ['premier', 'première', 'fois', 'débuter', 'commencer', 'novice', 'débutant'],
        question: 'Quelle destination pour un premier voyage ?',
        answer: 'Pour un premier voyage temporel, je recommande Paris Belle Époque ou Florence Renaissance. Ces destinations offrent un environnement culturellement accessible, avec moins de risques d\'adaptation que les périodes plus anciennes ou le futur. Le niveau de confort est excellent et vous pourrez profiter de repères culturels familiers tout en vivant une expérience extraordinaire.',
      },
      // Safety
      {
        id: 'safety-general',
        category: 'sécurité',
        keywords: ['sécurité', 'sûr', 'danger', 'risque', 'protection', 'sécurisé'],
        question: 'Comment fonctionne la sécurité temporelle ?',
        answer: 'Notre technologie de voyage temporel est certifiée par le Consortium Temporel International. Chaque voyageur est équipé d\'un dispositif de rappel d\'urgence qui permet un retour instantané. Nos guides temporels sont formés pendant 3 ans et accompagnent chaque groupe. Les zones de voyage sont soigneusement délimitées pour éviter tout contact avec des événements historiques majeurs.',
      },
      {
        id: 'safety-paradox',
        category: 'sécurité',
        keywords: ['paradoxe', 'modifier', 'changer', 'histoire', 'passé', 'impact', 'conséquence'],
        question: 'Peut-on modifier l\'histoire ?',
        answer: 'Notre technologie utilise des corridors temporels isolés qui empêchent toute modification du continuum historique. Vous observez et interagissez dans une bulle temporelle sécurisée. Il est strictement interdit d\'emporter des objets modernes ou de révéler des informations futures aux habitants de l\'époque. Ces règles sont expliquées en détail lors de la préparation obligatoire avant chaque voyage.',
      },
      // Booking
      {
        id: 'booking-cancel',
        category: 'réservation',
        keywords: ['annuler', 'annulation', 'modifier', 'changer', 'reporter', 'rembourser', 'remboursement'],
        question: 'Puis-je annuler ou modifier ma réservation ?',
        answer: 'Vous pouvez modifier ou annuler votre réservation jusqu\'à 72 heures avant le départ avec un remboursement complet. Entre 72 et 24 heures, des frais de 30% s\'appliquent. Pour les modifications, nous nous adaptons selon les disponibilités. Contactez notre service client ou utilisez votre espace personnel pour gérer votre réservation.',
      },
      {
        id: 'booking-process',
        category: 'réservation',
        keywords: ['réserver', 'réservation', 'comment', 'processus', 'étapes', 'payer', 'paiement'],
        question: 'Comment réserver un voyage ?',
        answer: 'La réservation se fait en quelques étapes simples : choisissez votre destination et vos dates, sélectionnez le nombre de voyageurs, complétez le formulaire de pré-inscription incluant un bref questionnaire médical, puis procédez au paiement sécurisé. Vous recevrez ensuite une convocation pour la session de préparation obligatoire avant votre départ.',
      },
      // Family
      {
        id: 'family-children',
        category: 'famille',
        keywords: ['enfant', 'enfants', 'famille', 'familial', 'âge', 'minimum', 'jeune'],
        question: 'Les voyages sont-ils adaptés aux enfants ?',
        answer: 'Certaines destinations sont parfaitement adaptées aux familles. L\'Expédition Jurassique et Paris Belle Époque sont nos destinations les plus familiales, accessibles dès 8 ans avec accompagnement parental. Florence Renaissance est recommandée à partir de 12 ans. Pour la Colonie Lunaire 2089, l\'âge minimum est de 14 ans. Alexandrie Antique est réservée aux adultes.',
      },
      {
        id: 'family-group',
        category: 'famille',
        keywords: ['groupe', 'plusieurs', 'ensemble', 'amis', 'privé', 'privatiser'],
        question: 'Peut-on voyager en groupe ?',
        answer: 'Absolument ! Nous proposons des formules groupe de 2 à 12 personnes. Les tarifs de groupe offrent des réductions progressives : -10% pour 4-6 personnes, -15% pour 7-10 personnes, -20% pour 11-12 personnes. Vous pouvez également privatiser une expérience pour votre groupe avec un guide dédié.',
      },
      // Preparation
      {
        id: 'prep-before',
        category: 'préparation',
        keywords: ['préparer', 'préparation', 'avant', 'emporter', 'vêtements', 'bagages'],
        question: 'Comment se préparer au voyage ?',
        answer: 'Une session de préparation de 4 heures est obligatoire avant chaque voyage. Elle comprend : briefing historique sur l\'époque, règles de conduite temporelle, essayage des vêtements d\'époque fournis, et simulation d\'immersion. Vous n\'avez rien à emporter : tout l\'équipement et les vêtements adaptés sont fournis. Nous vous recommandons simplement d\'être en bonne forme physique.',
      },
      {
        id: 'prep-medical',
        category: 'préparation',
        keywords: ['médical', 'santé', 'maladie', 'condition', 'handicap', 'enceinte', 'grossesse'],
        question: 'Y a-t-il des restrictions médicales ?',
        answer: 'Le voyage temporel nécessite une condition physique stable. Les personnes souffrant de troubles cardiaques graves, d\'épilepsie non contrôlée ou les femmes enceintes ne peuvent pas participer. Un questionnaire médical est requis lors de l\'inscription. En cas de doute, nous pouvons organiser une consultation avec notre médecin partenaire.',
      },
      // Insurance
      {
        id: 'insurance-included',
        category: 'assurance',
        keywords: ['assurance', 'couvert', 'couverture', 'inclus', 'protection', 'garantie'],
        question: 'Quelle assurance est incluse ?',
        answer: 'Chaque voyage inclut une assurance temporelle complète couvrant : rapatriement d\'urgence, assistance médicale toutes époques, responsabilité civile temporelle, et annulation pour cas de force majeure. Une assurance premium avec couverture étendue et bagages d\'époque est disponible en option.',
      },
      // Default
      {
        id: 'default-contact',
        category: 'général',
        keywords: ['contact', 'aide', 'parler', 'humain', 'téléphone', 'email'],
        question: 'Comment contacter le support ?',
        answer: 'Je suis là pour répondre à la plupart de vos questions. Si vous avez besoin d\'une assistance personnalisée, notre équipe est disponible par téléphone au +33 1 XX XX XX XX du lundi au vendredi de 9h à 18h, ou par email à support@timetravelagency.com. Vous pouvez également prendre rendez-vous dans l\'une de nos agences.',
      },
    ],
  },
  en: {
    categories: [
      'destinations',
      'safety',
      'booking',
      'preparation',
      'family',
      'policy',
      'insurance',
    ],
    entries: [
      // Destinations
      {
        id: 'dest-overview',
        category: 'destinations',
        keywords: ['destination', 'travel', 'where', 'go', 'era', 'period', 'recommend', 'suggest'],
        question: 'What destinations do you offer?',
        answer: 'We offer several fascinating destinations through time: the Jurassic Expedition to observe dinosaurs, Belle Epoque Paris to experience 1890s glamour, Renaissance Florence to meet the great masters, Ancient Alexandria to explore the great library, and Moon Colony 2089 to discover the future. Each trip is carefully designed to offer an authentic and safe immersion. To find your ideal destination based on your preferences, I recommend taking our recommendation quiz.',
      },
      {
        id: 'dest-first-time',
        category: 'destinations',
        keywords: ['first', 'time', 'beginner', 'start', 'new', 'novice'],
        question: 'What destination for a first trip?',
        answer: 'For a first time travel experience, I recommend Belle Epoque Paris or Renaissance Florence. These destinations offer a culturally accessible environment with fewer adaptation risks than older periods or the future. The comfort level is excellent and you can enjoy familiar cultural references while living an extraordinary experience.',
      },
      // Safety
      {
        id: 'safety-general',
        category: 'safety',
        keywords: ['safety', 'safe', 'danger', 'risk', 'protection', 'secure'],
        question: 'How does time-travel safety work?',
        answer: 'Our time travel technology is certified by the International Temporal Consortium. Each traveler is equipped with an emergency recall device that enables instant return. Our temporal guides are trained for 3 years and accompany each group. Travel zones are carefully delineated to avoid any contact with major historical events.',
      },
      {
        id: 'safety-paradox',
        category: 'safety',
        keywords: ['paradox', 'modify', 'change', 'history', 'past', 'impact', 'consequence'],
        question: 'Can we change history?',
        answer: 'Our technology uses isolated temporal corridors that prevent any modification to the historical continuum. You observe and interact within a secure temporal bubble. It is strictly forbidden to bring modern objects or reveal future information to era inhabitants. These rules are explained in detail during the mandatory preparation before each trip.',
      },
      // Booking
      {
        id: 'booking-cancel',
        category: 'booking',
        keywords: ['cancel', 'cancellation', 'modify', 'change', 'reschedule', 'refund', 'refundable'],
        question: 'Can I cancel or modify my booking?',
        answer: 'You can modify or cancel your booking up to 72 hours before departure for a full refund. Between 72 and 24 hours, a 30% fee applies. For modifications, we adapt based on availability. Contact our customer service or use your personal space to manage your booking.',
      },
      {
        id: 'booking-process',
        category: 'booking',
        keywords: ['book', 'booking', 'how', 'process', 'steps', 'pay', 'payment'],
        question: 'How do I book a trip?',
        answer: 'Booking is done in a few simple steps: choose your destination and dates, select the number of travelers, complete the pre-registration form including a brief medical questionnaire, then proceed to secure payment. You will then receive a notice for the mandatory preparation session before your departure.',
      },
      // Family
      {
        id: 'family-children',
        category: 'family',
        keywords: ['child', 'children', 'family', 'age', 'minimum', 'young', 'kids'],
        question: 'Are trips suitable for children?',
        answer: 'Some destinations are perfectly suited for families. The Jurassic Expedition and Belle Epoque Paris are our most family-friendly destinations, accessible from age 8 with parental supervision. Renaissance Florence is recommended from age 12. For Moon Colony 2089, the minimum age is 14. Ancient Alexandria is reserved for adults.',
      },
      {
        id: 'family-group',
        category: 'family',
        keywords: ['group', 'several', 'together', 'friends', 'private', 'privatize'],
        question: 'Can we travel as a group?',
        answer: 'Absolutely! We offer group packages for 2 to 12 people. Group rates offer progressive discounts: -10% for 4-6 people, -15% for 7-10 people, -20% for 11-12 people. You can also privatize an experience for your group with a dedicated guide.',
      },
      // Preparation
      {
        id: 'prep-before',
        category: 'preparation',
        keywords: ['prepare', 'preparation', 'before', 'bring', 'clothes', 'luggage', 'pack'],
        question: 'How should I prepare for the trip?',
        answer: 'A 4-hour preparation session is mandatory before each trip. It includes: historical briefing on the era, temporal conduct rules, fitting of provided period clothing, and immersion simulation. You don\'t need to bring anything: all equipment and appropriate clothing is provided. We simply recommend being in good physical shape.',
      },
      {
        id: 'prep-medical',
        category: 'preparation',
        keywords: ['medical', 'health', 'illness', 'condition', 'disability', 'pregnant', 'pregnancy'],
        question: 'Are there medical restrictions?',
        answer: 'Time travel requires stable physical condition. People with severe heart conditions, uncontrolled epilepsy, or pregnant women cannot participate. A medical questionnaire is required during registration. If in doubt, we can arrange a consultation with our partner physician.',
      },
      // Insurance
      {
        id: 'insurance-included',
        category: 'insurance',
        keywords: ['insurance', 'covered', 'coverage', 'included', 'protection', 'guarantee'],
        question: 'What insurance is included?',
        answer: 'Each trip includes comprehensive temporal insurance covering: emergency repatriation, medical assistance across all eras, temporal civil liability, and cancellation for force majeure. A premium insurance with extended coverage and period luggage is available as an option.',
      },
      // Default
      {
        id: 'default-contact',
        category: 'general',
        keywords: ['contact', 'help', 'talk', 'human', 'phone', 'email', 'support'],
        question: 'How can I contact support?',
        answer: 'I\'m here to answer most of your questions. If you need personalized assistance, our team is available by phone at +33 1 XX XX XX XX Monday to Friday from 9am to 6pm CET, or by email at support@timetravelagency.com. You can also schedule an appointment at one of our agencies.',
      },
    ],
  },
};
