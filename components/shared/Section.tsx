'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp, defaultViewport } from '@/lib/animations';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'card' | 'dark' | 'transparent';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
  animationVariants?: Variants;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      variant = 'default',
      size = 'lg',
      animate = true,
      animationVariants = fadeUp,
      children,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: '',
      card: 'bg-card rounded-3xl',
      dark: 'bg-primary text-primary-foreground rounded-3xl',
      transparent: 'bg-transparent',
    };

    const sizeStyles = {
      sm: 'py-12 md:py-16',
      md: 'py-16 md:py-20',
      lg: 'py-20 md:py-28',
      xl: 'py-24 md:py-32',
      full: 'min-h-screen',
    };

    const content = (
      <section
        ref={ref}
        className={cn(
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );

    if (!animate) {
      return content;
    }

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={animationVariants}
      >
        {content}
      </motion.div>
    );
  }
);

Section.displayName = 'Section';

export { Section };
