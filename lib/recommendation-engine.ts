import type { QuizAnswer, QuizQuestion, QuizDestination, RecommendationResponse, Locale } from '@/types';
import { quizDestinationsData } from '@/data/quizDestinations';

interface ScoreResult {
  destinationId: string;
  score: number;
}

/**
 * Calculate destination scores based on quiz answers
 * This is the deterministic fallback engine
 */
export function calculateDestinationScores(
  answers: QuizAnswer[],
  questions: QuizQuestion[]
): ScoreResult[] {
  const scores: Record<string, number> = {
    'jurassic': 0,
    'belle-epoque': 0,
    'florence': 0,
    'alexandria': 0,
    'moon-2089': 0,
  };

  // Calculate scores based on answers
  for (const answer of answers) {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) continue;

    const option = question.options.find(o => o.id === answer.optionId);
    if (!option) continue;

    // Add destination scores from this option
    for (const [destId, score] of Object.entries(option.destinationScores)) {
      scores[destId] = (scores[destId] || 0) + score;
    }
  }

  // Convert to array and sort by score (highest first)
  return Object.entries(scores)
    .map(([destinationId, score]) => ({ destinationId, score }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Get the best matching destination using the fallback engine
 */
export function getFallbackRecommendation(
  answers: QuizAnswer[],
  questions: QuizQuestion[],
  locale: Locale
): RecommendationResponse {
  const scores = calculateDestinationScores(answers, questions);
  const topResult = scores[0];
  
  // Handle tie-breaking: if top 2 scores are within 5 points, use secondary criteria
  const secondResult = scores[1];
  let bestDestinationId = topResult.destinationId;
  
  if (secondResult && topResult.score - secondResult.score <= 5) {
    // Prefer destinations with more diverse trait matching
    const destinations = quizDestinationsData[locale];
    const topDest = destinations.find(d => d.id === topResult.destinationId);
    const secondDest = destinations.find(d => d.id === secondResult.destinationId);
    
    // Simple tie-breaker: prefer the one with more traits (more diverse experience)
    if (topDest && secondDest && secondDest.traits.length > topDest.traits.length) {
      bestDestinationId = secondResult.destinationId;
    }
  }

  const destinations = quizDestinationsData[locale];
  const destination = destinations.find(d => d.id === bestDestinationId);

  if (!destination) {
    // Fallback to first destination if something goes wrong
    const fallbackDest = destinations[0];
    return {
      destinationId: fallbackDest.id,
      destinationName: fallbackDest.name,
      shortSummary: fallbackDest.shortSummary,
      whyItMatches: fallbackDest.defaultWhyItMatches,
      matchingTraits: fallbackDest.traits,
      confidenceLabel: locale === 'fr' ? 'Correspondance solide' : 'Good match',
    };
  }

  // Calculate confidence based on score margin
  const scoreMargin = secondResult ? topResult.score - secondResult.score : topResult.score;
  let confidenceLabel: string;
  
  if (scoreMargin > 20) {
    confidenceLabel = locale === 'fr' ? 'Correspondance parfaite' : 'Perfect match';
  } else if (scoreMargin > 10) {
    confidenceLabel = locale === 'fr' ? 'Excellente correspondance' : 'Excellent match';
  } else {
    confidenceLabel = locale === 'fr' ? 'Bonne correspondance' : 'Good match';
  }

  return {
    destinationId: destination.id,
    destinationName: destination.name,
    shortSummary: destination.shortSummary,
    whyItMatches: destination.defaultWhyItMatches,
    matchingTraits: destination.traits,
    confidenceLabel,
  };
}

/**
 * Get destination details by ID
 */
export function getDestinationById(id: string, locale: Locale): QuizDestination | undefined {
  const destinations = quizDestinationsData[locale];
  return destinations.find(d => d.id === id);
}

/**
 * Build a prompt for the AI model based on quiz answers
 */
export function buildAIPrompt(
  answers: QuizAnswer[],
  questions: QuizQuestion[],
  destinations: QuizDestination[],
  locale: Locale
): string {
  const answerSummary = answers.map(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    const option = question?.options.find(o => o.id === answer.optionId);
    return `- ${question?.question}: ${option?.label}`;
  }).join('\n');

  const destinationList = destinations.map(d => 
    `- ${d.id}: ${d.name} (${d.era}) - ${d.traits.join(', ')}`
  ).join('\n');

  if (locale === 'fr') {
    return `Tu es un expert en voyages temporels. Un utilisateur a répondu à un quiz pour trouver sa destination idéale.

Réponses de l'utilisateur:
${answerSummary}

Destinations disponibles:
${destinationList}

Analyse les réponses et recommande LA MEILLEURE destination parmi celles listées.

Réponds UNIQUEMENT avec un objet JSON valide (sans markdown ni texte autour) contenant:
- destinationId: l'ID exact de la destination recommandée
- destinationName: le nom de la destination
- shortSummary: un résumé court et engageant (max 100 caractères)
- whyItMatches: une explication personnalisée de pourquoi cette destination correspond au profil (2-3 phrases)
- matchingTraits: un tableau de 3-4 traits correspondants
- confidenceLabel: "Correspondance parfaite", "Excellente correspondance", ou "Bonne correspondance"`;
  }

  return `You are a time travel expert. A user has answered a quiz to find their ideal destination.

User's answers:
${answerSummary}

Available destinations:
${destinationList}

Analyze the answers and recommend THE BEST destination from those listed.

Respond ONLY with a valid JSON object (no markdown or surrounding text) containing:
- destinationId: the exact ID of the recommended destination
- destinationName: the destination name
- shortSummary: a short, engaging summary (max 100 characters)
- whyItMatches: a personalized explanation of why this destination matches the profile (2-3 sentences)
- matchingTraits: an array of 3-4 matching traits
- confidenceLabel: "Perfect match", "Excellent match", or "Good match"`;
}
