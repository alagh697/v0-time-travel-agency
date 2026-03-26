'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/locale-context';
import { navigationData } from '@/data/navigation';
import { Container } from '@/components/shared';

export function Footer() {
  const { t } = useLocale();
  const nav = t(navigationData);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <Link href="/" className="text-lg font-semibold text-foreground">
            {nav.brand}
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {nav.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            {t({
              fr: `© ${year} Time Travel Agency. Tous droits réservés.`,
              en: `© ${year} Time Travel Agency. All rights reserved.`,
            })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
