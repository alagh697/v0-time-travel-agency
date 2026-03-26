'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'image';
  className?: string;
}

export function TestimonialCard({
  testimonial,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  if (variant === 'image' && testimonial.image) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-2xl aspect-[4/5]',
          className
        )}
      >
        <Image
          src={testimonial.image}
          alt={`Travel photo by ${testimonial.name}`}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-card rounded-2xl p-6 flex flex-col',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-foreground text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-4 h-4',
              i < testimonial.rating
                ? 'fill-amber-400 text-amber-400'
                : 'fill-muted text-muted'
            )}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {testimonial.quote}
      </p>
    </div>
  );
}
