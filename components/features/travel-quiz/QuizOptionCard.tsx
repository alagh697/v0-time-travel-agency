'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { QuizOption } from '@/types';

interface QuizOptionCardProps {
  option: QuizOption;
  isSelected: boolean;
  onSelect: (optionId: string) => void;
  index: number;
}

export function QuizOptionCard({ option, isSelected, onSelect, index }: QuizOptionCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={() => onSelect(option.id)}
      className={cn(
        'group relative w-full rounded-2xl border-2 p-5 text-left transition-all duration-300 cursor-pointer',
        'hover:border-primary/50 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        isSelected
          ? 'border-primary bg-primary/5 shadow-md'
          : 'border-border bg-card hover:bg-card/80'
      )}
    >
      <div className="flex items-center gap-4">
        {option.icon && (
          <span className="text-2xl" role="img" aria-hidden="true">
            {option.icon}
          </span>
        )}
        <span className={cn(
          'flex-1 text-base font-medium transition-colors',
          isSelected ? 'text-primary' : 'text-foreground'
        )}>
          {option.label}
        </span>
        <div className={cn(
          'flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300',
          isSelected
            ? 'border-primary bg-primary text-primary-foreground'
            : 'border-muted-foreground/30 group-hover:border-primary/50'
        )}>
          {isSelected && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.button>
  );
}
