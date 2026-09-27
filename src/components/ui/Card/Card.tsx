import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

type CardVariant = 'default' | 'flat' | 'warm' | 'accent';
type CardPadding = 'sm' | 'md' | 'lg' | 'none';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  interactive?: boolean;
  padding?: CardPadding;
  children: ReactNode;
  className?: string;
}

export function Card({
  variant = 'default',
  interactive = false,
  padding = 'md',
  children,
  className = '',
  ...rest
}: CardProps) {
  const cls = [
    styles.card,
    variant === 'flat' ? styles['card-flat'] : '',
    variant === 'warm' ? styles['card-warm'] : '',
    variant === 'accent' ? styles['card-accent'] : '',
    interactive ? styles['card-interactive'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const bodyClass =
    padding === 'sm'
      ? styles['card-body-sm']
      : padding === 'lg'
        ? styles['card-body-lg']
        : padding === 'none'
          ? ''
          : styles['card-body'];

  return (
    <div className={cls} {...rest}>
      {bodyClass ? <div className={bodyClass}>{children}</div> : children}
    </div>
  );
}
