import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as: Component = 'h2', size = 'lg', children, ...props }, ref) => {
    const sizeStyles = {
      xs: 'text-sm font-medium tracking-wide uppercase',
      sm: 'text-lg font-semibold',
      md: 'text-xl md:text-2xl font-semibold',
      lg: 'text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight',
      xl: 'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight',
      '2xl': 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
      '3xl': 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight',
      '4xl': 'text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight',
    };

    return (
      <Component
        ref={ref}
        className={cn(
          'text-balance text-foreground',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading };
