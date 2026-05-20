import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'slide-up';
  delay?: number;
}

export const AnimatedSection = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <div
      className={cn(className)}
    >
      {children}
    </div>
  );
};