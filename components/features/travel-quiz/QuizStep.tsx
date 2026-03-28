'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { QuizQuestion } from '@/types';
import { QuizOptionCard } from './QuizOptionCard';
import { Heading } from '@/components/shared';

interface QuizStepProps {
  question: QuizQuestion;
  selectedOptionId: string | null;
  onSelectOption: (optionId: string) => void;
  direction: number;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function QuizStep({ question, selectedOptionId, onSelectOption, direction }: QuizStepProps) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={question.id}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex flex-col gap-6"
      >
        <div className="space-y-2 text-center">
          <Heading as="h2" size="md" className="text-foreground">
            {question.question}
          </Heading>
          {question.description && (
            <p className="text-muted-foreground">{question.description}</p>
          )}
        </div>

        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <QuizOptionCard
              key={option.id}
              option={option}
              isSelected={selectedOptionId === option.id}
              onSelect={onSelectOption}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
