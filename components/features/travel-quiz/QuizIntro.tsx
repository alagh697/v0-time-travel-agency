'use client';

import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/shared';
import type { QuizData } from '@/types';

interface QuizIntroProps {
  content: QuizData['intro'];
  onStart: () => void;
}

export function QuizIntro({ content, onStart }: QuizIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center justify-center gap-8 px-4 py-8 text-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
      >
        <Compass className="h-10 w-10 text-primary" />
      </motion.div>

      <div className="max-w-md space-y-4">
        <Heading as="h2" size="lg" className="text-foreground text-balance">
          {content.title}
        </Heading>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {content.description}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          size="lg"
          onClick={onStart}
          className="rounded-full px-10 text-base font-medium"
        >
          {content.startButton}
        </Button>
      </motion.div>
    </motion.div>
  );
}
