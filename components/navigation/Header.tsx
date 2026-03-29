'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { navigationData } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const { t } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = t(navigationData);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Brand */}
          <Link 
            href="/" 
            className="text-base font-medium text-white/90 hover:text-white transition-colors tracking-wide"
          >
            {content.brand}
          </Link>

          {/* Desktop Navigation - Slim dark pill */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-0.5 rounded-full bg-[#3d3d32]/80 backdrop-blur-md px-1.5 py-1 border border-white/5">
              {content.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-1.5 text-sm font-normal text-white/80 hover:text-white rounded-full transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop CTA and Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button 
              size="sm"
              className="rounded-full bg-[#d4cfc4] text-[#3d3d32] hover:bg-[#c9c3b6] font-medium px-5 py-2 h-auto text-sm border-0"
              onClick={() => {
                document.getElementById('booking-section')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
            >
              {content.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
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
            className="md:hidden absolute top-full left-4 right-4 bg-[#3d3d32]/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {content.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-2">
                <LanguageSwitcher />
                <Button 
                  className="rounded-full bg-[#d4cfc4] text-[#3d3d32] hover:bg-[#c9c3b6]"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.getElementById('booking-section')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
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
