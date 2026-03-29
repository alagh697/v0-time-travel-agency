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
    <div className="flex items-center gap-0.5 rounded-full bg-white/10 backdrop-blur-sm p-0.5">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={cn(
            'px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer',
            locale === lang.code
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:text-white'
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
