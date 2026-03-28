'use client';

import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import type { TimelineStep } from '@/types';

interface DestinationTimelineProps {
  steps: TimelineStep[];
}

export function DestinationTimeline({ steps }: DestinationTimelineProps) {
  const { t } = useLocale();
  const content = t(destinationDetailContent);

  return (
    <section className="py-12">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
        {content.journeyTitle}
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pl-12"
            >
              {/* Step Number */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1 bg-card rounded-2xl p-5 border border-border">
                <h3 className="font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
