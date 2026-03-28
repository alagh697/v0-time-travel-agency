import { generateText, Output } from 'ai';
import { z } from 'zod';
import type { QuizAnswer, QuizQuestion, QuizDestination, RecommendationResponse, Locale } from '@/types';
import { buildAIPrompt, getFallbackRecommendation, getDestinationById } from './recommendation-engine';

// Schema for AI response validation
const recommendationSchema = z.object({
  destinationId: z.string(),
  destinationName: z.string(),
  shortSummary: z.string(),
  whyItMatches: z.string(),
  matchingTraits: z.array(z.string()),
  confidenceLabel: z.string().nullable(),
});

/**
 * Check if AI service is configured
 */
export function isAIConfigured(): boolean {
  // AI SDK uses Vercel AI Gateway by default - always available in v0
  return true;
}

/**
 * Get AI-powered recommendation
 * Falls back to deterministic engine if AI fails
 */
export async function getAIRecommendation(
  answers: QuizAnswer[],
  questions: QuizQuestion[],
  destinations: QuizDestination[],
  locale: Locale
): Promise<RecommendationResponse> {
  try {
    const prompt = buildAIPrompt(answers, questions, destinations, locale);

    const { output } = await generateText({
      model: 'openai/gpt-4o-mini',
      output: Output.object({
        schema: recommendationSchema,
      }),
      prompt,
    });

    if (!output) {
      throw new Error('No output from AI');
    }

    // Validate that the destination ID exists
    const destinationExists = destinations.find(d => d.id === output.destinationId);
    if (!destinationExists) {
      throw new Error('AI returned invalid destination ID');
    }

    // Get full destination details
    const destination = getDestinationById(output.destinationId, locale);
    
    return {
      destinationId: output.destinationId,
      destinationName: output.destinationName || destination?.name || '',
      shortSummary: output.shortSummary || destination?.shortSummary || '',
      whyItMatches: output.whyItMatches || destination?.defaultWhyItMatches || '',
      matchingTraits: output.matchingTraits || destination?.traits || [],
      confidenceLabel: output.confidenceLabel || undefined,
    };
  } catch (error) {
    console.error('[AI Recommendation] Error calling AI service, falling back to deterministic engine:', error);
    // Fall back to deterministic recommendation
    return getFallbackRecommendation(answers, questions, locale);
  }
}
