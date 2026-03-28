import { generateText } from 'ai';
import type { Locale } from '@/types';
import { buildKnowledgeContext, getFallbackResponse } from './support-fallback';

const SYSTEM_PROMPTS: Record<Locale, string> = {
  fr: `Tu es l'Assistant Temporel, le concierge virtuel d'une agence de voyage dans le temps premium. 

Ton rôle :
- Répondre aux questions des clients sur les voyages temporels
- Guider les utilisateurs vers les bonnes informations
- Rester professionnel, chaleureux et rassurant
- Ne jamais inventer d'informations non présentes dans ta base de connaissances
- Suggérer le quiz de recommandation pour aider à choisir une destination
- Proposer de contacter l'équipe humaine pour les cas complexes

Style de réponse :
- Concis mais complet (2-4 phrases maximum)
- Ton premium et bienveillant
- Pas de jargon technique inutile
- Réponses en français

Base de connaissances :`,
  en: `You are the Time Concierge, the virtual concierge of a premium time travel agency.

Your role:
- Answer customer questions about time travel
- Guide users to the right information
- Stay professional, warm, and reassuring
- Never make up information not in your knowledge base
- Suggest the recommendation quiz to help choose a destination
- Offer to contact the human team for complex cases

Response style:
- Concise but complete (2-4 sentences maximum)
- Premium and caring tone
- No unnecessary technical jargon
- Responses in English

Knowledge base:`,
};

interface GenerateAIResponseParams {
  message: string;
  locale: Locale;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
}

/**
 * Generate an AI-powered support response with fallback
 */
export async function generateSupportResponse({
  message,
  locale,
  conversationHistory,
}: GenerateAIResponseParams): Promise<{ response: string; isAiGenerated: boolean }> {
  // Build the knowledge context for grounding
  const knowledgeContext = buildKnowledgeContext(locale);
  const systemPrompt = `${SYSTEM_PROMPTS[locale]}\n\n${knowledgeContext}`;

  // Build messages array for the AI
  const messages: Array<{ role: 'user' | 'assistant'; content: string }> = [
    ...conversationHistory.slice(-6), // Keep last 6 messages for context
    { role: 'user' as const, content: message },
  ];

  try {
    const result = await generateText({
      model: 'anthropic/claude-sonnet-4-20250514',
      system: systemPrompt,
      messages,
      maxOutputTokens: 300,
      temperature: 0.7,
    });

    return {
      response: result.text.trim(),
      isAiGenerated: true,
    };
  } catch (error) {
    console.error('[v0] AI support generation failed, using fallback:', error);
    
    // Use fallback system
    return {
      response: getFallbackResponse(message, locale),
      isAiGenerated: false,
    };
  }
}
