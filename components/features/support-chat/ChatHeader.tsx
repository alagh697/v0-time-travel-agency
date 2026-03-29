'use client';

import { X, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  title: string;
  subtitle: string;
  resetLabel: string;
  closeLabel: string;
  onReset: () => void;
  onClose: () => void;
  showReset?: boolean;
}

export function ChatHeader({
  title,
  subtitle,
  resetLabel,
  closeLabel,
  onReset,
  onClose,
  showReset = false,
}: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-border bg-card px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Avatar/Icon */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-5 w-5 text-primary"
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
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {showReset && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onReset}
            className="h-8 w-8 rounded-lg"
            aria-label={resetLabel}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-8 w-8 rounded-lg"
          aria-label={closeLabel}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
