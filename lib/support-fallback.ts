import { supportKnowledgeBase } from '@/data/support-knowledge';
import type { Locale, KnowledgeEntry } from '@/types';

/**
 * Find the best matching knowledge entry based on user query
 * Uses keyword matching with scoring to find the most relevant answer
 */
export function findBestMatch(
  query: string,
  locale: Locale
): KnowledgeEntry | null {
  const knowledgeBase = supportKnowledgeBase[locale];
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;

  for (const entry of knowledgeBase.entries) {
    let score = 0;

    // Check keyword matches
    for (const keyword of entry.keywords) {
      const normalizedKeyword = keyword.toLowerCase();
      
      // Exact word match in query
      if (queryWords.includes(normalizedKeyword)) {
        score += 3;
      }
      // Partial match (keyword contained in query)
      else if (normalizedQuery.includes(normalizedKeyword)) {
        score += 2;
      }
      // Word starts with keyword
      else if (queryWords.some(word => word.startsWith(normalizedKeyword))) {
        score += 1;
      }
    }

    // Bonus for question similarity
    const entryQuestionWords = entry.question.toLowerCase().split(/\s+/);
    const commonWords = queryWords.filter(word => 
      entryQuestionWords.includes(word) && word.length > 2
    );
    score += commonWords.length * 0.5;

    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  // Require minimum score for a match
  return bestScore >= 2 ? bestMatch : null;
}

/**
 * Get a fallback response when no knowledge match is found
 */
export function getDefaultFallbackResponse(locale: Locale): string {
  const responses: Record<Locale, string> = {
    fr: "Je ne suis pas certain de comprendre votre question. Pourriez-vous la reformuler ? Je peux vous aider avec des informations sur nos destinations, la sécurité des voyages, les réservations, la préparation au voyage, ou les formules famille et groupe. Vous pouvez également utiliser notre quiz pour trouver votre destination idéale, ou contacter notre équipe pour une assistance personnalisée.",
    en: "I'm not sure I understand your question. Could you rephrase it? I can help you with information about our destinations, travel safety, bookings, trip preparation, or family and group packages. You can also use our quiz to find your ideal destination, or contact our team for personalized assistance.",
  };

  return responses[locale];
}

/**
 * Get a greeting response
 */
export function getGreetingResponse(locale: Locale): string {
  const responses: Record<Locale, string> = {
    fr: "Bonjour ! Je suis votre assistant temporel. Je suis là pour répondre à vos questions sur nos voyages dans le temps, les destinations, la sécurité, les réservations et bien plus. Comment puis-je vous aider aujourd'hui ?",
    en: "Hello! I'm your Time Concierge. I'm here to answer your questions about our time travel experiences, destinations, safety, bookings, and more. How can I help you today?",
  };

  return responses[locale];
}

/**
 * Check if the query is a greeting
 */
export function isGreeting(query: string): boolean {
  const greetings = [
    'bonjour', 'salut', 'hello', 'hi', 'hey', 'bonsoir',
    'coucou', 'good morning', 'good afternoon', 'good evening',
  ];
  const normalizedQuery = query.toLowerCase().trim();
  return greetings.some(greeting => 
    normalizedQuery === greeting || 
    normalizedQuery.startsWith(greeting + ' ') ||
    normalizedQuery.startsWith(greeting + ',') ||
    normalizedQuery.startsWith(greeting + '!')
  );
}

/**
 * Get fallback response for a user query
 */
export function getFallbackResponse(query: string, locale: Locale): string {
  // Check for greeting first
  if (isGreeting(query)) {
    return getGreetingResponse(locale);
  }

  // Try to find a matching knowledge entry
  const match = findBestMatch(query, locale);
  
  if (match) {
    return match.answer;
  }

  // Return default fallback
  return getDefaultFallbackResponse(locale);
}

/**
 * Build context from knowledge base for AI grounding
 */
export function buildKnowledgeContext(locale: Locale): string {
  const knowledgeBase = supportKnowledgeBase[locale];
  
  const contextParts = knowledgeBase.entries.map(entry => 
    `Q: ${entry.question}\nA: ${entry.answer}`
  );

  return contextParts.join('\n\n');
}
