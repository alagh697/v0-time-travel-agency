'use client';

import { motion } from 'framer-motion';
import type { QuickAction } from '@/types';

interface ChatQuickActionsProps {
  actions: QuickAction[];
  onSelectAction: (prompt: string) => void;
  disabled?: boolean;
}

export function ChatQuickActions({ actions, onSelectAction, disabled }: ChatQuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 pb-3">
      {actions.map((action, index) => (
        <motion.button
          key={action.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          onClick={() => onSelectAction(action.prompt)}
          disabled={disabled}
          className="rounded-full bg-secondary px-3 py-1.5 text-xs text-secondary-foreground transition-colors hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {action.label}
        </motion.button>
      ))}
    </div>
  );
}
