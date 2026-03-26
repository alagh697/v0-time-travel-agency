import type { LocalizedContent, StatItem } from '@/types';

export const statsData: LocalizedContent<StatItem[]> = {
  fr: [
    { value: '20K+', label: 'Voyageurs' },
    { value: '3+', label: 'Destinations' },
    { value: '3+', label: 'Époques' },
  ],
  en: [
    { value: '20K+', label: 'Travelers' },
    { value: '3+', label: 'Destinations' },
    { value: '3+', label: 'Eras' },
  ],
};
