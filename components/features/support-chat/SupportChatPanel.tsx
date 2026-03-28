'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { supportChatContent } from '@/data/support-knowledge';
import type { ChatMessage, SupportChatResponse } from '@/types';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatQuickActions } from './ChatQuickActions';
import { ChatInput } from './ChatInput';

interface SupportChatPanelProps {
  onClose: () => void;
}

export function SupportChatPanel({ onClose }: SupportChatPanelProps) {
  const { locale } = useLocale();
  const content = supportChatContent[locale];

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (messageText: string) => {
    setError(null);
    
    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch('/api/support-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          locale,
          conversationHistory,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data: SupportChatResponse = await response.json();

      // Add assistant message
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('[v0] Support chat error:', err);
      setError(content.errorText);
    } finally {
      setIsLoading(false);
    }
  }, [messages, locale, content.errorText]);

  const handleReset = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  const handleQuickAction = useCallback((prompt: string) => {
    sendMessage(prompt);
  }, [sendMessage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="fixed bottom-4 right-4 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl max-md:bottom-0 max-md:right-0 max-md:h-full max-md:w-full max-md:rounded-none"
    >
      <ChatHeader
        title={content.headerTitle}
        subtitle={content.headerSubtitle}
        resetLabel={content.resetButton}
        closeLabel={content.closeButton}
        onReset={handleReset}
        onClose={onClose}
        showReset={messages.length > 0}
      />

      {/* Empty state with quick actions */}
      {messages.length === 0 && !isLoading && (
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h4 className="font-serif text-lg font-semibold text-foreground">
              {content.headerTitle}
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {content.headerSubtitle}
            </p>
          </div>
          
          <ChatQuickActions
            actions={content.quickActions}
            onSelectAction={handleQuickAction}
            disabled={isLoading}
          />
        </div>
      )}

      {/* Messages */}
      {(messages.length > 0 || isLoading) && (
        <>
          <ChatMessageList
            messages={messages}
            isLoading={isLoading}
            loadingText={content.loadingText}
          />
          
          {/* Quick actions when conversation is active */}
          {messages.length > 0 && messages.length < 3 && (
            <ChatQuickActions
              actions={content.quickActions.slice(0, 2)}
              onSelectAction={handleQuickAction}
              disabled={isLoading}
            />
          )}
        </>
      )}

      {/* Error message */}
      {error && (
        <div className="px-4 pb-2">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      <ChatInput
        placeholder={content.placeholder}
        sendButtonLabel={content.sendButton}
        onSend={sendMessage}
        disabled={isLoading}
      />
    </motion.div>
  );
}
