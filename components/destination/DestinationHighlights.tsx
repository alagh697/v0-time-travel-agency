'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import type { HighlightItem } from '@/types';

interface DestinationHighlightsProps {
  highlights: HighlightItem[];
}

export function DestinationHighlights({ highlights }: DestinationHighlightsProps) {
  const { t } = useLocale();
  const content = t(destinationDetailContent);

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
        {content.highlightsTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-card rounded-2xl p-5 border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
