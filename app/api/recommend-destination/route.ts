import { NextResponse } from 'next/server';
import { z } from 'zod';
import type { QuizAnswer, Locale } from '@/types';
import { quizData } from '@/data/quiz';
import { quizDestinationsData } from '@/data/quizDestinations';
import { getAIRecommendation } from '@/lib/ai-recommendation';
import { getFallbackRecommendation } from '@/lib/recommendation-engine';

// Request validation schema
const requestSchema = z.object({
  answers: z.array(z.object({
    questionId: z.string(),
    optionId: z.string(),
  })),
  locale: z.enum(['fr', 'en']),
  useAI: z.boolean().optional().default(true),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid request body', details: parsed.error.errors },
        { status: 400 }
      );
    }

    const { answers, locale, useAI } = parsed.data;
    const questions = quizData[locale].questions;
    const destinations = quizDestinationsData[locale];

    // Validate that all question IDs exist
    const validQuestionIds = questions.map(q => q.id);
    const invalidAnswers = answers.filter(a => !validQuestionIds.includes(a.questionId));
    
    if (invalidAnswers.length > 0) {
      return NextResponse.json(
        { error: 'Invalid question IDs in answers' },
        { status: 400 }
      );
    }

    let recommendation;

    if (useAI) {
      // Try AI-powered recommendation (with automatic fallback)
      recommendation = await getAIRecommendation(answers, questions, destinations, locale);
    } else {
      // Use deterministic fallback directly
      recommendation = getFallbackRecommendation(answers, questions, locale);
    }

    return NextResponse.json({
      success: true,
      recommendation,
    });
  } catch (error) {
    console.error('[API] Error in recommend-destination:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
