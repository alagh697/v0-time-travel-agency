'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Locale } from '@/types';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T>(data: { fr: T; en: T }) => T;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

interface LocaleProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export function LocaleProvider({ children, defaultLocale = 'fr' }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const t = useCallback(<T,>(data: { fr: T; en: T }): T => {
    return data[locale];
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
