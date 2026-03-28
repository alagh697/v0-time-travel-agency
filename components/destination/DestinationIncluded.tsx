'use client';

import { motion } from 'framer-motion';
import { 
  Shield, User, Camera, Coffee, Gift, Shirt, Crown, Palette, Wine, ScrollText,
  LucideIcon 
} from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import type { IncludedItem } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  user: User,
  camera: Camera,
  coffee: Coffee,
  gift: Gift,
  shirt: Shirt,
  crown: Crown,
  palette: Palette,
  wine: Wine,
  scroll: ScrollText,
};

interface DestinationIncludedProps {
  items: IncludedItem[];
}

export function DestinationIncluded({ items }: DestinationIncludedProps) {
  const { t } = useLocale();
  const content = t(destinationDetailContent);

  return (
    <section className="py-12">
      <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
        {content.includedTitle}
      </h2>

      <div className="bg-card rounded-2xl p-6 border border-border">
        <ul className="space-y-4">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Gift;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.label}</span>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
