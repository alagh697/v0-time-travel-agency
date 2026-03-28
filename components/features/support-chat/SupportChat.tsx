'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FloatingChatButton } from './FloatingChatButton';
import { SupportChatPanel } from './SupportChatPanel';

export function SupportChat() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle escape key to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <FloatingChatButton onClick={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <SupportChatPanel onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
