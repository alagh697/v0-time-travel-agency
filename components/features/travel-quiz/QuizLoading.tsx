'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { Heading } from '@/components/shared';
import type { QuizData } from '@/types';

interface QuizLoadingProps {
  content: QuizData['loading'];
}

export function QuizLoading({ content }: QuizLoadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-6 py-12 text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
      >
        <Loader2 className="h-8 w-8 text-primary" />
      </motion.div>

      <div className="max-w-sm space-y-2">
        <Heading as="h3" size="sm" className="text-foreground">
          {content.title}
        </Heading>
        <p className="text-muted-foreground">
          {content.description}
        </p>
      </div>

      {/* Animated dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-primary/60"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
