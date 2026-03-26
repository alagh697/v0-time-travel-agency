'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, defaultViewport } from '@/lib/animations';

interface AnimatedElementProps extends HTMLMotionProps<'div'> {
  variants?: Variants;
  delay?: number;
  viewportOnce?: boolean;
  viewportMargin?: string;
}

export function AnimatedElement({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  viewportOnce = true,
  viewportMargin = '-50px',
  ...props
}: AnimatedElementProps) {
  const customVariants: Variants = delay
    ? {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === 'object' ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === 'object' && 'transition' in variants.visible
              ? variants.visible.transition
              : {}),
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, margin: viewportMargin }}
      variants={customVariants}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
