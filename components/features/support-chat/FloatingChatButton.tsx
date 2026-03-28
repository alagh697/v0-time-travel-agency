'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { supportChatContent } from '@/data/support-knowledge';

interface FloatingChatButtonProps {
  onClick: () => void;
}

export function FloatingChatButton({ onClick }: FloatingChatButtonProps) {
  const { locale } = useLocale();
  const content = supportChatContent[locale];

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-lg transition-shadow hover:shadow-xl max-md:bottom-4 max-md:right-4 max-md:px-4 max-md:py-3"
      aria-label={content.buttonLabel}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-medium max-md:hidden">{content.buttonLabel}</span>
    </motion.button>
  );
}
