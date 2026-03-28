'use client';

import { LocaleProvider } from '@/lib/locale-context';
import { SupportChat } from '@/components/features/support-chat';
import type { Locale } from '@/types';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Use React.use() to unwrap the params promise
  const { locale } = require('react').use(params) as { locale: string };
  const validLocale: Locale = locale === 'en' ? 'en' : 'fr';

  return (
    <LocaleProvider defaultLocale={validLocale}>
      {children}
      <SupportChat />
    </LocaleProvider>
  );
}
