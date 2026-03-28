import { NextResponse } from 'next/server';
import type { SupportChatRequest, SupportChatResponse, Locale } from '@/types';
import { generateSupportResponse } from '@/lib/ai-support';
import { getFallbackResponse } from '@/lib/support-fallback';

export async function POST(request: Request) {
  try {
    const body = await request.json() as SupportChatRequest;
    
    const { message, locale, conversationHistory } = body;

    // Validate input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const validLocale: Locale = locale === 'en' ? 'en' : 'fr';

    // Check if AI is configured by attempting to use it
    // The AI service will fall back internally if not configured
    const { response, isAiGenerated } = await generateSupportResponse({
      message: message.trim(),
      locale: validLocale,
      conversationHistory: conversationHistory || [],
    });

    const chatResponse: SupportChatResponse = {
      message: response,
      isAiGenerated,
    };

    return NextResponse.json(chatResponse);
  } catch (error) {
    console.error('[v0] Support chat error:', error);
    
    // Even on error, try to return a helpful fallback
    const locale: Locale = 'fr';
    const fallbackMessage = getFallbackResponse('', locale);
    
    const chatResponse: SupportChatResponse = {
      message: fallbackMessage,
      isAiGenerated: false,
    };

    return NextResponse.json(chatResponse);
  }
}
