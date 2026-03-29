'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';

interface DestinationGalleryProps {
  images: string[];
  name: string;
}

export function DestinationGallery({ images, name }: DestinationGalleryProps) {
  const { t } = useLocale();
  const content = t(destinationDetailContent);

  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8">
        {content.galleryTitle}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square rounded-2xl overflow-hidden group"
          >
            <Image
              src={image}
              alt={`${name} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
