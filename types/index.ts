export type Locale = 'fr' | 'en';

export interface NavItem {
  label: string;
  href: string;
}

export interface LocalizedContent<T> {
  fr: T;
  en: T;
}

export interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  cta: string;
  searchPlaceholders: {
    destination: string;
    date: string;
    time: string;
    travelers: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  era: string;
  featured?: boolean;
}

export interface EditorialContent {
  eyebrow: string;
  headline: string;
  description: string;
  cta: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface HowItWorksContent {
  headline: string;
  description: string;
  cta: string;
  steps: StepItem[];
}

export interface PricingOption {
  id: string;
  travelers: string;
  price: string;
  description: string;
}

export interface PricingContent {
  headline: string;
  description: string;
  cta: string;
  options: PricingOption[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  quote: string;
  image?: string;
}

export interface TestimonialsContent {
  headline: string;
  description: string;
  cta: string;
}

export interface BookingStep {
  number: number;
  label: string;
}

export interface BookingDestination {
  id: string;
  name: string;
  image: string;
}

export interface BookingContent {
  headline: string;
  cta: string;
  steps: BookingStep[];
  destinations: BookingDestination[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQContent {
  headline: string;
  items: FAQItem[];
}

export interface CTABannerContent {
  headline: string;
  description: string;
  cta: string;
}

export interface NavigationContent {
  brand: string;
  items: NavItem[];
  cta: string;
}

export interface FooterContent {
  copyright: string;
}

// Quiz Types
export interface QuizOption {
  id: string;
  label: string;
  icon?: string;
  destinationScores: Record<string, number>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  description?: string;
  options: QuizOption[];
}

export interface QuizData {
  intro: {
    title: string;
    description: string;
    startButton: string;
  };
  questions: QuizQuestion[];
  loading: {
    title: string;
    description: string;
  };
  result: {
    title: string;
    exploreButton: string;
    retakeButton: string;
  };
  navigation: {
    previous: string;
    next: string;
    close: string;
  };
}

export interface QuizDestination {
  id: string;
  name: string;
  shortSummary: string;
  era: string;
  image: string;
  traits: string[];
  defaultWhyItMatches: string;
}

export interface RecommendationResponse {
  destinationId: string;
  destinationName: string;
  shortSummary: string;
  whyItMatches: string;
  matchingTraits: string[];
  confidenceLabel?: string;
}

export interface QuizAnswer {
  questionId: string;
  optionId: string;
}

// Support Chat Types
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SupportChatContent {
  buttonLabel: string;
  headerTitle: string;
  headerSubtitle: string;
  placeholder: string;
  sendButton: string;
  loadingText: string;
  errorText: string;
  resetButton: string;
  closeButton: string;
  quickActions: QuickAction[];
}

export interface QuickAction {
  id: string;
  label: string;
  prompt: string;
}

export interface KnowledgeEntry {
  id: string;
  category: string;
  keywords: string[];
  question: string;
  answer: string;
}

export interface SupportKnowledgeBase {
  categories: string[];
  entries: KnowledgeEntry[];
}

export interface SupportChatRequest {
  message: string;
  locale: Locale;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

export interface SupportChatResponse {
  message: string;
  isAiGenerated: boolean;
}

// Destination Detail Types
export interface TimelineStep {
  id: string;
  title: string;
  description: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
}

export interface IncludedItem {
  id: string;
  icon: string;
  label: string;
}

export interface BookingOption {
  times: string[];
  languages: string[];
  cancellationHours: number;
}

export interface DestinationDetail {
  slug: string;
  name: string;
  subtitle: string;
  era: string;
  description: string;
  longDescription: string;
  heroImage: string;
  duration: string;
  groupSize: string;
  minAge: number;
  intensity: string;
  price: number;
  currency: string;
  timelineSteps: TimelineStep[];
  highlights: HighlightItem[];
  gallery: string[];
  includedItems: IncludedItem[];
  bookingOptions: BookingOption;
}

export interface DestinationDetailContent {
  backButton: string;
  bookNow: string;
  durationLabel: string;
  groupSizeLabel: string;
  minAgeLabel: string;
  intensityLabel: string;
  journeyTitle: string;
  highlightsTitle: string;
  galleryTitle: string;
  includedTitle: string;
  bookingTitle: string;
  dateLabel: string;
  timeLabel: string;
  travelersLabel: string;
  languagesLabel: string;
  cancellationLabel: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
}

// Contact Page Types
export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  whatsapp: string;
}

export interface OpeningHours {
  weekdays: string;
  weekend: string;
}

export interface ContactFormContent {
  title: string;
  subtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  destinationLabel: string;
  destinationPlaceholder: string;
  travelersLabel: string;
  travelersPlaceholder: string;
  dateLabel: string;
  datePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  privacyLabel: string;
  submitButton: string;
  successMessage: string;
}

export interface ContactPageContent {
  heroTitle: string;
  heroSubtitle: string;
  form: ContactFormContent;
  infoTitle: string;
  emailLabel: string;
  phoneLabel: string;
  addressLabel: string;
  whatsappLabel: string;
  hoursTitle: string;
  weekdaysLabel: string;
  weekendLabel: string;
  faqTitle: string;
  faqItems: FAQItem[];
}
