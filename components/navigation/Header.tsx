'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { navigationData } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export function Header() {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = t(navigationData);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Brand */}
          <Link 
            href="/" 
            className="text-lg md:text-xl font-semibold text-primary-foreground"
          >
            {content.brand}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 rounded-full bg-card/90 backdrop-blur-sm px-2 py-1.5">
              {content.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-full transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Button 
              variant="secondary" 
              className="rounded-full bg-card/90 text-foreground hover:bg-card"
            >
              {content.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border"
          >
            <nav className="flex flex-col p-4 gap-2">
              {content.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border mt-2">
                <LanguageSwitcher />
                <Button variant="default" className="rounded-full">
                  {content.cta}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}
