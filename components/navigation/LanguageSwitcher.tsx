'use client';

import { useLocale } from '@/lib/locale-context';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  const languages: { code: Locale; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full bg-card/50 p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={cn(
            'px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200',
            locale === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground/70 hover:text-foreground hover:bg-card/80'
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
